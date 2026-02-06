'use client';

import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const services = [
    {
        id: '01',
        title: 'Web Design',
        link: '/services/web-development'
    },
    {
        id: '02',
        title: 'Digital Marketing',
        link: '/services/performance-marketing'
    },
    {
        id: '03',
        title: 'Branding',
        link: '/services/branding-and-design'
    },
    {
        id: '04',
        title: 'Business Management',
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {services.map((service) => (
                        <Link
                            key={service.id}
                            href={service.link}
                            className="group flex items-center justify-between p-8 bg-surface/50 hover:bg-surface border border-white/5 hover:border-accent/50 rounded-2xl transition-all duration-500"
                        >
                            <div className="flex items-center gap-6">
                                <span className="text-accent font-mono text-sm">{service.id}</span>
                                <h3 className="text-2xl md:text-3xl font-display font-medium text-white group-hover:text-accent transition-colors">
                                    {service.title}
                                </h3>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-500">
                                <ArrowUpRight size={20} />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
