import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Star,
    ShoppingCart,
    Heart,
    ChevronLeft,
    Minus,
    Plus,
    ArrowLeft,
    CheckCircle2,
    Truck,
    ShieldCheck
} from 'lucide-react';
import { ALL_PRODUCTS } from '../data/products';

const ProductDetailsPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [selectedImage, setSelectedImage] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState('description');

    useEffect(() => {
        const foundProduct = ALL_PRODUCTS.find(p => p.id === parseInt(id));
        if (foundProduct) {
            setProduct(foundProduct);
            setSelectedImage(0);
        }
        window.scrollTo(0, 0);
    }, [id]);

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-800">Product not found</h2>
                    <Link to="/shop" className="text-primary font-bold mt-4 inline-block hover:underline">
                        Return to Shop
                    </Link>
                </div>
            </div>
        );
    }

    const handleQuantityChange = (val) => {
        const newQty = quantity + val;
        if (newQty >= 1 && newQty <= (product.stock || 10)) {
            setQuantity(newQty);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 pt-24 pb-20">
            <div className="container mx-auto px-4">
                {/* Breadcrumb / Back Navigation */}
                <Link
                    to="/shop"
                    className="inline-flex items-center gap-2 text-gray-500 hover:text-primary transition-colors mb-8 group"
                >
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="font-bold">Back to Products</span>
                </Link>

                <div className="bg-white rounded-[3rem] shadow-sm border border-gray-100 overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2">

                        {/* Left Column: Image Gallery */}
                        <div className="p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-gray-100">
                            <div className="relative aspect-square rounded-3xl overflow-hidden bg-gray-50 mb-6">
                                <motion.img
                                    key={selectedImage}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    src={product.gallery[selectedImage] || product.image}
                                    alt={product.title}
                                    className="w-full h-full object-cover"
                                />
                                {product.discount && (
                                    <div className="absolute top-6 left-6 bg-primary text-white font-black px-4 py-2 rounded-2xl shadow-lg">
                                        -{product.discount}% OFF
                                    </div>
                                )}
                            </div>

                            {/* Thumbnails */}
                            <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                                {product.gallery.map((img, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setSelectedImage(index)}
                                        className={`relative w-24 h-24 flex-shrink-0 rounded-2xl overflow-hidden border-2 transition-all ${selectedImage === index
                                                ? 'border-primary shadow-md scale-95'
                                                : 'border-transparent opacity-60 hover:opacity-100'
                                            }`}
                                    >
                                        <img src={img} alt="" className="w-full h-full object-cover" />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Right Column: Product Info */}
                        <div className="p-8 lg:p-12 flex flex-col">
                            <div className="flex items-center gap-2 mb-4">
                                <span className="bg-red-50 text-primary text-xs font-black px-3 py-1 rounded-full uppercase tracking-widest">
                                    {product.category}
                                </span>
                                <div className="flex items-center gap-1 text-yellow-400 ml-auto">
                                    <Star size={18} className="fill-current" />
                                    <span className="font-black text-gray-800">{product.rating}</span>
                                    <span className="text-gray-400 font-medium">({product.reviews} reviews)</span>
                                </div>
                            </div>

                            <h1 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4 leading-tight">
                                {product.title}
                            </h1>

                            <div className="flex items-end gap-3 mb-8">
                                <span className="text-4xl font-black text-gray-900">Rs. {product.price}</span>
                                {product.oldPrice && (
                                    <span className="text-xl text-gray-400 line-through font-bold mb-1">
                                        Rs. {product.oldPrice}
                                    </span>
                                )}
                            </div>

                            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                {product.description}
                            </p>

                            {/* Features List */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                                {product.features?.map((feature, i) => (
                                    <div key={i} className="flex items-center gap-3 text-gray-700">
                                        <CheckCircle2 size={20} className="text-green-500 shrink-0" />
                                        <span className="font-bold text-sm">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Stock Status */}
                            <div className="flex items-center gap-2 mb-8">
                                <div className={`w-3 h-3 rounded-full ${product.stock > 0 ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`} />
                                <span className={`font-bold ${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
                                    {product.stock > 0 ? `In Stock (${product.stock} units left)` : 'Out of Stock'}
                                </span>
                            </div>

                            {/* Action Area */}
                            <div className="mt-auto space-y-6">
                                <div className="flex items-center gap-6">
                                    <div className="flex items-center bg-gray-100 p-2 rounded-2xl">
                                        <button
                                            onClick={() => handleQuantityChange(-1)}
                                            className="p-2 hover:bg-white hover:shadow-sm rounded-xl transition-all"
                                        >
                                            <Minus size={20} />
                                        </button>
                                        <span className="w-12 text-center font-black text-xl">{quantity}</span>
                                        <button
                                            onClick={() => handleQuantityChange(1)}
                                            className="p-2 hover:bg-white hover:shadow-sm rounded-xl transition-all"
                                        >
                                            <Plus size={20} />
                                        </button>
                                    </div>
                                    <button className="flex-1 bg-primary text-white py-4 rounded-2xl font-black text-lg shadow-xl shadow-red-200 hover:bg-red-600 active:scale-95 transition-all flex items-center justify-center gap-3">
                                        <ShoppingCart size={24} />
                                        Add to Cart
                                    </button>
                                </div>
                                <button className="w-full bg-gray-900 text-white py-5 rounded-3xl font-black text-xl hover:bg-black active:scale-95 transition-all">
                                    Buy it Now
                                </button>
                            </div>

                            {/* Trust Badges */}
                            <div className="grid grid-cols-3 gap-4 mt-10 pt-10 border-t border-gray-100">
                                <div className="text-center">
                                    <Truck size={24} className="mx-auto text-gray-400 mb-2" />
                                    <span className="text-[10px] font-black uppercase text-gray-500">Free Shipping</span>
                                </div>
                                <div className="text-center">
                                    <ShieldCheck size={24} className="mx-auto text-gray-400 mb-2" />
                                    <span className="text-[10px] font-black uppercase text-gray-500">Secure Payment</span>
                                </div>
                                <div className="text-center">
                                    <CheckCircle2 size={24} className="mx-auto text-gray-400 mb-2" />
                                    <span className="text-[10px] font-black uppercase text-gray-500">Genuine Product</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section: Tabs/Reviews */}
                <div className="mt-16">
                    <div className="flex gap-12 border-b border-gray-200 mb-10">
                        <button
                            onClick={() => setActiveTab('description')}
                            className={`pb-4 font-black transition-all relative ${activeTab === 'description' ? 'text-gray-900 border-b-4 border-primary' : 'text-gray-400 hover:text-gray-600'}`}
                        >
                            Description
                        </button>
                        <button
                            onClick={() => setActiveTab('reviews')}
                            className={`pb-4 font-black transition-all relative ${activeTab === 'reviews' ? 'text-gray-900 border-b-4 border-primary' : 'text-gray-400 hover:text-gray-600'}`}
                        >
                            Reviews ({product.userReviews?.length || 0})
                        </button>
                    </div>

                    <div className="bg-white rounded-[3rem] p-8 lg:p-12 shadow-sm border border-gray-100">
                        {activeTab === 'description' ? (
                            <div className="prose max-w-none text-gray-600 text-lg leading-relaxed">
                                <p>{product.description}</p>
                                <ul className="mt-8 space-y-4">
                                    {product.features?.map((f, i) => <li key={i}>{f}</li>)}
                                </ul>
                            </div>
                        ) : (
                            <div>
                                <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-8">
                                    <div className="flex items-center gap-6">
                                        <span className="text-7xl font-black text-gray-900">{product.rating}</span>
                                        <div>
                                            <div className="flex gap-1 text-yellow-400 mb-2">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star key={i} size={24} className={i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-200'} />
                                                ))}
                                            </div>
                                            <p className="font-bold text-gray-500">Based on {product.reviews} reviews</p>
                                        </div>
                                    </div>
                                    <button className="bg-white border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-2xl font-black hover:bg-gray-900 hover:text-white transition-all active:scale-95">
                                        Write a Review
                                    </button>
                                </div>

                                <div className="space-y-8">
                                    {product.userReviews?.map((review) => (
                                        <div key={review.id} className="p-8 bg-gray-50 rounded-3xl">
                                            <div className="flex items-center justify-between mb-4">
                                                <div>
                                                    <h4 className="font-black text-gray-900 text-lg">{review.user}</h4>
                                                    <div className="flex gap-1 text-yellow-400 mt-1">
                                                        {[...Array(review.rating)].map((_, i) => <Star key={i} size={14} className="fill-current" />)}
                                                    </div>
                                                </div>
                                                <span className="text-gray-400 font-bold text-sm">{review.date}</span>
                                            </div>
                                            <p className="text-gray-600 font-medium leading-relaxed italic">
                                                "{review.comment}"
                                            </p>
                                        </div>
                                    ))}
                                    {(!product.userReviews || product.userReviews.length === 0) && (
                                        <div className="text-center py-12 text-gray-400 italic font-bold">
                                            No reviews yet. Be the first to review this product!
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsPage;
