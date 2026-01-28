import React from 'react';
import { motion } from 'framer-motion';

const categories = [
    { id: 1, name: "Fashion", icon: "🧣", count: "1.2k+ Items", color: "bg-pink-100", slug: "fashion" },
    { id: 2, name: "Food & Organic", icon: "☕", count: "800+ Items", color: "bg-blue-100", slug: "food" },
    { id: 3, name: "Handicrafts", icon: "🏺", count: "500+ Items", color: "bg-green-100", slug: "handicrafts" },
    { id: 4, name: "Footwear", icon: "👟", count: "300+ Items", color: "bg-purple-100", slug: "footwear" },
    { id: 5, name: "Decor", icon: "🖼️", count: "200+ Items", color: "bg-orange-100", slug: "decor" },
    { id: 6, name: "Local Drinks", icon: "🍶", count: "150+ Items", color: "bg-yellow-100", slug: "drinks" },
];

const CategorySection = ({ onSelectCategory, activeCategory }) => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center mb-12">
                    <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Nepali Essence by Category</h2>
                    <div className="h-1.5 w-24 bg-primary rounded-full" />
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                    {categories.map((cat) => (
                        <motion.div
                            key={cat.id}
                            whileHover={{ y: -12 }}
                            onClick={() => onSelectCategory(cat.slug)}
                            className={`${cat.color} p-10 rounded-[2.5rem] flex flex-col items-center justify-center cursor-pointer transition-all hover:shadow-2xl border-2 ${activeCategory === cat.slug ? 'border-primary ring-4 ring-red-50' : 'border-transparent'}`}
                        >
                            <span className="text-5xl mb-6 drop-shadow-sm">{cat.icon}</span>
                            <h3 className="font-bold text-gray-800 text-lg mb-2">{cat.name}</h3>
                            <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">{cat.count}</p>
                        </motion.div>
                    ))}
                </div>

                {activeCategory !== 'all' && (
                    <div className="flex justify-center mt-12">
                        <button
                            onClick={() => onSelectCategory('all')}
                            className="text-primary font-bold hover:underline py-2 px-6 rounded-full bg-red-50 transition-all hover:bg-red-100"
                        >
                            Show All Products
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default CategorySection;
