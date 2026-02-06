import ServicePageLayout from '@/components/services/ServicePageLayout';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Business Management & Structure',
    description: 'Growth is only good if your business can handle it. We ensure your backend—compliance, structure, and management—is as strong as your marketing.',
    alternates: {
        canonical: '/services/business-consulting-and-management'
    }
};

export default function BusinessConsultingPage() {
    return (
        <ServicePageLayout
            title="Business Management & Structure"
            subtitle="Safe & Sustainable Expansion"
            description="We ensure your backend—compliance, structure, and management—is as strong as your marketing. We make your expansion safe and sustainable, providing the foundation for long-term health."
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
