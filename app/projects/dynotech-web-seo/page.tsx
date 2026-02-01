import CaseStudyLayout from '@/components/projects/CaseStudyLayout';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Dynotech Web & SEO Success',
    description: 'Case study: How we generated 651 contacts and 730 conversations for Dynotech Mobile Mechanics.',
    alternates: {
        canonical: '/projects/dynotech-web-seo'
    }
};

export default function DynotechWebSEOPage() {
    return (
        <CaseStudyLayout
            title="Dynotech Mobile Mechanics"
            category="B2B Web & SEO Success"
            heroImage="/projects/dynotech-contacts.png"
            challenge="Dynotech Mobile Mechanics, a local automotive service provider, needed to establish an online presence and generate consistent leads. They had no website, minimal search visibility, and relied entirely on word-of-mouth referrals."
            solution="We built an SEO-optimized website integrated with Google Business Profile, implemented local SEO strategies targeting high-intent searches like 'mobile mechanic near me', and created a conversion-focused contact system to capture leads directly from organic and paid traffic."
            results={[
                "Generated 651 total contacts with 32.5% growth over 7 months",
                "Started 730 messaging conversations (+36.4% increase)",
                "Achieved 8.2K profile visits (+1.1% growth)",
                "Produced 599 paid contacts (+59.8% increase) and 52 organic contacts (+51.1%)",
                "Established weekly online lead generation pipeline",
                "Client testimonial: 'Affordable, SEO-friendly, and delivered on time'"
            ]}
            metrics={[
                { label: "Total Contacts", value: "651", trend: "+32.5%" },
                { label: "Conversations", value: "730", trend: "+36.4%" },
                { label: "Profile Visits", value: "8.2K", trend: "+1.1%" },
                { label: "Campaign Period", value: "7 mo", trend: "Sep '24 - Mar '25" }
            ]}
            testimonial="Affordable, SEO-friendly, and delivered on time. We now get weekly leads directly from our website."
        >
            <Breadcrumbs
                items={[
                    { label: 'Portfolio', href: '/#portfolio' },
                    { label: 'Dynotech Web & SEO', href: '/projects/dynotech-web-seo', current: true }
                ]}
            />
        </CaseStudyLayout>
    );
}
