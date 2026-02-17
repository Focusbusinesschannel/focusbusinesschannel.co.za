'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, TrendingUp, Target, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface CaseStudyLayoutProps {
    title: string;
    category: string;
    heroImage: string;
    challenge: string;
    solution: string;
    results: string[];
    metrics: { label: string; value: string; trend?: string }[];
    testimonial?: string;
    children?: React.ReactNode;
}

export default function CaseStudyLayout({
    title,
    category,
    heroImage,
    challenge,
    solution,
    results,
    metrics,
    testimonial,
    children
}: CaseStudyLayoutProps) {
    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-accent selection:text-white">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 py-6 px-6 bg-gradient-to-b from-background to-transparent pointer-events-none">
                <div className="container mx-auto flex justify-between items-center pointer-events-auto">
                    <Link href="/#portfolio" className="flex items-center gap-2 text-sm font-medium text-secondary hover:text-heading transition-colors group">
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Portfolio
                    </Link>
                </div>
            </nav>

            <div className="pt-24 container mx-auto px-6 relative z-40">
                {children}
            </div>

            {/* Hero Section */}
            <header className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
                <div className="absolute top-0 right-0 -z-10 w-1/2 h-full opacity-20 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-l from-accent/30 to-transparent blur-3xl animate-pulse" />
                </div>

                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl"
                    >
                        <span className="text-accent text-sm font-bold tracking-widest uppercase mb-4 block">
                            Case Study · {category}
                        </span>
                        <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 leading-tight">
                            {title}
                        </h1>
                    </motion.div>
                </div>
            </header>

            {/* Hero Image */}
            <section className="py-12 bg-surface/50">
                <div className="container mx-auto px-6">
                    <div className="aspect-[16/9] bg-surface rounded-2xl overflow-hidden relative border border-black/10 dark:border-white/10">
                        <Image
                            src={heroImage}
                            alt={title}
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Metrics Grid */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {metrics.map((metric, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="glass-panel p-6 rounded-xl"
                            >
                                <TrendingUp className="text-accent mb-4" size={24} />
                                <div className="text-3xl font-bold text-heading mb-2">{metric.value}</div>
                                <div className="text-sm text-secondary">{metric.label}</div>
                                {metric.trend && (
                                    <div className="text-xs text-accent mt-2">{metric.trend}</div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Challenge & Solution */}
            <section className="py-24 bg-surface/50">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16">
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <Target className="text-accent" size={28} />
                                <h2 className="text-3xl font-display font-bold">The Challenge</h2>
                            </div>
                            <p className="text-xl text-foreground/80 leading-relaxed">
                                {challenge}
                            </p>
                        </div>
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <CheckCircle className="text-accent" size={28} />
                                <h2 className="text-3xl font-display font-bold">The Solution</h2>
                            </div>
                            <p className="text-xl text-foreground/80 leading-relaxed">
                                {solution}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Results */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-display font-bold mb-12">Results & Impact</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {results.map((result, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="flex items-start gap-4 glass-panel p-6 rounded-xl"
                            >
                                <CheckCircle className="text-accent shrink-0 mt-1" size={20} />
                                <p className="text-foreground/80 text-lg">{result}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonial */}
            {testimonial && (
                <section className="py-24 bg-surface/50">
                    <div className="container mx-auto px-6 max-w-4xl text-center">
                        <p className="text-2xl md:text-3xl font-display italic text-heading mb-8 leading-relaxed">
                            "{testimonial}"
                        </p>
                        <div className="flex justify-center gap-2">
                            {[...Array(5)].map((_, i) => (
                                <span key={i} className="text-accent text-2xl">★</span>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* CTA */}
            <section className="py-32 relative overflow-hidden">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-accent/10 blur-[120px] -z-10" />
                <div className="container mx-auto px-6 text-center max-w-4xl">
                    <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">
                        Ready for similar results?
                    </h2>
                    <p className="text-xl text-foreground/80 mb-12">
                        Let's discuss how we can help your business grow with the same strategic approach.
                    </p>
                    <Link
                        href="/#contact"
                        className="inline-flex items-center gap-3 px-10 py-5 bg-heading text-white text-lg font-bold rounded-full hover:bg-heading/90 transition-all duration-300"
                    >
                        Start Your Project
                        <ArrowLeft size={20} className="rotate-180" />
                    </Link>
                </div>
            </section>

            {/* Footer link */}
            <footer className="py-12 border-t border-black/10 dark:border-white/5">
                <div className="container mx-auto px-6 text-center text-secondary text-sm">
                    &copy; {new Date().getFullYear()} Focus Business Channel. All rights reserved.
                </div>
            </footer>
        </div>
    );
}
