'use client';

import { useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';
import Header from '@/components/common/Header';
import { FaYoutube, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Footer from '@/components/common/Footer';
import ContactForm from './components/ContactForm';
import FAQAccordion from './components/FAQAccordion';

export default function ContactPageContent() {
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

  const contactInfo = [
    {
      id: 'contact_phone',
      icon: 'PhoneIcon',
      title: 'Phone',
      value: '+91 97317 41573',
      link: 'tel:+919731741573',
      description: 'Mon-Sat, 10 AM - 7 PM',
    },
    {
      id: 'contact_whatsapp',
      icon: 'ChatBubbleLeftRightIcon',
      title: 'WhatsApp',
      value: 'Message Us',
      link: 'https://wa.me/919731741573',
      description: 'Quick response guaranteed',
    },
    {
      id: 'contact_email',
      icon: 'EnvelopeIcon',
      title: 'Email',
      value: 'soulframestudiobyrd@gmail.com',
      link: 'mailto:soulframestudiobyrd@gmail.com',
      description: 'We reply within 24 hours',
    },
    {
      id: 'contact_location',
      icon: 'MapPinIcon',
      title: 'Location',
      value: 'Banaswadi, Bangalore',
      link: 'https://maps.app.goo.gl/m782gmfhWgEsy9sm9',
      description: 'Karnataka 560043',
    },
  ];

  const hours = [
    { id: 'hours_mon', day: 'Monday', time: '10:00 AM - 7:00 PM' },
    { id: 'hours_tue', day: 'Tuesday', time: '10:00 AM - 7:00 PM' },
    { id: 'hours_wed', day: 'Wednesday', time: '10:00 AM - 7:00 PM' },
    { id: 'hours_thu', day: 'Thursday', time: '10:00 AM - 7:00 PM' },
    { id: 'hours_fri', day: 'Friday', time: '10:00 AM - 7:00 PM' },
    { id: 'hours_sat', day: 'Saturday', time: '10:00 AM - 7:00 PM' },
    { id: 'hours_sun', day: 'Sunday', time: 'Closed' },
  ];

  const socialLinks = [
    {
      id: 'social_instagram',
      icon: FaInstagram,
      href: 'https://www.instagram.com/soulframestudiobyrd?igsh=Y2ZzdWdrMXZhZ3Ix',
      label: 'Instagram',
    },
    // { id: 'social_facebook', icon: 'UserGroupIcon', href: 'https://facebook.com/soulframestudio', label: 'Facebook' },
    {
      id: 'social_youtube',
      icon: FaYoutube,
      href: 'https://www.youtube.com/@soulframestudiobyrd?si=3MjjQlDOmBovCw1G',
      label: 'Youtube',
    },
    {
      id: 'social_linkedin',
      icon: FaLinkedin,
      href: 'https://www.linkedin.com/in/soulframe-studio-2827083b5',
      label: 'LinkedIn',
    },
  ];

  return (
    <>
      <Header />
      <main className="bg-background min-h-screen pt-20">
        <section className="max-w-8xl mx-auto px-6 py-16 md:py-24">
          <div className="text-center animate-fade-up">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Let&apos;s Capture Your Story
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get in touch to book your photography session or inquire about our services
            </p>
          </div>
        </section>

        <section className="max-w-8xl mx-auto px-6 py-8 reveal">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <a
                key={info.id}
                href={info.link}
                target={info.link.startsWith('http') ? '_blank' : undefined}
                rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="glass-panel rounded-2xl p-6 hover:shadow-xl transition-all hover:-translate-y-1 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  <Icon
                    name={info.icon as never}
                    size={24}
                    className="text-primary group-hover:text-primary-foreground"
                  />
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-1">{info.title}</h3>
                <p className="text-foreground font-medium mb-1">{info.value}</p>
                <p className="text-xs text-muted-foreground">{info.description}</p>
              </a>
            ))}
          </div>
        </section>

        <section className="max-w-8xl mx-auto px-6 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="reveal">
              <h2 className="text-3xl font-bold text-foreground mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>

            <div className="reveal delay-200 space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Visit Our Studio</h2>
                <div className="glass-panel rounded-3xl overflow-hidden">
                  <div className="aspect-video bg-muted relative">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8811!2d77.6412!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzE3LjgiTiA3N8KwMzgnMjguMyJF!5e0!3m2!1sen!2sin!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Soul Frame Studio Location Map"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-start gap-3 mb-4">
                      <Icon
                        name="MapPinIcon"
                        size={24}
                        className="text-primary flex-shrink-0 mt-1"
                      />
                      <div>
                        <p className="font-medium text-foreground">Soul Frame Studio</p>
                        <p className="text-sm text-muted-foreground">
                          Banaswadi, Bangalore
                          <br />
                          Karnataka 560043, India
                        </p>
                        <a
                          href="https://maps.app.goo.gl/m782gmfhWgEsy9sm9"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary text-sm font-medium hover:underline inline-flex items-center gap-1 mt-2"
                        >
                          <span>Get Directions</span>
                          <Icon name="ArrowTopRightOnSquareIcon" size={14} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-panel rounded-3xl p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Icon name="ClockIcon" size={24} className="text-primary" />
                  <span>Studio Hours</span>
                </h3>
                <div className="space-y-2">
                  {hours.map((hour) => (
                    <div
                      key={hour.id}
                      className="flex justify-between items-center py-2 border-b border-border last:border-0"
                    >
                      <span className="text-sm text-muted-foreground">{hour.day}</span>
                      <span
                        className={`text-sm font-medium ${hour.time === 'Closed' ? 'text-error' : 'text-foreground'}`}
                      >
                        {hour.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-panel rounded-3xl p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.id}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110"
                        aria-label={social.label}
                      >
                        <Icon size={24} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-6 py-16 md:py-24 reveal">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about our photography services
            </p>
          </div>

          <FAQAccordion />
        </section>
      </main>

      <Footer />
    </>
  );
}
