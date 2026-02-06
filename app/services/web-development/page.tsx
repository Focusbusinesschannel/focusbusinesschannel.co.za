import ServicePageLayout from '@/components/services/ServicePageLayout';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'AI-Ready Search',
    description: 'We build your digital presence so that when people ask AI (like ChatGPT or Google Gemini) for recommendations, your business is the answer they get.',
    alternates: {
        canonical: '/services/web-development'
    }
};

export default function WebDevelopmentPage() {
    return (
        <ServicePageLayout
            title="AI-Ready Search"
            subtitle="Trusted by Humans, Recommended by AI"
            description="We ensure you are the most trusted source in your industry. When people ask AI models for recommendations, we build the digital presence that makes your business the definitive answer."
            useCases={[
                "Low-code rapid deployment with enterprise-grade stability.",
                "Product-led growth strategies integrated into the core architecture.",
                "Conversion-optimized user journeys designed to sell while you sleep.",
                "Semantic SEO structure to dominate search results from day one."
            ]}
            caseStudies={[
                {
                    title: "SaaS Platform Launch",
                    description: "Built a custom low-code dashboard for a Fintech startup that reduced customer onboarding time by 40%.",
                    result: "40% faster onboarding",
                    category: "Performance"
                },
                {
                    title: "E-commerce Overhaul",
                    description: "Redesigned a legacy retailer's site into a product-led sales engine with seamless checkout.",
                    result: "120% Increase in Mobile Conversion",
                    category: "Conversion"
                }
            ]}
            ctaTitle="Ready to build your 24/7 salesperson?"
            ctaDescription="Let's create a digital experience that doesn't just look good, but performs at the highest level."
        >
            <Breadcrumbs
                items={[
                    { label: 'Services', href: '/#services' },
                    { label: 'Web Development', href: '/services/web-development', current: true }
                ]}
            />
        </ServicePageLayout>
    );
}
