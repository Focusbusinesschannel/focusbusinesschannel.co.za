'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

export default function ContactSection() {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: 'Web Design',
        message: ''
    });
    const [errors, setErrors] = useState<Record<string, string>>({});

    const validateForm = () => {
        const newErrors: Record<string, string> = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        if (!formData.message.trim()) newErrors.message = 'Message is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateForm()) return;

        setStatus('submitting');

        // Simulate API call
        try {
            await new Promise(resolve => setTimeout(resolve, 2000));
            setStatus('success');
            setFormData({ name: '', email: '', subject: 'Web Design', message: '' });
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="py-24 bg-surface relative">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

                    {/* Contact Info */}
                    <div>
                        <span className="text-accent text-sm font-bold tracking-widest uppercase mb-4 block">Get In Touch</span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">
                            Ready to start your <br />
                            <span className="text-gradient">next chapter?</span>
                        </h2>

                        <p className="text-gray-400 text-lg mb-12 max-w-md">
                            Whether you're looking to scale or just starting out, we have the tools and expertise to help you succeed.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-center gap-6 group">
                                <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <span className="text-xs text-gray-500 uppercase font-bold tracking-widest">Email Us</span>
                                    <p className="text-white font-medium text-lg">hello@focusbc.com</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 group">
                                <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <span className="text-xs text-gray-500 uppercase font-bold tracking-widest">Call Us</span>
                                    <p className="text-white font-medium text-lg">+1 (27) 81 555 1234</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 group">
                                <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <span className="text-xs text-gray-500 uppercase font-bold tracking-widest">Visit Us</span>
                                    <p className="text-white font-medium text-lg">Focus HQ, Johannesburg, South Africa</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="glass-panel p-8 md:p-12 rounded-3xl"
                    >
                        <AnimatePresence mode="wait">
                            {status === 'success' ? (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    className="h-full flex flex-col items-center justify-center text-center py-12"
                                >
                                    <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center text-accent mb-6">
                                        <CheckCircle size={40} />
                                    </div>
                                    <h3 className="text-3xl font-display font-bold text-white mb-4">Message Sent!</h3>
                                    <p className="text-gray-400 mb-8">
                                        Thank you for reaching out. Our team will get back to you within 24 hours.
                                    </p>
                                    <button
                                        onClick={() => setStatus('idle')}
                                        className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all"
                                    >
                                        Send Another Message
                                    </button>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-400">Full Name</label>
                                            <input
                                                type="text"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className={`w-full bg-white/5 border ${errors.name ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 text-white focus:border-accent outline-none transition-colors`}
                                                placeholder="John Doe"
                                                aria-label="Your Full Name"
                                                required
                                            />
                                            {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-400">Email Address</label>
                                            <input
                                                type="email"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className={`w-full bg-white/5 border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 text-white focus:border-accent outline-none transition-colors`}
                                                placeholder="john@example.com"
                                                aria-label="Your Email Address"
                                                required
                                            />
                                            {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-400">Subject</label>
                                        <select
                                            value={formData.subject}
                                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-accent outline-none transition-colors appearance-none"
                                            aria-label="Interest Area"
                                        >
                                            <option value="Web Design" className="bg-surface">Web Design</option>
                                            <option value="Growth Marketing" className="bg-surface">Growth Marketing</option>
                                            <option value="Accounting" className="bg-surface">Accounting</option>
                                            <option value="General Inquiry" className="bg-surface">General Inquiry</option>
                                        </select>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-400">Message</label>
                                        <textarea
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            className={`w-full bg-white/5 border ${errors.message ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 text-white focus:border-accent outline-none transition-colors h-32`}
                                            placeholder="Tell us about your project..."
                                            aria-label="Your Message"
                                            required
                                        />
                                        {errors.message && <p className="text-xs text-red-500">{errors.message}</p>}
                                    </div>

                                    {status === 'error' && (
                                        <div className="flex items-center gap-2 text-red-500 text-sm bg-red-500/10 p-4 rounded-xl">
                                            <AlertCircle size={18} />
                                            Something went wrong. Please try again.
                                        </div>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={status === 'submitting'}
                                        className="w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-all flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {status === 'submitting' ? (
                                            <>Submitting... <Loader2 className="animate-spin" size={18} /></>
                                        ) : (
                                            <>Send Message <Send size={18} className="group-hover:translate-x-1 transition-transform" /></>
                                        )}
                                    </button>
                                </form>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

