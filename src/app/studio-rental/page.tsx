import AppImage from '@/components/ui/AppImage';
import Image from 'next/image';
import Icon from '@/components/ui/AppIcon';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import FloorPlan from './components/FloorPlan';
import { FAQ } from '@/components/ui/FAQ';
import EquipmentList from './components/EquipmentList';
import AvailabilityCalendar from './components/AvailabilityCalendar';
import type { Metadata } from 'next';
import Reveal from '../../Reveal';
import { createLocalBusinessSchema, createStudioZonesSchema, createFAQSchema } from '@/lib/schema';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Cyclorama Studio Rental in Banaswadi, Bangalore | SoulFrame Studio',
  description:
    'Professional cyclorama infinity wall studio rental in Banaswadi, Bangalore. Ideal for product photography, fashion shoots, ecommerce catalog shoots and brand campaigns. Studio rental starts from ₹2,000 + GST for a single set and ₹2,500 + GST per hour for full studio access.',

  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
  },
  alternates: {
    canonical: 'https://www.soulframestudio.in/studio-rental',
  },
};
export default function StudioRental() {
  const zones = [
    {
      id: 'zone_cyclorama',
      name: 'Cyclorama Infinity Wall',
      dimensions: '16ft x 16ft',
      image: '/images/studio/soul_frame_studio_cyclorama_with_lights.webp',
    },
    {
      id: 'zone_seating_setup',
      name: 'Seating Setup',
      dimensions: '10ft x 8ft',
      image: '/images/studio/soul_frame_studio_seating_setup.webp',
    },
    {
      id: 'zone_pantry',
      name: 'Pantry & Toilet',
      dimensions: '6ft x 5ft',
      image: '/images/studio/soul_frame_studio_cyclorama_with_lights.webp',
    },
    {
      id: 'zone_equipment',
      name: 'Equipment Storage',
      dimensions: '6ft x 5ft',
      image: '/images/studio/soul_frame_studio_cyclorama_with_lights.webp',
    },
    {
      id: 'zone_abstract_wall',
      name: 'Black Abstract Wall',
      dimensions: '10ft x 10ft',
      image: '/images/studio/soul_frame_studio_black_abstract_wall.webp',
    },
    {
      id: 'zone_makeup',
      name: 'Makeup Room',
      dimensions: '7ft x 7ft',
      image: '/images/studio/soul_frame_studio_makeup_room.webp',
    },
    {
      id: 'zone_changing_room',
      name: 'Changing Room',
      dimensions: '5ft x 5ft',
      image: '/images/studio/soul_frame_studio_cyclorama_with_lights.webp',
    },
    {
      id: 'zone_royal_setup',
      name: 'Royal Indian Setup',
      dimensions: '12ft x 10ft',
      image: '/images/studio/soul_frame_studio_royal_indian_arch.webp',
    },
    {
      id: 'zone_orange_niche_wall',
      name: 'Niche Wall Setup',
      dimensions: '9ft x 10ft',
      image: '/images/studio/soul_frame_studio_niche_wall.webp',
    },
    {
      id: 'zone_staircase',
      name: 'Abstract Staircase Setup',
      dimensions: '10ft x 2ft',
      image: '/images/studio/soul_frame_studio_staircase.webp',
    },
    {
      id: 'zone_office',
      name: 'Reception / Office',
      dimensions: '9ft x 11ft',
      image: '/images/studio/soul_frame_studio_cyclorama_with_lights.webp',
    },
    {
      id: 'zone_waiting',
      name: 'Waiting Lounge Setup',
      dimensions: '9ft x 6ft',
      image: '/images/studio/soul_frame_studio_waiting_lounge.webp',
    },
    {
      id: 'zone_floating_1',
      name: 'Movable Background 1',
      dimensions: '8ft x 8ft',
      image: '/images/studio/soul_frame_studio_movable_background_1.webp',
    },
    {
      id: 'zone_floating_2',
      name: 'Movable Background 2',
      dimensions: '8ft x 8ft',
      image: '/images/studio/soul_frame_studio_movable_background_2.webp',
    },
    {
      id: 'zone_floating_3',
      name: 'Movable Background 3',
      dimensions: '8ft x 8ft',
      image: '/images/studio/soul_frame_studio_movable_background_3.webp',
    },
    {
      id: 'zone_floating_4',
      name: 'Movable Background 4',
      dimensions: '8ft x 8ft',
      image: '/images/studio/soul_frame_studio_movable_background_4.webp',
    },
    {
      id: 'zone_floating_5',
      name: 'Movable Background 5',
      dimensions: '8ft x 8ft',
      image: '/images/studio/soul_frame_studio_movable_background_5.webp',
    },
    {
      id: 'zone_floating_6',
      name: 'Movable Background 6',
      dimensions: '8ft x 8ft',
      image: '/images/studio/soul_frame_studio_movable_background_6.webp',
    },
  ];
  const studioImages = [
    {
      id: 'soul_frame_studio_waiting_lounge',
      src: '/images/studio/soul_frame_studio_waiting_lounge.webp',
      alt: 'Soul Frame Studio waiting lounge cum a aesthetic wall at Soul Frame Studio Banswadi Bangalore',
    },
    {
      id: 'soul_frame_studio_staircase',
      src: '/images/studio/soul_frame_studio_staircase.webp',
      alt: 'An abstract staircase wall for fashion photography at Soul Frame Studio Banswadi Bangalore',
    },
    {
      id: 'soul_frame_studio_royal_indian_background',
      src: '/images/studio/soul_frame_studio_royal_indian_arch.webp',
      alt: 'A brand new indian architecture background for your best photographs at Soul Frame Studio Banswadi Bangalore',
    },
    {
      id: 'studio_4',
      src: 'https://img.rocket.new/generatedImages/rocket_gen_img_105447ff1-1768043416526.png',
      alt: 'Comfortable waiting lounge area with seating and magazines',
    },
  ];

  const pricingPlans = [
    {
      id: 'price_hourly',
      title: 'Per Hour Studio Rental',
      price: '₹2,500',
      duration: 'per hour + GST',
      features: [
        'Full studio access',
        '2 basic photography lights for photoshoots',
        '1 video light for video shoots',
        'Access to all props available in the studio',
      ],
    },
    {
      id: 'price_hourly_single_set',
      title: 'Per Hour Single Set Rental',
      price: '₹2,000',
      duration: 'per hour + GST',
      features: [
        'Any one set of your choice',
        '2 basic photography lights for photoshoots',
        '1 video light for video shoots',
        'Access to all props available in the studio',
      ],
    },
    {
      id: 'price_two_hour',
      title: '2 Hour Studio Rental',
      price: '₹4,000',
      duration: '2 hours + GST',
      features: [
        'Full studio access',
        '2 basic photography lights for photoshoots',
        '1 video light for video shoots',
        'Access to all props available in the studio',
      ],
    },
    {
      id: 'price_two_hour_single_set',
      title: '2 Hour Single Set Rental',
      price: '₹3,500',
      duration: '2 hours + GST',
      features: [
        'Any one set of your choice',
        '2 basic photography lights for photoshoots',
        '1 video light for video shoots',
        'Access to all props available in the studio',
      ],
    },
    {
      id: 'price_four_hour',
      title: '4 Hour Studio Rental',
      price: '₹8,000',
      duration: '4 hours + GST',
      features: [
        'Access to all sets in the studio',
        '4 photography lights included',
        'Godox Litemons 300W x 2 for video',
        'Softboxes and studio props included',
      ],
      popular: true,
    },
    {
      id: 'price_four_hour_single_set',
      title: '4 Hour Single Set Rental',
      price: '₹7,500',
      duration: '4 hours + GST',
      features: [
        'Access to one selected set',
        '4 photography lights included',
        'Godox Litemons 300W x 2 for video',
        'Softboxes and studio props included',
      ],
    },
    {
      id: 'price_half_day',
      title: 'Half Day Studio Rental',
      price: '₹15,000',
      duration: '10:00 AM - 4:00 PM + GST',
      features: [
        'Access to all sets in the studio',
        '5 photography lights included',
        'Godox Litemons 300W x 2 and LC500 video lights',
        'Softboxes and studio props included',
      ],
    },
    {
      id: 'price_half_day_single_set',
      title: 'Half Day Single Set Rental',
      price: '₹13,500',
      duration: '10:00 AM - 4:00 PM + GST',
      features: [
        'Designed for one selected set',
        '5 photography lights included',
        'Godox Litemons 300W x 2 and LC500 video lights',
        'Softboxes and studio props included',
      ],
    },
    {
      id: 'price_full_day',
      title: 'Full Day Studio Rental',
      price: '₹21,500',
      duration: '10:00 AM - 7:00 PM + GST',
      features: [
        'Access to all sets and all props in the studio',
        '6 photography lights included',
        'Godox Litemons 300W x 2 and LC500 video lights',
        'Softboxes included for the full production day',
      ],
    },
    {
      id: 'price_full_day_single_set',
      title: 'Full Day Single Set Rental',
      price: '₹15,000',
      duration: '10:00 AM - 7:00 PM + GST',
      features: [
        'Built for one hero set across the full day',
        '6 photography lights included',
        'Godox Litemons 300W x 2 and LC500 video lights',
        'Softboxes and props available during the booking',
      ],
    },
  ];

  return (
    <>
      <Header />
      <main className="bg-background min-h-screen pt-20">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px]">
          <Image
            src="/images/studio/soul_frame_studio_cyclorama_with_lights.webp"
            alt="Fully equipped cyclorama infinity wall studio rental with professional lighting, backdrops and equipment for product photography, fashion shoots and brand campaigns with 20+ setups in Banaswadi Bangalore"
            fill
            priority
            sizes="(max-width:768px) 100vw, 50vw"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-foreground/60" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <div className="max-w-4xl animate-fade-up">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Cyclorama Photography Studio Rental in Banaswadi, Bangalore
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Fully equipped cyclorama infinity wall studio rental with professional lighting,
                backdrops and equipment for product photography, fashion shoots and brand campaigns.
              </p>
              <a
                href="https://wa.me/919731741573?text=I'd like to inquire about studio rental"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <span>Book Studio</span>
                <Icon name="ArrowRightIcon" size={20} />
              </a>
            </div>
          </div>
        </section>

        {/* Studio Gallery */}
        <Reveal>
          <section className="max-w-8xl mx-auto px-6 py-16 md:py-24">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Studio Spaces</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore our well-equipped photography studio
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {studioImages.map((image, index) => (
                <div
                  key={image.id}
                  className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <AppImage
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                  />
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        {/* Floor Plan */}
        <Reveal>
          <section className="max-w-8xl mx-auto px-6 py-16 md:py-24">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Interactive Floor Plan
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Click on different areas to view dimensions and details
              </p>
            </div>

            <FloorPlan zones={zones} />
          </section>
        </Reveal>

        {/* Equipment List */}
        <Reveal>
          <section className="max-w-8xl mx-auto px-6 py-16 md:py-24 ">
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
        </Reveal>

        {/* Pricing */}
        <Reveal>
          <section className="max-w-8xl mx-auto px-6 py-16 md:py-24">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Rental Pricing
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Studio pricing and inclusions updated from our current rate card. All prices are
                exclusive of GST.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {pricingPlans.map((plan) => (
                <div
                  key={plan.id}
                  className={`glass-panel rounded-2xl p-8 ${plan.popular ? 'ring-2 ring-primary shadow-2xl' : ''}`}
                >
                  {plan.popular && (
                    <div className="inline-block bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-semibold mb-4">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-foreground mb-2">{plan.title}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                    <span className="text-muted-foreground ml-2">/ {plan.duration}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={`${plan.id}_feat_${index}`} className="flex items-start gap-2">
                        <Icon
                          name="CheckCircleIcon"
                          size={20}
                          className="text-primary flex-shrink-0 mt-0.5"
                        />
                        <span className="text-muted-foreground text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`https://wa.me/919731741573?text=I'd like to book the ${plan.title} package`}
                    className={`block w-full text-center py-3 rounded-full font-semibold transition-all ${
                      plan.popular
                        ? 'bg-primary text-primary-foreground hover:shadow-lg'
                        : 'bg-muted text-foreground hover:bg-primary/10'
                    }`}
                  >
                    Book Now
                  </a>
                </div>
              ))}
            </div>
          </section>
        </Reveal>
        {/* SEO content */}
        <Reveal>
          <section className="max-w-6xl mx-auto px-6 py-20">
            <div className="bg-muted/40 rounded-3xl p-10 md:p-14 border border-border">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
                Commercial Photography Studio in Banaswadi, Bangalore
              </h2>

              <div className="max-w-4xl mx-auto space-y-6 text-muted-foreground leading-relaxed text-sm md:text-base">
                <p>
                  SoulFrame Studio is a fully equipped commercial photography studio located in
                  Banaswadi, North Bangalore designed for brands, ecommerce businesses and marketing
                  agencies. Our studio features a large
                  <strong> 16ft × 16ft cyclorama infinity wall</strong>, multiple themed shooting
                  setups, movable backgrounds and a dedicated makeup room, providing a flexible
                  environment for professional photo and video productions.
                </p>

                <p>
                  The studio layout includes a royal Indian arch setup, niche wall background,
                  abstract staircase setup, seating lounge and multiple movable background stations.
                  These setups allow photographers and creative teams to produce diverse visuals
                  within a single studio environment without changing locations during a shoot.
                </p>

                <p>
                  Brands and agencies commonly use SoulFrame Studio for
                  <strong>
                    {' '}
                    product photography, ecommerce catalog shoots, fashion campaigns, food
                    photography and advertising visuals
                  </strong>
                  . The cyclorama infinity wall enables clean product photography for marketplaces
                  such as Amazon, Flipkart and Shopify while the themed setups support lifestyle
                  photography and brand storytelling.
                </p>

                <p>
                  Photographers, content creators and production teams can rent the entire studio
                  space or specific shooting setups depending on their production requirements.
                  Located in Banaswadi with easy access from HRBR Layout, Kalyan Nagar and
                  Indiranagar, SoulFrame Studio has become a preferred photography studio rental
                  space for commercial shoots in North Bangalore.
                </p>
              </div>
            </div>
          </section>
        </Reveal>
        <Reveal>
          <section className="max-w-5xl mx-auto px-6 py-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-10">
              Studio Rental – Frequently Asked Questions
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <FAQ
                question="Where is your photography studio located in Bangalore?"
                answer={
                  <>
                    SoulFrame Studio is located in <strong>Banaswadi, North Bangalore</strong>
                    with easy access from HRBR Layout, Kalyan Nagar, Indiranagar and other major
                    commercial areas of the city.
                  </>
                }
              />

              <FAQ
                question="Do you offer cyclorama studio rental in Bangalore?"
                answer={
                  <>
                    Yes. Our studio features a large{' '}
                    <strong>16ft × 16ft cyclorama infinity wall</strong>
                    suitable for product photography, fashion shoots, brand campaigns and commercial
                    video productions.
                  </>
                }
              />

              <FAQ
                question="What types of shoots can be done in your studio?"
                answer={
                  <>
                    Our studio is commonly used for product photography, ecommerce catalog shoots,
                    fashion campaigns, food photography, advertising visuals and content creation
                    for brands and marketing agencies.
                  </>
                }
              />

              <FAQ
                question="Do you provide lighting equipment with the studio rental?"
                answer={
                  <>
                    Yes. The studio includes professional lighting equipment, backdrops and multiple
                    shooting setups so photographers and brands can run complete productions within
                    the studio space.
                  </>
                }
              />

              <FAQ
                question="Can brands and agencies book the studio for commercial shoots?"
                answer={
                  <>
                    Absolutely. SoulFrame Studio is designed for brands, ecommerce businesses and
                    marketing agencies looking for a professional photography studio in Bangalore
                    for commercial productions.
                  </>
                }
              />

              <FAQ
                question="Who uses our studio?"
                answer={
                  <>
                    <p>Photographers – bring creative concepts to life.</p>
                    <p>Fashion brands – professional model and campaign shoots.</p>
                    <p>Ecommerce businesses – high quality product catalog photography.</p>
                    <p>Content creators – podcasts, social media and video production.</p>
                  </>
                }
              />
            </div>
          </section>
        </Reveal>

        <Reveal>
          {/* CTA */}
          <section className="max-w-8xl mx-auto px-6 py-16 md:py-24">
            <div className="glass-panel rounded-3xl p-12 text-center">
              <h2 className="text-4xl font-bold text-foreground mb-4">Ready to Book Our Studio?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Contact us today to reserve your preferred time slot
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
                  href="https://wa.me/919731741573"
                  className="inline-flex items-center justify-center gap-2 bg-card text-foreground border-2 border-border px-8 py-4 rounded-full font-semibold hover:border-primary transition-all"
                >
                  <Icon name="ChatBubbleLeftRightIcon" size={20} />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </section>
        </Reveal>
      </main>
      <Script
        id="localbusiness-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(createLocalBusinessSchema()),
        }}
      />

      <Script
        id="studio-layout-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(createStudioZonesSchema(zones)),
        }}
      />

      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(createFAQSchema()),
        }}
      />
      <Footer />
    </>
  );
}
