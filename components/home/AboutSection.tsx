export default function AboutSection() {
    return (
        <section id="mission" className="py-24 lg:py-32 3xl:py-48 bg-background relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-10 xl:px-20 3xl:max-w-screen-2xl grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 3xl:gap-32">

                {/* About / Mission */}
                <div className="flex flex-col justify-center">
                    <span className="text-accent text-sm sm:text-base font-bold tracking-widest uppercase mb-6 block">Our Mission</span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl 3xl:text-7xl font-display font-bold text-heading mb-8 leading-tight">
                        Empowering Growth. <br />
                        <span className="text-secondary">Reach New Heights with Strategic Solutions.</span>
                    </h2>
                    <div className="space-y-6 text-foreground text-lg lg:text-xl 3xl:text-2xl leading-relaxed max-w-2xl">
                        <p>
                            At Focus Business Channel, we are your **Business Growth Partner**—your single point of contact for every critical business pillar under one roof.
                        </p>
                        <p>
                            We provide a total growth solution, ensuring that your backend is as strong as your marketing, making your expansion safe and sustainable.
                        </p>
                    </div>
                </div>

                {/* Who We Help - Checkboard style or List */}
                <div className="relative flex items-center">
                    <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-accent/10 to-transparent opacity-30 blur-3xl" />

                    <div className="relative z-10 glass-panel p-8 md:p-10 lg:p-12 3xl:p-20 rounded-2xl w-full">
                        <h3 className="text-2xl md:text-3xl 3xl:text-4xl font-display font-bold text-heading mb-8">Direct Growth Solutions</h3>
                        <ul className="space-y-6">
                            {[
                                { q: "Our leads aren't turning into sales.", a: "We bridge the gap so your team only talks to people ready to buy." },
                                { q: "We rely too much on one platform.", a: "We spread your presence so one algorithm change doesn't stop your phone ringing." },
                                { q: "We are the industry's best-kept secret.", a: "We build a reputation engine that makes you the most recognized name." },
                                { q: "I don't know if my marketing is working.", a: "We provide simple reports showing exactly how much profit you made." }
                            ].map((item, i) => (
                                <li key={i} className="flex flex-col gap-1">
                                    <span className="text-[#ea2528] font-bold text-sm md:text-base italic">"{item.q}"</span>
                                    <span className="text-gray-400 text-sm md:text-base">{item.a}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-12 pt-8 border-t border-white/5">
                            <div className="flex gap-8 lg:gap-12">
                                <div>
                                    <span className="block text-3xl md:text-4xl 3xl:text-5xl font-bold text-white">60%</span>
                                    <span className="text-sm md:text-base text-gray-500">First Month Growth</span>
                                </div>
                                <div>
                                    <span className="block text-3xl md:text-4xl 3xl:text-5xl font-bold text-white">1M+</span>
                                    <span className="text-sm md:text-base text-gray-500">Verified Leads</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
