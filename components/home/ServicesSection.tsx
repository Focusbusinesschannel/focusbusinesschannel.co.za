'use client';

import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const services = [
    {
        id: '01',
        title: 'AI-Ready Search',
        description: 'We ensure that when people ask AI for recommendations, your business is the answer they get.',
        link: '/services/web-development'
    },
    {
        id: '02',
        title: 'Digital Marketing',
        description: 'Strategic campaigns that turn clicks into customers and protect you from platform changes.',
        link: '/services/performance-marketing'
    },
    {
        id: '03',
        title: 'Graphic Design',
        description: 'Building a reputation engine that makes you the most recognized name in your market.',
        link: '/services/branding-and-design'
    },
    {
        id: '04',
        title: 'Business Management & Structure',
        description: 'Strengthening your backend so that your business expansion is safe, sustainable, and compliant.',
        link: '/services/business-consulting-and-management'
    }
];

export default function ServicesSection() {
    return (
        <section id="services" className="py-24 lg:py-32 3xl:py-48 bg-surface">
            <div className="container mx-auto px-6 md:px-10 xl:px-20 3xl:max-w-screen-2xl">
                <div className="mb-16 lg:mb-24 border-b border-white/10 pb-8 flex flex-col md:flex-row justify-between items-end gap-6">
                    <div>
                        <span className="text-accent text-sm sm:text-base font-bold tracking-widest uppercase mb-2 block">Our Expertise</span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl 3xl:text-7xl font-display font-bold text-white">The 360 Approach</h2>
                    </div>
                    <p className="max-w-md text-gray-400 text-base md:text-lg lg:text-xl">
                        With over 6 specialized services, our approach ensures success in every business element.
                    </p>
                </div>

                <div className="space-y-4 lg:space-y-6">
                    {services.map((service) => (
                        <Link
                            href={service.link}
                            key={service.id}
                            className="group block relative border-b border-white/10 py-12 lg:py-16 3xl:py-20 hover:bg-white/5 transition-colors duration-500"
                        >
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 lg:gap-10 px-4">
                                <span className="text-gray-500 font-mono text-lg lg:text-xl 3xl:text-2xl">{service.id}</span>
                                <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 3xl:text-8xl font-display font-medium text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                                    {service.title}
                                </h3>
                                <div className="md:ml-auto max-w-xs lg:max-w-sm 3xl:max-w-md">
                                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors text-base md:text-lg 3xl:text-xl">
                                        {service.description}
                                    </p>
                                </div>
                                <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                                    <ArrowUpRight size={20} className="lg:w-6 lg:h-6" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
