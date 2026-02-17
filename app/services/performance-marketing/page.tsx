import ServicePageLayout from '@/components/services/ServicePageLayout';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Digital Marketing Agency South Africa | Google Ads & Social Media Marketing',
    description: 'Performance-driven digital marketing services in South Africa. Google Ads management, Facebook & Instagram advertising, and email automation. Stop boosting posts, start generating qualified leads.',
    alternates: {
        canonical: '/services/performance-marketing'
    }
};

export default function PerformanceMarketingPage() {
    return (
        <ServicePageLayout
            title="Digital Marketing & Sales Velocity"
            subtitle="Stop Boosting, Start Converting"
            description="Stop 'boosting posts' and start generating leads. We use Google Ads and Meta to find people who are ready to buy right now."

            whyItMatters={{
                title: "Why Paid Advertising is the Fastest Path to Qualified Leads",
                points: [
                    "Organic SEO takes 6-12 months to show results; Google Ads delivers qualified leads in as little as 7 days",
                    "B2B businesses see an average 200% ROI on well-managed PPC campaigns (Google Economic Impact Report)",
                    "Algorithm-proof marketing strategy: You own the traffic, not the platform - no more worrying about reach decline",
                    "Precision targeting: Reach decision-makers by job title, company size, annual revenue, and geographic location"
                ]
            }}

            useCases={[
                {
                    title: "Google Search Ads (PPC)",
                    description: "Capture high-intent buyers exactly when they're searching for what you offer. We optimize for high ROAS (Return on Ad Spend) and eliminate wasted budget on irrelevant clicks. Every rand spent is tracked to revenue generated."
                },
                {
                    title: "Facebook & Instagram Ads",
                    description: "Stop relying on organic reach (which averages 2-5% of your followers). We use Meta's advanced targeting to put your brand in front of your ideal customer demographics, generating leads on autopilot while you focus on closing deals."
                },
                {
                    title: "LinkedIn Ads for B2B",
                    description: "The only platform where you can target by job title, seniority, and company. Perfect for B2B service businesses looking to reach CFOs, Operations Managers, and other decision-makers with high-value offers."
                },
                {
                    title: "Social Media Content Strategy",
                    description: "Build a loyal community that trusts your expertise. We create engaging content calendars, handle posting schedules, and craft stories that turn passive followers into active brand advocates and repeat customers."
                },
                {
                    title: "Email Marketing Automation",
                    description: "Nurture your leads while you sleep. We build automated email flows that welcome new subscribers, educate prospects, recover abandoned carts, and re-engage cold leads - turning your email list into a revenue-generating asset."
                },
                {
                    title: "Retargeting & Remarketing",
                    description: "97% of first-time visitors leave without converting. We use pixel-based retargeting to show ads to people who've already visited your site, dramatically increasing conversion rates and ROI."
                }
            ]}

            caseStudies={[
                {
                    title: "Dynotech Mobile Mechanics - B2B Google Ads",
                    description: "Implemented targeted Google Search campaigns for commercial vehicle repair services. Focused on high-intent keywords like 'emergency fleet mechanic' and 'mobile truck repair Johannesburg'.",
                    result: "651 Qualified Leads in 6 Months",
                    category: "B2B Lead Generation"
                },
                {
                    title: "E-Commerce Retail - Meta Ads Scaling",
                    description: "Scaled a lifestyle brand's Facebook and Instagram presence with dynamic product ads and lookalike audience targeting. Achieved 4.5x return on ad spend within 90 days.",
                    result: "4.5x ROAS",
                    category: "E-Commerce Growth"
                }
            ]}

            howItWorks={[
                { title: "Audience Research & Targeting", description: "We identify your ideal customer's demographics, interests, search behaviors, and digital footprint using advanced analytics tools." },
                { title: "Campaign Structure & Ad Creation", description: "We write compelling ad copy, design eye-catching visuals, and build campaigns optimized for conversions (not just clicks)." },
                { title: "Launch & Daily Optimization", description: "We monitor campaigns daily, adjusting bids, testing new ad variations, and pausing underperformers to maximize ROAS." }
            ]}

            process={[
                { title: "Strategy Call (20 minutes)", description: "We discuss your business model, target market, and revenue goals." },
                { title: "Competitor Ad Analysis", description: "We spy on what competitors are advertising and identify gaps we can exploit." },
                { title: "Campaign Proposal & Budget Recommendation", description: "We send a clear proposal outlining ad spend, management fees, and projected ROI." },
                { title: "Account Setup (Pixels, Tracking, Conversion Events)", description: "We install Facebook Pixel, Google Tag Manager, and configure conversion tracking." },
                { title: "Ad Creative Development", description: "Our team writes persuasive ad copy and designs static/video creatives." },
                { title: "Campaign Launch & Testing Phase (Week 1-2)", description: "We test multiple ad variations to identify winners." },
                { title: "Scaling & Optimization (Week 3+)", description: "We increase budget on high-performers and refine targeting." },
                { title: "Monthly Reporting & Strategy Calls", description: "Detailed dashboards showing leads, cost-per-lead, and revenue attribution." }
            ]}

            pricing={{
                title: "Digital Marketing Management Fees",
                packages: [
                    {
                        name: "Starter",
                        price: "R5,000/month",
                        features: [
                            "Ad spend: R10,000 - R20,000/month",
                            "Google Ads OR Meta Ads (one platform)",
                            "Monthly performance report",
                            "Basic conversion tracking setup"
                        ]
                    },
                    {
                        name: "Growth",
                        price: "R10,000/month",
                        features: [
                            "Ad spend: R20,000 - R50,000/month",
                            "Multi-platform campaigns (Google + Meta)",
                            "A/B testing & creative optimization",
                            "Weekly performance calls",
                            "CRM integration & lead tracking"
                        ]
                    },
                    {
                        name: "Scale",
                        price: "Custom Quote",
                        features: [
                            "Ad spend: R50,000+/month",
                            "Full-funnel strategy (awareness to conversion)",
                            "Dedicated account manager",
                            "Advanced attribution modeling",
                            "Video ad production included"
                        ]
                    }
                ]
            }}

            faqs={[
                { question: "How much should I spend on ads per month?", answer: "We recommend a minimum of R10,000/month in ad spend for meaningful results. This allows enough data to optimize campaigns. Most of our clients see the best ROI at R20,000 - R50,000/month." },
                { question: "How long until I see leads from PPC campaigns?", answer: "Google Ads and Facebook Ads can generate leads within 7-14 days of launch. However, optimal performance typically kicks in after 30-60 days of testing and optimization." },
                { question: "Do I own my ad accounts and data?", answer: "Yes, 100%. We set up campaigns under your business name and you retain full ownership. If you ever leave, you keep all the data, audiences, and assets we've built." },
                { question: "What's the difference between Google Ads and Facebook Ads?", answer: "Google Ads targets people actively searching (high intent), while Facebook Ads targets people based on interests and demographics (awareness). We often recommend both for a full-funnel approach." },
                { question: "Can you guarantee a specific number of leads?", answer: "No ethical agency can guarantee lead volume due to market variables. However, we do provide ROI projections based on industry benchmarks and commit to hitting target cost-per-lead goals." },
                { question: "Do you require long-term contracts?", answer: "No. We work month-to-month. Most clients stay because they see results, not because they're locked into a contract. We do recommend a minimum 90-day commitment for optimal testing." },
                { question: "What if my industry is highly competitive?", answer: "Competitive industries (law, finance, real estate) require higher budgets but also have higher customer lifetime values. We focus on quality over quantity and optimize for conversion rate, not just clicks." },
                { question: "How do I track if ads are actually generating revenue?", answer: "We set up conversion tracking that shows the exact path from ad click to sale. You'll see which campaigns, ads, and keywords are driving revenue, not just traffic." }
            ]}

            ctaTitle="Ready for leads that actually convert?"
            ctaDescription="Stop guessing and start growing with data-driven PPC campaigns that deliver measurable ROI."
        >
            <Breadcrumbs
                items={[
                    { label: 'Services', href: '/#services' },
                    { label: 'Digital Marketing', href: '/services/performance-marketing', current: true }
                ]}
            />

            {/* FAQPage Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "How much should I spend on ads per month?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "We recommend a minimum of R10,000/month in ad spend for meaningful results. This allows enough data to optimize campaigns. Most of our clients see the best ROI at R20,000 - R50,000/month."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "How long until I see leads from PPC campaigns?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Google Ads and Facebook Ads can generate leads within 7-14 days of launch. However, optimal performance typically kicks in after 30-60 days of testing and optimization."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Do I own my ad accounts and data?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes, 100%. We set up campaigns under your business name and you retain full ownership. If you ever leave, you keep all the data, audiences, and assets we've built."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "What's the difference between Google Ads and Facebook Ads?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Google Ads targets people actively searching (high intent), while Facebook Ads targets people based on interests and demographics (awareness). We often recommend both for a full-funnel approach."
                                }
                            }
                        ]
                    })
                }}
            />
        </ServicePageLayout>
    );
}
