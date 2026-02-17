'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/components/providers/ThemeProvider';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Focus trap for mobile menu
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
            const focusableElements = menuRef.current?.querySelectorAll(
                'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );
            const firstElement = focusableElements?.[0] as HTMLElement;
            const lastElement = focusableElements?.[focusableElements.length - 1] as HTMLElement;

            const handleTabKeyPress = (e: KeyboardEvent) => {
                if (e.key === 'Tab') {
                    if (e.shiftKey) {
                        if (document.activeElement === firstElement) {
                            e.preventDefault();
                            lastElement?.focus();
                        }
                    } else {
                        if (document.activeElement === lastElement) {
                            e.preventDefault();
                            firstElement?.focus();
                        }
                    }
                }
            };

            window.addEventListener('keydown', handleTabKeyPress);
            firstElement?.focus();

            return () => {
                window.removeEventListener('keydown', handleTabKeyPress);
                document.body.style.overflow = 'unset';
            };
        }
    }, [isMobileMenuOpen]);

    const navLinks = [
        { name: 'Services', href: '/#services' },
        { name: 'Mission', href: '/#mission' },
        { name: 'Portfolio', href: '/#portfolio' },
        { name: 'Blog', href: '/blog' },
        { name: 'Contact', href: '/#contact' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-white/5 py-3 md:py-4' : 'bg-transparent py-5 md:py-8'
                }`}
        >
            <div className="container mx-auto px-6 md:px-10 xl:px-20 3xl:max-w-screen-2xl flex items-center justify-between">
                <div className="flex items-center gap-4 md:gap-8">
                    <Link href="/" className="flex items-center" aria-label="Focus Home">
                        <div className="relative h-10 w-24 md:h-12 md:w-32 lg:h-14 lg:w-36 3xl:h-16 3xl:w-40">
                            <Image
                                src="/images/logo.png"
                                alt="Focus Business Channel"
                                fill
                                className="object-contain object-left scale-150 origin-left"
                                priority
                            />
                        </div>
                    </Link>
                    <div className="flex items-center">
                        <ThemeToggle />
                    </div>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8 lg:gap-12 3xl:gap-16" aria-label="Main Navigation">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm lg:text-base font-medium text-foreground/80 hover:text-heading transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="/#contact"
                        className="px-5 py-2 lg:px-7 lg:py-3 text-sm lg:text-base font-medium bg-heading text-white rounded-full hover:bg-heading/90 transition-colors"
                        aria-label="Contact us to get started"
                    >
                        Get Started
                    </Link>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden z-50 text-foreground p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-expanded={isMobileMenuOpen}
                    aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                    aria-controls="mobile-menu"
                >
                    {isMobileMenuOpen ? <X size={24} className="text-white" /> : <Menu size={24} />}
                </button>

                {/* Mobile Nav */}
                {isMobileMenuOpen && (
                    <div
                        id="mobile-menu"
                        ref={menuRef}
                        className="fixed inset-0 bg-black/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8"
                        role="dialog"
                        aria-modal="true"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-2xl font-display font-bold text-white hover:text-accent transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="/#contact"
                            className="mt-4 px-8 py-3 text-lg font-medium bg-white text-black rounded-full hover:bg-accent hover:text-white transition-all"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Get Started
                        </Link>
                    </div>
                )}
            </div>
        </header>
    );
}

function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Prevent hydration mismatch by rendering a placeholder or nothing until mounted
    if (!mounted) {
        return <div className="w-9 h-9" />; // Placeholder of approximate size
    }

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-foreground/80 hover:text-heading"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
        </button>
    );
}
