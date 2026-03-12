import type { Metadata } from "next";
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import PortfolioFilter from './components/PortfolioFilter';
import BookingWidget from './components/BookingWidget';
import StatsCounter from './components/StatsCounter';
import TestimonialsCarousel from './components/TestimonialsCarousel';
import Image from "next/image";
import Script from "next/script"
import { createLocalBusinessSchema } from "@/lib/schema";
import Reveal from '../../Reveal';
export const metadata: Metadata = {
  title: "Commercial Photography Studio & Cyclorama Rental in Bangalore",
  description:
    "SoulFrame Studio is a commercial photography studio in Banaswadi Bangalore offering cyclorama studio rental, product photography, food photography and ecommerce shoots for brands and agencies.",

  alternates: {
    canonical: "https://www.soulframestudio.in"
  },

  robots: {
    index: false,
    follow: true
  },

  openGraph: {
    title:
      "Commercial Photography Studio & Cyclorama Rental in Bangalore",
    description:
      "Cyclorama infinity wall studio rental and commercial photography services for brands in Bangalore.",
    url: "https://www.soulframestudio.in",
  }
};

export default function Homepage() {
  const services = [
    {
      id: 'service_rentals',
      title: 'Studio Rental',
      description: 'Premium studio rental for professional photography and video shoots',
      image: "/images/studio/soul_frame_studio_cyclorama_with_lights.webp",
      imageAlt: 'Premium professional studio with a large Cyclorama and 20+ setups with soft lighting at Soul Frame Studio in Banaswadi Bangalore',

      href: '/studio-rental'
    },
    {
      id: 'service_product',
      title: 'Product Photography',
      description: 'E-commerce photography that drives sales and conversions',
      image: "/images/portfolio/product/soul_frame_studio_product_photography_perfume.webp",
      imageAlt: 'Luxury watch on marble surface with dramatic lighting at Soul Frame Studio in Banaswadi Bangalore',

      href: '/services-pricing#product'
    },
    {
      id: 'service_ecommerce',
      title: 'E-commerce Photography',
      description: 'Professional product photography for online stores and marketing',
      image: "/images/portfolio/ecommerce/soul_frame_studio_ecommerce_portfolio_box.webp",
      imageAlt: 'Product photography setup with studio lighting at Soul Frame Studio in Banaswadi Bangalore',

      href: '/services-pricing#ecommerce'
    },
    {
      id: 'service_fashion',
      title: 'Fashion Shoots',
      description: 'Professional fashion photography for designers and models',
      image: "/images/portfolio/fashion/soul_frame_studio_fashion.webp",
      imageAlt: 'Fashion model in modern indian dresses with studio lighting at Soul Frame Studio in Banaswadi Bangalore',

      href: '/services-pricing#fashion'
    },
    // {
    //   id: 'service_maternity',
    //   title: 'Maternity Photography',
    //   description: 'Celebrate the beauty of motherhood with elegant maternity shoots',
    //   image: "/images/portfolio/maternity/soul_frame_studio_maternity.webp",
    //   imageAlt: 'Expecting mother in red dress with studio lighting at Soul Frame Studio in Banaswadi Bangalore',
    //   price: '₹6,999',
    //   href: '/services-pricing#maternity'
    // },
    // {
    //   id: 'service_kids',
    //   title: 'Kids Photography',
    //   description: 'Capture precious childhood moments that last forever',
    //   image: "/images/portfolio/baby/soul_frame_studio_baby_shoot_1.webp",
    //   imageAlt: 'Lovely kids photography setup with soft lighting at Soul Frame Studio in Banaswadi Bangalore',
    //   price: '₹6,999',
    //   href: '/services-pricing#kids'
    // }
  ];


  const features = [
    {
      id: 'feature_professional',
      icon: 'CameraIcon',
      title: 'Professional Team',
      description: 'Experienced photographers with 5+ years in the industry'
    },
    {
      id: 'feature_studio',
      icon: 'HomeIcon',
      title: 'Premium Studio',
      description: 'State-of-the-art equipment and comfortable shooting space'
    },
    {
      id: 'feature_affordable',
      icon: 'CurrencyRupeeIcon',
      title: 'Affordable Packages',
      description: 'Competitive pricing with flexible payment options'
    },
    {
      id: 'feature_delivery',
      icon: 'ClockIcon',
      title: 'Quick Delivery',
      description: 'Edited photos delivered within 7-10 working days'
    }];


  return (
    <>
      <Header />
      <main className="bg-background min-h-screen pt-20">
        {/* Hero Section */}
        <Reveal>
          <section className="max-w-8xl mx-auto px-6 py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Content */}
              <div className="lg:col-span-7 space-y-8">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                  <Icon name="MapPinIcon" size={16} />
                  <span>Banaswadi, Bangalore Studio</span>
                </div>

                <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                  Commercial Photography Studio & Rental Space<br />
                  <span className="text-primary">Banaswadi, Bangalore</span>
                </h1>

                <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                  Cyclorama Infinity Wall Studio Rental | Product Photography | Food Photography | Ecommerce Shoots for Brands in Bangalore
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:+919731741573"
                    className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 relative overflow-hidden group">

                    <span className="relative z-10">Request Commercial Quote</span>
                    <Icon name="PhoneIcon" size={20} className="relative z-10" />
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-shimmer" />
                  </a>
                  <a
                    href="https://wa.me/919731741573"
                    className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-semibold"
                  >
                    WhatsApp Quote
                  </a>
                </div>

                {/* Mini Stats */}
                <div className="flex flex-wrap gap-8 pt-4">
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      <div className="w-10 h-10 rounded-full border-2 border-background overflow-hidden">
                        <AppImage
                          src="https://img.rocket.new/generatedImages/rocket_gen_img_13fadfdfa-1763295460112.png"
                          alt="Client testimonial photo of woman smiling"
                          className="w-full h-full object-cover" />

                      </div>
                      <div className="w-10 h-10 rounded-full border-2 border-background overflow-hidden">
                        <AppImage
                          src="https://img.rocket.new/generatedImages/rocket_gen_img_1181bfe32-1763295010615.png"
                          alt="Client testimonial photo of man with beard"
                          className="w-full h-full object-cover" />

                      </div>
                      <div className="w-10 h-10 rounded-full border-2 border-background overflow-hidden">
                        <AppImage
                          src="https://img.rocket.new/generatedImages/rocket_gen_img_1243153ce-1764635353842.png"
                          alt="Client testimonial photo of woman in elegant attire"
                          className="w-full h-full object-cover" />

                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">500+ Happy Clients</p>
                      <div className="flex items-center gap-1">
                        <Icon name="StarIcon" size={14} className="text-yellow-400 fill-yellow-400" />
                        <span className="text-xs text-muted-foreground">5.0 (30+ Reviews on Google)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Visual Card */}
              <div className="lg:col-span-5 delay-200">
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/studio/soul_frame_studio_cyclorama_with_lights.webp"
                    alt="Cyclorama infinity wall studio rental in Banaswadi Bangalore"
                    width={1200}
                    height={800}
                    priority
                    sizes="(max-width:768px) 100vw, 50vw"
                    className="w-full h-full object-cover" />

                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />

                  {/* Floating Info Card */}
                  <div className="absolute bottom-6 left-6 right-6 glass-panel rounded-2xl p-4 border border-white/20 animate-float">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-black text-sm font-semibold">Available Today</span>
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
                        <span className="text-black text-xs">Open Now</span>
                      </div>
                    </div>
                    <p className="text-black/80 text-xs">
                      Book your slot for brand shoots, product photography, cyclorama rental and lifestyle shoots in Bangalore.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Reveal>
        {/* Commercial Capabilities Overview */}
        <Reveal>
          <h2 className="text-4xl font-bold text-center mb-10">
            Commercial Photography Capabilities
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="glass-panel p-6 rounded-2xl">
              <Icon name="CameraIcon" size={24} className="text-primary mb-3" />
              <h3 className="font-semibold text-lg mb-2">
                Product Photography
              </h3>
              <p className="text-sm text-muted-foreground">
                Professional ecommerce product photography for D2C brands, Amazon and Shopify sellers in Bangalore. Packages starting from ₹4,999.
              </p>
            </div>

            <div className="glass-panel p-6 rounded-2xl">
              <Icon name="CameraIcon" size={24} className="text-primary mb-3" />
              <h3 className="font-semibold text-lg mb-2">
                Food Photography
              </h3>
              <p className="text-sm text-muted-foreground">
                Restaurant menu photography and advertising visuals for cafes, food brands and cloud kitchens. Packages starting from ₹4,999.
              </p>
            </div>

            <div className="glass-panel p-6 rounded-2xl">
              <Icon name="CameraIcon" size={24} className="text-primary mb-3" />
              <h3 className="font-semibold text-lg mb-2">
                Fashion Campaigns
              </h3>
              <p className="text-sm text-muted-foreground">
                Fashion lookbooks, designer campaigns and model portfolio shoots produced inside our professional studio environment. Packages starting from ₹9,999.
              </p>
            </div>

            <div className="glass-panel p-6 rounded-2xl">
              <Icon name="CameraIcon" size={24} className="text-primary mb-3" />
              <h3 className="font-semibold text-lg mb-2">
                Studio Rental
              </h3>
              <p className="text-sm text-muted-foreground">
                Professional cyclorama infinity wall photography studio rental in Bangalore for photographers, brands and agencies. Starting from ₹3,999.
              </p>
            </div>

          </div>
        </Reveal>
        <Reveal>
          <section className="max-w-8xl mx-auto px-6 py-16 md:py-24">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Commercial Photography Portfolio
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Professional photography services tailored to capture your special moments
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) =>
                <a
                  key={service.id}
                  href={service.href}
                  className="group relative aspect-[16/10] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                  style={{ animationDelay: `${index * 100}ms` }}>

                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    className="w-full h-full object-cover grayscale-hover group-hover:scale-110 transition-all duration-500" />

                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-end justify-between">
                      <div>
                        <h3 className="text-white text-2xl font-bold mb-2">{service.title}</h3>
                        <p className="text-white/80 text-sm mb-3">{service.description}</p>
                      </div>
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-primary transition-all">
                        <Icon name="ArrowRightIcon" size={24} className="text-white" />
                      </div>
                    </div>
                  </div>
                </a>
              )}
            </div>
          </section>
        </Reveal>
        <Reveal>
          {/* Stats Counter */}
          <section className="max-w-8xl mx-auto px-6 py-16 md:py-24">
            <StatsCounter />
          </section>
        </Reveal>
        <Reveal>
          {/* Why Choose Us */}
          <section className="max-w-8xl mx-auto px-6 py-16 md:py-24">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Why Choose Soul Frame Studio
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Experience, quality, and dedication in every frame
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) =>
                <div
                  key={feature.id}
                  className="glass-panel rounded-2xl p-6 hover:shadow-xl transition-all hover:-translate-y-1"
                  style={{ animationDelay: `${index * 100}ms` }}>

                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon name={feature.icon as any} size={28} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </div>
              )}
            </div>
          </section>
        </Reveal>
        <Reveal>
          <section className="max-w-6xl mx-auto px-6 py-20">
            <div className="bg-muted/40 rounded-3xl p-10 md:p-14 border border-border">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
                Commercial Photography Studio in Banaswadi, Bangalore
              </h2>

              <div className="max-w-4xl mx-auto space-y-6 text-muted-foreground leading-relaxed text-sm md:text-base">
                <p>
                  SoulFrame Studio is a fully equipped commercial photography and cyclorama
                  rental space located in Banaswadi, North Bangalore. We specialize in
                  <a href="/services-pricing#product" className="text-primary hover:underline"> product photography in Bangalore</a>,
                  <a href="/services-pricing#food" className="text-primary hover:underline"> food photography</a>,
                  catalog photography and ecommerce product photography
                  <a href="/studio-rental" className="text-primary hover:underline"> professional studio rentals </a>
                  for agencies, D2C brands and marketing teams.
                </p>

                <p>
                  Our infinity wall setup, professional lighting systems and flexible
                  studio layout make us a preferred choice for
                  <a href="/studio-rental" className="text-primary hover:underline"> cyclorama studio rental in Bangalore </a>
                  as well as commercial product and brand photography shoots across
                  Banaswadi, HRBR Layout, Kalyan Nagar and Indiranagar and surrounding North Bangalore business hubs.
                </p>
              </div>
            </div>
          </section>
        </Reveal>
        <Reveal>
          {/* Testimonials */}
          <section className="max-w-8xl mx-auto px-6 py-16 md:py-24">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                What Our Clients Say
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Real experiences from our happy clients
              </p>
            </div>

            <TestimonialsCarousel />
          </section>
        </Reveal>
        {/* Final CTA */}
        <Reveal>
          <section className="max-w-8xl mx-auto px-6 py-16 md:py-24">
            <div className="relative rounded-3xl overflow-hidden">
              <AppImage
                src="https://images.unsplash.com/photo-1603425013520-e0b30e6e37dc"
                alt="Professional photography studio with lighting equipment and backdrop"
                className="w-full h-[400px] object-cover" />

              <div className="absolute inset-0 bg-foreground/70 backdrop-blur-sm" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Ready to build your Brand?
                </h2>
                <p className="text-white/90 text-lg mb-8 max-w-2xl">
                  Book your photography session today and create the strongest presence for your brand with Soul Frame Studio.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:+919731741573"
                    className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">

                    <span>Call Now</span>
                    <Icon name="PhoneIcon" size={20} />
                  </a>
                  <a
                    href="https://wa.me/919731741573"
                    className="inline-flex items-center justify-center gap-2 bg-white text-foreground px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition-all">

                    <span>WhatsApp Us</span>
                    <Icon name="ChatBubbleLeftRightIcon" size={20} />
                  </a>
                </div>
              </div>
            </div>
          </section>
        </Reveal>
        <Reveal>
          {/* FAQs */}
          <section className="max-w-5xl mx-auto px-6 py-16">
            <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
              Frequently Asked Questions
            </h3>

            <div className="space-y-6 text-sm md:text-base">
              <div>
                <h4 className="font-semibold text-foreground">
                  Where is your photography studio located in Bangalore?
                </h4>
                <p className="text-muted-foreground mt-2">
                  Our studio is located in Banaswadi, North Bangalore, easily accessible
                  from HRBR Layout, Kalyan Nagar and Indiranagar.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-foreground">
                  Do you offer cyclorama infinity wall rental?
                </h4>
                <p className="text-muted-foreground mt-2">
                  Yes, we offer a professional cyclorama infinity wall studio setup of 256 sq ft with seamless white backdrop, ideal for product shoots, fashion photography and commercial productions. Our rental includes access to studio lighting, props and basic equipment, making it
                  perfect for brands, agencies and photographers looking for a hassle-free shooting experience in Bangalore.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground">
                  How much does studio rental cost in Bangalore?
                </h4>
                <p className="text-muted-foreground mt-2">
                  Our cyclorama studio rental starts from ₹3,999 and includes lighting equipment and access to multiple studio setups.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground">
                  Do you provide photography services for brands and restaurants?
                </h4>
                <p className="text-muted-foreground mt-2">
                  Yes, we work with brands, food chains, ecommerce businesses and
                  marketing agencies for commercial product and food photography.
                </p>
              </div>
            </div>
          </section>
        </Reveal>
      </main>

      <Footer />
      <BookingWidget />
      <Script
        id="localbusiness-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(createLocalBusinessSchema())
        }}
      />

    </>);

}