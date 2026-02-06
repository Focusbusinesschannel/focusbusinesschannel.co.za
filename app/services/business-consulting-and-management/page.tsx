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
            title="Business Management & Growth Infrastructure"
            subtitle="Foundation of Scaling"
            description="Clean books and legal compliance are the foundation of scaling. We handle the paperwork so you can handle the growth."
            useCases={[
                "Business Registration and CIPC compliance.",
                "SARS/Tax Compliance management.",
                "Monthly Accounting and bookkeeping.",
                "Admin Support for seamless operations."
            ]}
            caseStudies={[
                {
                    title: "Logistics Company Scale",
                    description: "Streamlined financial operations, allowing scale from 10 to 100 units.",
                    result: "10x Growth",
                    category: "Strategy"
                },
                {
                    title: "Prop-Tech Compliance",
                    description: "Restructured tax compliance for a complex property portfolio.",
                    result: "Zero-Risk",
                    category: "Compliance"
                }
            ]}
            ctaTitle="Let's build a healthy business."
            ctaDescription="Get the strategic advisory and financial management you need to scale with confidence."
            howItWorks={[
                { title: "Audit", description: "We review your current compliance status and financial health." },
                { title: "Setup", description: "We organize your accounting, systems, and registration." },
                { title: "Maintenance", description: "We provide monthly oversight to ensure compliance as you grow." }
            ]}
            process={[
                { title: "The Strategy Call", description: "A simple 20-minute chat to understand your needs." },
                { title: "The Growth Plan", description: "We send you a clear, jargon-free proposal." },
                { title: "Kick-Off", description: "We take over the admin/compliance while you focus on sales." }
            ]}
            faqs={[
                { question: "Can you help with tax returns?", answer: "Yes, we handle all personal and business tax submissions." },
                { question: "Do you handle CIPC registrations?", answer: "We provide full company registration and maintenance services." },
                { question: "Is my data secure?", answer: "We use enterprise-grade security for all financial and legal data." }
            ]}
        >
            <Breadcrumbs
                items={[
                    { label: 'Services', href: '/#services' },
                    { label: 'Business Management', href: '/services/business-consulting-and-management', current: true }
                ]}
            />
        </ServicePageLayout>
    );
}
