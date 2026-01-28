import React from 'react';
import { Search, ShoppingCart, User, Menu } from 'lucide-react';
import logo from '../assets/logo.png';

const Header = () => {
    return (
        <header className="sticky top-0 z-50 glass-morphism shadow-sm">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <img src={logo} alt="Nepmart" className="h-10 w-auto" />
                    <span className="text-2xl font-bold bg-gradient-to-r from-primary to-red-600 bg-clip-text text-transparent hidden md:block">
                        Nepmart
                    </span>
                </div>

                {/* Search Bar */}
                <div className="flex-1 max-w-xl mx-8 hidden md:block">
                    <div className="relative group">
                        <input
                            type="text"
                            placeholder="Search for products, categories..."
                            className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                        />
                        <Search className="absolute left-3 top-2.5 text-gray-400 group-focus-within:text-primary transition-colors" size={20} />
                    </div>
                </div>

                {/* Icons */}
                <div className="flex items-center gap-6">
                    <button className="relative p-2 hover:bg-red-50 rounded-full transition-colors group">
                        <ShoppingCart className="text-gray-700 group-hover:text-primary" size={24} />
                        <span className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-white">
                            0
                        </span>
                    </button>

                    <button className="flex items-center gap-2 p-1 pl-3 pr-1 rounded-full border border-gray-200 hover:shadow-md transition-all duration-300">
                        <User className="text-gray-700" size={24} />
                        <div className="h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                            U
                        </div>
                    </button>

                    <button className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors">
                        <Menu size={24} />
                    </button>
                </div>
            </div>

            {/* Mobile Search - Only visible on small screens */}
            <div className="px-4 pb-3 md:hidden">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-100 border-none focus:ring-2 focus:ring-primary transition-all"
                    />
                    <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
                </div>
            </div>
        </header>
    );
};

export default Header;
