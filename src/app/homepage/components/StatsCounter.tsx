'use client';
import { useEffect, useRef, useState } from 'react';

interface Stat {
  id: string;
  value: number;
  label: string;
  suffix: string;
}

const stats: Stat[] = [
  { id: 'stat_clients', value: 200, label: 'Happy Clients', suffix: '+' },
  { id: 'stat_photos', value: 5000, label: 'Photos Delivered', suffix: '+' },
  { id: 'stat_products', value: 10, label: 'Products Launched', suffix: '+' },
];

export default function StatsCounter() {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    stats.forEach((stat, index) => {
      let currentCount = 0;
      const increment = stat.value / steps;

      const timer = setInterval(() => {
        currentCount += increment;
        if (currentCount >= stat.value) {
          currentCount = stat.value;
          clearInterval(timer);
        }
        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[index] = Math.floor(currentCount);
          return newCounts;
        });
      }, interval);
    });
  }, [isVisible]);

  return (
    <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {stats.map((stat, index) => (
        <div
          key={stat.id}
          className="glass-panel rounded-2xl p-8 text-center hover:shadow-xl transition-all hover:-translate-y-1"
        >
          <div className="text-5xl font-bold text-primary mb-2">
            {counts[index]}
            {stat.suffix}
          </div>
          <div className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
