'use client';

import Image from 'next/image';

const logos = [
    { src: '/images/logos/9ad89f0e-c171-4b7c-a75c-acb03c7cda7b.png', alt: 'Client Logo 1' },
    { src: '/images/logos/STRADEDGE LOGO 5.png', alt: 'Stradedge' },
    { src: '/images/logos/WhatsApp_Image_2025-06-06_at_12.49.04_ce457320-removebg-preview.png', alt: 'Client Logo 2' },
    { src: '/images/logos/dlas-removebg-preview.png', alt: 'DLAS' },
    { src: '/images/logos/dyno_logo-removebg-preview (1).png', alt: 'Dyno' },
    { src: '/images/logos/fb logo_edited.png', alt: 'FB' },
    { src: '/images/logos/forever.png', alt: 'Forever' },
    { src: '/images/logos/logo - Edited.png', alt: 'Client Logo 3' },
];

export default function LogoMarquee() {
    return (
        <section className="py-12 bg-background border-y border-black/10 dark:border-white/5 overflow-hidden">
            <div className="relative w-full">
                <div className="flex w-[200%] animate-scroll hover:[animation-play-state:paused]">
                    {[...logos, ...logos, ...logos].map((logo, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-center min-w-[200px] md:min-w-[250px] px-8 grayscale hover:grayscale-0 transition-all duration-300 opacity-50 hover:opacity-100 cursor-pointer"
                        >
                            <div className="relative w-24 h-24 md:w-32 md:h-32">
                                <Image
                                    src={logo.src}
                                    alt={logo.alt}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
