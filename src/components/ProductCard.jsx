import React from 'react';
import { Star, ShoppingCart, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
        >
            <Link to={`/product/${product.id}`}>
                <div className="relative h-64 overflow-hidden bg-gray-50">
                    <img
                        src={product.image}
                        alt={product.title}
                        onError={(e) => {
                            e.target.src = "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&auto=format&fit=crop";
                        }}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 flex flex-col gap-2 translate-x-12 group-hover:translate-x-0 transition-transform duration-300 pointer-events-none">
                        <button className="p-2 bg-white rounded-full shadow-md hover:text-primary transition-colors pointer-events-auto">
                            <Heart size={20} />
                        </button>
                    </div>
                    {product.discount && (
                        <div className="absolute top-3 left-3 bg-primary text-white text-xs font-bold px-2 py-1 rounded-lg">
                            -{product.discount}%
                        </div>
                    )}
                </div>

                <div className="p-5">
                    <div className="flex items-center gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                size={14}
                                className={i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
                            />
                        ))}
                        <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
                    </div>

                    <h3 className="font-bold text-gray-800 mb-1 truncate group-hover:text-primary transition-colors">
                        {product.title}
                    </h3>

                    <div className="flex items-center justify-between mt-4">
                        <div className="flex flex-col">
                            <span className="text-xl font-bold text-gray-900">Rs. {product.price}</span>
                            {product.oldPrice && (
                                <span className="text-sm text-gray-400 line-through">Rs. {product.oldPrice}</span>
                            )}
                        </div>
                        <button
                            className="p-3 bg-primary text-white rounded-xl hover:bg-red-600 transition-colors shadow-lg shadow-red-200 relative z-10"
                            onClick={(e) => {
                                e.preventDefault();
                                // Add to cart logic here
                            }}
                        >
                            <ShoppingCart size={20} />
                        </button>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};

export default ProductCard;
