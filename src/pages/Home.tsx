import React, { useState } from "react";
import { Menu, ChevronDown, Bell, MessageSquare, Search, QrCode, SlidersHorizontal, Package, Tag, BarChart2, ClipboardList, Truck, Users, ChevronRight, ChevronUp, ChevronDown as DownIcon, AlertCircle, CalendarDays, FileText, PlusCircle, User, ThumbsUp, MessageCircle, Share2 } from "lucide-react";
import Footer from "@/components/Footer";
import LeftMenu from "@/components/LeftMenu";
import MyMap from "@/components/Map";
import { useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import MyTasksList from "@/components/MyTasksList";
import OtherStoreTasksList from "@/components/OtherStoreTasksList";

const quickActions = [
    { icon: <Package size={24} className="text-blue-700" />, label: "Inventory" },
    { icon: <Tag size={24} className="text-blue-700" />, label: "Markdown" },
    { icon: <BarChart2 size={24} className="text-blue-700" />, label: "Sales Report" },
    { icon: <ClipboardList size={24} className="text-blue-700" />, label: "Approvals" },
    { icon: <Truck size={24} className="text-blue-700" />, label: "Deliveries" },
    { icon: <Users size={24} className="text-blue-700" />, label: "Customer Assistance", badge: 1 },
    { icon: <SlidersHorizontal size={24} className="text-blue-700" />, label: "Total Sales" },
];

const pendingActions = [
    { title: "Assistance Request", subtitle: "Men's trial room 2, Floor 2", icon: <AlertCircle size={18} className="text-gray-400" /> },
    { title: "Shutter-Up Activities", subtitle: "Daily | SO Team", due: "Due by 5:30PM", icon: <CalendarDays size={18} className="text-orange-500" />, dueColor: "text-orange-500" },
    { title: "Store Review Checklist", subtitle: "Monthly | SO Team", due: "Due by Jan 21", icon: <FileText size={18} className="text-orange-500" />, dueColor: "text-orange-500" },
    { title: "Store Planogram", subtitle: "5 Attachments | SO Team", badge: "New", icon: <FileText size={18} className="text-blue-700" /> },
];

const Home: React.FC = () => {
    const [showMoreQuick, setShowMoreQuick] = useState(false);
    const [showMorePending, setShowMorePending] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const navigate = useNavigate();
    const [activeTaskTab, setActiveTaskTab] = useState<'my' | 'other'>('other');

    const toggleMenu = () => {
        setShowMenu((prevState) => !prevState);
    };

    return (
        <div className="h-screen flex flex-col bg-[#f5f6fa] overflow-hidden">
            {/* Header - Fixed at top */}
            <div className="bg-[#181f60] w-full pt-6 pb-4 shadow-md">
                <div className="flex items-center justify-between mx-4">
                    <button
                        onClick={() => { toggleMenu() }}
                        className="p-2 text-white"
                    >
                        <Menu />
                    </button>

                    {showMenu && (
                        <>
                            <div
                                className="fixed inset-0 bg-black bg-opacity-30 z-40"
                                onClick={() => setShowMenu(false)}
                            ></div>
                            <div className="fixed top-0 left-0 h-full z-50">
                                <LeftMenu />
                            </div>
                        </>
                    )}

                    <span className="text-white font-semibold text-lg flex items-center">MyStore 2 <ChevronDown size={18} className="ml-1" /></span>
                    <div className="flex items-center space-x-4">
                        <Bell className="text-white" />
                        <MessageSquare className="text-white" />
                    </div>
                </div>
                <div className="flex items-center space-x-3 w-full max-w-2xl mx-auto m-2 px-4 py-3">
                    <div className="flex items-center bg-[#353d7c] rounded-full px-4 py-2 flex-1">
                        <input
                            className="bg-transparent text-white placeholder-white/70 outline-none text-sm sm:text-base flex-1"
                            placeholder="Search"
                        />
                        <Search className="text-white opacity-80" size={20} />
                    </div>
                    <button className="bg-[#353d7c] p-2 sm:p-3 rounded-full hover:bg-[#454d9c] transition">
                        <QrCode className="text-white opacity-80" size={20} />
                    </button>
                </div>
            </div>

            {/* Scrollable Content Area */}
            <div className="flex-1 overflow-y-auto">
                <div className="w-full px-4 mt-4 bg-white rounded-2xl p-4 flex flex-col shadow mb-2">
                    <div className="px-4 mt-4">
                        <div className="bg-blue-50 rounded-2xl p-4 flex flex-col shadow mb-2">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-xs text-black-400">Jan 13, 2025 <span className="text-gray-400">Monday</span></span>
                                <ChevronRight className="text-blue-700" size={18} />
                            </div>
                            <span className="text-xs text-gray-500 mb-2">0h / 12h 0m</span>
                            <button onClick={() => { navigate("/map") }} className="bg-[#3b5bfd] text-white rounded-full py-2 font-semibold mt-1">Clock In</button>
                        </div>
                    </div>
                    {/* Quick Actions */}
                    <div className="px-4 mt-4">
                        <div className="font-semibold text-base mb-2">Quick Actions</div>
                        <div className="grid grid-cols-3 gap-3">
                            {quickActions.slice(0, showMoreQuick ? quickActions.length : 6).map((action, i) => (
                                <div key={action.label} className="bg-white rounded-xl flex flex-col items-center justify-center py-4 shadow relative">
                                    {action.icon}
                                    <span className="text-xs mt-2 font-medium text-gray-700">{action.label}</span>
                                    {action.badge && <span className="absolute top-2 right-3 bg-red-500 text-white text-[10px] rounded-full px-1.5 py-0.5">{action.badge}</span>}
                                </div>
                            ))}
                        </div>
                        <button className="mx-auto block text-[#3b5bfd] text-xs mt-2 font-semibold" onClick={() => setShowMoreQuick(!showMoreQuick)}>
                            View {showMoreQuick ? "Less" : "More"} {showMoreQuick ? <ChevronUp size={14} className="inline" /> : <DownIcon size={14} className="inline" />}
                        </button>
                    </div>
                    {/* Pending Store Tasks */}
                    <div className="px-4 mt-6">
                        <div className="flex items-center mb-2">
                            <span className="font-semibold text-base mr-2">Pending Store Tasks</span>
                            <span className="bg-[#f0f4ff] text-[#181f60] text-xs rounded-full px-2 py-0.5 font-medium">36</span>
                        </div>
                        <div className="flex gap-3 mb-3 w-fit  mt-4 mb-4">
                            <button
                                className={`px-4 py-1.5 rounded-full text-sm font-semibold border transition-all
            ${activeTaskTab === 'my'
                                        ? 'bg-[#e6ecff] text-[#181f60] border-[#181f60]'
                                        : 'bg-transparent text-gray-600 border border-gray-300'}
        `}
                                onClick={() => setActiveTaskTab('my')}
                            >
                                My Tasks
                                <span className={`ml-2 text-xs rounded-full px-2 py-0.5 font-semibold border
            ${activeTaskTab === 'my'
                                        ? 'bg-white text-[#181f60]'
                                        : 'bg-[#f0f4ff] text-[#181f60]'}
        `}>
                                    8
                                </span>
                            </button>

                            <button
                                className={`px-4 py-1.5 rounded-full text-sm font-semibold border transition-all
            ${activeTaskTab === 'other'
                                        ? 'bg-[#e6ecff] text-[#181f60] border-[#181f60]'
                                        : 'bg-transparent text-gray-600 border border-gray-300'}
        `}
                                onClick={() => setActiveTaskTab('other')}
                            >
                                Other Store Tasks
                                <span className={`ml-2 text-xs rounded-full px-2 py-0.5 font-semibold border
            ${activeTaskTab === 'other'
                                        ? 'bg-white text-[#181f60]'
                                        : 'bg-[#f0f4ff] text-[#181f60]'}
        `}>
                                    28
                                </span>
                            </button>
                        </div>

                        {activeTaskTab === 'my' ? (
                            <MyTasksList onViewAll={() => navigate('/my-tasks')} />
                        ) : (
                            <OtherStoreTasksList onViewAll={() => navigate('/other-store-tasks')} />
                        )}
                    </div>
                    {/* Announcements */}
                    <div className="px-4 mt-6 mb-28">
                        <div className="flex items-center mb-2">
                            <span className="font-semibold text-base mr-2">Announcements</span>
                            <span className="bg-gray-200 text-xs rounded-full px-2 py-0.5 text-gray-600 font-medium">8</span>
                        </div>
                        <div className="bg-white rounded-xl p-4 shadow flex flex-col">
                            <div className="flex items-center mb-2">
                                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mr-2 overflow-hidden">
                                    <User className="text-gray-500" size={20} />
                                </div>
                                <div>
                                    <div className="font-medium text-sm text-gray-800">Terry John Paul</div>
                                    <div className="text-xs text-gray-400">27 Mar 2025</div>
                                </div>
                            </div>
                            <div className="text-xs text-gray-700 mb-2">Wifi Down in the store</div>
                            <div className="text-xs text-gray-500 mb-3">Hi All, We are currently experiencing a technical issue with regarding automatic leave deductions. We are working to resolve the problem and will keep you updated once it is fixed.</div>
                            <div className="flex items-center space-x-6 text-xs text-gray-400">
                                <div className="flex items-center space-x-1"><ThumbsUp size={16} /> <span>16</span></div>
                                <div className="flex items-center space-x-1"><MessageCircle size={16} /> <span>16</span></div>
                                <div className="flex items-center space-x-1 ml-auto"><Share2 size={16} /> <span>Share</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer - Fixed at bottom */}
            {!showMenu && <Footer />}
        </div>
    );
};

export default Home; 