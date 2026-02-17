import ServicePageLayout from '@/components/services/ServicePageLayout';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Web Design & Development South Africa | AI-Ready Search Optimization',
    description: 'Professional web design and development services in South Africa. Custom websites built for Google SEO and AI search engines like ChatGPT. Get found organically and convert visitors into customers.',
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

            whyItMatters={{
                title: "Why Your Website is Your Most Important Asset in 2026",
                points: [
                    "75% of users judge your business credibility based on website design alone (Stanford Web Credibility Research)",
                    "AI search engines (ChatGPT, Perplexity, Google Gemini) now drive 40% of B2B research traffic - your site must be AI-readable",
                    "The average B2B buyer visits 7+ pages before making contact - your website must educate and build trust autonomously",
                    "Mobile-first indexing is mandatory: 63% of all Google searches now happen on mobile devices"
                ]
            }}

            useCases={[
                {
                    title: "Professional Website Design",
                    description: "We don't use templates. We build custom-coded digital storefronts that capture your brand essence and convert visitors into loyal customers with pixel-perfect precision. Every element is crafted to guide users toward taking action."
                },
                {
                    title: "Mobile Optimization & Responsive Design",
                    description: "Responsive architecture ensuring a flawless experience on every device. Whether your customer is on an iPhone, Android tablet, or 4K desktop, your site will look stunning and perform beautifully. We test across 20+ device configurations."
                },
                {
                    title: "Speed Tuning & Core Web Vitals",
                    description: "Sub-second load times that keep impatience at bay. We optimize every asset, minify code, implement lazy loading, and use CDN delivery to improve your Google Core Web Vitals score. Fast sites rank higher and convert better."
                },
                {
                    title: "AI-Ready Search (AEO)",
                    description: "Future-proof your visibility. We use structured data (Schema.org), semantic HTML5, and clean information architecture that helps AI models like ChatGPT and Gemini understand and recommend your business first when users ask for solutions in your industry."
                },
                {
                    title: "SEO Foundation & Technical Setup",
                    description: "Built-in search engine optimization from day one. We implement proper heading hierarchy, meta descriptions, XML sitemaps, robots.txt configuration, and canonical tags to ensure Google can crawl and index your site effectively."
                },
                {
                    title: "Content Management System (CMS)",
                    description: "Update your own content without touching code. We integrate user-friendly CMS platforms that let you publish blog posts, update service pages, and manage media galleries with zero technical knowledge required."
                }
            ]}

            caseStudies={[
                {
                    title: "Dynotech Mobile Mechanics - B2B Lead Generation",
                    description: "We built a custom website optimized for local SEO and AI search. The site now ranks #1 for 'mobile mechanic Germiston' and appears as the top ChatGPT recommendation for mechanical services in the area.",
                    result: "651 Qualified Leads in 6 Months",
                    category: "B2B Service Business"
                },
                {
                    title: "E-commerce Platform Overhaul",
                    description: "Redesigned a legacy online store with slow load times into a lightning-fast sales engine. Implemented one-click checkout, mobile optimization, and product schema markup.",
                    result: "120% Mobile Conversion Increase",
                    category: "E-Commerce"
                }
            ]}

            howItWorks={[
                { title: "Discovery & Analysis", description: "We analyze your industry's top-performing websites, identify competitor gaps, and research the keywords your ideal customers are searching for." },
                { title: "Information Architecture", description: "We map out your site structure, plan user journeys, and design conversion funnels that naturally guide visitors toward booking calls or making purchases." },
                { title: "AI Indexing & Schema Setup", description: "We 'teach' AI models about your business using structured data so you show up as the top recommendation when users ask tools like ChatGPT for suggestions in your category." }
            ]}

            process={[
                { title: "Strategy Call (15-20 minutes)", description: "A quick chat to understand your goals, target audience, and must-have features." },
                { title: "Competitor & Keyword Research", description: "We audit the top 10 sites in your industry and identify SEO opportunities." },
                { title: "Wireframing & Sitemap", description: "We create a visual blueprint showing page layouts and navigation structure." },
                { title: "Design Mockups", description: "Desktop and mobile designs delivered for your review and feedback." },
                { title: "Client Review & Revisions", description: "Up to 2 rounds of revisions to perfect the visual direction." },
                { title: "Development & CMS Integration", description: "We code your site using Next.js or WordPress, depending on complexity." },
                { title: "Content Migration & SEO Setup", description: "We transfer existing content and configure meta tags, sitemaps, and analytics." },
                { title: "QA Testing", description: "Cross-browser testing, mobile responsiveness checks, and speed optimization." },
                { title: "Launch & DNS Configuration", description: "We handle domain setup and deploy your site to production servers." },
                { title: "Post-Launch Support (30 days)", description: "Bug fixes, minor tweaks, and training on how to use your CMS." }
            ]}

            pricing={{
                title: "Transparent Pricing",
                packages: [
                    {
                        name: "Starter",
                        price: "From R15,000",
                        features: [
                            "5-page business website",
                            "Mobile-responsive design",
                            "Basic SEO setup",
                            "Contact form integration",
                            "30-day post-launch support"
                        ]
                    },
                    {
                        name: "Growth",
                        price: "From R35,000",
                        features: [
                            "10-page website with blog",
                            "Advanced SEO & schema markup",
                            "CRM/email integration",
                            "Speed optimization (Core Web Vitals)",
                            "AI-ready content structure",
                            "Google Analytics & Search Console setup"
                        ]
                    },
                    {
                        name: "Enterprise",
                        price: "Custom Quote",
                        features: [
                            "Complex functionality & custom features",
                            "API integrations (CRM, payment gateways)",
                            "Multi-language support",
                            "Headless CMS architecture",
                            "Ongoing monthly maintenance & updates"
                        ]
                    }
                ]
            }}

            faqs={[
                { question: "Will my site work on mobile phones and tablets?", answer: "Absolutely. We design mobile-first to ensure a perfect experience on any device. We test on iPhones, Android phones, iPads, and desktop screens from 1080p to 4K." },
                { question: "How do I get found on Google?", answer: "We implement advanced SEO from day one: proper heading structure, meta tags, XML sitemaps, and schema markup. We also optimize for speed and mobile responsiveness, which are Google ranking factors." },
                { question: "What is AI Search (AEO)?", answer: "Answer Engine Optimization ensures your business is recommended when users ask tools like ChatGPT, Perplexity, or Google Gemini for suggestions. We use structured data and semantic HTML to make your site AI-readable." },
                { question: "How long does a website take to build?", answer: "Most projects take 6-8 weeks from kickoff to launch. This includes design, development, revisions, and testing. Rush timelines (3-4 weeks) are available for an additional fee." },
                { question: "Do you provide hosting?", answer: "Yes, we offer managed hosting starting at R500/month, or we can deploy to your preferred hosting provider (AWS, Vercel, Netlify, etc.)." },
                { question: "Can I update content myself after launch?", answer: "Yes! We build on user-friendly CMS platforms (WordPress, Contentful, or custom admin panels) that let you publish blog posts, update text, and manage images without touching code." },
                { question: "What if I need changes after the website launches?", answer: "All projects include 30 days of post-launch support for bug fixes and minor tweaks. After that, we offer maintenance plans starting at R2,500/month for ongoing updates and security patches." },
                { question: "Do you offer payment plans?", answer: "Yes. Standard terms are 50% upfront to begin work, and 50% on launch. For projects over R50,000, we can arrange milestone-based payments." }
            ]}

            ctaTitle="Ready to future-proof your business?"
            ctaDescription="Let's build a digital experience that ranks on Google, converts visitors, and gets recommended by AI."
        >
            <Breadcrumbs
                items={[
                    { label: 'Services', href: '/#services' },
                    { label: 'Web Design & Development', href: '/services/web-development', current: true }
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
                                "name": "Will my site work on mobile phones and tablets?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Absolutely. We design mobile-first to ensure a perfect experience on any device. We test on iPhones, Android phones, iPads, and desktop screens from 1080p to 4K."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "How do I get found on Google?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "We implement advanced SEO from day one: proper heading structure, meta tags, XML sitemaps, and schema markup. We also optimize for speed and mobile responsiveness, which are Google ranking factors."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "What is AI Search (AEO)?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Answer Engine Optimization ensures your business is recommended when users ask tools like ChatGPT, Perplexity, or Google Gemini for suggestions. We use structured data and semantic HTML to make your site AI-readable."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "How long does a website take to build?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Most projects take 6-8 weeks from kickoff to launch. This includes design, development, revisions, and testing. Rush timelines (3-4 weeks) are available for an additional fee."
                                }
                            }
                        ]
                    })
                }}
            />
        </ServicePageLayout>
    );
}
