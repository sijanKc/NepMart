import React, { useState } from 'react';
import Hero from '../components/Hero';
import CategorySection from '../components/CategorySection';
import ProductCard from '../components/ProductCard';
import { motion, AnimatePresence } from 'framer-motion';
import { ALL_PRODUCTS } from '../data/products';

function HomePage() {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const filteredProducts = selectedCategory === 'all'
        ? ALL_PRODUCTS
        : ALL_PRODUCTS.filter(p => p.category === selectedCategory);

    return (
        <main className="flex-grow">
            <Hero />

            <CategorySection
                onSelectCategory={setSelectedCategory}
                activeCategory={selectedCategory}
            />

            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
                        <div>
                            <motion.h2
                                key={selectedCategory}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="text-5xl font-black text-gray-900 mb-2"
                            >
                                {selectedCategory === 'all' ? 'Nepali Specialties' : `Nepali ${selectedCategory}`}
                            </motion.h2>
                            <p className="text-gray-500 text-lg font-medium">Discover authentic products straight from the heart of Nepal</p>
                        </div>
                        <div className="flex items-center gap-4 bg-white p-3 rounded-2xl shadow-sm border border-gray-100">
                            <span className="text-xs font-bold text-gray-400 pl-4 uppercase tracking-[0.2em]">Sort by</span>
                            <select className="bg-transparent border-none focus:ring-0 font-bold text-gray-800 pr-8 cursor-pointer">
                                <option>Best Selling</option>
                                <option>New Arrivals</option>
                                <option>Price: Low to High</option>
                                <option>Price: High to Low</option>
                            </select>
                        </div>
                    </div>

                    <motion.div
                        layout
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12"
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredProducts.map(product => (
                                <motion.div
                                    key={product.id}
                                    layout
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                >
                                    <ProductCard product={product} />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {filteredProducts.length === 0 && (
                        <div className="text-center py-32 bg-white rounded-[4rem] shadow-sm border border-dashed border-gray-200">
                            <div className="text-7xl mb-8">⛰️</div>
                            <h3 className="text-3xl font-bold text-gray-800 mb-3">Coming Soon!</h3>
                            <p className="text-gray-500 mb-10 text-lg">We are currently sourcing the finest {selectedCategory} from local artisans.</p>
                            <button
                                onClick={() => setSelectedCategory('all')}
                                className="bg-primary text-white px-10 py-4 rounded-2xl font-bold hover:shadow-2xl hover:shadow-primary/30 transition-all active:scale-95"
                            >
                                Return to Marketplace
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
}

export default HomePage;
