import { Link, NavLink } from 'react-router-dom';
import { Search, ShoppingCart, Menu } from 'lucide-react';
import logo from '../assets/logo.png';

const Header = () => {
    const navLinkStyles = ({ isActive }) =>
        `text-sm font-black transition-all duration-300 relative py-2 px-4 rounded-xl ${isActive
            ? 'text-primary bg-red-50 shadow-sm'
            : 'text-gray-600 hover:text-primary hover:bg-gray-50'
        }`;

    return (
        <header className="sticky top-0 z-50 glass-morphism shadow-sm border-b border-white/20">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4">
                {/* Logo & Main Nav */}
                <div className="flex items-center gap-2">
                    <Link to="/" className="flex items-center gap-2 shrink-0">
                        <img src={logo} alt="Nepmart" className="h-10 w-auto" />
                        <span className="text-2xl font-black bg-gradient-to-r from-primary to-red-600 bg-clip-text text-transparent hidden xl:block">
                            Nepmart
                        </span>
                    </Link>

                    <nav className="hidden lg:flex items-center gap-1 ml-6">
                        <NavLink to="/" className={navLinkStyles}>
                            Home
                        </NavLink>
                        <NavLink to="/shop" className={navLinkStyles}>
                            Shop
                        </NavLink>
                    </nav>
                </div>

                {/* Search Bar - Centered */}
                <div className="flex-1 max-w-lg hidden md:block">
                    <div className="relative group">
                        <input
                            type="text"
                            placeholder="Explore Nepali products..."
                            className="w-full pl-11 pr-4 py-2.5 rounded-2xl bg-gray-50/50 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white focus:border-transparent transition-all duration-300 font-medium"
                        />
                        <Search className="absolute left-4 top-3 text-gray-400 group-focus-within:text-primary transition-colors" size={18} />
                    </div>
                </div>

                {/* Icons & CTA */}
                <div className="flex items-center gap-4 lg:gap-6">
                    <button className="relative p-2.5 hover:bg-red-50 rounded-2xl transition-all group active:scale-95">
                        <ShoppingCart className="text-gray-700 group-hover:text-primary" size={22} />
                        <span className="absolute top-1 right-1 bg-primary text-white text-[9px] font-black px-1.5 py-0.5 rounded-full border-2 border-white shadow-sm">
                            0
                        </span>
                    </button>

                    <div className="hidden sm:flex items-center gap-3">
                        <Link to="/login" className="text-sm font-black text-gray-700 hover:text-primary transition-colors px-4">
                            Sign In
                        </Link>
                        <Link to="/signup" className="bg-primary text-white px-7 py-3 rounded-2xl text-sm font-black hover:shadow-xl hover:shadow-primary/30 transition-all active:scale-95 hover:bg-red-600">
                            Join Now
                        </Link>
                    </div>

                    <button className="lg:hidden p-2.5 hover:bg-gray-100 rounded-2xl transition-colors active:scale-95">
                        <Menu size={24} className="text-gray-700" />
                    </button>
                </div>
            </div>

            {/* Mobile Search */}
            <div className="px-4 pb-3 md:hidden">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full pl-11 pr-4 py-2.5 rounded-2xl bg-gray-100/50 border-none focus:ring-2 focus:ring-primary transition-all font-medium"
                    />
                    <Search className="absolute left-4 top-3 text-gray-400" size={18} />
                </div>
            </div>
        </header>
    );
};

export default Header;
