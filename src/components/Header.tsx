
import React from 'react';
import { Bell, Menu, Search, User } from 'lucide-react';
import { Input } from '@/components/ui/input';

const Header = ({ title }: { title: string }) => {
  return (
    <header className="bg-white py-4 px-4 flex items-center justify-between shadow-sm">
      <div className="flex items-center">
        <Menu className="h-6 w-6 text-gray-700 mr-3" />
        <h1 className="text-xl font-semibold">{title}</h1>
      </div>
      <div className="flex items-center space-x-3">
        <div className="relative">
          <Bell className="h-6 w-6 text-gray-700" />
          <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
            5
          </span>
        </div>
        <div className="h-8 w-8 rounded-full bg-blue-200 overflow-hidden">
          <User className="h-full w-full text-blue-500" />
        </div>
      </div>
    </header>
  );
};

export default Header;
