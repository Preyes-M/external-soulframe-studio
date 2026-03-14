'use client';
import { useEffect, useRef, useState } from 'react';

interface Milestone {
  id: string;
  year: string;
  title: string;
  description: string;
}

const milestones: Milestone[] = [
  {
    id: 'mile_2021',
    year: '2021',
    title: 'Food & Product Photography Beginnings',
    description:
      'Started our journey in photography by combining a passion for visual storytelling with creating value-driven content for restaurant brands.',
  },
  {
    id: 'mile_2023',
    year: '2023',
    title: 'Expanding Our Horizons',
    description:
      'Expanded our services to include maternity and kids photography, helping families capture memories that last a lifetime.',
  },
  {
    id: 'mile_2024',
    year: '2024',
    title: 'Commercial & Fashion Shoots',
    description:
      'Through strong word-of-mouth referrals, we expanded into commercial product photography and fashion shoots.',
  },
  {
    id: 'mile_2025',
    year: '2025',
    title: 'Soul Frame Studio',
    description:
      'Moved into a larger, fully equipped studio space in Banaswadi to support growing creative projects.',
  },
];

export default function Timeline() {
  const [visibleMilestones, setVisibleMilestones] = useState<string[]>([]);
  const milestonesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-id');
            if (id) {
              setVisibleMilestones((prev) => (prev.includes(id) ? prev : [...prev, id]));
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    milestonesRef.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border md:left-1/2" />

      <div className="space-y-12">
        {milestones.map((milestone, index) => (
          <div
            key={milestone.id}
            ref={(el) => {
              milestonesRef.current[index] = el;
            }}
            data-id={milestone.id}
            className={`relative flex items-center ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
          >
            {/* Dot */}
            <div
              className={`absolute left-8 w-4 h-4 rounded-full bg-primary border-4 border-background transition-all duration-500 md:left-1/2 md:-translate-x-1/2 ${
                visibleMilestones.includes(milestone.id)
                  ? 'scale-100 opacity-100'
                  : 'scale-0 opacity-0'
              }`}
            />

            {/* Content */}
            <div
              className={`ml-20 md:ml-0 md:w-1/2 ${
                index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
              }`}
            >
              <div
                className={`glass-panel rounded-2xl p-6 transition-all duration-700 ${
                  visibleMilestones.includes(milestone.id)
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-4'
                }`}
              >
                <span className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold mb-3">
                  {milestone.year}
                </span>
                <h3 className="text-xl font-bold text-foreground mb-2">{milestone.title}</h3>
                <p className="text-muted-foreground text-sm">{milestone.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
