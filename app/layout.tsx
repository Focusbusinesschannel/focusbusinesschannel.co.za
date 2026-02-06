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
        default: 'Lead Generation Strategies | Focus Business Channel',
        template: '%s | Focus Business Channel'
    },
    description: 'Lead generation strategies by Focus business channel – Affordable, tailored solutions to grow your business online.',
    keywords: ['Lead Generation', 'Website Design', 'Digital Marketing', 'Accounting Services', 'Graphic Design', 'SEO', 'Germiston', 'South Africa'],
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: 'Lead Generation Strategies | Focus Business Channel',
        description: 'Affordable, tailored solutions to grow your business online.',
        url: 'https://focusbusinesschannel.co.za',
        siteName: 'Focus Business Channel',
        type: 'website',
        locale: 'en_US',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Lead Generation Strategies | Focus Business Channel',
        description: 'Affordable, tailored solutions to grow your business online.',
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
