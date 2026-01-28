import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
    {
        id: 1,
        title: "Vibrant Nepali Fashion",
        subtitle: "Authentic Dhaka & Pashmina Collection",
        image: "https://images.unsplash.com/photo-1610483863831-292a83232c43?q=80&w=1200&auto=format&fit=crop",
        color: "bg-red-600"
    },
    {
        id: 2,
        title: "Himalayan Organic Treasures",
        subtitle: "Pure Ilam Tea & Himalayan Coffee",
        image: "https://images.unsplash.com/photo-1544739313-6fad02872377?q=80&w=1200&auto=format&fit=crop",
        color: "bg-green-600"
    },
    {
        id: 3,
        title: "Handcrafted Heritage",
        subtitle: "Exquisite Singing Bowls & Thanka Art",
        image: "https://images.unsplash.com/photo-1594950195709-a14f66c242d7?q=80&w=1200&auto=format&fit=crop",
        color: "bg-blue-600"
    }
];

const Hero = () => {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(0);

    const paginate = useCallback((newDirection) => {
        setDirection(newDirection);
        setCurrent((prev) => (prev + newDirection + slides.length) % slides.length);
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            paginate(1);
        }, 6000);
        return () => clearInterval(timer);
    }, [paginate]);

    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
            transition: { duration: 0.5 }
        })
    };

    return (
        <div className="relative h-[500px] md:h-[650px] w-full overflow-hidden bg-gray-900">
            <AnimatePresence initial={false} custom={direction}>
                <motion.div
                    key={current}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.5 }
                    }}
                    className="absolute inset-0"
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                    <img
                        src={slides[current].image}
                        alt={slides[current].title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white px-4 max-w-4xl mx-auto">
                        <motion.span
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="px-4 py-1 bg-primary rounded-full text-sm font-bold tracking-widest uppercase mb-4 shadow-lg shadow-red-500/50"
                        >
                            Exclusive Offer
                        </motion.span>
                        <motion.h2
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight drop-shadow-2xl"
                        >
                            {slides[current].title}
                        </motion.h2>
                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-xl md:text-3xl mb-10 text-gray-200 font-medium max-w-2xl drop-shadow-lg"
                        >
                            {slides[current].subtitle}
                        </motion.p>
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="flex gap-4"
                        >
                            <button className="bg-primary hover:bg-red-600 text-white px-10 py-4 rounded-xl font-bold text-xl transition-all shadow-xl hover:shadow-primary/40 active:scale-95">
                                Shop Now
                            </button>
                            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-10 py-4 rounded-xl font-bold text-xl transition-all active:scale-95">
                                Explore More
                            </button>
                        </motion.div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
                onClick={() => paginate(-1)}
                className="absolute left-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-2xl glass-morphism text-white hover:bg-primary transition-all shadow-2xl group"
            >
                <ChevronLeft size={32} className="group-hover:scale-110 transition-transform" />
            </button>
            <button
                onClick={() => paginate(1)}
                className="absolute right-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-2xl glass-morphism text-white hover:bg-primary transition-all shadow-2xl group"
            >
                <ChevronRight size={32} className="group-hover:scale-110 transition-transform" />
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-4">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            setDirection(index > current ? 1 : -1);
                            setCurrent(index);
                        }}
                        className={`transition-all duration-500 h-2 rounded-full shadow-lg ${index === current ? "bg-primary w-12" : "bg-white/30 w-3 hover:bg-white/50"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Hero;
