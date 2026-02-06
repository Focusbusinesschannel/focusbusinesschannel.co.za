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
            title="Web Design & AI Search"
            subtitle="Trusted by Humans, Recommended by AI"
            description="We don't just build websites; we build digital storefronts that rank on Google and answer AI queries. We ensure you are the most trusted source in your industry."
            useCases={[
                {
                    title: "Professional Website Design",
                    description: "We don't use templates. We build custom-coded digital storefronts that capture your brand essence and convert visitors into loyal customers with pixel-perfect precision."
                },
                {
                    title: "Mobile Optimization",
                    description: "Responsive architecture ensuring a flawless experience on every device. Whether your customer is on an iPhone or a 4K desktop, your site will look and perform beautifully."
                },
                {
                    title: "Speed Tuning",
                    description: "Sub-second load times that keep impatience at bay. We optimize every asset and line of code to improve your Google Core Web Vitals score."
                },
                {
                    title: "AI-Ready Search (AEO)",
                    description: "Future-proof your visibility. We use structured data and semantic HTML that helps AI models like ChatGPT and Gemini understand and recommend your business first."
                }
            ]}
            caseStudies={[
                {
                    title: "SaaS Platform Launch",
                    description: "Built a custom dashboard that reduced customer onboarding time by 40%.",
                    result: "40% Faster Onboarding",
                    category: "Performance"
                },
                {
                    title: "E-commerce Overhaul",
                    description: "Redesigned a legacy site into a sales engine with seamless checkout.",
                    result: "120% Mobile Conversion",
                    category: "Conversion"
                }
            ]}
            ctaTitle="Ready to future-proof your business?"
            ctaDescription="Let's build a digital experience that sells while you sleep."
            howItWorks={[
                { title: "Discovery", description: "We analyze your industry’s top search terms and competitor landscape." },
                { title: "Architecture", description: "We build a fast, secure, and semantic site foundation." },
                { title: "AI Indexing", description: "We 'teach' AI models (like ChatGPT) about your business so you show up as top recommendation." }
            ]}
            process={[
                { title: "The Strategy Call", description: "A simple 20-minute chat to understand your goals." },
                { title: "The Growth Plan", description: "We send you a clear, jargon-free proposal." },
                { title: "Kick-Off", description: "Our team begins the build while you track progress via dashboard." }
            ]}
            faqs={[
                { question: "Will my site work on phones?", answer: "Absolutely. We design mobile-first to ensure a perfect experience on any device." },
                { question: "How do I get found on Google?", answer: "We implement advanced SEO and AI-ready structure to maximize your visibility." },
                { question: "What is AI Search?", answer: "It ensures your business is recommended when users ask tools like ChatGPT for suggestions." }
            ]}
        >
            <Breadcrumbs
                items={[
                    { label: 'Services', href: '/#services' },
                    { label: 'Web Design', href: '/services/web-development', current: true }
                ]}
            />
        </ServicePageLayout>
    );
}
