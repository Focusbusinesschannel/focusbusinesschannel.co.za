import ServicePageLayout from '@/components/services/ServicePageLayout';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Performance Marketing',
    description: 'Demand generation and ROI-focused marketing strategies using PPC, Search, and Social.',
    alternates: {
        canonical: '/services/performance-marketing'
    }
};

export default function PerformanceMarketingPage() {
    return (
        <ServicePageLayout
            title="Performance Marketing"
            subtitle="Demand Gen & ROI"
            description="We combine targeted PPC advertising and social media growth strategies aimed at maximum ROI. Our approach leverages Demand Gen and CRO to ensure every click counts."
            useCases={[
                "Strategic Demand Gen to fill your pipeline with qualified leads.",
                "Aggressive Conversion Rate Optimization (CRO) to maximize spend.",
                "Data-driven PPC campaigns across Search, Social, and Display.",
                "Real-time ROI tracking and performance attribution models."
            ]}
            caseStudies={[
                {
                    title: "B2B Lead Gen Campaign",
                    description: "Implemented a full-funnel Demand Gen strategy for a tech provider, reducing CPL by 35%.",
                    result: "35% Reduction in Cost-Per-Lead",
                    category: "Efficiency"
                },
                {
                    title: "Retail Social Growth",
                    description: "Scaled a lifestyle brand's social presence and ad spend, maintaining a 4.5x ROAS.",
                    result: "4.5x Return on Ad Spend",
                    category: "Growth"
                }
            ]}
            ctaTitle="Ready for maximum ROI?"
            ctaDescription="Stop guessing and start growing with lead generation strategies that actually convert."
        >
            <Breadcrumbs
                items={[
                    { label: 'Services', href: '/#services' },
                    { label: 'Performance Marketing', href: '/services/performance-marketing', current: true }
                ]}
            />
        </ServicePageLayout>
    );
}
