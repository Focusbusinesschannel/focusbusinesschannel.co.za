'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Calendar, Clock } from 'lucide-react';
import { blogPosts } from '@/lib/blog-data';

export default function BlogSection() {
    // Take latest 3 posts
    const latestPosts = blogPosts.slice(0, 3);

    return (
        <section className="py-32 bg-background relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-2xl">
                        <span className="text-accent text-sm font-bold tracking-widest uppercase mb-4 block">Editorial Insights</span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight">
                            Defying conventions, <br />
                            <span className="text-gray-500">one insight at a time.</span>
                        </h2>
                    </div>
                    <Link
                        href="/blog"
                        className="group flex items-center gap-2 text-white font-bold uppercase tracking-widest text-sm hover:text-accent transition-colors"
                    >
                        Explore All Insights <ChevronRight size={18} className="group-hover:translate-x-2 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {latestPosts.map((post, index) => (
                        <motion.div
                            key={post.slug}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <Link href={`/blog/${post.slug}`} className="block">
                                <div className="aspect-[16/9] relative rounded-2xl overflow-hidden mb-6 bg-surface border border-white/5">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold rounded-full border border-white/10 uppercase tracking-wider">
                                            {post.category}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 text-[10px] text-gray-500 mb-3 font-mono">
                                    <span className="flex items-center gap-1">
                                        <Calendar size={10} />
                                        {post.date}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Clock size={10} />
                                        {post.readTime}
                                    </span>
                                </div>

                                <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-accent transition-colors line-clamp-2">
                                    {post.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                                    {post.excerpt}
                                </p>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
