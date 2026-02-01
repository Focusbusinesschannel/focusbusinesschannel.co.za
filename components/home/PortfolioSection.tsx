'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
    {
        title: 'Dynotech Mobile Mechanics',
        category: 'Web & SEO',
        image: '/projects/dynotech-contacts.png',
        description: 'Lead Growth for a B2B Service Provider. Generated 651 total contacts with 32.5% growth and 730 messaging conversations (+36.4% increase) from September 1, 2024 to March 31, 2025.',
        testimonial: '"Affordable, SEO-friendly, and delivered on time" – resulting in weekly online leads',
        metrics: '651 contacts | 730 conversations | 8.2K visits',
        link: '/projects/dynotech-web-seo'
    },
    {
        title: 'High-Velocity Performance Marketing',
        category: 'Demand Gen',
        image: '/projects/dynotech-campaign.png',
        description: '10-day exposure campaign (Nov 16-26, 2025) fueling rapid pipeline growth. Multi-platform approach with Google Search targeting high-intent queries like "mobile mechanic near me".',
        metrics: 'ZAR 1,307.14 spend | 270 clicks | 6.46% CTR',
        link: '/projects/high-velocity-marketing'
    },
    {
        title: 'Social Media Authority',
        category: 'Customer Experience',
        image: '/projects/dynotech-social.jpg',
        description: 'Building long-term trust through strategic engagement. Facebook campaign achieved 257.2K views (+25.9%), 71.1K reach (+11.5%), and 50.3K 3-second views (+201.3%).',
        metrics: '257.2K views | 113 Instagram link clicks (+370.8%)',
        link: '/projects/social-media-authority'
    },
    {
        title: 'Custom Web Engineering',
        category: 'Technology Platform',
        image: '/projects/dynotech-web.png',
        description: 'Fast, secure, and business-result-driven technology platforms. Built to drive measurable outcomes from launch through sustained growth phases.',
        metrics: 'SEO-optimized | Mobile-first | Conversion-focused',
        link: '/projects/custom-web-engineering'
    }
];

export default function PortfolioSection() {
    return (
        <section id="portfolio" className="py-24 lg:py-32 3xl:py-48 bg-background">
            <div className="container mx-auto px-6 md:px-10 xl:px-20 3xl:max-w-screen-2xl">
                <div className="max-w-3xl 3xl:max-w-5xl mb-16 lg:mb-24">
                    <span className="text-accent text-sm sm:text-base font-bold tracking-widest uppercase mb-4 block">Our Work</span>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl 3xl:text-8xl font-display font-bold text-white mb-6">
                        Case studies of <span className="text-gray-500">gravity defiance.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 3xl:gap-16">
                    {projects.map((project, index) => (
                        <Link
                            key={index}
                            href={project.link}
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group relative overflow-hidden rounded-2xl glass-panel p-4 md:p-6 lg:p-8 hover:border-white/20 transition-all cursor-pointer h-full"
                            >
                                <div className="aspect-[16/9] bg-surface rounded-xl mb-6 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6 z-10">
                                        <span className="text-white font-medium flex items-center gap-2 lg:text-lg">
                                            View Case Study <ExternalLink size={16} className="lg:w-5 lg:h-5" />
                                        </span>
                                    </div>
                                    {/* Real Project Image */}
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <span className="text-accent text-xs sm:text-sm font-bold uppercase tracking-widest mb-2 block">
                                    {project.category}
                                </span>
                                <h3 className="text-2xl sm:text-3xl lg:text-4xl 3xl:text-5xl font-display font-semibold text-white mb-3 group-hover:text-accent transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 leading-relaxed text-sm md:text-base lg:text-lg 3xl:text-xl mb-4">
                                    {project.description}
                                </p>

                                {project.testimonial && (
                                    <p className="text-gray-300 italic text-sm md:text-base lg:text-lg 3xl:text-xl mb-4 border-l-2 border-accent/50 pl-4">
                                        {project.testimonial}
                                    </p>
                                )}

                                <div className="pt-4 border-t border-white/5 mt-auto">
                                    <span className="text-white/70 font-mono text-xs md:text-sm lg:text-base 3xl:text-lg">
                                        {project.metrics}
                                    </span>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section >
    );
}
