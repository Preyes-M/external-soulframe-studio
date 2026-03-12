import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.soulframestudio.in'
    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${baseUrl}/studio-rental`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/portfolio`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
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
