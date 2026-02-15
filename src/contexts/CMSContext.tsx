import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { toast } from "sonner";
import { supabase } from "@/lib/supabase";
import { User } from '@supabase/supabase-js';

// Type for our content map
type ContentMap = Record<string, string>;

interface CMSContextType {
  content: ContentMap;
  user: User | null;
  isAdmin: boolean;
  isEditingMode: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
  toggleEditMode: () => void;
  updateContent: (key: string, value: string) => Promise<void>;
  getContent: (key: string, defaultValue: string) => string;
}

const CMSContext = createContext<CMSContextType | undefined>(undefined);

export const useCMS = () => {
  const context = useContext(CMSContext);
  if (!context) {
    throw new Error('useCMS must be used within a CMSProvider');
  }
  return context;
};

interface CMSProviderProps {
  children: ReactNode;
}

export const CMSProvider: React.FC<CMSProviderProps> = ({ children }) => {
  const [content, setContent] = useState<ContentMap>({});
  const [user, setUser] = useState<User | null>(null);
  const [isEditingMode, setIsEditingMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Load initial state and content
  useEffect(() => {
    const initializeCMS = async () => {
      // 1. Check active session
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user ?? null);
      if (session?.user) {
        setIsEditingMode(true);
      }

      // 2. Listen for auth changes
      const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
        setUser(session?.user ?? null);
        if (session?.user) {
          setIsEditingMode(true);
        } else {
          setIsEditingMode(false);
        }
      });

      // 3. Load content from Supabase
      try {
        const { data, error } = await supabase
          .from('cms_content')
          .select('key, value');

        if (error) {
          console.error('Error fetching content:', error);
        } else if (data) {
          const contentMap: ContentMap = {};
          data.forEach((item: any) => {
            contentMap[item.key] = item.value;
          });
          setContent(contentMap);
        }
      } catch (err) {
        console.error('Unexpected error loading content:', err);
      } finally {
        setIsLoading(false);
      }

      return () => subscription.unsubscribe();
    };

    initializeCMS();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        toast.error(error.message);
        return false;
      }

      toast.success("Logged in successfully");
      return true;
    } catch (err) {
      console.error("Login error:", err);
      toast.error("An unexpected error occurred");
      return false;
    }
  };

  const logout = async () => {
    await supabase.auth.signOut();
    toast.info("Logged out");
  };

  const toggleEditMode = () => {
    if (!user) return;
    setIsEditingMode(prev => !prev);
    toast.info(isEditingMode ? "Preview Mode" : "Edit Mode Enabled");
  };

  const updateContent = async (key: string, value: string) => {
    // 1. Optimistic UI Update
    setContent(prev => ({ ...prev, [key]: value }));

    // 2. Check auth
    if (!user) {
      toast.error("You must be logged in to save changes.");
      return;
    }

    // 3. Save to Supabase
    try {
      const { error } = await supabase
        .from('cms_content')
        .upsert({ key, value }, { onConflict: 'key' });

      if (error) {
        console.error('Error saving to Supabase:', error);
        toast.error("Failed to save changes");
      } else {
        console.log(`Saved ${key}`);
      }
    } catch (err) {
      console.error('Unexpected error saving:', err);
      toast.error("Error saving changes");
    }
  };

  const getContent = (key: string, defaultValue: string) => {
    return content[key] !== undefined ? content[key] : defaultValue;
  };

  return (
    <CMSContext.Provider value={{
      content,
      user,
      isAdmin: !!user, // Simple check for now
      isEditingMode,
      isLoading,
      login,
      logout,
      toggleEditMode,
      updateContent,
      getContent
    }}>
      {children}
    </CMSContext.Provider>
  );
};
