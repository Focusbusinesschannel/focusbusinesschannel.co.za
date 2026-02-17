'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);

    // Increased height for better scroll feeling
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const frameCount = 45;
    const images = Array.from({ length: frameCount }, (_, i) =>
        `/ezgif-clear/frame-${(i + 1).toString().padStart(3, '0')}.png`
    );

    // Smooth out the scroll progress for the animation
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Map smooth scroll progress to image index
    const frameIndex = useTransform(smoothProgress, [0, 1], [0, frameCount - 1]);

    const [currentFrame, setCurrentFrame] = useState(0);

    useEffect(() => {
        const unsubscribe = frameIndex.on("change", (latest) => {
            const index = Math.round(latest);
            if (index >= 0 && index < frameCount) {
                setCurrentFrame(index);
            }
        });
        return () => unsubscribe();
    }, [frameIndex]);

    // Preload images
    useEffect(() => {
        images.forEach((src) => {
            const img = new Image();
            img.src = src;
        });
    }, [images]);

    return (
        <section ref={containerRef} className="relative min-h-[300vh] bg-background w-full">
            {/* Main Sticky Layout */}
            <div className="sticky top-0 h-screen w-full flex flex-col lg:flex-row overflow-hidden bg-background">

                {/* Left Side: Content - Editorial Grid Style */}
                <div className="relative w-full lg:w-[45%] h-full flex flex-col justify-center px-6 sm:px-10 md:px-20 lg:px-24 xl:px-32 3xl:px-48 z-20">
                    <div className="space-y-6 md:space-y-8 lg:space-y-10 3xl:space-y-14">
                        <div>
                            {/* Main H1 - Clear Value Proposition */}
                            <motion.h1
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="text-4xl sm:text-5xl md:text-7xl lg:text-7xl xl:text-8xl 3xl:text-9xl font-display font-bold leading-tight tracking-tight text-heading m-0"
                            >
                                We Generate Qualified Leads for Growing Businesses
                            </motion.h1>
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.4 }}
                            className="max-w-md 3xl:max-w-xl"
                        >
                            <p className="text-base sm:text-lg md:text-xl 3xl:text-2xl text-foreground leading-relaxed font-sans">
                                Web Design. Google Ads. SEO. All managed in one place to turn clicks into paying customers.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex flex-row items-center gap-3 sm:gap-4 pt-4"
                        >
                            <Link href="#contact" className="px-5 sm:px-6 md:px-10 py-3 sm:py-4 md:py-5 bg-accent text-white font-bold rounded-full hover:bg-accent/90 transition-all hover:scale-105 shadow-2xl text-xs sm:text-sm md:text-lg whitespace-nowrap">
                                Book Free Strategy Call
                            </Link>
                            <Link href="#portfolio" className="px-5 sm:px-6 md:px-10 py-3 sm:py-4 md:py-5 border-2 border-heading text-heading font-bold rounded-full hover:bg-heading hover:text-white transition-all text-xs sm:text-sm md:text-lg whitespace-nowrap">
                                See Our Work
                            </Link>
                        </motion.div>
                    </div>

                    {/* Background decoration to ensure depth */}
                    <div className="absolute top-1/2 left-0 -translate-y-1/2 -z-10 w-full h-1/2 bg-blue-500/5 blur-[150px] pointer-events-none rounded-full" />
                </div>

                {/* Right Side: Visual - Fixed Animation Container */}
                <div className="relative w-full lg:w-[55%] h-[40vh] lg:h-full border-t lg:border-t-0 lg:border-l border-white/5 bg-black/20 flex items-center justify-center p-6 md:p-12 lg:p-0">
                    <div className="relative w-full max-w-4xl aspect-[16/9] lg:aspect-auto lg:h-[85%] lg:w-[90%] 3xl:w-[80%] flex items-center justify-center overflow-hidden">

                        {/* Apple-style frame sequence using single image for better stability */}
                        {images.length > 0 && (
                            <img
                                src={images[currentFrame]}
                                alt="Scroll Animation Frame"
                                className="w-full h-full object-contain select-none scale-110 lg:scale-100"
                                draggable={false}
                            />
                        )}

                        {/* Visual accent */}
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-40 pointer-events-none" />
                    </div>
                </div>

            </div>

            {/* Scroll Metadata / Visual Feedback */}
            <motion.div
                style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]) }}
                className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 lg:left-24 3xl:left-48 z-30 pointer-events-none flex items-center gap-2 sm:gap-4"
            >
                <div className="w-[1px] h-12 sm:h-16 bg-gradient-to-b from-white/40 to-transparent" />
                <span className="text-[8px] sm:text-[10px] uppercase font-bold tracking-[0.3em] text-white/50 vertical-text">Scroll to Experience</span>
            </motion.div>
        </section>
    );
}

// Minimal CSS for vertical text if needed, otherwise standard tailwind
