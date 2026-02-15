import { useCMS } from "@/contexts/CMSContext";
import { Button } from "@/components/ui/button";
import { Lock, Unlock, LogOut } from "lucide-react";

export const AdminBar = () => {
  const { isAdmin, isEditingMode, toggleEditMode, logout } = useCMS();

  if (!isAdmin) return null;

  return (
    <div className="fixed bottom-4 right-4 z-[9999] flex items-center gap-2 p-2 bg-background/90 backdrop-blur border border-border rounded-full shadow-2xl animate-in slide-in-from-bottom-5">
      <div className="px-3 py-1 text-xs font-bold bg-primary/10 rounded-full text-primary">
        Admin Mode
      </div>

      <Button
        size="sm"
        variant={isEditingMode ? "default" : "outline"}
        onClick={toggleEditMode}
        className="gap-2 rounded-full h-9"
      >
        {isEditingMode ? (
          <>
            <Unlock size={14} />
            Editing ON
          </>
        ) : (
          <>
            <Lock size={14} />
            Editing OFF
          </>
        )}
      </Button>

      <Button
        size="icon"
        variant="ghost"
        onClick={logout}
        className="h-9 w-9 rounded-full text-muted-foreground hover:text-destructive"
        title="Logout"
      >
        <LogOut size={16} />
      </Button>
    </div>
  );
};
