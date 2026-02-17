'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageSquare, Send, Mail, Bell } from 'lucide-react';

export default function UserEngagement() {
    const pathname = usePathname();
    const [showExitPopup, setShowExitPopup] = useState(false);
    const [isExitFormOpen, setIsExitFormOpen] = useState(false);
    const [isExitSuccess, setIsExitSuccess] = useState(false);
    const [showNewsletter, setShowNewsletter] = useState(false);
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [hasExited, setHasExited] = useState(false);

    useEffect(() => {
        // Exit-Intent Logic
        const handleMouseLeave = (e: MouseEvent) => {
            // Only show on home page
            if (pathname !== '/') return;

            // Check if already converted (localStorage) or seen in this session (sessionStorage)
            const converted = localStorage.getItem('convertedUser');
            const seenThisSession = sessionStorage.getItem('exitPopupSeen');

            if (e.clientY <= 0 && !hasExited && !converted && !seenThisSession) {
                setShowExitPopup(true);
                setHasExited(true);
                // Mark as seen for this session immediately when it shows
                sessionStorage.setItem('exitPopupSeen', 'true');
            }
        };

        document.addEventListener('mouseleave', handleMouseLeave);

        // Newsletter Logic (15s on blog)
        let newsletterTimer: NodeJS.Timeout;
        if (pathname.startsWith('/blog')) {
            newsletterTimer = setTimeout(() => {
                const seenNewsletter = localStorage.getItem('seenNewsletter');
                if (!seenNewsletter) {
                    setShowNewsletter(true);
                    localStorage.setItem('seenNewsletter', 'true');
                }
            }, 15000);
        }

        return () => {
            document.removeEventListener('mouseleave', handleMouseLeave);
            if (newsletterTimer) clearTimeout(newsletterTimer);
        };
    }, [pathname, hasExited]);

    const handleExitCapture = (e: React.FormEvent) => {
        e.preventDefault();
        setIsExitSuccess(true);

        // Mark as permanently converted so it never shows again
        localStorage.setItem('convertedUser', 'true');

        // Automatic download
        const link = document.createElement('a');
        link.href = '/growth-framework.txt';
        link.download = 'focus-growth-framework.txt';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Close after a delay
        setTimeout(() => {
            setShowExitPopup(false);
        }, 3000);
    };

    return (
        <>
            {/* Exit-Intent Popup */}
            {/* Exit-Intent Popup */}
            <AnimatePresence>
                {showExitPopup && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="bg-surface border border-black/10 dark:border-white/10 p-8 md:p-12 rounded-3xl max-w-lg w-full relative overflow-hidden shadow-2xl"
                        >
                            <div className="absolute top-0 right-0 p-4">
                                <button
                                    onClick={() => {
                                        setShowExitPopup(false);
                                        sessionStorage.setItem('exitPopupSeen', 'true');
                                    }}
                                    className="text-secondary hover:text-heading transition-colors"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            <AnimatePresence mode="wait">
                                {!isExitFormOpen ? (
                                    <motion.div
                                        key="initial"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 20 }}
                                    >
                                        <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center text-accent mb-8">
                                            <Bell size={32} />
                                        </div>
                                        <h2 className="text-3xl font-display font-bold text-heading mb-4">Don't Miss Out!</h2>
                                        <p className="text-foreground/80 mb-8 leading-relaxed">
                                            Get our exclusive <strong>"Growth Framework"</strong> guide for B2B enterprises. Free download before you go.
                                        </p>
                                        <div className="flex flex-col gap-4">
                                            <button
                                                onClick={() => setIsExitFormOpen(true)}
                                                className="w-full py-4 bg-heading text-white font-bold rounded-xl hover:bg-accent hover:text-white transition-all"
                                            >
                                                Download Guide
                                            </button>
                                            <button
                                                onClick={() => {
                                                    setShowExitPopup(false);
                                                    sessionStorage.setItem('exitPopupSeen', 'true');
                                                }}
                                                className="text-secondary text-sm hover:text-heading underline transition-colors"
                                            >
                                                Maybe later
                                            </button>
                                        </div>
                                    </motion.div>
                                ) : !isExitSuccess ? (
                                    <motion.form
                                        key="form"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        onSubmit={handleExitCapture}
                                        className="space-y-6"
                                    >
                                        <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center text-accent mb-6">
                                            <Mail size={32} />
                                        </div>
                                        <h2 className="text-2xl font-display font-bold text-heading">Unlock the Guide</h2>
                                        <p className="text-sm text-secondary">
                                            Tell us where to send your insights and start your download immediately.
                                        </p>
                                        <div className="space-y-4">
                                            <input
                                                type="text"
                                                placeholder="Your Name"
                                                className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 text-foreground focus:border-accent outline-none"
                                                required
                                            />
                                            <input
                                                type="email"
                                                placeholder="Work Email"
                                                className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 text-foreground focus:border-accent outline-none"
                                                required
                                            />
                                        </div>
                                        <button
                                            type="submit"
                                            className="w-full py-4 bg-accent text-white font-bold rounded-xl hover:opacity-90 transition-all"
                                        >
                                            Get My Copy Now
                                        </button>
                                    </motion.form>
                                ) : (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="text-center py-8"
                                    >
                                        <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center text-green-500 mx-auto mb-6">
                                            <Send size={40} />
                                        </div>
                                        <h2 className="text-2xl font-display font-bold text-heading mb-2">Success!</h2>
                                        <p className="text-foreground/80">
                                            Your download has started. Check your downloads folder!
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* Newsletter Popup (Blog Only) */}
            <AnimatePresence>
                {showNewsletter && (
                    <div className="fixed bottom-8 left-8 z-[100] max-w-sm w-full">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            className="bg-surface border border-black/10 dark:border-white/10 p-6 rounded-2xl shadow-2xl relative"
                        >
                            <button onClick={() => setShowNewsletter(false)} className="absolute top-4 right-4 text-secondary hover:text-heading">
                                <X size={18} />
                            </button>
                            <div className="flex items-center gap-3 mb-4">
                                <Mail className="text-accent" size={20} />
                                <h3 className="text-lg font-display font-bold text-heading">Focus Newsletter</h3>
                            </div>
                            <p className="text-sm text-foreground/80 mb-4">
                                Get weekly editorial insights on technology and growth delivered to your inbox.
                            </p>
                            <form className="flex gap-2" onSubmit={(e) => { e.preventDefault(); setShowNewsletter(false); }}>
                                <input
                                    type="email"
                                    placeholder="Enter email"
                                    className="flex-1 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-lg px-3 py-2 text-sm text-foreground focus:border-accent outline-none"
                                    required
                                />
                                <button type="submit" className="bg-heading text-white p-2 rounded-lg hover:bg-accent hover:text-white transition-all">
                                    <Send size={18} />
                                </button>
                            </form>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* Live Chat Bubble */}
            <div className="fixed bottom-8 right-8 z-[100]">
                <AnimatePresence>
                    {isChatOpen && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20, transformOrigin: 'bottom right' }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="bg-surface border border-black/10 dark:border-white/10 w-80 md:w-96 rounded-2xl shadow-2xl mb-4 overflow-hidden"
                        >
                            {/* Chat Header */}
                            <div className="bg-heading text-white p-4 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                    <span className="font-bold text-sm uppercase tracking-wider">Live Support</span>
                                </div>
                                <button onClick={() => setIsChatOpen(false)} className="hover:opacity-60 transition-opacity">
                                    <X size={20} />
                                </button>
                            </div>

                            {/* Chat Content */}
                            <div className="p-6 h-64 overflow-y-auto bg-background/50 space-y-4">
                                <div className="bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 p-3 rounded-tr-xl rounded-b-xl max-w-[80%]">
                                    <p className="text-xs text-foreground/80 leading-relaxed">
                                        Hello! Welcome to Focus. How can we help you scale today?
                                    </p>
                                </div>
                                <div className="bg-accent/20 border border-accent/20 p-3 rounded-tl-xl rounded-b-xl max-w-[80%] ml-auto text-right">
                                    <p className="text-xs text-accent">
                                        Just looking around for now!
                                    </p>
                                </div>
                            </div>

                            {/* Chat Input */}
                            <div className="p-4 border-t border-black/10 dark:border-white/5 bg-surface">
                                <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                                    <input
                                        type="text"
                                        placeholder="Type a message..."
                                        className="flex-1 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-lg px-4 py-2 text-sm text-foreground focus:border-accent outline-none"
                                    />
                                    <button type="submit" className="p-2 text-accent hover:text-heading transition-colors">
                                        <Send size={20} />
                                    </button>
                                </form>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <button
                    onClick={() => setIsChatOpen(!isChatOpen)}
                    className="w-14 h-14 bg-heading text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-accent hover:text-white transition-all hover:scale-110 active:scale-95"
                    aria-label="Toggle live chat"
                >
                    {isChatOpen ? <X size={28} /> : <MessageSquare size={28} />}
                </button>
            </div>
        </>
    );
}

