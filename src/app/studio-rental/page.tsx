'use client';
import { useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import FloorPlan from './components/FloorPlan';
import EquipmentList from './components/EquipmentList';
import AvailabilityCalendar from './components/AvailabilityCalendar';

export default function StudioRental() {
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

  const studioImages = [
  {
    id: 'studio_1',
    src: "https://img.rocket.new/generatedImages/rocket_gen_img_1408ce8e4-1767456938177.png",
    alt: 'Main shooting area with professional lighting equipment and white backdrop'
  },
  {
    id: 'studio_2',
    src: "https://img.rocket.new/generatedImages/rocket_gen_img_1408ce8e4-1767456938177.png",
    alt: 'Studio lighting setup with softboxes and umbrella reflectors'
  },
  {
    id: 'studio_3',
    src: "https://img.rocket.new/generatedImages/rocket_gen_img_1300e209f-1770911658722.png",
    alt: 'Backdrop section with multiple color options and posing stool'
  },
  {
    id: 'studio_4',
    src: "https://img.rocket.new/generatedImages/rocket_gen_img_105447ff1-1768043416526.png",
    alt: 'Comfortable waiting lounge area with seating and magazines'
  }];


  const pricingPlans = [
  {
    id: 'price_hourly',
    title: 'Hourly',
    price: '₹1,500',
    duration: 'per hour',
    features: [
    'Access to full studio space',
    'All lighting equipment',
    'Backdrop options included',
    'Minimum 2 hours booking']

  },
  {
    id: 'price_halfday',
    title: 'Half Day',
    price: '₹5,500',
    duration: '4 hours',
    features: [
    'Everything in hourly',
    '10% discount applied',
    'Free equipment setup assistance',
    'Flexible timing slots'],

    popular: true
  },
  {
    id: 'price_fullday',
    title: 'Full Day',
    price: '₹9,999',
    duration: '8 hours',
    features: [
    'Everything in half day',
    '25% discount applied',
    'Priority booking',
    'Extended hours available']

  }];


  return (
    <>
      <Header />
      <main className="bg-background min-h-screen pt-20">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px]">
          <AppImage
            src="https://img.rocket.new/generatedImages/rocket_gen_img_1408ce8e4-1767456938177.png"
            alt="Professional photography studio with lighting equipment and backdrop setup"
            className="w-full h-full object-cover" />
          
          <div className="absolute inset-0 bg-foreground/60" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <div className="max-w-4xl animate-fade-up">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Rent Our Premium Studio Space
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Fully equipped photography studio with professional lighting, backdrops, and equipment
              </p>
              <a
                href="https://wa.me/919876543210?text=I'd like to inquire about studio rental"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                
                <span>Book Studio</span>
                <Icon name="ArrowRightIcon" size={20} />
              </a>
            </div>
          </div>
        </section>

        {/* Studio Gallery */}
        <section className="max-w-8xl mx-auto px-6 py-16 md:py-24 reveal">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Studio Spaces
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our well-equipped photography studio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {studioImages.map((image, index) =>
            <div
              key={image.id}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
              style={{ animationDelay: `${index * 100}ms` }}>
              
                <AppImage
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500" />
              
              </div>
            )}
          </div>
        </section>

        {/* Floor Plan */}
        <section className="max-w-8xl mx-auto px-6 py-16 md:py-24 reveal">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Interactive Floor Plan
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Click on different areas to view dimensions and details
            </p>
          </div>

          <FloorPlan />
        </section>

        {/* Equipment List */}
        <section className="max-w-8xl mx-auto px-6 py-16 md:py-24 reveal">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Available Equipment
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional gear included with your rental
            </p>
          </div>

          <EquipmentList />
        </section>

        {/* Pricing */}
        <section className="max-w-8xl mx-auto px-6 py-16 md:py-24 reveal">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Rental Pricing
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Flexible pricing options for your photography needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan) =>
            <div
              key={plan.id}
              className={`glass-panel rounded-2xl p-8 ${
              plan.popular ? 'ring-2 ring-primary shadow-2xl' : ''}`
              }>
              
                {plan.popular &&
              <div className="inline-block bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-semibold mb-4">
                    Most Popular
                  </div>
              }
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.title}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-primary">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">/ {plan.duration}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) =>
                <li key={`${plan.id}_feat_${index}`} className="flex items-start gap-2">
                      <Icon name="CheckCircleIcon" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground text-sm">{feature}</span>
                    </li>
                )}
                </ul>
                <a
                href={`https://wa.me/919876543210?text=I'd like to book the ${plan.title} package`}
                className={`block w-full text-center py-3 rounded-full font-semibold transition-all ${
                plan.popular ?
                'bg-primary text-primary-foreground hover:shadow-lg' :
                'bg-muted text-foreground hover:bg-primary/10'}`
                }>
                
                  Book Now
                </a>
              </div>
            )}
          </div>
        </section>

        {/* Availability Calendar */}
        <section className="max-w-4xl mx-auto px-6 py-16 md:py-24 reveal">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Check Availability
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Select a date to book the studio
            </p>
          </div>

          <AvailabilityCalendar />
        </section>

        {/* CTA */}
        <section className="max-w-8xl mx-auto px-6 py-16 md:py-24 reveal">
          <div className="glass-panel rounded-3xl p-12 text-center">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Ready to Book Our Studio?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us today to reserve your preferred time slot
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919876543210"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                
                <Icon name="PhoneIcon" size={20} />
                <span>Call Now</span>
              </a>
              <a
                href="https://wa.me/919876543210"
                className="inline-flex items-center justify-center gap-2 bg-card text-foreground border-2 border-border px-8 py-4 rounded-full font-semibold hover:border-primary transition-all">
                
                <Icon name="ChatBubbleLeftRightIcon" size={20} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>);

}