'use client';

import React from 'react';

import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  alt: string;
}

interface Service {
  id: number;
  name: string;
  description: string;
  price: string;
  features: string[];
}

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  image: string;
  alt: string;
  rating: number;
}

export default function Home() {
  const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: 'Fashion Editorial',
    category: 'Photography',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1bb9b2cef-1767962826093.png",
    alt: 'Fashion model in elegant dress during editorial photoshoot'
  },
  {
    id: 2,
    title: 'Product Showcase',
    category: 'Commercial',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_15c2d19c9-1768128304581.png",
    alt: 'Professional product photography of headphones on white background'
  },
  {
    id: 3,
    title: 'Portrait Session',
    category: 'Portrait',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_18b2be940-1763299828156.png",
    alt: 'Professional portrait of woman with natural lighting'
  },
  {
    id: 4,
    title: 'Brand Campaign',
    category: 'Commercial',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1c69ee42f-1765969452699.png",
    alt: 'Commercial brand campaign photoshoot in modern studio'
  },
  {
    id: 5,
    title: 'Lifestyle Photography',
    category: 'Lifestyle',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e9d7d421-1766878835739.png",
    alt: 'Lifestyle photography of people collaborating in bright workspace'
  },
  {
    id: 6,
    title: 'Creative Art',
    category: 'Art',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1ed12055b-1769430428348.png",
    alt: 'Creative art photography with colorful abstract composition'
  }];


  const services: Service[] = [
  {
    id: 1,
    name: 'Studio Rental',
    description: 'Professional photography studio with complete equipment',
    price: '$150/hour',
    features: ['Professional lighting', 'Backdrops included', 'Equipment available', 'Makeup area']
  },
  {
    id: 2,
    name: 'Photography Session',
    description: 'Complete photography service with professional editing',
    price: '$500/session',
    features: ['2-hour session', 'Professional photographer', '50+ edited photos', 'Online gallery']
  },
  {
    id: 3,
    name: 'Video Production',
    description: 'Full video production service from concept to delivery',
    price: '$1500/day',
    features: ['4K recording', 'Professional crew', 'Post-production', 'Color grading']
  },
  {
    id: 4,
    name: 'Event Coverage',
    description: 'Complete event photography and videography coverage',
    price: '$800/event',
    features: ['Full day coverage', 'Multiple photographers', 'Same-day highlights', 'Full gallery delivery']
  }];


  const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Fashion Designer',
    content: 'SoulFrame Studio exceeded all expectations. The quality of work and professionalism is unmatched. Highly recommend for any creative project!',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_111df9fb0-1763296195252.png",
    alt: 'Portrait of Sarah Johnson, fashion designer client',
    rating: 5
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Brand Manager',
    content: 'Working with SoulFrame was a game-changer for our brand campaign. Their attention to detail and creative vision brought our ideas to life perfectly.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1614f696c-1763295242937.png",
    alt: 'Portrait of Michael Chen, brand manager client',
    rating: 5
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Entrepreneur',
    content: 'The studio rental was perfect for our product shoot. Everything we needed was available, and the space was incredibly professional and well-maintained.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1032ac7e1-1763301399306.png",
    alt: 'Portrait of Emily Rodriguez, entrepreneur client',
    rating: 5
  }];


  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-gray-900">SoulFrame Studio</div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('hero')} className="text-gray-700 hover:text-gray-900 transition-colors">Home</button>
              <button onClick={() => scrollToSection('portfolio')} className="text-gray-700 hover:text-gray-900 transition-colors">Portfolio</button>
              <button onClick={() => scrollToSection('studio')} className="text-gray-700 hover:text-gray-900 transition-colors">Studio</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-gray-900 transition-colors">Services</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-gray-900 transition-colors">About</button>
              <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-gray-900 transition-colors">Testimonials</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-gray-900 transition-colors">Contact</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-16 min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Capture Your Vision
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Professional photography studio and creative space where your ideas come to life
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => scrollToSection('contact')} className="px-8 py-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-lg font-semibold">
              Book a Session
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="px-8 py-4 bg-white text-gray-900 border-2 border-gray-900 rounded-lg hover:bg-gray-50 transition-colors text-lg font-semibold">
              View Portfolio
            </button>
          </div>
        </div>
      </section>

      {/* Portfolio Grid Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Portfolio</h2>
            <p className="text-xl text-gray-600">Showcasing our best creative work</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item) =>
            <div key={item.id} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="aspect-square">
                  <AppImage
                  src={item.image}
                  alt={item.alt}
                  className="object-cover group-hover:scale-110 transition-transform duration-300" />
                
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-sm text-gray-300 mb-2">{item.category}</span>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Studio Rental Section */}
      <section id="studio" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Studio Rental</h2>
              <p className="text-lg text-gray-600 mb-8">
                Our state-of-the-art photography studio is available for rent. Equipped with professional lighting, backdrops, and all the equipment you need for your creative projects.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Icon name="CheckCircleIcon" className="text-green-600 mr-3 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-900">Professional Equipment</h3>
                    <p className="text-gray-600">High-end cameras, lighting, and accessories</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Icon name="CheckCircleIcon" className="text-green-600 mr-3 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-900">Flexible Spaces</h3>
                    <p className="text-gray-600">Multiple backdrops and customizable setups</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Icon name="CheckCircleIcon" className="text-green-600 mr-3 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-900">Convenient Location</h3>
                    <p className="text-gray-600">Easy access with parking available</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-96 lg:h-full rounded-lg overflow-hidden shadow-xl">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_1b3d500ee-1767340891851.png"
                alt="Professional photography team working together in creative studio environment"
                fill
                className="object-cover" />
              
              
            </div>
          </div>
        </div>
      </section>

      {/* Services & Pricing Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Services & Pricing</h2>
            <p className="text-xl text-gray-600">Choose the perfect package for your needs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-gray-900 hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.name}</h3>
                <p className="text-3xl font-bold text-gray-900 mb-4">{service.price}</p>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <Icon name="CheckIcon" className="text-green-600 mr-2" size={20} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full mt-6 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-semibold">
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 lg:h-full rounded-lg overflow-hidden shadow-xl">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_1b3d500ee-1767340891851.png"
                alt="Professional photography team working together in creative studio environment"
                fill
                className="object-cover" />
              
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Us</h2>
              <p className="text-lg text-gray-600 mb-6">
                SoulFrame Studio is a creative hub where passion meets professionalism. Founded in 2015, we've been helping artists, brands, and individuals bring their visual stories to life.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our team of experienced photographers and videographers are dedicated to delivering exceptional quality and service. We believe in the power of visual storytelling and work closely with each client to understand their unique vision.
              </p>
              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-gray-900 mb-2">500+</div>
                  <div className="text-gray-600">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-gray-900 mb-2">200+</div>
                  <div className="text-gray-600">Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-gray-900 mb-2">9+</div>
                  <div className="text-gray-600">Years</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
            <p className="text-xl text-gray-600">What our clients say about us</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-50 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Icon key={i} name="StarIcon" variant="solid" className="text-yellow-400" size={20} />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <AppImage
                      src={testimonial.image}
                      alt={testimonial.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Location Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
              <p className="text-xl text-gray-300 mb-8">
                Ready to start your project? Contact us today and let's create something amazing together.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Icon name="MapPinIcon" className="text-white mr-4 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Location</h3>
                    <p className="text-gray-300">123 Creative Avenue, Studio District<br />New York, NY 10001</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Icon name="PhoneIcon" className="text-white mr-4 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Phone</h3>
                    <p className="text-gray-300">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Icon name="EnvelopeIcon" className="text-white mr-4 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <p className="text-gray-300">hello@soulframestudio.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Icon name="ClockIcon" className="text-white mr-4 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Hours</h3>
                    <p className="text-gray-300">Monday - Friday: 9AM - 6PM<br />Saturday: 10AM - 4PM<br />Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-white transition-colors text-white"
                    placeholder="Your name" />
                  
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-white transition-colors text-white"
                    placeholder="your@email.com" />
                  
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-2">Service Interested In</label>
                  <select
                    id="service"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-white transition-colors text-white">
                    
                    <option value="">Select a service</option>
                    <option value="studio">Studio Rental</option>
                    <option value="photography">Photography Session</option>
                    <option value="video">Video Production</option>
                    <option value="event">Event Coverage</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-white transition-colors text-white"
                    placeholder="Tell us about your project...">
                  </textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors text-lg font-semibold">
                  
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold mb-4 md:mb-0">SoulFrame Studio</div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Icon name="CameraIcon" size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Icon name="VideoCameraIcon" size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Icon name="PhotoIcon" size={24} />
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400 text-sm">
            © 2026 SoulFrame Studio. All rights reserved.
          </div>
        </div>
      </footer>
    </div>);

}