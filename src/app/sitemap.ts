import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.soulframestudio.in';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
      images: [
        `${baseUrl}/images/portfolio/maternity/soul_frame_studio_cyclorama_with_lights.webp`,
        `${baseUrl}/images/portfolio/maternity/soul_frame_studio_waiting_lounge.webp`,
        `${baseUrl}/images/portfolio/maternity/soul_frame_studio_royal_indian_arch.webp`,
        `${baseUrl}/images/portfolio/maternity/soul_frame_studio_niche_wall.webp`,
        `${baseUrl}/images/portfolio/maternity/soul_frame_studio_maternity.webp`,
        `${baseUrl}/images/portfolio/fashion/soul_frame_studio_fashion_samitha.webp`,
      ],
    },
    {
      url: `${baseUrl}/studio-rental`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services-pricing`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];
}
