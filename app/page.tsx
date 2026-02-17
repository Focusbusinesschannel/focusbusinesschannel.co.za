import Hero from '@/components/home/Hero';
import WhoWeHelpSection from '@/components/home/WhoWeHelpSection';
import LogoMarquee from '@/components/home/LogoMarquee';
import ServicesSection from '@/components/home/ServicesSection';
import AboutSection from '@/components/home/AboutSection';
import PortfolioSection from '@/components/home/PortfolioSection';
import BlogSection from '@/components/home/BlogSection';
import ContactSection from '@/components/home/ContactSection';

export default function Home() {
    return (
        <div className="flex flex-col">
            <Hero />
            <WhoWeHelpSection />
            <LogoMarquee />
            <ServicesSection />
            <AboutSection />
            <PortfolioSection />
            <BlogSection />
            <ContactSection />
        </div>
    );
}
