import React from "react";
import { Menu, ChevronLeft, ChevronDown } from "lucide-react";

export default function TaskHeader({
    title,
    subtitle,
    count,
    showDropdown = false,
    onDropdown,
    onMenu = () => { },
    onBack,
    children,
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
                        <ChevronDown size={18} className="text-white ml-1" />
                    )}
                    {typeof count === 'number' && (
                        <span className="bg-[#f0f4ff] text-[#181f60] text-xs rounded-full px-2 py-0.5 font-medium ml-2">{count}</span>
                    )}
                </span>
            </div>
            {subtitle && <div className="text-xs text-white/70 mb-2">{subtitle}</div>}
            {children}
        </div>
    );
} 