import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { FAQ } from '@/components/ui/FAQ';
import AddOnsCalculator from './components/AddOnsCalculator';
import Reveal from '../../Reveal';
import type { Metadata } from 'next';
import Script from 'next/script';
import { createLocalBusinessSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title:
    'Product, Kids, Maternity, Food & Fashion Photography and Podcast Services in Bangalore | SoulFrame Studio',

  description:
    'Professional product photography, food photography, ecommerce catalog shoots and fashion photography services in Bangalore. SoulFrame Studio helps brands, restaurants and online stores create high quality marketing visuals.',

  keywords: [
    'product photography Bangalore',
    'food photography Bangalore',
    'fashion photography Bangalore',
    'ecommerce photography Bangalore',
    'catalog photography Bangalore',
    'commercial photography Bangalore',
    'brand photography Bangalore',
    'studio photography Bangalore',
    'photography studio Banaswadi Bangalore',
    'podcacst services in north Bangalore',
  ],
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: 'https://www.soulframestudio.in/services-pricing',
  },

  robots: {
    index: true, // change to true when site is ready
    follow: true,
  },

  openGraph: {
    title: 'Commercial Photography Services in Bangalore | SoulFrame Studio',
    description:
      'Product photography, food photography and ecommerce catalog photography for brands and businesses in Bangalore.',
    url: 'https://www.soulframestudio.in/services-pricing',
    siteName: 'SoulFrame Studio',
    locale: 'en_IN',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Commercial Photography Services in Bangalore | SoulFrame Studio',
    description:
      'Professional product, food and fashion photography services for brands in Bangalore.',
  },
};
type Service = {
  id: string;
  category: 'package' | 'custom';
  title: string;
  pricingType: 'fixed' | 'custom';
  price: string;
  description: string;
  image: string;
  imageAlt: string;
  features: string[];
};

export default function ServicesPricing() {
  const services: Service[] = [
    {
      id: 'serv_maternity',
      category: 'package',
      title: 'Maternity Photography',
      pricingType: 'fixed',
      price: '₹10,000 + GST',
      description:
        'Celebrate the beauty of motherhood with elegant maternity portraits designed to capture this special journey.',
      image: '/images/portfolio/maternity/soul_frame_studio_maternity.webp',
      imageAlt: 'Expecting mother in red dress with soft natural lighting and red background',
      features: [
        '1–2 hour guided photoshoot',
        '30+ professionally edited images',
        'Multiple outfit changes',
        'Studio or outdoor session',
      ],
    },
    {
      id: 'serv_kids',
      category: 'package',
      title: 'Kids Photography',
      pricingType: 'fixed',
      price: '₹10,000 + GST',
      description:
        'Fun and natural photo sessions designed to capture the joyful personality and milestones of your little ones.',
      image: '/images/portfolio/baby/soul_frame_studio_baby_shoot_2.webp',
      imageAlt: 'Happy toddler laughing near musical instruments in studio',
      features: [
        '1 hour photography session',
        '25+ professionally edited images',
        'Fun props and setups included',
        'Patient and experienced photographers',
      ],
    },
    {
      id: 'serv_fashion',
      category: 'custom',
      title: 'Fashion Photography',
      pricingType: 'custom',
      price: 'Custom Quote',
      description:
        'Professional fashion photography for designers, models, and apparel brands seeking portfolio-quality images.',
      image: '/images/portfolio/fashion/soul_frame_studio_fashion_samitha.webp',
      imageAlt: 'Fashion model in red evening gown with dramatic studio lighting',
      features: [
        'Model portfolio shoots',
        'Brand campaigns',
        'Lookbook photography',
        'Studio or location shoots',
      ],
    },
    {
      id: 'serv_product',
      category: 'custom',
      title: 'Product Photography',
      pricingType: 'custom',
      price: 'Custom Quote',
      description:
        'Clean and professional product photography designed to showcase your products beautifully for e-commerce and marketing.',
      image: '/images/portfolio/ecommerce/soul_frame_studio_ecommerce_shoes.webp',
      imageAlt: 'Luxury watch on marble surface with dramatic lighting and reflections',
      features: [
        'E-commerce product shoots',
        'Multiple angles and setups',
        'White or styled backgrounds',
        'Fast delivery options',
      ],
    },
  ];

  const packages = services.filter((s) => s.category === 'package');
  const customServices = services.filter((s) => s.category === 'custom');

  return (
    <>
      <Header />

      <main className="bg-background min-h-screen pt-20">
        {/* HERO */}
        <section className="max-w-8xl mx-auto px-6 py-16 md:py-24">
          <div className="text-center animate-fade-up">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Professional Photography Studio in Banaswadi, Bangalore
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              SoulFrame Studio offers maternity photography, kids photography, fashion photography
              and product photography in Bangalore. Our professional studio in Banaswadi is designed
              to create comfortable, beautiful and high quality photos for families, brands and
              creators.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Book a Photoshoot
              </a>

              <a
                href="tel:+919731741573"
                className="inline-flex items-center justify-center gap-2 bg-card text-foreground border border-border px-8 py-4 rounded-full font-semibold hover:border-primary transition-all"
              >
                Call Studio
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-3 mt-8 text-sm">
              <span className="bg-card border border-border px-4 py-2 rounded-full">
                Maternity Photography
              </span>

              <span className="bg-card border border-border px-4 py-2 rounded-full">
                Kids Photography
              </span>

              <span className="bg-card border border-border px-4 py-2 rounded-full">
                Fashion Photography
              </span>

              <span className="bg-card border border-border px-4 py-2 rounded-full">
                Product Photography
              </span>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              Trusted by 200+ clients across Bangalore
            </p>
          </div>
        </section>
        {/* How it works */}
        <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">How Our Photoshoot Works</h2>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A simple and comfortable process designed to help you enjoy your photoshoot and get
              beautiful professional photos.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <ProcessStep
              title="Book Your Session"
              text="Choose a suitable date and discuss your ideas with our team."
            />

            <ProcessStep
              title="Plan the Shoot"
              text="We guide you with styling, outfits and creative direction."
            />

            <ProcessStep
              title="Photoshoot Day"
              text="Enjoy a relaxed and guided photoshoot in our professional studio."
            />

            <ProcessStep
              title="Receive Edited Photos"
              text="Professionally edited images delivered in a private online gallery."
            />
          </div>
        </section>
        {/* SIGNATURE PACKAGES */}
        <Reveal>
          <section className="max-w-8xl mx-auto px-6 py-16 md:py-24">
            <div className="text-center mb-14">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Signature Photography Packages
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our most popular photography sessions designed for families and life’s special
                milestones.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {packages.map((service, index) => (
                <ServiceCard key={service.id} service={service} index={index} />
              ))}
            </div>
          </section>
        </Reveal>
        {/* Whats included */}
        <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Every Session Includes</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Feature text="Professional studio lighting setup" />
            <Feature text="Creative direction and posing guidance" />
            <Feature text="High resolution edited photographs" />
            <Feature text="Online gallery for viewing and downloads" />
            <Feature text="Support with outfit and styling ideas" />
            <Feature text="Friendly and comfortable studio environment" />
          </div>
        </section>

        {/* COMMERCIAL SERVICES */}
        <Reveal>
          <section className="max-w-8xl mx-auto px-6 py-16 md:py-24">
            <div className="text-center mb-14">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Commercial & Creative Photography
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Professional photography solutions for brands, creators and businesses. Pricing
                depends on project requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {customServices.map((service, index) => (
                <ServiceCard key={service.id} service={service} index={index} />
              ))}
            </div>
          </section>
        </Reveal>
        {/* Who is it for */}
        <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          <div className="glass-panel rounded-3xl p-10">
            <h2 className="text-4xl font-bold text-center mb-10">
              Who Our Photography Is Perfect For
            </h2>

            <div className="grid md:grid-cols-2 gap-6 text-muted-foreground">
              <p>
                Expecting parents who want to celebrate their maternity journey with elegant
                portraits.
              </p>

              <p>Families who want professional photographs of their children’s milestones.</p>

              <p>Fashion designers and models building their portfolio or brand identity.</p>

              <p>
                Businesses that need professional product images for e-commerce, catalogues or
                marketing.
              </p>
            </div>
          </div>
        </section>
        {/* ADD ONS */}
        {/* <Reveal>
          <section className="max-w-8xl mx-auto px-6 py-16 md:py-24">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Enhance Your Package
              </h2>

              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Add additional services to customize your photography experience.
              </p>
            </div>

            <AddOnsCalculator />
          </section>
        </Reveal> */}

        {/* WHY CHOOSE US */}
        <Reveal>
          <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
            <div className="glass-panel rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-center mb-10">Why Choose Soul Frame Studio</h2>

              <div className="grid md:grid-cols-2 gap-8">
                <Feature text="Professional photography studio in Banaswadi" />
                <Feature text="Comfortable environment for families and kids" />
                <Feature text="High-end lighting and professional equipment" />
                <Feature text="Creative direction and pose guidance" />
                <Feature text="Professionally edited high-quality photos" />
                <Feature text="Trusted by 200+ happy clients" />
              </div>
            </div>
          </section>
        </Reveal>
        <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          <h2 className="text-4xl font-bold text-center mb-10">Frequently Asked Questions</h2>

          <div className="space-y-6">
            <FAQ
              question="How far in advance should I book a photoshoot?"
              answer="We recommend booking at least 1–2 weeks in advance to ensure availability."
            />

            <FAQ
              question="Do you provide outfits for maternity shoots?"
              answer="We provide guidance on styling and can suggest outfits that work beautifully for maternity photography."
            />

            <FAQ
              question="How long does it take to receive edited photos?"
              answer="Edited photographs are typically delivered within 5–7 working days."
            />

            <FAQ
              question="Do you offer outdoor photoshoots?"
              answer="Yes. We offer both studio and outdoor sessions depending on the photography style."
            />
          </div>
        </section>
        {/* CTA */}
        <Reveal>
          <section className="max-w-8xl mx-auto px-6 py-16 md:py-24">
            <div className="glass-panel rounded-3xl p-12 text-center">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Limited Weekend Slots Available
              </h2>

              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Tell us about your idea and we will design a photography package tailored
                specifically for your needs.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+919731741573"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <Icon name="PhoneIcon" size={20} />
                  <span>Call Now</span>
                </a>

                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-card text-foreground border-2 border-border px-8 py-4 rounded-full font-semibold hover:border-primary transition-all"
                >
                  <Icon name="EnvelopeIcon" size={20} />
                  <span>Contact Us</span>
                </a>
              </div>
            </div>
          </section>
        </Reveal>
      </main>

      <Footer />
      <Script
        id="localbusiness-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(createLocalBusinessSchema()),
        }}
      />
    </>
  );
}

function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <div
      className="glass-panel rounded-3xl overflow-hidden hover:shadow-2xl transition-all"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="relative w-full aspect-[4/5] overflow-hidden">
        <AppImage
          src={service.image}
          alt={service.imageAlt}
          fill
          sizes="(max-width:768px) 100vw, 50vw"
          className="object-cover grayscale-hover transition-all duration-500"
        />

        <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
          {service.pricingType === 'fixed' ? `Starting at ${service.price}` : service.price}
        </div>
      </div>

      <div className="p-8">
        <h3 className="text-2xl font-bold text-foreground mb-3">{service.title}</h3>

        <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>

        <ul className="space-y-2 mb-6">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <Icon name="CheckCircleIcon" size={18} className="text-primary flex-shrink-0" />
              <span className="text-sm text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>

        <a
          href={`https://wa.me/919731741573?text=${encodeURIComponent(
            `Hi, I would like to enquire about your ${service.title} service.`
          )}`}
          className="flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 rounded-full font-semibold hover:shadow-lg transition-all w-full"
        >
          <span>{service.pricingType === 'fixed' ? 'Check Availability' : 'Get Quote'}</span>

          <Icon name="ArrowRightIcon" size={18} />
        </a>
      </div>
    </div>
  );
}

function Feature({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3">
      <Icon name="CheckCircleIcon" size={22} className="text-primary" />
      <span className="text-muted-foreground">{text}</span>
    </div>
  );
}

function ProcessStep({ title, text }: { title: string; text: string }) {
  return (
    <div className="glass-panel rounded-2xl p-6">
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{text}</p>
    </div>
  );
}
