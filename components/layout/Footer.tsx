import Link from 'next/link';
import { Instagram, Linkedin, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-surface py-20 lg:py-32 border-t border-white/5">
            <div className="container mx-auto px-6 md:px-10 xl:px-20 3xl:max-w-screen-2xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 3xl:gap-24 mb-16 lg:mb-24">
                    <div className="col-span-1">
                        <Link href="/" className="text-2xl 3xl:text-3xl font-display font-bold text-white tracking-tight mb-6 block">
                            Focus<span className="text-secondary">.</span>
                        </Link>
                        <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-xs">
                            Your **Business Growth Partner**. We provide a total growth solution to ensure your expansion is safe, sustainable, and recognized.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-medium mb-6 3xl:text-xl">Services</h4>
                        <ul className="space-y-4 text-sm md:text-base text-gray-400">
                            <li><Link href="/services/web-development" className="hover:text-white transition-colors">AI-Ready Search</Link></li>
                            <li><Link href="/services/performance-marketing" className="hover:text-white transition-colors">Digital Marketing</Link></li>
                            <li><Link href="/services/business-consulting-and-management" className="hover:text-white transition-colors">Business Management & Structure</Link></li>
                            <li><Link href="/services/branding-and-design" className="hover:text-white transition-colors">Graphic Design</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-medium mb-6 3xl:text-xl">Company</h4>
                        <ul className="space-y-4 text-sm md:text-base text-gray-400" aria-label="Company Links">
                            <li><Link href="/#mission" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors opacity-50 cursor-not-allowed">Careers (Coming Soon)</Link></li>
                            <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                            <li><Link href="/#contact" className="hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-medium mb-6 3xl:text-xl">Connect</h4>
                        <div className="flex gap-4" aria-label="Social Media Links">
                            <a href="#" className="p-3 lg:p-4 bg-white/5 rounded-full hover:bg-white/10 transition-colors text-white" aria-label="Instagram">
                                <Instagram size={18} className="lg:w-5 lg:h-5" />
                            </a>
                            <a href="#" className="p-3 lg:p-4 bg-white/5 rounded-full hover:bg-white/10 transition-colors text-white" aria-label="LinkedIn">
                                <Linkedin size={18} className="lg:w-5 lg:h-5" />
                            </a>
                            <a href="#" className="p-3 lg:p-4 bg-white/5 rounded-full hover:bg-white/10 transition-colors text-white" aria-label="Twitter">
                                <Twitter size={18} className="lg:w-5 lg:h-5" />
                            </a>
                            <a href="#" className="p-3 lg:p-4 bg-white/5 rounded-full hover:bg-white/10 transition-colors text-white" aria-label="Facebook">
                                <Facebook size={18} className="lg:w-5 lg:h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-xs lg:text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} Focus Business Channel. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0" aria-label="Legal Links">
                        <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
