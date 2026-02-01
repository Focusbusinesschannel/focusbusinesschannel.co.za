export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen bg-background pt-32 pb-20 px-6">
            <div className="container mx-auto max-w-4xl">
                <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-12">Privacy Policy</h1>
                <div className="prose prose-invert lg:prose-xl max-w-none text-gray-400 space-y-6">
                    <p>Last updated: January 30, 2026</p>
                    <p>At Focus Business Channel, we take your privacy seriously. This policy describes how we collect, use, and protect your personal information.</p>

                    <h2 className="text-white">1. Information We Collect</h2>
                    <p>We collect information you provide directly to us through our contact form, including your name, email address, and any messages you send.</p>

                    <h2 className="text-white">2. How We Use Your Information</h2>
                    <p>We use your information to respond to your inquiries, provide our services, and send you occasional updates if you've opted into our communications.</p>

                    <h2 className="text-white">3. Information Sharing</h2>
                    <p>We do not sell or share your personal information with third parties for their own marketing purposes.</p>

                    <h2 className="text-white">4. Your Security</h2>
                    <p>We implement reasonable security measures to protect your information from unauthorized access.</p>

                    <h2 className="text-white">5. Contact Us</h2>
                    <p>If you have any questions about this Privacy Policy, please contact us at <span className="text-accent">hello@focusbc.com</span>.</p>
                </div>
            </div>
        </div>
    );
}
