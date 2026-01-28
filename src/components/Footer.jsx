import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
    return (
        <footer className="bg-secondary text-gray-300 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Info */}
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <img src={logo} alt="Nepmart" className="h-10 w-auto invert" />
                            <span className="text-2xl font-bold text-white">Nepmart</span>
                        </div>
                        <p className="text-gray-400 mb-6">
                            Your one-stop destination for all your shopping needs. Quality products, affordable prices, and fast delivery.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-primary hover:text-white transition-all"><Facebook size={20} /></a>
                            <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-primary hover:text-white transition-all"><Twitter size={20} /></a>
                            <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-primary hover:text-white transition-all"><Instagram size={20} /></a>
                            <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-primary hover:text-white transition-all"><Youtube size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white text-lg font-bold mb-6">Quick Links</h3>
                        <ul className="space-y-4">
                            <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Our Services</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Latest News</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Customer Service */}
                    <div>
                        <h3 className="text-white text-lg font-bold mb-6">Customer Service</h3>
                        <ul className="space-y-4">
                            <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Return Policy</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Shipping Info</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white text-lg font-bold mb-6">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3">
                                <MapPin className="text-primary" size={20} />
                                <span>Kathmandu, Nepal</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="text-primary" size={20} />
                                <span>+977 1234567890</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="text-primary" size={20} />
                                <span>support@nepmart.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
                    <p>© 2026 Nepmart Ecommerce. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
