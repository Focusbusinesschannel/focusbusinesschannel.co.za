'use client';

import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
    label: string;
    href: string;
    current?: boolean;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
    return (
        <nav aria-label="Breadcrumb" className="flex mb-8">
            <ol className="flex items-center space-x-2 text-sm text-gray-400">
                <li>
                    <Link
                        href="/"
                        className="hover:text-white transition-colors flex items-center gap-1"
                    >
                        <Home size={14} />
                        <span className="sr-only">Home</span>
                    </Link>
                </li>

                {items.map((item, index) => (
                    <li key={item.href} className="flex items-center space-x-2">
                        <ChevronRight size={14} className="text-gray-600" />
                        <Link
                            href={item.href}
                            className={`hover:text-white transition-colors ${item.current ? 'text-accent font-medium' : ''
                                }`}
                            aria-current={item.current ? 'page' : undefined}
                        >
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ol>

            {/* Breadcrumb Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'BreadcrumbList',
                        'itemListElement': [
                            {
                                '@type': 'ListItem',
                                'position': 1,
                                'name': 'Home',
                                'item': 'https://focusbc.com/'
                            },
                            ...items.map((item, index) => ({
                                '@type': 'ListItem',
                                'position': index + 2,
                                'name': item.label,
                                'item': `https://focusbc.com${item.href}`
                            }))
                        ]
                    })
                }}
            />
        </nav>
    );
}
