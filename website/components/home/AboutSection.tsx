export default function AboutSection() {
    return (
        <section id="mission" className="py-24 lg:py-32 3xl:py-48 bg-background relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-10 xl:px-20 3xl:max-w-screen-2xl grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 3xl:gap-32">

                {/* About / Mission */}
                <div className="flex flex-col justify-center">
                    <span className="text-accent text-sm sm:text-base font-bold tracking-widest uppercase mb-6 block">Our Mission</span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl 3xl:text-7xl font-display font-bold text-white mb-8 leading-tight">
                        We are not for everyone. <br />
                        <span className="text-gray-500">We are for those ready to dominate.</span>
                    </h2>
                    <div className="space-y-6 text-gray-400 text-lg lg:text-xl 3xl:text-2xl leading-relaxed max-w-2xl">
                        <p>
                            In a crowded digital landscape, "good enough" is the enemy of growth.
                            We partner with ambitious enterprises to defy web conventions and market limitations.
                        </p>
                        <p>
                            From pixel-perfect design to forensic accounting, we bring every critical business pillar under one roof.
                            This is the "focus" difference: Singular vision, multiple disciplines, exponential results.
                        </p>
                    </div>
                </div>

                {/* Who We Help - Checkboard style or List */}
                <div className="relative flex items-center">
                    <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-accent/10 to-transparent opacity-30 blur-3xl" />

                    <div className="relative z-10 glass-panel p-8 md:p-10 lg:p-12 3xl:p-20 rounded-2xl w-full">
                        <h3 className="text-2xl md:text-3xl 3xl:text-4xl font-display font-bold text-white mb-8">Who We Help</h3>
                        <ul className="space-y-6">
                            {[
                                "Scaling Startups seeking Series A/B funding",
                                "Established B2B Service Providers",
                                "E-commerce brands needing technical optimization",
                                "Enterprise companies requiring compliance & strategy"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent">✓</span>
                                    <span className="text-gray-300 font-medium md:text-lg 3xl:text-xl">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-12 pt-8 border-t border-white/5">
                            <div className="flex gap-8 lg:gap-12">
                                <div>
                                    <span className="block text-3xl md:text-4xl 3xl:text-5xl font-bold text-white">60%</span>
                                    <span className="text-sm md:text-base text-gray-500">Avg. Growth Y1</span>
                                </div>
                                <div>
                                    <span className="block text-3xl md:text-4xl 3xl:text-5xl font-bold text-white">100+</span>
                                    <span className="text-sm md:text-base text-gray-500">Projects Delivered</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
