'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { blogPosts } from '@/lib/blog-data';

export default function BlogPostPage({ params }: { params: { slug: string } }) {
    const router = useRouter();
    const post = blogPosts.find((p) => p.slug === params.slug);

    if (!post) {
        return (
            <div className="min-h-screen bg-background flex flex-col items-center justify-center text-center px-6">
                <h1 className="text-4xl font-display font-bold text-white mb-4">Post Not Found</h1>
                <button
                    onClick={() => router.push('/blog')}
                    className="text-accent font-bold uppercase tracking-widest flex items-center gap-2"
                >
                    <ArrowLeft size={16} /> Back to Blog
                </button>
            </div>
        );
    }

    return (
        <article className="min-h-screen bg-background pt-32 pb-24">
            {/* Article Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'BlogPosting',
                        'headline': post.title,
                        'description': post.excerpt,
                        'image': `https://focusbc.com${post.image}`,
                        'datePublished': post.date,
                        'author': {
                            '@type': 'Organization',
                            'name': 'Focus Business Channel'
                        },
                        'publisher': {
                            '@type': 'Organization',
                            'name': 'Focus Business Channel',
                            'logo': {
                                '@type': 'ImageObject',
                                'url': 'https://focusbc.com/logo.png'
                            }
                        }
                    })
                }}
            />

            <div className="container mx-auto px-6 max-w-4xl">
                <Breadcrumbs
                    items={[
                        { label: 'Blog', href: '/blog' },
                        { label: post.category, href: `/blog?category=${post.category}` },
                        { label: 'Post', href: `/blog/${post.slug}`, current: true }
                    ]}
                />

                <header className="mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-accent text-sm font-bold tracking-widest uppercase mb-4 block">
                            {post.category}
                        </span>
                        <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 leading-tight">
                            {post.title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 font-mono">
                            <div className="flex items-center gap-2">
                                <User size={14} className="text-accent" />
                                {post.author}
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar size={14} className="text-accent" />
                                {post.date}
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock size={14} className="text-accent" />
                                {post.readTime}
                            </div>
                        </div>
                    </motion.div>
                </header>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative aspect-[16/9] rounded-3xl overflow-hidden mb-16 border border-white/5"
                >
                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </motion.div>

                <div className="prose prose-invert prose-brand lg:prose-xl max-w-none">
                    <div
                        className="text-gray-300 leading-relaxed space-y-8"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                </div>

                <footer className="mt-20 pt-12 border-t border-white/5">
                    <div className="flex justify-between items-center">
                        <button
                            onClick={() => router.push('/blog')}
                            className="px-6 py-3 rounded-full border border-white/10 text-gray-400 hover:text-white hover:border-white/20 transition-all flex items-center gap-2 text-sm"
                        >
                            <ArrowLeft size={16} /> All Posts
                        </button>
                        <div className="flex gap-4">
                            {/* Social Share links could go here */}
                        </div>
                    </div>
                </footer>
            </div>
        </article>
    );
}
