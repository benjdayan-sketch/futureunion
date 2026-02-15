import React, { useState, useEffect } from 'react';
import { useCMS } from '@/contexts/CMSContext';
import { cn } from '@/lib/utils';
import { Check, X, Link as LinkIcon, ExternalLink } from 'lucide-react';

interface EditableLinkProps {
    name: string; // key for the text
    linkName: string; // key for the href
    defaultContent: string;
    defaultHref: string;
    defaultTarget?: string; // '_blank' or '_self'
    className?: string; // class for the container/a tag
    children?: React.ReactNode; // icon or other content inside the link
    onSave?: (text: string, href: string) => void;
}

export const EditableLink: React.FC<EditableLinkProps> = ({
    name,
    linkName,
    defaultContent,
    defaultHref,
    defaultTarget,
    className,
    children,
    onSave
}) => {
    const { isEditingMode, getContent, updateContent } = useCMS();
    const [isEditing, setIsEditing] = useState(false);
    const [textValue, setTextValue] = useState('');
    const [hrefValue, setHrefValue] = useState('');
    const [targetValue, setTargetValue] = useState('_self');

    // Key for target preference
    const targetKey = `${linkName}.target`;

    // Determine default target if not explicitly provided
    // If it's an external link (starts with http), default to _blank, otherwise _self
    const derivedDefaultTarget = defaultTarget || (defaultHref.startsWith('http') ? '_blank' : '_self');

    // Get display values
    const displayText = getContent(name, defaultContent);
    const displayHref = getContent(linkName, defaultHref);
    const displayTarget = getContent(targetKey, derivedDefaultTarget);

    useEffect(() => {
        if (isEditing) {
            setTextValue(displayText);
            setHrefValue(displayHref);
            setTargetValue(displayTarget);
        }
    }, [isEditing, displayText, displayHref, displayTarget]);

    const handleSave = () => {
        updateContent(name, textValue);
        updateContent(linkName, hrefValue);
        updateContent(targetKey, targetValue);
        if (onSave) onSave(textValue, hrefValue);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setIsEditing(false);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleSave();
        }
        if (e.key === 'Escape') {
            handleCancel();
        }
    };

    if (isEditingMode && !isEditing) {
        return (
            <a
                href={displayHref}
                target={displayTarget}
                rel={displayTarget === '_blank' ? 'noopener noreferrer' : ''}
                className={cn(
                    "cursor-pointer hover:outline hover:outline-2 hover:outline-blue-500 hover:outline-dashed rounded px-1 -mx-1 transition-all relative group inline-flex items-center gap-2",
                    className
                )}
                onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setIsEditing(true);
                }}
                title={`Click to edit link: ${textValue} -> ${hrefValue} (${displayTarget})`}
            >
                {children}
                {displayText}
                <span className="absolute -top-3 -right-3 hidden group-hover:flex bg-blue-500 text-white text-[10px] px-1 rounded shadow-sm z-50 whitespace-nowrap">
                    Edit Link
                </span>
            </a>
        );
    }

    if (isEditing) {
        return (
            <div className="relative inline-flex flex-col gap-3 p-3 bg-background border-2 border-blue-500 rounded shadow-lg z-50 min-w-[280px]" onClick={e => e.stopPropagation()}>
                <div className="flex flex-col gap-1">
                    <label className="text-xs font-semibold text-muted-foreground">Text</label>
                    <input
                        autoFocus
                        type="text"
                        value={textValue}
                        onChange={(e) => setTextValue(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="w-full p-2 text-sm bg-muted rounded focus:outline-none focus:ring-1 focus:ring-blue-500 border border-border"
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label className="text-xs font-semibold text-muted-foreground flex items-center gap-1">
                        <LinkIcon size={12} /> URL (href)
                    </label>
                    <input
                        type="text"
                        value={hrefValue}
                        onChange={(e) => setHrefValue(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="w-full p-2 text-sm bg-muted rounded focus:outline-none focus:ring-1 focus:ring-blue-500 border border-border"
                    />
                </div>

                <div className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        id={`target-check-${name}`}
                        checked={targetValue === '_blank'}
                        onChange={(e) => setTargetValue(e.target.checked ? '_blank' : '_self')}
                        className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <label htmlFor={`target-check-${name}`} className="text-xs text-muted-foreground flex items-center gap-1 cursor-pointer select-none">
                        <ExternalLink size={12} /> Open in new tab
                    </label>
                </div>

                <div className="flex justify-end gap-2 mt-2 pt-2 border-t border-border">
                    <button
                        onClick={handleSave}
                        className="p-1 px-3 bg-green-600 text-white rounded hover:bg-green-700 shadow-sm flex items-center gap-1 text-xs font-medium transition-colors"
                    >
                        <Check size={14} /> Save
                    </button>
                    <button
                        onClick={handleCancel}
                        className="p-1 px-3 bg-red-500 text-white rounded hover:bg-red-600 shadow-sm flex items-center gap-1 text-xs font-medium transition-colors"
                    >
                        <X size={14} /> Cancel
                    </button>
                </div>
            </div>
        );
    }

    return (
        <a
            href={displayHref}
            className={className}
            target={displayTarget}
            rel={displayTarget === '_blank' ? 'noopener noreferrer' : ''}
        >
            {children}
            {displayText}
        </a>
    );
};
