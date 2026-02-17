'use client';

import { CheckCircle } from 'lucide-react';

export default function WhoWeHelpSection() {
    return (
        <section className="py-16 md:py-20 lg:py-24 bg-background relative overflow-hidden border-b border-black/10 dark:border-white/5">
            <div className="container mx-auto px-6 md:px-10 xl:px-20 3xl:max-w-screen-2xl">

                {/* Trust Signals - Logos & Badges */}
                <div className="mb-12 lg:mb-16">
                    <p className="text-xs uppercase tracking-widest text-secondary mb-6 text-center">Trusted By Industry Leaders</p>
                    <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-60">
                        {/* Placeholder for client logos */}
                        <div className="px-6 py-3 glass-panel rounded-lg text-sm text-foreground/70 font-medium">
                            Google Partner
                        </div>
                        <div className="px-6 py-3 glass-panel rounded-lg text-sm text-foreground/70 font-medium">
                            Client Logo 1
                        </div>
                        <div className="px-6 py-3 glass-panel rounded-lg text-sm text-foreground/70 font-medium">
                            Client Logo 2
                        </div>
                        <div className="px-6 py-3 glass-panel rounded-lg text-sm text-foreground/70 font-medium">
                            Client Logo 3
                        </div>
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left: Heading */}
                    <div>
                        <span className="text-accent text-sm sm:text-base font-bold tracking-widest uppercase mb-4 block">Who We Help</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl 3xl:text-6xl font-display font-bold text-heading mb-6 leading-tight">
                            Does This Sound Like You?
                        </h2>
                        <p className="text-foreground/80 text-base md:text-lg 3xl:text-xl leading-relaxed">
                            We work with growing B2B and B2C service businesses who are tired of chasing leads that don't convert.
                        </p>
                    </div>

                    {/* Right: Pain Points + Metrics */}
                    <div className="relative">
                        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-accent/10 to-transparent opacity-30 blur-3xl" />

                        <div className="relative z-10 glass-panel p-8 md:p-10 lg:p-12 rounded-2xl">
                            <h3 className="text-xl md:text-2xl 3xl:text-3xl font-display font-bold text-heading mb-8">Direct Growth Solutions</h3>

                            <ul className="space-y-5 mb-10">
                                {[
                                    { q: "Our leads aren't turning into sales.", a: "We bridge the gap so your team only talks to people ready to buy." },
                                    { q: "We rely too much on one platform.", a: "We spread your presence so one algorithm change doesn't stop your phone ringing." },
                                    { q: "We are the industry's best-kept secret.", a: "We build a reputation engine that makes you the most recognized name." },
                                    { q: "I don't know if my marketing is working.", a: "We provide simple reports showing exactly how much profit you made." }
                                ].map((item, i) => (
                                    <li key={i} className="flex flex-col gap-2">
                                        <span className="text-[#ea2528] font-bold text-sm md:text-base italic flex items-start gap-2">
                                            <CheckCircle size={18} className="mt-0.5 flex-shrink-0" />
                                            "{item.q}"
                                        </span>
                                        <span className="text-foreground/70 text-sm md:text-base ml-6">{item.a}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* Specific Case Study Metrics */}
                            <div className="pt-8 border-t border-black/10 dark:border-white/5">
                                <p className="text-xs uppercase tracking-widest text-secondary mb-4">Proven Results</p>
                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <span className="block text-2xl md:text-3xl 3xl:text-4xl font-bold text-accent">651</span>
                                        <span className="text-xs md:text-sm text-foreground/70">Qualified Leads for Dynotech (6 Months)</span>
                                    </div>
                                    <div>
                                        <span className="block text-2xl md:text-3xl 3xl:text-4xl font-bold text-accent">$120K</span>
                                        <span className="text-xs md:text-sm text-foreground/70">Pipeline Generated</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
