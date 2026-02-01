import CaseStudyLayout from '@/components/projects/CaseStudyLayout';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'High-Velocity Performance Marketing',
    description: 'Case study: 270 clicks and 6.46% CTR achieved in a 10-day high-velocity Google Search campaign.',
    alternates: {
        canonical: '/projects/high-velocity-marketing'
    }
};

export default function HighVelocityMarketingPage() {
    return (
        <CaseStudyLayout
            title="High-Velocity Performance Marketing"
            category="Demand Generation Campaign"
            heroImage="/projects/dynotech-campaign.png"
            challenge="During a critical 10-day window in late November 2025, Dynotech needed rapid exposure to fuel their lead pipeline before the holiday slowdown. The challenge was to achieve maximum visibility with a precise budget while competing for high-cost automotive search terms."
            solution="We launched a high-velocity Google Search campaign targeting high-intent queries like 'car diagnostic near me', 'mobile mechanic near me', and 'Range Rover mechanic near me'. Using aggressive bid optimization and real-time performance monitoring, we maximized click volume while maintaining a healthy CTR."
            results={[
                "Invested ZAR 1,307.14 to generate 270 clicks in 10 days",
                "Achieved 6.46% CTR on competitive automotive search terms",
                "Campaign duration: November 16-26, 2025",
                "Multi-platform approach with Google Search and display",
                "Real-time optimization for maximum ROI",
                "Successfully fueled pipeline before holiday season"
            ]}
            metrics={[
                { label: "Campaign Spend", value: "ZAR 1,307", trend: "10 days" },
                { label: "Total Clicks", value: "270", trend: "High intent" },
                { label: "Click-Through Rate", value: "6.46%", trend: "Above avg" },
                { label: "Cost Per Click", value: "ZAR 4.84", trend: "Optimized" }
            ]}
        >
            <Breadcrumbs
                items={[
                    { label: 'Portfolio', href: '/#portfolio' },
                    { label: 'High-Velocity Marketing', href: '/projects/high-velocity-marketing', current: true }
                ]}
            />
        </CaseStudyLayout>
    );
}
