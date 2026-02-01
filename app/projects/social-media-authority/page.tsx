import CaseStudyLayout from '@/components/projects/CaseStudyLayout';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Social Media Authority Case Study',
    description: 'Case study: Building brand authority and community engagement with 257.2K Facebook views and 370.8% growth.',
    alternates: {
        canonical: '/projects/social-media-authority'
    }
};

export default function SocialMediaAuthorityPage() {
    return (
        <CaseStudyLayout
            title="Building Social Media Authority"
            category="Customer Experience & Engagement"
            heroImage="/projects/dynotech-social.jpg"
            challenge="Dynotech needed to establish brand authority and trust on social media platforms. With limited existing engagement and no consistent content strategy, they were missing opportunities to connect with potential customers at critical decision-making moments."
            solution="We implemented a comprehensive social media strategy combining organic content creation, community engagement, and strategic paid amplification. Our approach focused on customer experience, showcasing service quality, and building long-term trust through consistent interaction across Facebook and Instagram."
            results={[
                "Achieved 257.2K Facebook views with 25.9% growth",
                "Reached 71.1K unique users (+11.5% increase)",
                "Generated 50.3K 3-second views (+201.3% increase)",
                "Drove 578 content interactions (+4.7% growth)",
                "Instagram link clicks surged 370.8% to 113 clicks",
                "Organic views: 7,644 (+671.3%), Paid views: 249,565 (+100%)"
            ]}
            metrics={[
                { label: "Facebook Views", value: "257.2K", trend: "+25.9%" },
                { label: "Reach", value: "71.1K", trend: "+11.5%" },
                { label: "3-sec Views", value: "50.3K", trend: "+201.3%" },
                { label: "Link Clicks", value: "113", trend: "+370.8%" }
            ]}
        >
            <Breadcrumbs
                items={[
                    { label: 'Portfolio', href: '/#portfolio' },
                    { label: 'Social Media Authority', href: '/projects/social-media-authority', current: true }
                ]}
            />
        </CaseStudyLayout>
    );
}
