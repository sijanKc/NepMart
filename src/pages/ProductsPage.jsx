import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ALL_PRODUCTS } from '../data/products';
import ProductCard from '../components/ProductCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ITEMS_PER_PAGE = 8;

const ProductsPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [sortBy, setSortBy] = useState('best-selling');

    // Filter products
    const filteredProducts = ALL_PRODUCTS.filter(product => {
        if (selectedCategory === 'all') return true;
        return product.category === selectedCategory;
    });

    // Sort products
    const sortedProducts = [...filteredProducts].sort((a, b) => {
        if (sortBy === 'price-low') return parseFloat(a.price.replace(/,/g, '')) - parseFloat(b.price.replace(/,/g, ''));
        if (sortBy === 'price-high') return parseFloat(b.price.replace(/,/g, '')) - parseFloat(a.price.replace(/,/g, ''));
        if (sortBy === 'rating') return b.rating - a.rating;
        return 0; // default best-selling (original order)
    });

    // Pagination logic
    const totalPages = Math.ceil(sortedProducts.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const paginatedProducts = sortedProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    // Reset to page 1 when category or sort changes
    useEffect(() => {
        setCurrentPage(1);
    }, [selectedCategory, sortBy]);

    const categories = ['all', 'fashion', 'food', 'handicrafts', 'footwear', 'decor', 'drinks'];

    return (
        <div className="min-h-screen bg-gray-50 pt-24 pb-20">
            <div className="container mx-auto px-4">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
                    <div>
                        <h1 className="text-4xl font-black text-gray-900 mb-2">Our Collection</h1>
                        <p className="text-gray-500 font-medium">Explore the finest products from across Nepal</p>
                    </div>

                    <div className="flex items-center gap-4 bg-white p-2 rounded-2xl shadow-sm border border-gray-100">
                        <span className="text-xs font-bold text-gray-400 pl-4 uppercase tracking-widest">Sort by</span>
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="bg-transparent border-none focus:ring-0 font-bold text-gray-800 pr-8 cursor-pointer"
                        >
                            <option value="best-selling">Best Selling</option>
                            <option value="rating">Top Rated</option>
                            <option value="price-low">Price: Low to High</option>
                            <option value="price-high">Price: High to Low</option>
                        </select>
                    </div>
                </div>

                {/* Categories Filter */}
                <div className="flex flex-wrap gap-3 mb-12 justify-center lg:justify-start">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-6 py-2.5 rounded-xl font-bold capitalize transition-all duration-300 ${selectedCategory === cat
                                    ? 'bg-primary text-white shadow-lg shadow-primary/30'
                                    : 'bg-white text-gray-600 hover:bg-gray-100'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Product Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    <AnimatePresence mode="popLayout">
                        {paginatedProducts.map(product => (
                            <motion.div
                                key={product.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                            >
                                <ProductCard product={product} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Empty State */}
                {paginatedProducts.length === 0 && (
                    <div className="text-center py-20">
                        <div className="text-6xl mb-4">🔍</div>
                        <h2 className="text-2xl font-bold text-gray-800">No products found</h2>
                        <p className="text-gray-500">Try adjusting your filters or category.</p>
                    </div>
                )}

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="mt-20 flex justify-center items-center gap-4">
                        <button
                            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                            disabled={currentPage === 1}
                            className={`p-3 rounded-xl transition-all ${currentPage === 1
                                    ? 'text-gray-300 cursor-not-allowed'
                                    : 'bg-white text-primary hover:bg-primary hover:text-white shadow-md'
                                }`}
                        >
                            <ChevronLeft size={24} />
                        </button>

                        <div className="flex gap-2">
                            {[...Array(totalPages)].map((_, i) => (
                                <button
                                    key={i + 1}
                                    onClick={() => setCurrentPage(i + 1)}
                                    className={`w-12 h-12 rounded-xl font-bold transition-all ${currentPage === i + 1
                                            ? 'bg-primary text-white shadow-lg shadow-primary/30'
                                            : 'bg-white text-gray-600 hover:bg-gray-100 shadow-sm'
                                        }`}
                                >
                                    {i + 1}
                                </button>
                            ))}
                        </div>

                        <button
                            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                            disabled={currentPage === totalPages}
                            className={`p-3 rounded-xl transition-all ${currentPage === totalPages
                                    ? 'text-gray-300 cursor-not-allowed'
                                    : 'bg-white text-primary hover:bg-primary hover:text-white shadow-md'
                                }`}
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductsPage;
