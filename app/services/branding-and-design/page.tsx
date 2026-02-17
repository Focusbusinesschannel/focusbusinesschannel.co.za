import ServicePageLayout from '@/components/services/ServicePageLayout';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Branding & Visual Identity Design South Africa | Premium Graphic Design',
    description: 'Transform your business with professional branding and visual identity design. Custom logos, brand kits, and marketing collateral designed to build instant trust and recognition.',
    alternates: {
        canonical: '/services/branding-and-design'
    }
};

export default function BrandingAndDesignPage() {
    return (
        <ServicePageLayout
            title="Branding & Visual Identity"
            subtitle="Look Like The Leader You Are"
            description="Look like the market leader you are. We create professional visuals that build instant trust with your customers and distinguish you from the competition."

            whyItMatters={{
                title: "Why Visual Identity Determines Market Perception",
                points: [
                    "A first impression is formed in just 50 milliseconds – branding determines if that impression is 'professional' or 'amateur' (MIT Study)",
                    "Consistent branding across all platforms can increase revenue by up to 33% (Lucidpress)",
                    "90% of purchasing decisions are made subconsciously – design is the silent ambassador of your brand's trustworthiness",
                    "Premium branding allows you to command 20-30% higher pricing than competitors with generic identities"
                ]
            }}

            useCases={[
                {
                    title: "Custom Logo Design & Symbolism",
                    description: "Available for trademarking, our logos are unique marks that serve as the cornerstone of your brand identity. We focus on legibility, scalability, and emotional resonance to ensure your mark is memorable."
                },
                {
                    title: "Corporate Identity & Guidelines",
                    description: "Consistency builds trust. We design your letterheads, email signatures, presentation templates, and business cards to ensure a cohesive professional look across every touchpoint. We provide a brand book to keep your team aligned."
                },
                {
                    title: "Marketing Collateral & Print Design",
                    description: "From premium brochures to large-format banners, we design physical assets that make a lasting impression at every networking opportunity. We understand print specs (CMYK, bleed, margins) to ensure perfect results."
                },
                {
                    title: "Social Media Identity Design",
                    description: "Stand out in the feed. We create a visual language for your social channels – including custom icons, story templates, and header graphics – that makes your brand instantly recognizable on any platform."
                },
                {
                    title: "Typography & Color Theory",
                    description: "Selected with psychological precision. We choose fonts and colors that evoke the specific emotions you want your customers to feel, from 'innovative and bold' to 'stable and trusted'."
                },
                {
                    title: "Brand Strategy & Positioning",
                    description: "Beyond the visuals. We help you define your 'Why', your tone of voice, and your market positioning so that your brand speaks to your ideal customer’s deep-seated needs."
                }
            ]}

            caseStudies={[
                {
                    title: "Premium Real Estate Agency",
                    description: "Developed a luxury visual identity including a refined logo, gold-foil collateral, and a high-end digital presence. The rebrand shifted their market position toward high-net-worth individuals.",
                    result: "75% Increase in Inbound Inquiries",
                    category: "Luxury Branding"
                },
                {
                    title: "Tech Startup Rebrand",
                    description: "Redefined the visual narrative for a scaling SaaS startup. Created a modern, minimalist identity that communicated efficiency and global scalability.",
                    result: "Successful $2M Series A Funding",
                    category: "Visual Storytelling"
                }
            ]}

            howItWorks={[
                { title: "Brand Discovery & Briefing", description: "You tell us your vision, company values, and target audience. We research your competitors to find a unique visual gap you can own." },
                { title: "Creative Concepting", description: "We provide multiple professional design directions for the core identity, presenting them in real-world contexts to help you visualize the results." },
                { title: "Final Asset Delivery", description: "You receive a complete 'Brand Kit' (SVG, PDF, PNG) ready for both print and digital use, along with usage guidelines." }
            ]}

            process={[
                { title: "The Discovery Call (15-20 min)", description: "We discuss your brand personality, desired aesthetic, and project goals." },
                { title: "Market & Competitor Audit", description: "We analyze what other leaders in your space look like to ensure you stand out." },
                { title: "Moodboard & Style Direction", description: "We present a visual direction (colors, textures, fonts) before starting on the logo." },
                { title: "Initial Logo Concepts", description: "We present 2-3 distinct logo directions for your feedback." },
                { title: "Refinement Phase", description: "We polish the chosen concept based on your specific input." },
                { title: "Typography & Color Pairing", description: "Selection of a secondary font family and an expanded color palette." },
                { title: "Collateral Design", description: "Creation of business cards, letterheads, and social media templates." },
                { title: "Brand Guidelines Development", description: "A PDF document explaining how to use your new branding correctly." },
                { title: "Final Polish & Export", description: "Technical verification of all files for print and web standards." },
                { title: "Handoff & Training", description: "Delivery of all source files and a walkthrough on how to use them." }
            ]}

            pricing={{
                title: "Branding Investment Options",
                packages: [
                    {
                        name: "Logo Only",
                        price: "From R8,000",
                        features: [
                            "Custom-designed logo (no templates)",
                            "3 initial concepts to choose from",
                            "Vector source files (AI, SVG, PDF)",
                            "Basic color palette selection"
                        ]
                    },
                    {
                        name: "Full Brand Identity",
                        price: "From R25,000",
                        features: [
                            "Comprehensive logo design",
                            "Full Brand Style Guide",
                            "Typography & Color System",
                            "Business card & Letterhead design",
                            "Social media profile kit (icons/headers)",
                            "Presentation & Invoice templates"
                        ]
                    },
                    {
                        name: "Brand & Web Integration",
                        price: "Custom Quote",
                        features: [
                            "Full Brand Identity package",
                            "Marketing collateral (Brochures/Flyers)",
                            "Custom iconography for website",
                            "Ongoing design support (retainer)",
                            "Brand launch strategy advisory"
                        ]
                    }
                ]
            }}

            faqs={[
                { question: "Can you refresh or modernize my old logo?", answer: "Yes! We specialize in 'Brand Refreshes' where we keep the heritage of your existing brand but modernize the shapes, colors, and typography to fit current market standards." },
                { question: "Do I own the copyright to the final designs?", answer: "Absolutely. Once the final payment is cleared, full ownership and copyright of the final chosen logo and branding materials transfer to you. We only retain the right to showcase it in our portfolio." },
                { question: "What file formats will I receive?", answer: "You receive everything you need for print and digital: Vector files (AI, EPS, SVG) for infinite scaling, and high-res raster files (PNG, JPG, PDF) for standard use." },
                { question: "How long does the branding process usually take?", answer: "A logo project typically takes 2-3 weeks. A full brand identity package usually spans 4-5 weeks to ensure we have time for deep research and refinements." },
                { question: "How many revisions do I get?", answer: "Most packages include 2-3 rounds of revisions. This allows us to narrow down the direction and then perfect the details based on your feedback." },
                { question: "Can you design my business stationery and social media as well?", answer: "Yes, our Full Brand Identity package includes business cards, letterheads, and social media assets to ensure total consistency across all channels." },
                { question: "Do I need a style guide?", answer: "If you have more than one person in your team, yes. A style guide ensures that anyone creating content for your brand uses the correct colors, fonts, and spacing, maintaining your professional image." },
                { question: "What if I don't like any of the initial concepts?", answer: "This is rare due to our deep discovery phase, but if it happens, we reset and discuss the results further to find a new creative path. We are committed to a result you love." }
            ]}

            ctaTitle="Ready to look like the market leader?"
            ctaDescription="Elevate your business with professional branding that builds instant trust and generates higher quality leads."
        >
            <Breadcrumbs
                items={[
                    { label: 'Services', href: '/#services' },
                    { label: 'Branding & Design', href: '/services/branding-and-design', current: true }
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
                                "name": "Can you refresh or modernize my old logo?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes! We specialize in 'Brand Refreshes' where we keep the heritage of your existing brand but modernize the shapes, colors, and typography to fit current market standards."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Do I own the copyright to the final designs?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Absolutely. Once the final payment is cleared, full ownership and copyright of the final chosen logo and branding materials transfer to you."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "What file formats will I receive?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "You receive everything you need for print and digital: Vector files (AI, EPS, SVG) for infinite scaling, and high-res raster files (PNG, JPG, PDF) for standard use."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "How long does the branding process usually take?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "A logo project typically takes 2-3 weeks. A full brand identity package usually spans 4-5 weeks."
                                }
                            }
                        ]
                    })
                }}
            />
        </ServicePageLayout>
    );
}
