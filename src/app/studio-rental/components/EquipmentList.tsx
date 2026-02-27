'use client';
import { useState } from 'react';
 import Icon from'@/components/ui/AppIcon';

interface Equipment {
  id: string
  category: string
  items: string[]
}

const equipment: Equipment[] = [
  {
    id: 'eq_lighting',
    category: 'Lighting Equipment',
    items: [
      'Godox SL-60W LED Lights (4 units)',
      'Softbox Kit (3 units)',
      'Umbrella Reflectors (2 units)',
      'Ring Light (1 unit)',
      'Light Stands (6 units)',
    ],
  },
  {
    id: 'eq_backdrops',
    category: 'Backdrops & Props',
    items: [
      'White Seamless Paper (9ft x 36ft)',
      'Black Seamless Paper (9ft x 36ft)',
      'Green Screen (10ft x 12ft)',
      'Textured Fabric Backdrops (5 variants)',
      'Posing Stools & Chairs',
    ],
  },
  {
    id: 'eq_accessories',
    category: 'Accessories',
    items: [
      'Tripods (3 units)',
      'Reflectors (Gold, Silver, White)',
      'Diffusers',
      'Color Gels',
      'Clamps & Clips',
    ],
  },
]

export default function EquipmentList() {
  const [openCategory, setOpenCategory] = useState<string | null>(null)

  const toggleCategory = (id: string) => {
    setOpenCategory(openCategory === id ? null : id)
  }

  return (
    <div className="space-y-4">
      {equipment.map((eq) => (
        <div key={eq.id} className="glass-panel rounded-2xl overflow-hidden">
          <button
            onClick={() => toggleCategory(eq.id)}
            className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/50 transition-colors"
          >
            <h3 className="text-lg font-semibold text-foreground">{eq.category}</h3>
            <Icon
              name="ChevronDownIcon"
              size={24}
              className={`text-foreground transition-transform ${
                openCategory === eq.id ? 'rotate-180' : ''
              }`}
            />
          </button>
          {openCategory === eq.id && (
            <div className="px-6 pb-6 space-y-2 animate-fade-scale">
              {eq.items.map((item, index) => (
                <div key={`${eq.id}_item_${index}`} className="flex items-start gap-2">
                  <Icon name="CheckCircleIcon" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground text-sm">{item}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}