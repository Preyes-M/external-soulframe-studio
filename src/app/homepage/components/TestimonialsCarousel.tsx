'use client';
import { useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  text: string;
}

const testimonials: Testimonial[] = [
{
  id: 'testimonial_1',
  name: 'Deepika Patel',
  role: 'Expecting Mother',
  rating: 5,
  text: 'We did E-Commerce Shoot there. The studio is well equipped and they were cooperative in our entire shoot, you can check out the studio if you need space for shoots. It was a Great Experience.👍🏻'
},
{
  id: 'testimonial_2',
  name: 'Jithin Sanjay S',
  role: 'E-commerce Brand Owner',
  rating: 5,
  text: 'Guys trust me It was truly a gem of an experience at Sole Frame Studio. The place has such a great vibe and the team made me feel very comfortable throughout. The quality of work and overall service were excellent. I genuinely suggest everyone to visit this studio  it’s an awesome place and definitely worth it. Highly recommended!'
},
{
  id: 'testimonial_3',
  name: 'Preyes',
  role: 'Product Shoots',
  rating: 5,
  text: 'Rishabh has an eye for the great angles and has delivered some great photos of our best selling products. The photos immediately resonated with the product sales. Huge thanks to him and his team.'
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
          {/* <div className="flex-shrink-0">
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-primary shadow-lg">
              <AppImage
                src={current.image}
                alt={current.imageAlt}
                className="w-full h-full object-cover" />
              
            </div>
          </div> */}

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