import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://focusbusinesschannel.co.za';

    const routes = [
        '',
        '/services/web-development',
        '/services/performance-marketing',
        '/services/branding-and-design',
        '/services/business-consulting-and-management',
        '/projects/dynotech-web-seo',
        '/projects/high-velocity-marketing',
        '/projects/social-media-authority',
        '/blog',
        '/blog/high-performance-b2b-web-development',
        '/blog/demand-gen-vs-lead-gen-guide',
        '/blog/editorial-grade-branding-enterprise-trust',
        '/projects/custom-web-engineering',
    ];

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }));
}
