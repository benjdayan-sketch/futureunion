import React, { useState, useEffect } from 'react';
import { useCMS } from '@/contexts/CMSContext';
import { cn } from '@/lib/utils';
import { Check, X } from 'lucide-react';

interface EditableTextProps {
  name: string; // unique key for the content
  defaultContent: string;
  className?: string; // class for the final element
  as?: any; // element type: h1, h2, p, span, etc.
  multiline?: boolean;
}

export const EditableText: React.FC<EditableTextProps> = ({
  name,
  defaultContent,
  className,
  as: Component = 'span',
  multiline = false
}) => {
  const { isEditingMode, getContent, updateContent } = useCMS();
  const [isEditing, setIsEditing] = useState(false);
  const [currentValue, setCurrentValue] = useState('');

  // Get the display value
  const displayValue = getContent(name, defaultContent);

  // Initialize edit value when starting to edit
  useEffect(() => {
    if (isEditing) {
      setCurrentValue(displayValue);
    }
  }, [isEditing, displayValue]);

  const handleSave = () => {
    updateContent(name, currentValue);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey && !multiline) {
      e.preventDefault();
      handleSave();
    }
    if (e.key === 'Escape') {
      handleCancel();
    }
  };

  // If in edit mode and clicked, switch to input
  if (isEditingMode && !isEditing) {
    return (
      <Component
        className={cn(
          "cursor-pointer hover:outline hover:outline-2 hover:outline-blue-500 hover:outline-dashed rounded px-1 -mx-1 transition-all relative group",
          className
        )}
        onClick={(e: React.MouseEvent) => {
          e.preventDefault();
          e.stopPropagation();
          setIsEditing(true);
        }}
        title={`Click to edit: ${name}`}
      >
        {displayValue}
        <span className="absolute -top-3 -right-3 hidden group-hover:flex bg-blue-500 text-white text-[10px] px-1 rounded shadow-sm z-50">
          Edit
        </span>
      </Component>
    );
  }

  // If currently editing
  if (isEditing) {
    return (
      <div className="relative inline-block min-w-[200px] z-50" onClick={e => e.stopPropagation()}>
        {multiline ? (
          <textarea
            autoFocus
            value={currentValue}
            onChange={(e) => setCurrentValue(e.target.value)}
            onKeyDown={handleKeyDown}
            className={cn(
              "w-full min-h-[100px] p-2 text-foreground bg-background border-2 border-blue-500 rounded shadow-lg focus:outline-none resize-y",
              "text-lg", // enforce readable size in editor
            )}
          />
        ) : (
          <input
            autoFocus
            type="text"
            value={currentValue}
            onChange={(e) => setCurrentValue(e.target.value)}
            onKeyDown={handleKeyDown}
            className={cn(
              "w-full p-1 text-foreground bg-background border-2 border-blue-500 rounded shadow-lg focus:outline-none",
              className // inherit font styles
            )}
          />
        )}

        <div className="absolute top-full left-0 flex gap-2 mt-1 z-50">
          <button
            onClick={handleSave}
            className="p-1 bg-green-500 text-white rounded hover:bg-green-600 shadow-lg"
          >
            <Check size={16} />
          </button>
          <button
            onClick={handleCancel}
            className="p-1 bg-red-500 text-white rounded hover:bg-red-600 shadow-lg"
          >
            <X size={16} />
          </button>
        </div>
      </div>
    );
  }

  // Normal render
  return (
    <Component className={className}>
      {displayValue}
    </Component>
  );
};
