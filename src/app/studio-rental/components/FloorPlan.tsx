'use client';
import { useState } from 'react';

interface Zone {
  id: string
  name: string
  dimensions: string
}

const zones: Zone[] = [
  { id: 'zone_main', name: 'Main Shooting Area', dimensions: '20ft x 15ft' },
  { id: 'zone_backdrop', name: 'Backdrop Section', dimensions: '12ft x 8ft' },
  { id: 'zone_equipment', name: 'Equipment Storage', dimensions: '8ft x 6ft' },
  { id: 'zone_waiting', name: 'Waiting Lounge', dimensions: '10ft x 8ft' },
]

export default function FloorPlan() {
  const [selectedZone, setSelectedZone] = useState<string | null>(null)

  return (
    <div className="space-y-6">
      <div className="glass-panel rounded-2xl p-8">
        {/* SVG Floor Plan */}
        <svg viewBox="0 0 600 400" className="w-full h-auto">
          {/* Main Shooting Area */}
          <rect
            x="50"
            y="50"
            width="300"
            height="250"
            fill={selectedZone === 'zone_main' ? '#10B981' : '#F5F3EF'}
            stroke="#1A1A1A"
            strokeWidth="2"
            className="cursor-pointer transition-all hover:fill-primary/20"
            onClick={() => setSelectedZone('zone_main')}
          />
          <text x="200" y="175" textAnchor="middle" className="text-sm font-medium fill-foreground">
            Main Shooting Area
          </text>

          {/* Backdrop Section */}
          <rect
            x="370"
            y="50"
            width="180"
            height="120"
            fill={selectedZone === 'zone_backdrop' ? '#10B981' : '#F5F3EF'}
            stroke="#1A1A1A"
            strokeWidth="2"
            className="cursor-pointer transition-all hover:fill-primary/20"
            onClick={() => setSelectedZone('zone_backdrop')}
          />
          <text x="460" y="110" textAnchor="middle" className="text-xs font-medium fill-foreground">
            Backdrop Section
          </text>

          {/* Equipment Storage */}
          <rect
            x="370"
            y="190"
            width="180"
            height="110"
            fill={selectedZone === 'zone_equipment' ? '#10B981' : '#F5F3EF'}
            stroke="#1A1A1A"
            strokeWidth="2"
            className="cursor-pointer transition-all hover:fill-primary/20"
            onClick={() => setSelectedZone('zone_equipment')}
          />
          <text x="460" y="245" textAnchor="middle" className="text-xs font-medium fill-foreground">
            Equipment Storage
          </text>

          {/* Waiting Lounge */}
          <rect
            x="50"
            y="320"
            width="150"
            height="60"
            fill={selectedZone === 'zone_waiting' ? '#10B981' : '#F5F3EF'}
            stroke="#1A1A1A"
            strokeWidth="2"
            className="cursor-pointer transition-all hover:fill-primary/20"
            onClick={() => setSelectedZone('zone_waiting')}
          />
          <text x="125" y="355" textAnchor="middle" className="text-xs font-medium fill-foreground">
            Waiting Lounge
          </text>
        </svg>
      </div>

      {/* Zone Details */}
      {selectedZone && (
        <div className="glass-panel rounded-2xl p-6 animate-fade-scale">
          {zones.map(
            (zone) =>
              zone.id === selectedZone && (
                <div key={zone.id}>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{zone.name}</h3>
                  <p className="text-muted-foreground">Dimensions: {zone.dimensions}</p>
                </div>
              )
          )}
        </div>
      )}
    </div>
  )
}