import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://www.soulframestudio.in',
            lastModified: new Date(),
        },
        {
            url: 'https://www.soulframestudio.in/studio-rental',
            lastModified: new Date(),
        },
        {
            url: 'https://www.soulframestudio.in/services',
            lastModified: new Date(),
        },
        {
            url: 'https://www.soulframestudio.in/contact',
            lastModified: new Date(),
        },
        {
            url: 'https://www.soulframestudio.in/portfolio/product-photography-bangalore',
            lastModified: new Date(),
            images: [
                'https://www.soulframestudio.in/images/portfolio/product/soul_frame_studio_product_photography_perfume.webp'
            ]
        }
    ]
}
