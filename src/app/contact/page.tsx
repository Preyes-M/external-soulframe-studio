import type { Metadata } from 'next';
import ContactPageContent from './ContactPageContent';

export const metadata: Metadata = {
  title: 'Contact Soul Frame Studio | Book Your Photoshoot in Banaswadi Bangalore',
  description:
    'Get in touch with Soul Frame Studio in Banaswadi, Bangalore to book maternity, kids, fashion, or product photography. Contact us today to plan your photoshoot.',
  keywords: [
    'Soul Frame Studio contact',
    'photography studio Bangalore contact',
    'book photoshoot Bangalore',
    'maternity photography booking Bangalore',
    'kids photoshoot Bangalore',
    'product photography Bangalore',
  ],
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Contact Soul Frame Studio',
    description:
      'Reach out to Soul Frame Studio to schedule maternity, kids, fashion, or product photography sessions in Bangalore.',
    url: 'https://www.soulframestudio.in/contact',
    siteName: 'Soul Frame Studio',
    type: 'website',
  },
};

export default function Contact() {
  return <ContactPageContent />;
}
