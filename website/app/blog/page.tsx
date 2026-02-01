'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, ChevronRight } from 'lucide-react';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { blogPosts } from '@/lib/blog-data';

export default function BlogListingPage() {
    return (
        <div className="min-h-screen bg-background pt-32 pb-24">
            <div className="container mx-auto px-6">
                <Breadcrumbs
                    items={[
                        { label: 'Blog', href: '/blog', current: true }
                    ]}
                />

                <header className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-accent text-sm font-bold tracking-widest uppercase mb-4 block">
                            Editorial Insights
                        </span>
                        <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-8">
                            Defying Web <br />
                            <span className="text-gray-500">Conventions.</span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
                            Explore our latest thinking on B2B growth, performance marketing, and the technical excellence required to dominate in 2026.
                        </p>
                    </motion.div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                        <motion.div
                            key={post.slug}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <Link href={`/blog/${post.slug}`} className="block">
                                <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-6 border border-white/5 bg-surface">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 bg-black/60 backdrop-blur-md text-white text-xs font-bold rounded-full border border-white/10 uppercase tracking-wider">
                                            {post.category}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4 font-mono">
                                    <div className="flex items-center gap-1">
                                        <Calendar size={12} />
                                        {post.date}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Clock size={12} />
                                        {post.readTime}
                                    </div>
                                </div>

                                <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-accent transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-2">
                                    {post.excerpt}
                                </p>

                                <div className="flex items-center gap-2 text-accent font-bold text-xs uppercase tracking-widest group-hover:gap-4 transition-all">
                                    Read Article <ChevronRight size={14} />
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
