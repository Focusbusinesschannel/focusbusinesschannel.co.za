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

                {/* Who We Are - Simplified */}
                <div className="relative flex items-center">
                    <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-accent/10 to-transparent opacity-30 blur-3xl" />

                    <div className="relative z-10 glass-panel p-8 md:p-10 lg:p-12 3xl:p-20 rounded-2xl w-full">
                        <h3 className="text-2xl md:text-3xl 3xl:text-4xl font-display font-bold text-heading mb-6">Why Choose Focus Business Channel?</h3>
                        <p className="text-foreground/80 text-base md:text-lg 3xl:text-xl leading-relaxed mb-8">
                            Unlike fragmented agencies that specialize in just one area, we're your all-in-one growth partner. From web design and Google Ads to business consulting and compliance, we ensure every piece of your business works together to drive sustainable growth.
                        </p>
                        <p className="text-foreground/80 text-base md:text-lg 3xl:text-xl leading-relaxed">
                            No more juggling multiple vendors. No more communication gaps. Just one team, one vision, and measurable results.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}
