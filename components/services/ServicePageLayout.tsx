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
    whyItMatters?: { title: string; points: string[] };
    pricing?: { title: string; packages: { name: string; price: string; features: string[] }[] };
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
    faqs,
    whyItMatters,
    pricing
}: ServicePageLayoutProps) {
    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-accent selection:text-white">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 py-6 px-6 bg-gradient-to-b from-background to-transparent pointer-events-none">
                <div className="container mx-auto flex justify-between items-center pointer-events-auto">
                    <Link href="/#services" className="flex items-center gap-2 text-sm font-medium text-secondary hover:text-heading transition-colors group">
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
                        <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed max-w-3xl">
                            {description}
                        </p>
                    </motion.div>
                </div>
            </header>

            {/* Why It Matters Section */}
            {whyItMatters && (
                <section className="py-20 md:py-24 bg-background border-b border-white/5">
                    <div className="container mx-auto px-6 max-w-5xl">
                        <div className="text-center mb-12">
                            <span className="text-accent text-sm font-bold tracking-widest uppercase mb-4 block">Business Impact</span>
                            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">{whyItMatters.title}</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            {whyItMatters.points.map((point, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex items-start gap-3 p-6 bg-surface/50 border border-white/5 rounded-xl hover:border-accent/30 transition-colors"
                                >
                                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                                    <p className="text-foreground/80 text-sm md:text-base leading-relaxed">{point}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Approach / Use Cases */}
            <section className="py-24 bg-surface/50 border-y border-black/10 dark:border-white/5">
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
                                            <h3 className="text-xl font-bold text-heading mb-2">{useCase.title}</h3>
                                            <p className="text-foreground/80 text-base leading-relaxed">{useCase.description}</p>
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
                                className="p-10 bg-surface border border-black/10 dark:border-white/10 rounded-2xl hover:border-accent/50 transition-all duration-500"
                            >
                                <span className="text-accent text-xs font-bold tracking-widest uppercase mb-4 block">{study.category}</span>
                                <h3 className="text-2xl font-display font-bold mb-4">{study.title}</h3>
                                <p className="text-foreground/80 mb-6">{study.description}</p>
                                <div className="pt-6 border-t border-black/10 dark:border-white/10">
                                    <span className="text-heading font-mono text-xl">{study.result}</span>
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
            <section className="py-24 bg-surface border-y border-black/10 dark:border-white/5">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-4xl font-display font-bold mb-16 text-center">Common Questions</h2>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="p-6 rounded-xl bg-background border border-black/10 dark:border-white/5 hover:border-accent/30 transition-colors">
                                <h3 className="text-lg font-bold mb-2 text-heading">{faq.question}</h3>
                                <p className="text-foreground/80 text-sm leading-relaxed">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing & Packages Section */}
            {pricing && (
                <section className="py-24 bg-background border-y border-white/5">
                    <div className="container mx-auto px-6 max-w-6xl">
                        <div className="text-center mb-16">
                            <span className="text-accent text-sm font-bold tracking-widest uppercase mb-4 block">Investment</span>
                            <h2 className="text-4xl font-display font-bold mb-4">{pricing.title}</h2>
                            <p className="text-foreground/70 text-lg">Transparent pricing to help you plan your growth.</p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {pricing.packages.map((pkg, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.15 }}
                                    viewport={{ once: true }}
                                    className={`p-8 rounded-2xl border transition-all duration-300 ${index === 1
                                            ? 'bg-accent/5 border-accent shadow-lg scale-105'
                                            : 'bg-surface/50 border-white/10 hover:border-accent/30'
                                        }`}
                                >
                                    {index === 1 && (
                                        <span className="inline-block px-3 py-1 bg-accent text-white text-xs font-bold rounded-full mb-4">
                                            Most Popular
                                        </span>
                                    )}
                                    <h3 className="text-2xl font-display font-bold mb-2">{pkg.name}</h3>
                                    <p className="text-3xl font-bold text-accent mb-6">{pkg.price}</p>
                                    <ul className="space-y-3 mb-8">
                                        {pkg.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-foreground/80 text-sm">
                                                <ChevronRight size={16} className="text-accent flex-shrink-0 mt-0.5" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <Link
                                        href="/#contact"
                                        className={`block text-center py-3 rounded-lg font-bold transition-all ${index === 1
                                                ? 'bg-accent text-white hover:bg-accent/90'
                                                : 'bg-white/5 text-heading hover:bg-white/10'
                                            }`}
                                    >
                                        Get Started
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Booking / CTA Section */}
            <section className="py-32 relative overflow-hidden">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-accent/10 blur-[120px] -z-10" />
                <div className="container mx-auto px-6 text-center max-w-4xl">
                    <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">
                        {ctaTitle}
                    </h2>
                    <p className="text-xl text-foreground/80 mb-12">
                        {ctaDescription}
                    </p>
                    <Link
                        href="/#contact"
                        className="inline-flex items-center gap-3 px-10 py-5 bg-heading text-white text-lg font-bold rounded-full hover:bg-heading/90 transition-all duration-300 group"
                    >
                        <Calendar size={20} />
                        Book a Strategy Session
                        <ArrowLeft size={20} className="rotate-180 group-hover:translate-x-2 transition-transform" />
                    </Link>
                </div>
            </section>

            {/* Footer link */}
            <footer className="py-12 border-t border-black/10 dark:border-white/5">
                <div className="container mx-auto px-6 text-center text-secondary text-sm">
                    &copy; {new Date().getFullYear()} Focus Business Channel. All rights reserved.
                </div>
            </footer>
        </div >
    );
}
