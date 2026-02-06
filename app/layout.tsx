import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import UserEngagement from '@/components/layout/UserEngagement';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });

export const metadata: Metadata = {
    metadataBase: new URL('https://focusbusinesschannel.co.za'),
    title: {
        default: 'Focus Business Channel | Growth Partners',
        template: '%s | Focus Business Channel'
    },
    description: 'Business growth partner providing web development, performance marketing, branding, and business consulting services. We help B2B companies scale with SEO-friendly websites, demand generation campaigns, and strategic consulting.',
    keywords: ['web development', 'performance marketing', 'business consulting', 'branding', 'SEO', 'demand generation', 'B2B services'],
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: 'Focus Business Channel | Growth Partners',
        description: 'Helping businesses defy gravity with a 360 approach to growth.',
        url: 'https://focusbusinesschannel.co.za',
        siteName: 'Focus Business Channel',
        type: 'website',
        locale: 'en_US',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Focus Business Channel | Growth Partners',
        description: 'Helping businesses defy gravity with a 360 approach to growth.',
    }
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'ProfessionalService',
                            'name': 'Focus Business Channel',
                            'description': 'Business growth partner providing web development, performance marketing, branding, and business consulting services.',
                            'url': 'https://focusbusinesschannel.co.za',
                            'logo': 'https://focusbusinesschannel.co.za/logo.png',
                            'address': {
                                '@type': 'PostalAddress',
                                'addressLocality': 'Johannesburg'
                            },
                            'aggregateRating': {
                                '@type': 'AggregateRating',
                                'ratingValue': '5',
                                'reviewCount': '1'
                            },
                            'priceRange': '$$'
                        })
                    }}
                />
            </head>
            <body className="min-h-screen flex flex-col pt-0">
                <Header />
                <main className="flex-grow">
                    {children}
                </main>
                <Footer />
                <UserEngagement />
                <Script
                    id="klaviyo-onsite"
                    strategy="afterInteractive"
                    src="https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=Ysdpff"
                />
            </body>
        </html>
    );
}
