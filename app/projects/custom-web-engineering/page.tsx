import CaseStudyLayout from '@/components/projects/CaseStudyLayout';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Custom Web Engineering Case Study',
    description: 'Case study: Engineering high-performance technology platforms with Next.js and conversion-focused architecture.',
    alternates: {
        canonical: '/projects/custom-web-engineering'
    }
};

export default function CustomWebEngineeringPage() {
    return (
        <CaseStudyLayout
            title="Custom Web Engineering"
            category="Technology Platform Development"
            heroImage="/projects/dynotech-web.png"
            challenge="Modern businesses need more than just websites—they need technology platforms that drive measurable results. Many companies struggle with slow, insecure, or poorly optimized websites that fail to convert visitors into customers and don't support their growth ambitions."
            solution="We build custom web platforms using modern technologies like Next.js and React, following a mobile-first, conversion-focused architecture. Every site is engineered for speed, security, and search engine optimization, with clean semantic code that search engines and users both love."
            results={[
                "SEO-optimized architecture for maximum search visibility",
                "Mobile-first design ensuring perfect performance on all devices",
                "Conversion-focused user journeys that turn visitors into leads",
                "Lightning-fast load times with optimized images and code",
                "Secure, scalable infrastructure built for growth",
                "Analytics integration for data-driven optimization"
            ]}
            metrics={[
                { label: "Tech Stack", value: "Next.js", trend: "Modern" },
                { label: "Performance", value: "A+", trend: "Optimized" },
                { label: "Mobile Score", value: "100%", trend: "Perfect" },
                { label: "SEO Ready", value: "Yes", trend: "Built-in" }
            ]}
            testimonial="Our new website isn't just beautiful—it's a 24/7 salesperson that brings in leads while we focus on servicing our customers."
        >
            <Breadcrumbs
                items={[
                    { label: 'Portfolio', href: '/#portfolio' },
                    { label: 'Custom Web Engineering', href: '/projects/custom-web-engineering', current: true }
                ]}
            />
        </CaseStudyLayout>
    );
}
