import ServicePageLayout from '@/components/services/ServicePageLayout';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Digital Marketing',
    description: 'Enhance your online presence with tailored social media marketing and targeted PPC campaigns.',
    alternates: {
        canonical: '/services/performance-marketing'
    }
};

export default function PerformanceMarketingPage() {
    return (
        <ServicePageLayout
            title="Digital Marketing"
            subtitle="Social Media & PPC Advertising"
            description="Boost your business with targeted PPC Advertising campaigns and Social Media Management that drive traffic, grow your audience, and build lasting brand visibility."
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
