import ServicePageLayout from '@/components/services/ServicePageLayout';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Web Development',
    description: 'Bespoke web development solutions focusing on performance, scalability, and user experience.',
    alternates: {
        canonical: '/services/web-development'
    }
};

export default function WebDevelopmentPage() {
    return (
        <ServicePageLayout
            title="Web Development"
            subtitle="Product-Led Excellence"
            description="We build responsive, user-friendly, and SEO-friendly websites that drive measurable results. Using low-code efficiency and high-code precision, we turn your site into a 24/7 salesperson."
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
