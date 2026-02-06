'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import BookingForm from '../ui/BookingForm';

interface CaseStudy {
    title: string;
    description?: string;
    result: string;
    category?: string;
    image?: string;
}

interface ServicePageLayoutProps {
    title: string;
    subtitle: string;
    description: string;
    useCases: { title: string; description: string }[];
    caseStudies: CaseStudy[];
    ctaTitle: string;
    ctaDescription: string;
    children?: React.ReactNode;
    howItWorks: { title: string; description: string }[];
    process: { title: string; description: string }[];
    faqs: { question: string; answer: string }[];
}

export default function ServicePageLayout({
    title,
    subtitle,
    description,
    useCases,
    caseStudies,
    ctaTitle,
    ctaDescription,
    children,
    howItWorks,
    process,
    faqs
}: ServicePageLayoutProps) {
    return (
        <div className="min-h-screen bg-background text-white font-sans selection:bg-accent selection:text-white">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 py-6 px-6 bg-gradient-to-b from-background to-transparent pointer-events-none">
                <div className="container mx-auto flex justify-between items-center pointer-events-auto">
                    <Link href="/#services" className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors group">
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Services
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
                            {subtitle}
                        </span>
                        <h1 className="text-5xl md:text-8xl font-display font-bold mb-8 leading-tight">
                            {title}
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-3xl">
                            {description}
                        </p>
                    </motion.div>
                </div>
            </header>

            {/* Approach / Use Cases */}
            <section className="py-24 bg-surface/50 border-y border-white/5">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-start">
                        <div>
                            <h2 className="text-3xl font-display font-bold mb-8">The 360 Approach</h2>
                            <div className="space-y-8">
                                {useCases.map((useCase, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-start gap-4 group"
                                    >
                                        <div className="w-8 h-8 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0 mt-1 group-hover:bg-accent group-hover:text-white transition-colors">
                                            <ChevronRight size={16} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-2">{useCase.title}</h3>
                                            <p className="text-gray-400 text-base leading-relaxed">{useCase.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                        <div className="h-full">
                            <BookingForm />
                        </div>
                    </div>
                </div>
            </section>

            {/* Case Studies */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-display font-bold mb-16 text-center">Impact & Results</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {caseStudies.map((study, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -10 }}
                                className="p-10 bg-surface border border-white/10 rounded-2xl hover:border-accent/50 transition-all duration-500"
                            >
                                <span className="text-accent text-xs font-bold tracking-widest uppercase mb-4 block">{study.category}</span>
                                <h3 className="text-2xl font-display font-bold mb-4">{study.title}</h3>
                                <p className="text-gray-400 mb-6">{study.description}</p>
                                <div className="pt-6 border-t border-white/10">
                                    <span className="text-white font-mono text-xl">{study.result}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="py-24 bg-surface/50 border-y border-white/5">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-display font-bold mb-16 text-center">How It Works</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {howItWorks.map((step, index) => (
                            <div key={index} className="relative p-8 rounded-2xl bg-background border border-white/10">
                                <span className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white font-bold text-lg">
                                    {index + 1}
                                </span>
                                <h3 className="text-xl font-bold mb-4 mt-2">{step.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Onboarding Process */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="text-4xl font-display font-bold mb-6">Simple Onboarding</h2>
                        <p className="text-gray-400">Your journey to growth in three simple steps.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {process.map((step, index) => (
                            <div key={index} className="text-center group">
                                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl font-display font-bold group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                                    {index + 1}
                                </div>
                                <h3 className="text-lg font-bold mb-3">{step.title}</h3>
                                <p className="text-gray-400 text-sm">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-24 bg-surface border-y border-white/5">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-4xl font-display font-bold mb-16 text-center">Common Questions</h2>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="p-6 rounded-xl bg-background border border-white/5 hover:border-white/10 transition-colors">
                                <h3 className="text-lg font-bold mb-2 text-white">{faq.question}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Booking / CTA Section */}
            <section className="py-32 relative overflow-hidden">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-accent/10 blur-[120px] -z-10" />
                <div className="container mx-auto px-6 text-center max-w-4xl">
                    <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">
                        {ctaTitle}
                    </h2>
                    <p className="text-xl text-gray-400 mb-12">
                        {ctaDescription}
                    </p>
                    <Link
                        href="/#contact"
                        className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black text-lg font-bold rounded-full hover:bg-accent hover:text-white transition-all duration-300 group"
                    >
                        <Calendar size={20} />
                        Book a Strategy Session
                        <ArrowLeft size={20} className="rotate-180 group-hover:translate-x-2 transition-transform" />
                    </Link>
                </div>
            </section>

            {/* Footer link */}
            <footer className="py-12 border-t border-white/5">
                <div className="container mx-auto px-6 text-center text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} Focus Business Channel. All rights reserved.
                </div>
            </footer>
        </div >
    );
}
