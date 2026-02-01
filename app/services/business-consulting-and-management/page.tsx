import ServicePageLayout from '@/components/services/ServicePageLayout';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Consulting & Management',
    description: 'Strategic growth partnership, sales enablement, and financial management for scaling businesses.',
    alternates: {
        canonical: '/services/business-consulting-and-management'
    }
};

export default function BusinessConsultingPage() {
    return (
        <ServicePageLayout
            title="Consulting & Management"
            subtitle="Strategic Growth Partnership"
            description="We leverage accounting, bookkeeping, and compliance experts to keep your business financially healthy and legally on track. We are your partner in sales enablement and strategic scale."
            useCases={[
                "Strategic Growth Partnership providing high-level business advisory.",
                "Comprehensive Sales Enablement to drive revenue and efficiency.",
                "Full-service Bookkeeping and Accounting to maintain financial health.",
                "Legal compliance and risk management to protect your future."
            ]}
            caseStudies={[
                {
                    title: "Logistics Company Scale",
                    description: "Streamlined financial operations and compliance, allowing the client to scale from 10 to 100 units.",
                    result: "10x Operational Growth",
                    category: "Strategy"
                },
                {
                    title: "Prop-Tech Audit & Compliance",
                    description: "Restructured bookkeeping and tax compliance for a complex property portfolio.",
                    result: "Zero-Risk Financial Standing",
                    category: "Compliance"
                }
            ]}
            ctaTitle="Let's build a healthy business together."
            ctaDescription="Get the strategic advisory and financial management you need to scale with confidence."
        >
            <Breadcrumbs
                items={[
                    { label: 'Services', href: '/#services' },
                    { label: 'Consulting & Management', href: '/services/business-consulting-and-management', current: true }
                ]}
            />
        </ServicePageLayout>
    );
}
