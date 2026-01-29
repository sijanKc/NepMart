import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, ArrowRight, Github, Chrome } from 'lucide-react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    return (
        <div className="min-h-[calc(100vh-80px)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03] grayscale pointer-events-none">
                    <img
                        src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2000&auto=format&fit=crop"
                        alt="Nepali Pattern"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-md w-full space-y-8 relative z-10"
            >
                <div className="text-center">
                    <motion.div
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        className="inline-block p-4 rounded-3xl bg-primary/10 mb-6"
                    >
                        <span className="text-4xl">🏔️</span>
                    </motion.div>
                    <h2 className="text-4xl font-black text-gray-900 tracking-tight">Welcome Back</h2>
                    <p className="mt-3 text-gray-500 font-medium">
                        Enter your details to access your NepMart account
                    </p>
                </div>

                <div className="bg-white/80 backdrop-blur-xl p-8 rounded-[2.5rem] shadow-2xl shadow-gray-200/50 border border-white">
                    <form className="space-y-6">
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">Email Address</label>
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-primary transition-colors">
                                        <Mail size={20} />
                                    </div>
                                    <input
                                        type="email"
                                        required
                                        className="block w-full pl-11 pr-4 py-4 bg-gray-50 border-none rounded-2xl text-gray-900 font-medium placeholder-gray-400 focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                                        placeholder="name@example.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">Password</label>
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-primary transition-colors">
                                        <Lock size={20} />
                                    </div>
                                    <input
                                        type="password"
                                        required
                                        className="block w-full pl-11 pr-4 py-4 bg-gray-50 border-none rounded-2xl text-gray-900 font-medium placeholder-gray-400 focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                                        placeholder="••••••••"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input type="checkbox" className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded-lg cursor-pointer" />
                                <label className="ml-2 block text-sm font-bold text-gray-500 cursor-pointer">Remember me</label>
                            </div>
                            <div className="text-sm">
                                <a href="#" className="font-bold text-primary hover:text-primary/80 transition-colors">Forgot password?</a>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-4 px-4 border border-transparent rounded-2xl text-white bg-primary hover:bg-primary/95 font-bold text-lg shadow-xl shadow-primary/20 transition-all hover:-translate-y-0.5 active:translate-y-0"
                        >
                            Sign in
                            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                        </button>
                    </form>

                    <div className="mt-8">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-100"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-4 bg-transparent text-gray-400 font-bold uppercase tracking-widest text-[10px]">Or continue with</span>
                            </div>
                        </div>

                        <div className="mt-6 grid grid-cols-2 gap-4">
                            <button className="flex items-center justify-center py-3.5 px-4 rounded-2xl bg-white border border-gray-100 hover:border-gray-200 hover:bg-gray-50 transition-all font-bold text-gray-700 gap-2">
                                <Chrome size={20} />
                                Google
                            </button>
                            <button className="flex items-center justify-center py-3.5 px-4 rounded-2xl bg-white border border-gray-100 hover:border-gray-200 hover:bg-gray-50 transition-all font-bold text-gray-700 gap-2">
                                <Github size={20} />
                                GitHub
                            </button>
                        </div>
                    </div>
                </div>

                <p className="text-center text-gray-500 font-medium">
                    Don't have an account?{' '}
                    <Link to="/signup" className="font-black text-primary hover:text-primary/80 transition-colors">
                        Create account
                    </Link>
                </p>
            </motion.div>
        </div>
    );
};

export default LoginPage;
