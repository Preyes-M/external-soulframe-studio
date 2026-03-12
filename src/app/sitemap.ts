import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://external-soulframe-studio-bangalore.vercel.app',
            lastModified: new Date(),
        },
        {
            url: 'https://external-soulframe-studio-bangalore.vercel.app/studio-rental',
            lastModified: new Date(),
        },
        {
            url: 'https://external-soulframe-studio-bangalore.vercel.app/services',
            lastModified: new Date(),
        },
        {
            url: 'https://external-soulframe-studio-bangalore.vercel.app/contact',
            lastModified: new Date(),
        },
        {
            url: 'https://external-soulframe-studio-bangalore.vercel.app/portfolio/product-photography-bangalore',
            lastModified: new Date(),
            images: [
                'https://external-soulframe-studio-bangalore.vercel.app/images/portfolio/product/soul_frame_studio_product_photography_perfume.webp'
            ]
        }
    ]
}
