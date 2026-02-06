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
            title="Digital Marketing & Sales Velocity"
            subtitle="Stop Boosting, Start Converting"
            description="Stop 'boosting posts' and start generating leads. We use Google and Meta to find people who are ready to buy right now."
            useCases={[
                "Google Search Ads targeting high-intent buyers.",
                "Facebook/Instagram Lead Generation campaigns.",
                "Social Media Growth strategies.",
                "Direct Email Marketing automation."
            ]}
            caseStudies={[
                {
                    title: "B2B Lead Gen Campaign",
                    description: "Implemented a full-funnel Demand Gen strategy, reducing CPL by 35%.",
                    result: "35% Lower CPL",
                    category: "Efficiency"
                },
                {
                    title: "Retail Social Growth",
                    description: "Scaled a lifestyle brand's social presence with 4.5x ROAS.",
                    result: "4.5x ROAS",
                    category: "Growth"
                }
            ]}
            ctaTitle="Ready for leads that convert?"
            ctaDescription="Stop guessing and start growing with data-driven campaigns."
            howItWorks={[
                { title: "Targeting", description: "We identify your ideal customer’s habits and digital footprint." },
                { title: "Launch", description: "We run high-performing ads across optimal channels." },
                { title: "Optimization", description: "We tweak ads daily to ensure the lowest cost per lead." }
            ]}
            process={[
                { title: "The Strategy Call", description: "A simple 20-minute chat to understand your goals." },
                { title: "The Growth Plan", description: "We send you a clear, jargon-free proposal." },
                { title: "Kick-Off", description: "Our team begins the campaign while you track progress via dashboard." }
            ]}
            faqs={[
                { question: "How much should I spend on ads?", answer: "We recommend a budget based on your industry and goals to ensure ROI." },
                { question: "How long until I see leads?", answer: "PPC can show results instantly, while SEO and social compounding takes time." },
                { question: "Do I own my ad accounts?", answer: "Yes, you retain full ownership and transparency of all accounts." }
            ]}
        >
            <Breadcrumbs
                items={[
                    { label: 'Services', href: '/#services' },
                    { label: 'Digital Marketing', href: '/services/performance-marketing', current: true }
                ]}
            />
        </ServicePageLayout>
    );
}
