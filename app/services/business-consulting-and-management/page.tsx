import ServicePageLayout from '@/components/services/ServicePageLayout';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Business Management & Consulting South Africa | Scaling & Compliance',
    description: 'Expert business consulting and management services in South Africa. We handle SARS compliance, CIPC registration, bookkeeping, and scaling strategy so you can focus on growth.',
    alternates: {
        canonical: '/services/business-consulting-and-management'
    }
};

export default function BusinessConsultingPage() {
    return (
        <ServicePageLayout
            title="Business Management & Growth Infrastructure"
            subtitle="Foundation of Scaling"
            description="Clean books, legal compliance, and efficient systems are the foundation of scaling. We handle the backend complexity so you can handle the market growth."

            whyItMatters={{
                title: "Why Backend Structure is as Important as Marketing",
                points: [
                    "60% of small businesses fail due to cash flow management issues, not for lack of customers or sales",
                    "A properly structured business can save an average of R50,000/year through legitimate tax optimization and clean bookkeeping",
                    "SARS and CIPC compliance violations can lead to penalties ranging from R15,000 to over R100,000 and the freezing of bank accounts",
                    "Systems Thinking: Marketing without operational structure leads to an overwhelmed team and a broken customer experience"
                ]
            }}

            useCases={[
                {
                    title: "Business Registration & CIPC Compliance",
                    description: "Start on solid ground. We handle all CIPC processes to ensure your company is legally registered, name-protected, and compliant with all South African regulations from day one."
                },
                {
                    title: "Tax Planning & SARS Compliance",
                    description: "Avoid penalties and unnecessary stress. We manage your VAT, PAYE, and Income Tax submissions. We serve as your point of contact for SARS correspondence, ensuring you sleep soundly."
                },
                {
                    title: "Monthly Bookkeeping & Accounting",
                    description: "Make decisions based on facts, not feelings. We provide accurate monthly financial statements (Income Statement, Balance Sheet) that help you track growth and manage your runway."
                },
                {
                    title: "Administrative & Remote Support",
                    description: "Delegate the paperwork that bogs you down. Our remote admin support handles the day-to-day filing, invoicing, and organizational tasks that usually distract founders from high-value tasks."
                },
                {
                    title: "Scaling Strategy & Advisory",
                    description: "Transition from 'Owner-Operator' to 'Business Owner'. we help you design organizational charts, document SOPs (Standard Operating Procedures), and build systems that allow the business to run without you."
                },
                {
                    title: "Financial Modeling & Cash Flow Forecasting",
                    description: "Know exactly where your money is going. We build 12-month forecasts that predict your cash needs and help you prepare for investment or expansion with confidence."
                }
            ]}

            caseStudies={[
                {
                    title: "Commercial Logistics Firm Scale-Up",
                    description: "Streamlined financial operations and implemented digital bookkeeping for a trucking fleet. Enabled the founder to secure funding for scaling from 10 to 100 units.",
                    result: "10x Operational Growth",
                    category: "Strategic Strategy"
                },
                {
                    title: "Prop-Tech Portfolio Restructuring",
                    description: "Cleaned up 3 years of backlogged tax compliance for a complex property portfolio. Optimized the tax structure to reduce annual liability legally.",
                    result: "Zero-Risk Compliance Status",
                    category: "Compliance Rescue"
                }
            ]}

            howItWorks={[
                { title: "Compliance & Financial Audit", description: "We review your current SARS status, CIPC status, and your recent financial records to identify any risks or missing optimization opportunities." },
                { title: "Systems Implementation", description: "We set up your accounting software (Xero/SAGE), organize your filing systems, and register any missing tax or compliance types." },
                { title: "Ongoing Monthly Maintenance", description: "We provide monthly oversight, financial reporting, and compliance filings to ensure your business stays healthy as it scales." }
            ]}

            process={[
                { title: "Initial Consultation (20 min)", description: "We discuss your current business structure, pain points, and growth goals." },
                { title: "Gap Analysis & Audit", description: "A deep dive into your current records and compliance certificates." },
                { title: "Strategic Roadmap Proposal", description: "A clear plan to fix immediate risks and build a scaling foundation." },
                { title: "Registration & Filing Setup", description: "Correction of any old filings and new registrations as needed." },
                { title: "Accounting Software Migration", description: "Setting up a clean digital cloud-based bookkeeping system." },
                { title: "SOP Documentation", description: "Defining the standard ways your business handles its core operations." },
                { title: "Monthly Reporting Cycle", description: "Establishing a routine for financial review and feedback." },
                { title: "Tax Optimization Planning", description: "Regular strategy sessions to minimize legal tax liability." },
                { title: "Admin Support Integration", description: "Training and handing off repetitive tasks to our support team." },
                { title: "Quarterly Growth Review", description: "Analyzing progress against the strategic roadmap and adjusting." }
            ]}

            pricing={{
                title: "Service Investment Packages",
                packages: [
                    {
                        name: "Monthly Bookkeeping",
                        price: "From R3,500/month",
                        features: [
                            "Cloud accounting setup (Xero/Sage)",
                            "Monthly bank reconciliation",
                            "Monthly Management Accounts",
                            "Annual Tax Return (Business)",
                            "Email support for financial queries"
                        ]
                    },
                    {
                        name: "Full Management",
                        price: "From R7,500/month",
                        features: [
                            "Ongoing Bookkeeping + Payroll",
                            "Monthly VAT & PAYE submissions",
                            "CIPC Annual Returns",
                            "Quarterly strategy advisory call",
                            "Budgeting & Cash Flow forecasting"
                        ]
                    },
                    {
                        name: "Strategic Setup",
                        price: "Custom Quote",
                        features: [
                            "New company registration bundle",
                            "BEE Affidavit & COIDA setup",
                            "SOP development for one department",
                            "Operational audit & improvement plan",
                            "Investment readiness consulting"
                        ]
                    }
                ]
            }}

            faqs={[
                { question: "Can you help with personal and business tax returns?", answer: "Yes, we handle the full spectrum of tax compliance for both individual founders and their companies, ensuring parity between your personal and business wealth strategy." },
                { question: "Do you handle CIPC company registrations?", answer: "We handle the entire process from name reservation to the final registration certificate, including BEE affidavits and tax registrations." },
                { question: "How safe is my financial data?", answer: "We use enterprise-grade cloud security for all financial and legal data. We are POPIA compliant and treat client confidentiality as our highest priority." },
                { question: "Do I need monthly bookkeeping even if I'm a small business?", answer: "Yes. Without monthly records, you cannot manage your cash flow effectively, and you risk a massive administrative burden (and penalties) at year-end." },
                { question: "What software do you use for accounting?", answer: "We are experts in Xero, Sage, and QuickBooks. We recommend cloud-based solutions so you can see your business's health in real-time from your phone." },
                { question: "Can you help me get my tax clearance certificate?", answer: "Yes. We specialize in fixing non-compliance issues and negotiating with SARS to get your status back to 'Good Standing' so you can apply for tenders and contracts." },
                { question: "What is the difference between an accountant and a business consultant?", answer: "An accountant looks at past numbers to ensure compliance. A business consultant looks at future strategy to ensure growth. We provide both to bridge the gap." },
                { question: "How do I start scaling my business without burning out?", answer: "By documenting systems and delegating the 'backend' tasks to us. We help you move from being a 'doer' in the business to being the 'designer' of the business." }
            ]}

            ctaTitle="Let's build a healthy, scalable business."
            ctaDescription="Get the strategic advisory and financial management you need to scale with confidence and total compliance."
        >
            <Breadcrumbs
                items={[
                    { label: 'Services', href: '/#services' },
                    { label: 'Business Consulting', href: '/services/business-consulting-and-management', current: true }
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
                                "name": "Can you help with personal and business tax returns?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes, we handle the full spectrum of tax compliance for both individual founders and their companies."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Do you handle CIPC company registrations?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "We handle the entire process from name reservation to the final registration certificate, including BEE affidavits."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "How safe is my financial data?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "We use enterprise-grade cloud security and are POPIA compliant to ensure your data is always protected."
                                }
                            }
                        ]
                    })
                }}
            />
        </ServicePageLayout>
    );
}
