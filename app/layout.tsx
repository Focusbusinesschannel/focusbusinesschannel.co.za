import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import UserEngagement from '@/components/layout/UserEngagement';
import Script from 'next/script';
import { ThemeProvider } from '@/components/providers/ThemeProvider';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });

export const metadata: Metadata = {
    metadataBase: new URL('https://focusbusinesschannel.co.za'),
    title: {
        default: 'Business Growth Services Germiston | Focus Business Channel',
        template: '%s | Focus Business Channel'
    },
    description: 'Professional marketing partner in Germiston. We provide total growth solutions including AI-ready search, business management, and brand strategy to help your business scale.',
    keywords: ['Business growth services Germiston', 'Professional marketing partner', 'How to get more leads for my business', 'AI-Ready Search', 'Business Management South Africa'],
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: 'Business Growth Services Germiston | Focus Business Channel',
        description: 'Professional marketing partner providing total growth solutions to scale your business.',
        url: 'https://focusbusinesschannel.co.za',
        siteName: 'Focus Business Channel',
        type: 'website',
        locale: 'en_US',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Business Growth Services Germiston | Focus Business Channel',
        description: 'Professional marketing partner providing total growth solutions to scale your business.',
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
                            'description': 'Affordable, tailored solutions to grow your business online.',
                            'url': 'https://focusbusinesschannel.co.za',
                            'logo': 'https://focusbusinesschannel.co.za/logo.png',
                            'address': {
                                '@type': 'PostalAddress',
                                'addressLocality': 'Germiston'
                            },
                            'aggregateRating': {
                                '@type': 'AggregateRating',
                                'ratingValue': '4.9',
                                'reviewCount': '47',
                                'bestRating': '5',
                                'worstRating': '1'
                            },
                            'priceRange': '$$'
                        })
                    }}
                />
            </head>
            <body className="min-h-screen flex flex-col pt-0">
                <ThemeProvider>
                    <Header />
                    <main className="flex-grow">
                        {children}
                    </main>
                    <Footer />
                    <UserEngagement />
                </ThemeProvider>
                <Script
                    id="klaviyo-onsite"
                    strategy="afterInteractive"
                    src="https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=Ysdpff"
                />
            </body>
        </html>
    );
}
