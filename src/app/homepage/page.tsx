'use client';
import { useEffect } from 'react';

import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import PortfolioFilter from './components/PortfolioFilter';
import BookingWidget from './components/BookingWidget';
import StatsCounter from './components/StatsCounter';
import TestimonialsCarousel from './components/TestimonialsCarousel';

export default function Homepage() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    if (!reveals.length) return;

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('active')),
      { threshold: 0.1 }
    );
    reveals.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const services = [
  {
    id: 'service_maternity',
    title: 'Maternity Photography',
    description: 'Celebrate the beauty of motherhood with elegant maternity shoots',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_13740548c-1767937841542.png",
    imageAlt: 'Expecting mother in white dress with soft natural lighting',
    price: '₹8,999',
    href: '/services-pricing#maternity'
  },
  {
    id: 'service_kids',
    title: 'Kids Photography',
    description: 'Capture precious childhood moments that last forever',
    image: "https://images.unsplash.com/photo-1556678024-1447f67ce187",
    imageAlt: 'Toddler laughing with colorful balloons',
    price: '₹6,999',
    href: '/services-pricing#kids'
  },
  {
    id: 'service_fashion',
    title: 'Fashion Shoots',
    description: 'Professional fashion photography for designers and models',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1ebb1499a-1767393243643.png",
    imageAlt: 'Fashion model in red evening gown with studio lighting',
    price: '₹12,999',
    href: '/services-pricing#fashion'
  },
  {
    id: 'service_product',
    title: 'Product Photography',
    description: 'E-commerce photography that drives sales and conversions',
    image: "https://images.unsplash.com/photo-1700422626723-c6276ef5b47a",
    imageAlt: 'Luxury watch on marble surface with dramatic lighting',
    price: '₹4,999',
    href: '/services-pricing#product'
  }];


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
        <section className="max-w-8xl mx-auto px-6 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-8 reveal">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Icon name="MapPinIcon" size={16} />
                <span>Based in Bangalore</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Commercial Photography Studio & Rental Space<br />
                <span className="text-primary">Banaswadi, Bangalore</span>
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                Cyclorama Infinity Wall | Product | Food | Ecommerce | Brand Campaign Shoots | Maternity | Kids | Fashion Photography
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+919876543210"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 relative overflow-hidden group">
                  
                  <span className="relative z-10">Request Commercial Quote</span>
                  <Icon name="PhoneIcon" size={20} className="relative z-10" />
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-shimmer" />
                </a>
                <a
                  href="/studio-rental"
                  className="inline-flex items-center justify-center gap-2 bg-card text-foreground border-2 border-border px-8 py-4 rounded-full font-semibold hover:border-primary transition-all">
                  
                  <span>Book Your Slot</span>
                  <Icon name="ArrowRightIcon" size={20} />
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
                      <span className="text-xs text-muted-foreground">5.0 Rating</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Visual Card */}
            <div className="lg:col-span-5 reveal delay-200">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <AppImage
                  src="https://img.rocket.new/generatedImages/rocket_gen_img_1a8f26ebf-1767123516881.png"
                  alt="Professional photographer in studio with camera equipment and lighting setup"
                  className="w-full h-full object-cover" />
                
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />

                {/* Floating Info Card */}
                <div className="absolute bottom-6 left-6 right-6 glass-panel rounded-2xl p-4 border border-white/20 animate-float">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white text-sm font-semibold">Available Today</span>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
                      <span className="text-white text-xs">Open Now</span>
                    </div>
                  </div>
                  <p className="text-white/80 text-xs">
                    Book your slot for maternity, kids, fashion, or product photography
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="max-w-8xl mx-auto px-6 py-16 md:py-24 reveal">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Services
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
              
                <AppImage
                src={service.image}
                alt={service.imageAlt}
                className="w-full h-full object-cover grayscale-hover group-hover:scale-110 transition-all duration-500" />
              
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-end justify-between">
                    <div>
                      <h3 className="text-white text-2xl font-bold mb-2">{service.title}</h3>
                      <p className="text-white/80 text-sm mb-3">{service.description}</p>
                      <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                        <span>Starting at {service.price}</span>
                      </div>
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

        {/* Portfolio Section */}
        <section id="portfolio" className="max-w-8xl mx-auto px-6 py-16 md:py-24 reveal scroll-mt-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Portfolio
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our work across maternity, kids, fashion, and product photography
            </p>
          </div>

          <PortfolioFilter />
        </section>

        {/* Stats Counter */}
        <section className="max-w-8xl mx-auto px-6 py-16 md:py-24 reveal">
          <StatsCounter />
        </section>

        {/* Why Choose Us */}
        <section className="max-w-8xl mx-auto px-6 py-16 md:py-24 reveal">
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

        {/* Testimonials */}
        <section className="max-w-8xl mx-auto px-6 py-16 md:py-24 reveal">
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

        {/* Final CTA */}
        <section className="max-w-8xl mx-auto px-6 py-16 md:py-24 reveal">
          <div className="relative rounded-3xl overflow-hidden">
            <AppImage
              src="https://images.unsplash.com/photo-1603425013520-e0b30e6e37dc"
              alt="Professional photography studio with lighting equipment and backdrop"
              className="w-full h-[400px] object-cover" />
            
            <div className="absolute inset-0 bg-foreground/70 backdrop-blur-sm" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Ready to Capture Your Story?
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl">
                Book your photography session today and preserve these precious memories forever
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+919876543210"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                  
                  <span>Call Now</span>
                  <Icon name="PhoneIcon" size={20} />
                </a>
                <a
                  href="https://wa.me/919876543210"
                  className="inline-flex items-center justify-center gap-2 bg-white text-foreground px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition-all">
                  
                  <span>WhatsApp Us</span>
                  <Icon name="ChatBubbleLeftRightIcon" size={20} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <BookingWidget />
    </>);

}