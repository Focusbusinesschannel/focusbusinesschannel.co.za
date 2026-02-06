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
            title="Graphic Design"
            subtitle="Creative Visual Identity"
            description="Discover our creative Graphic Design services tailored to elevate your brand's visual identity. From logos to marketing materials, we bring your vision to life."
            useCases={[
                "Impactful Storytelling that resonates with your core audience.",
                "Strategic Art Direction for a consistent and premium visual language.",
                "Complete Brand Identity systems (Logos, Typography, Color Palettes).",
                "High-end marketing collateral that commands attention."
            ]}
            caseStudies={[
                {
                    title: "Premium Real Estate Brand",
                    description: "Developed a luxury visual identity that increased qualified inbound inquiries by 75%.",
                    result: "75% Increase in High-Value Leads",
                    category: "Identity"
                },
                {
                    title: "Tech Unicorn Rebrand",
                    description: "Redefined the visual narrative for a scaling startup, aligning their image with market leadership.",
                    result: "Global Recognition & Trust",
                    category: "Storytelling"
                }
            ]}
            ctaTitle="Tell your story with impact."
            ctaDescription="Elevate your brand with art direction that captures the essence of your business."
        >
            <Breadcrumbs
                items={[
                    { label: 'Services', href: '/#services' },
                    { label: 'Branding & Design', href: '/services/branding-and-design', current: true }
                ]}
            />
        </ServicePageLayout>
    );
}
