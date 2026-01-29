import React, { useState } from 'react';
import Hero from '../components/Hero';
import CategorySection from '../components/CategorySection';
import ProductCard from '../components/ProductCard';
import { motion, AnimatePresence } from 'framer-motion';

const ALL_PRODUCTS = [
    // Fashion
    {
        id: 1,
        title: "Handmade Dhaka Topi - Palpali Pattern",
        price: "850",
        oldPrice: "1,200",
        rating: 4.9,
        reviews: 245,
        discount: 30,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1610483863831-292a83232c43?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "Pure Pashmina Shawl - Handwoven",
        price: "12,500",
        oldPrice: "15,000",
        rating: 4.8,
        reviews: 112,
        discount: 16,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 13,
        title: "Traditional Nepali Kurtha Suruwal",
        price: "4,500",
        rating: 4.7,
        reviews: 56,
        category: "fashion",
        image: "https://images.unsplash.com/photo-1583316174775-bd6dc0e9f298?q=80&w=800&auto=format&fit=crop"
    },
    // Food & Organic
    {
        id: 3,
        title: "Himalayan Organic Coffee Beans",
        price: "1,450",
        rating: 4.7,
        reviews: 89,
        category: "food",
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 4,
        title: "Premium Ilam Tea - First Flush",
        price: "750",
        oldPrice: "900",
        rating: 4.9,
        reviews: 156,
        discount: 15,
        category: "food",
        image: "https://images.unsplash.com/photo-1544739313-6fad02872377?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 14,
        title: "Pure Himalayan Shilajit (50g)",
        price: "2,200",
        rating: 4.9,
        reviews: 312,
        category: "food",
        image: "https://images.unsplash.com/photo-1512132411229-c30391241dd8?q=80&w=800&auto=format&fit=crop"
    },
    // Handicrafts
    {
        id: 5,
        title: "Tibetan Singing Bowl - 3-Tone",
        price: "4,500",
        oldPrice: "5,500",
        rating: 5.0,
        reviews: 432,
        discount: 18,
        category: "handicrafts",
        image: "https://images.unsplash.com/photo-1594950195709-a14f66c242d7?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 6,
        title: "Authentic Gorkha Khukuri Blade",
        price: "8,900",
        rating: 4.9,
        reviews: 210,
        category: "handicrafts",
        image: "https://images.unsplash.com/photo-1581412344293-673b32ddd27d?q=80&w=800&auto=format&fit=crop"
    },
    // Footwear (Goldstar)
    {
        id: 7,
        title: "Goldstar Shoes - G10 Series",
        price: "2,450",
        oldPrice: "2,800",
        rating: 4.6,
        reviews: 1540,
        discount: 12,
        category: "footwear",
        image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 8,
        title: "Goldstar Pro Runner - Edition 25",
        price: "3,200",
        rating: 4.5,
        reviews: 890,
        category: "footwear",
        image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=800&auto=format&fit=crop"
    },
    // Decor
    {
        id: 9,
        title: "Hand-painted Mandala Thangka Art",
        price: "15,500",
        oldPrice: "18,000",
        rating: 5.0,
        reviews: 56,
        discount: 14,
        category: "decor",
        image: "https://images.unsplash.com/photo-1582234372722-50d7ccc30eba?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 10,
        title: "Newari Wood-carved Mirror Frame",
        price: "25,000",
        rating: 4.9,
        reviews: 12,
        category: "decor",
        image: "https://images.unsplash.com/photo-1540333032255-59065997235b?q=80&w=800&auto=format&fit=crop"
    },
    // Local Drinks
    {
        id: 11,
        title: "Himalayan Ginger Honey Tea Kit",
        price: "450",
        rating: 4.8,
        reviews: 124,
        category: "drinks",
        image: "https://images.unsplash.com/photo-1556881286-fc6915169721?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 12,
        title: "Special Marpha Apple Brandy",
        price: "1,250",
        oldPrice: "1,500",
        rating: 4.7,
        reviews: 78,
        discount: 17,
        category: "drinks",
        image: "https://images.unsplash.com/photo-1527661591475-527312dd65f5?q=80&w=800&auto=format&fit=crop"
    }
];

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
