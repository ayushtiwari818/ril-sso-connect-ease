
import React from "react";
import { Menu, ChevronLeft, ChevronDown } from "lucide-react";

export default function TaskHeader({
    title,
    subtitle,
    count,
    showDropdown = true,
    onDropdown = () => {},
    onMenu = () => {},
    onBack,
    children
}) {
    return (
        <div className="sticky top-0 z-10 bg-[#181f60] flex flex-col px-4 py-4 mb-2">
            <div className="flex items-center mb-2">
                {onBack ? (
                    <button onClick={onBack} className="mr-2 text-white font-bold text-lg"><ChevronLeft size={24} /></button>
                ) : (
                    <button onClick={onMenu} className="mr-2 text-white font-bold text-lg"><Menu size={24} /></button>
                )}
                <span className="font-semibold text-base text-white flex items-center">
                    {title}
                    {showDropdown && (
                        <ChevronDown size={18} className="text-white ml-1" onClick={onDropdown} />
                    )}
                </span>
            </div>
            {subtitle && <div className="text-sm text-white/80 -mt-1 mb-1">{subtitle} {count && <span className="bg-white/20 px-2 py-0.5 rounded-full text-xs">{count}</span>}</div>}
            {children}
        </div>
    );
} 
