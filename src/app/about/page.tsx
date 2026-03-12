import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Timeline from './components/Timeline';
import { Metadata } from 'next';
import Reveal from '../../Reveal';

export const metadata: Metadata = {
  title: "About SoulFrame Studio | Commercial Photography Studio Bangalore",

  description:
    "SoulFrame Studio founded by photographer Rishabh Daga is a commercial photography studio in Banaswadi Bangalore specializing in product photography, fashion shoots and ecommerce catalog photography.",

  alternates: {
    canonical: "https://www.soulframestudio.in/about"
  },

  robots: {
    index: false,
    follow: true
  }
};


export default function About() {

  const features = [
    {
      id: 'feat_team',
      icon: 'UserGroupIcon',
      title: 'Professional Team',
      description: 'Experienced photographers with 5+ years in maternity, kids, fashion, and product photography'
    },
    {
      id: 'feat_experience',
      icon: 'StarIcon',
      title: '5+ Years Experience',
      description: '500+ happy clients and counting. Trusted by families and brands across Bangalore'
    },
    {
      id: 'feat_clients',
      icon: 'HeartIcon',
      title: '500+ Happy Clients',
      description: 'Consistently rated 5 stars for quality, professionalism, and customer service'
    },
    {
      id: 'feat_flexible',
      icon: 'MapPinIcon',
      title: 'Studio + On-location',
      description: 'Fully equipped studio in Indiranagar plus on-location shoots across Bangalore'
    }];


  const awards = [
    {
      id: 'award_1',
      name: 'Featured in Bangalore Times',
      logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1003f0796-1770911661645.png",
      logoAlt: 'Newspaper publication logo'
    },
    {
      id: 'award_2',
      name: 'Top Rated on Google',
      logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1de5f9482-1770911660949.png",
      logoAlt: 'Award badge icon'
    },
    {
      id: 'award_3',
      name: 'Wedding Wire Recommended',
      logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1bcb14987-1767146667343.png",
      logoAlt: 'Recognition certificate icon'
    }];


  return (
    <>
      <Header />
      <main className="bg-background min-h-screen pt-20">
        {/* Hero Section */}
        <Reveal>
          <section className="max-w-8xl mx-auto px-6 py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Founder Photo */}
              <div >
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                  <AppImage
                    src="https://img.rocket.new/generatedImages/rocket_gen_img_1d8f9ca7e-1765286043112.png"
                    alt="Studio founder holding camera with warm smile in photography studio"
                    className="w-full h-full object-cover grayscale-hover" />

                </div>
              </div>

              {/* Story */}
              <div className="delay-200 space-y-6">
                <h1 className="text-5xl md:text-6xl font-bold text-foreground">
                  Our Story
                </h1>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Soul Frame Studio was born from a simple passion: capturing authentic moments that tell real stories. Founded in 2020, we started with a vision to provide Bangalore with premium photography services that celebrate life&apos;s precious moments.
                  </p>
                  <p>
                    What began as a small studio has grown into a trusted name for maternity, kids, fashion, and product photography. We believe every photo should preserve not just how you looked, but how you felt in that moment.
                  </p>
                  <p>
                    Today, we&apos;re proud to have served over 500 happy clients, from expecting mothers to fashion designers and e-commerce brands. Our fully equipped studio in Indiranagar combines professional equipment with a comfortable, welcoming atmosphere.
                  </p>
                </div>
                <div className="flex items-center gap-4 pt-4">
                  <div className="w-16 h-0.5 bg-primary" />
                  <p className="text-sm font-semibold text-foreground">Rishabh Daga, Founder</p>
                </div>
              </div>
            </div>
          </section>
        </Reveal>
        <Reveal>
          {/* Mission & Vision */}
          <section className="max-w-8xl mx-auto px-6 py-16 md:py-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="glass-panel rounded-3xl p-8 md:p-12">
                <Icon name="EyeIcon" size={40} className="text-primary mb-6" />
                <h2 className="text-3xl font-bold text-foreground mb-4">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To be Bangalore&apos;s most trusted photography studio, known for capturing authentic moments with artistic excellence and genuine care for every client.
                </p>
              </div>
              <div className="glass-panel rounded-3xl p-8 md:p-12">
                <Icon name="SparklesIcon" size={40} className="text-primary mb-6" />
                <h2 className="text-3xl font-bold text-foreground mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To preserve life&apos;s precious moments through professional photography that combines technical expertise with emotional storytelling, making every client feel valued and beautiful.
                </p>
              </div>
            </div>
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
                What sets us apart from other photography studios
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
          {/* Timeline */}
          <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Our Journey
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Milestones that shaped Soul Frame Studio
              </p>
            </div>

            <Timeline />
          </section>
        </Reveal>
        <Reveal>
          {/* Awards & Recognition */}
          <section className="max-w-8xl mx-auto px-6 py-16 md:py-24">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Awards & Recognition
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                As seen in and recognized by
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {awards.map((award) =>
                <div
                  key={award.id}
                  className="glass-panel rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-xl transition-all">

                  <div className="w-24 h-24 rounded-full overflow-hidden mb-4 grayscale hover:grayscale-0 transition-all">
                    <AppImage
                      src={award.logo}
                      alt={award.logoAlt}
                      className="w-full h-full object-cover" />

                  </div>
                  <p className="text-sm font-medium text-foreground">{award.name}</p>
                </div>
              )}
            </div>
          </section>
        </Reveal>
        <Reveal>
          {/* CTA */}
          <section className="max-w-8xl mx-auto px-6 py-16 md:py-24">
            <div className="glass-panel rounded-3xl p-12 text-center">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Ready to Work With Us?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let&apos;s create beautiful memories together. Book your photography session today
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/services-pricing"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">

                  <span>View Services</span>
                  <Icon name="ArrowRightIcon" size={20} />
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-card text-foreground border-2 border-border px-8 py-4 rounded-full font-semibold hover:border-primary transition-all">

                  <span>Contact Us</span>
                  <Icon name="EnvelopeIcon" size={20} />
                </a>
              </div>
            </div>
          </section>
        </Reveal>
      </main>

      <Footer />
    </>);

}