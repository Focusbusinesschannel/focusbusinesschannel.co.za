import ServicePageLayout from '@/components/services/ServicePageLayout';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Graphic Design',
    description: 'Elevate your brand visual identity with creative Graphic Design services.',
    alternates: {
        canonical: '/services/branding-and-design'
    }
};

export default function BrandingAndDesignPage() {
    return (
        <ServicePageLayout
            title="Branding & Visual Identity"
            subtitle="Look Like The Leader You Are"
            description="Look like the market leader you are. We create professional visuals that build instant trust with your customers."
            useCases={[
                {
                    title: "Custom Logo Design",
                    description: "Available for trademarking, our logos are unique marks that serve as the cornerstone of your brand identity."
                },
                {
                    title: "Corporate Identity",
                    description: "Consistency builds trust. We design your letterheads, email signatures, and presentation templates to ensure a cohesive professional look."
                },
                {
                    title: "Marketing Materials",
                    description: "From business cards to brochures, we design physical assets that make a lasting impression at every networking opportunity."
                },
                {
                    title: "Social Identity Design",
                    description: "Stand out in the feed. We create a visual language for your social channels that makes your brand instantly recognizable."
                }
            ]}
            caseStudies={[
                {
                    title: "Premium Real Estate Brand",
                    description: "Developed a luxury visual identity that increased qualified inbound inquiries by 75%.",
                    result: "75% More Leads",
                    category: "Identity"
                },
                {
                    title: "Tech Unicorn Rebrand",
                    description: "Redefined the visual narrative for a scaling startup.",
                    result: "Global Recognition",
                    category: "Storytelling"
                }
            ]}
            ctaTitle="Ready to stand out?"
            ctaDescription="Elevate your brand with art direction that captures the essence of your business."
            howItWorks={[
                { title: "Briefing", description: "You tell us your vision and company values." },
                { title: "Concept", description: "We provide multiple professional design directions." },
                { title: "Delivery", description: "You receive a complete 'Brand Kit' ready for print and digital." }
            ]}
            process={[
                { title: "The Strategy Call", description: "A simple 20-minute chat to understand your goals." },
                { title: "The Growth Plan", description: "We send you a clear, jargon-free proposal." },
                { title: "Kick-Off", description: "Our team begins the design phase while you track progress." }
            ]}
            faqs={[
                { question: "Can you refresh my old logo?", answer: "Yes, we can modernize existing brands while keeping their heritage." },
                { question: "Do I get the high-resolution files?", answer: "You receive all source files (vector, print, web) upon completion." },
                { question: "How long does design take?", answer: "Depending on scope, typically 1-2 weeks for initial concepts." }
            ]}
        >
            <Breadcrumbs
                items={[
                    { label: 'Services', href: '/#services' },
                    { label: 'Branding', href: '/services/branding-and-design', current: true }
                ]}
            />
        </ServicePageLayout>
    );
}
