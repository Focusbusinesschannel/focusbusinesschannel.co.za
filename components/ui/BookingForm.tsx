'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

export default function BookingForm() {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: 'Book a Strategy Call',
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

        try {
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to send message');
            }

            // Klaviyo Identification
            try {
                if (typeof window !== 'undefined' && (window as any).klaviyo) {
                    (window as any).klaviyo.identify({
                        '$email': formData.email,
                        '$first_name': formData.name.split(' ')[0],
                        '$last_name': formData.name.split(' ').slice(1).join(' '),
                        'Subject': formData.subject
                    });
                }
            } catch (klaviyoError) {
                console.error('Klaviyo identification failed:', klaviyoError);
            }

            setStatus('success');
            setFormData({ name: '', email: '', subject: 'Book a Strategy Call', message: '' });
        } catch (error) {
            console.error('Submission error:', error);
            setStatus('error');
        }
    };

    return (
        <div className="bg-surface/50 border border-foreground/10 p-8 rounded-3xl h-full flex flex-col justify-center">
            <h3 className="text-2xl font-display font-bold mb-6 text-foreground">Book a Strategy Call</h3>
            <p className="text-foreground/70 mb-8 text-sm">
                Fill out the form below to schedule your free 20-minute growth consultation.
            </p>

            <AnimatePresence mode="wait">
                {status === 'success' ? (
                    <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="flex flex-col items-center justify-center text-center py-6"
                    >
                        <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center text-accent mb-4">
                            <CheckCircle size={32} />
                        </div>
                        <h3 className="text-xl font-display font-bold text-foreground mb-2">Message Sent!</h3>
                        <p className="text-foreground/70 mb-6 text-sm">
                            We'll get back to you within 24 hours.
                        </p>
                        <button
                            onClick={() => setStatus('idle')}
                            className="px-6 py-2 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all text-sm"
                        >
                            Send Another
                        </button>
                    </motion.div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <input
                                type="text"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className={`w-full bg-background/50 border ${errors.name ? 'border-red-500' : 'border-foreground/10'} rounded-xl px-4 py-3 text-foreground focus:border-accent outline-none transition-colors text-sm`}
                                placeholder="Full Name"
                                required
                            />
                            {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                        </div>
                        <div>
                            <input
                                type="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className={`w-full bg-background/50 border ${errors.email ? 'border-red-500' : 'border-foreground/10'} rounded-xl px-4 py-3 text-foreground focus:border-accent outline-none transition-colors text-sm`}
                                placeholder="Email Address"
                                required
                            />
                            {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                        </div>

                        <div>
                            <textarea
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                className={`w-full bg-background/50 border ${errors.message ? 'border-red-500' : 'border-foreground/10'} rounded-xl px-4 py-3 text-foreground focus:border-accent outline-none transition-colors h-24 text-sm`}
                                placeholder="How can we help?"
                                required
                            />
                            {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
                        </div>

                        {status === 'error' && (
                            <div className="flex items-center gap-2 text-red-500 text-xs bg-red-500/10 p-3 rounded-lg">
                                <AlertCircle size={14} />
                                Something went wrong.
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={status === 'submitting'}
                            className="w-full py-3 bg-foreground text-background font-bold rounded-xl hover:bg-accent hover:text-white transition-all flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                        >
                            {status === 'submitting' ? (
                                <>Submitting... <Loader2 className="animate-spin" size={16} /></>
                            ) : (
                                <>Book Now <Send size={16} className="group-hover:translate-x-1 transition-transform" /></>
                            )}
                        </button>
                    </form>
                )}
            </AnimatePresence>
        </div>
    );
}
