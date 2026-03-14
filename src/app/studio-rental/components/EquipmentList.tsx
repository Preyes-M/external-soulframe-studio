'use client';
import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Equipment {
  id: string;
  category: string;
  items: string[];
}

const equipment: Equipment[] = [
  {
    id: 'eq_lighting',
    category: 'Lighting Equipment',
    items: [
      'Godox Ad 600 pro',
      'Godox Ad 300 pro',
      'Godox Ad 200 pro',
      'Godox Sk 400 one set',
      'Godox V1 flash',
      'Godox Litemons 300 bi colour',
      'Godox Litemons 300 rgb',
      'Lc 1000',
      'All kind of soft boxes available',
    ],
  },
  {
    id: 'eq_backdrops',
    category: 'Backdrops & Props',
    items: [
      'White Seamless Paper (9ft x 36ft)',
      'Black Seamless Paper (9ft x 36ft)',
      'Green Screen (8ft x 12ft)',
      'Posing Stools & Chairs',
      'Paper backdr ps - arriving soon',
      'Colour gels - arriving soon',
    ],
  },
  {
    id: 'eq_accessories',
    category: 'Accessories',
    items: [
      'One tripod',
      'One reflector round (gold silver white)',
      'Heavy stands and boom stands',
      'Clamps @ clips',
      'Tethering cable',
      'Hollyland Lark m ii Mic',
    ],
  },
];

export default function EquipmentList() {
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const toggleCategory = (id: string) => {
    setOpenCategory(openCategory === id ? null : id);
  };

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
                  <Icon
                    name="CheckCircleIcon"
                    size={20}
                    className="text-primary flex-shrink-0 mt-0.5"
                  />
                  <span className="text-muted-foreground text-sm">{item}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
