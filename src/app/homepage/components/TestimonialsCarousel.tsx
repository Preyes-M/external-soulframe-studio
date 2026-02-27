'use client';
import { useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  image: string;
  imageAlt: string;
  rating: number;
  text: string;
}

const testimonials: Testimonial[] = [
{
  id: 'test_1',
  name: 'Priya Sharma',
  role: 'Expecting Mother',
  image: "https://images.unsplash.com/photo-1652193665133-a197b7424f2c",
  imageAlt: 'Woman with brown hair smiling at camera',
  rating: 5,
  text: 'Soul Frame Studio captured my maternity journey beautifully. The photos are absolutely stunning and I will cherish them forever. Highly recommend!'
},
{
  id: 'test_2',
  name: 'Rahul Mehta',
  role: 'E-commerce Brand Owner',
  image: "https://images.unsplash.com/photo-1671723131667-8c3686fd17e5",
  imageAlt: 'Man with beard wearing blue shirt outdoors',
  rating: 5,
  text: 'Professional product photography that increased our conversion rates by 40%. The studio rental option is perfect for our regular shoots.'
},
{
  id: 'test_3',
  name: 'Anjali Reddy',
  role: 'Fashion Designer',
  image: "https://images.unsplash.com/photo-1681208776534-be923f9c573a",
  imageAlt: 'Woman with long dark hair in elegant attire',
  rating: 5,
  text: 'Working with Soul Frame Studio for my fashion lookbook was amazing. They understood my vision perfectly and delivered beyond expectations.'
}];


export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="glass-panel rounded-3xl p-8 md:p-12 shadow-2xl">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Client Photo */}
          <div className="flex-shrink-0">
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-primary shadow-lg">
              <AppImage
                src={current.image}
                alt={current.imageAlt}
                className="w-full h-full object-cover" />
              
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center md:text-left">
            {/* Stars */}
            <div className="flex items-center justify-center md:justify-start gap-1 mb-4">
              {[...Array(current.rating)].map((_, i) =>
              <Icon key={`star_${current.id}_${i}`} name="StarIcon" size={20} className="text-yellow-400 fill-yellow-400" />
              )}
            </div>

            {/* Quote */}
            <p className="text-foreground text-lg leading-relaxed mb-4">&ldquo;{current.text}&rdquo;</p>

            {/* Author */}
            <div>
              <p className="font-semibold text-foreground">{current.name}</p>
              <p className="text-sm text-muted-foreground">{current.role}</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center"
            aria-label="Previous testimonial">
            
            <Icon name="ChevronLeftIcon" size={20} />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, index) =>
            <button
              key={`dot_${index}`}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? 'bg-primary w-6' : 'bg-muted'}`
              }
              aria-label={`Go to testimonial ${index + 1}`} />

            )}
          </div>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center"
            aria-label="Next testimonial">
            
            <Icon name="ChevronRightIcon" size={20} />
          </button>
        </div>
      </div>
    </div>);

}