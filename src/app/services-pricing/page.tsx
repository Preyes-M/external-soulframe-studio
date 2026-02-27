'use client';
import { useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import PackageComparison from './components/PackageComparison';
import AddOnsCalculator from './components/AddOnsCalculator';

export default function ServicesPricing() {
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
    id: 'serv_maternity',
    category: 'maternity',
    title: 'Maternity Photography',
    description: 'Celebrate the beauty of motherhood with elegant maternity shoots that capture this precious time',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_13740548c-1767937841542.png",
    imageAlt: 'Expecting mother in white dress with soft natural lighting and flowers',
    startingPrice: '₹8,999',
    features: ['1-2 hour session', '30+ edited photos', 'Multiple outfit changes', 'Studio or outdoor']
  },
  {
    id: 'serv_kids',
    category: 'kids',
    title: 'Kids Photography',
    description: 'Capture precious childhood moments with fun, engaging photo sessions designed for little ones',
    image: "https://images.unsplash.com/photo-1550803829-34e62702d5bb",
    imageAlt: 'Happy toddler laughing with colorful balloons in studio',
    startingPrice: '₹6,999',
    features: ['1 hour session', '25+ edited photos', 'Props included', 'Patient photographers']
  },
  {
    id: 'serv_fashion',
    category: 'fashion',
    title: 'Fashion Photography',
    description: 'Professional fashion photography for designers, models, and brands seeking portfolio-quality images',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1ebb1499a-1767393243643.png",
    imageAlt: 'Fashion model in red evening gown with dramatic studio lighting',
    startingPrice: '₹12,999',
    features: ['2-3 hour session', '40+ edited photos', 'Multiple looks', 'Professional styling advice']
  },
  {
    id: 'serv_product',
    category: 'product',
    title: 'Product Photography',
    description: 'E-commerce photography that drives sales with clean, professional product images on white background',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f3519791-1765335465779.png",
    imageAlt: 'Luxury watch on marble surface with dramatic lighting and reflections',
    startingPrice: '₹4,999',
    features: ['Up to 20 products', 'Multiple angles', 'White background', 'Same-day delivery option']
  }];


  return (
    <>
      <Header />
      <main className="bg-background min-h-screen pt-20">
        {/* Hero Section */}
        <section className="max-w-8xl mx-auto px-6 py-16 md:py-24">
          <div className="text-center animate-fade-up">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Services & Pricing
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Preserve these memories forever with professional photography packages designed for your needs
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="max-w-8xl mx-auto px-6 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) =>
            <div
              key={service.id}
              id={service.category}
              className="glass-panel rounded-3xl overflow-hidden hover:shadow-2xl transition-all reveal scroll-mt-24"
              style={{ animationDelay: `${index * 100}ms` }}>
              
                <div className="relative aspect-[16/10]">
                  <AppImage
                  src={service.image}
                  alt={service.imageAlt}
                  className="w-full h-full object-cover grayscale-hover transition-all duration-500" />
                
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                    Starting at {service.startingPrice}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) =>
                  <li key={`${service.id}_feat_${idx}`} className="flex items-center gap-2">
                        <Icon name="CheckCircleIcon" size={18} className="text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                  )}
                  </ul>
                  <a
                  href={`https://wa.me/919876543210?text=I'm interested in ${service.title}`}
                  className="flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 rounded-full font-semibold hover:shadow-lg transition-all w-full">
                  
                    <span>Book Now</span>
                    <Icon name="ArrowRightIcon" size={18} />
                  </a>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Package Comparison */}
        <section className="max-w-8xl mx-auto px-6 py-16 md:py-24 reveal">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Compare Packages
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect package for your photography needs
            </p>
          </div>

          <PackageComparison />
        </section>

        {/* Add-Ons */}
        <section className="max-w-8xl mx-auto px-6 py-16 md:py-24 reveal">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Enhance Your Package
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Add extra services to create your perfect photography experience
            </p>
          </div>

          <AddOnsCalculator />
        </section>

        {/* CTA */}
        <section className="max-w-8xl mx-auto px-6 py-16 md:py-24 reveal">
          <div className="glass-panel rounded-3xl p-12 text-center">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Need a Custom Package?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us to create a personalized photography package that fits your specific requirements
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919876543210"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                
                <Icon name="PhoneIcon" size={20} />
                <span>Call Now</span>
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-card text-foreground border-2 border-border px-8 py-4 rounded-full font-semibold hover:border-primary transition-all">
                
                <Icon name="EnvelopeIcon" size={20} />
                <span>Contact Us</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>);

}