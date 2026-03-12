'use client';
import { useState } from 'react';
 import Icon from'@/components/ui/AppIcon';

interface AddOn {
  id: string
  name: string
  description: string
  price: number
}

const addOns: AddOn[] = [
  { id: 'addon_photos', name: 'Extra 10 Photos', description: 'Additional edited photos', price: 1500 },
  { id: 'addon_album', name: 'Premium Album', description: '12x18 inch hardcover album', price: 3500 },
  { id: 'addon_retouch', name: 'Advanced Retouching', description: 'Professional skin retouching', price: 2000 },
  { id: 'addon_prints', name: 'Canvas Prints', description: 'Set of 3 canvas prints', price: 2500 },
  { id: 'addon_video', name: 'Behind-the-Scenes Video', description: '2-3 minute highlight video', price: 4000 },
]

export default function AddOnsCalculator() {
  const [selected, setSelected] = useState<string[]>([])

  const toggleAddOn = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  const total = addOns
    .filter((addon) => selected.includes(addon.id))
    .reduce((sum, addon) => sum + addon.price, 0)

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {addOns.map((addon) => (
          <button
            key={addon.id}
            onClick={() => toggleAddOn(addon.id)}
            className={`glass-panel rounded-2xl p-6 text-left transition-all hover:shadow-lg ${
              selected.includes(addon.id) ? 'ring-2 ring-primary' : ''
            }`}
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <h4 className="font-semibold text-foreground mb-1">{addon.name}</h4>
                <p className="text-sm text-muted-foreground">{addon.description}</p>
              </div>
              <div
                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                  selected.includes(addon.id)
                    ? 'bg-primary border-primary' :'border-border'
                }`}
              >
                {selected.includes(addon.id) && (
                  <Icon name="CheckIcon" size={16} className="text-white" />
                )}
              </div>
            </div>
            <p className="text-lg font-bold text-primary">+₹{addon.price.toLocaleString('en-IN')}</p>
          </button>
        ))}
      </div>

      {/* Total */}
      {selected.length > 0 && (
        <div className="glass-panel rounded-2xl p-6 animate-fade-scale">
          <div className="flex items-center justify-between mb-4">
            <span className="text-lg font-semibold text-foreground">Total Add-Ons</span>
            <span className="text-3xl font-bold text-primary">₹{total.toLocaleString('en-IN')}</span>
          </div>
          <a
            href={`https://wa.me/919731741573?text=I'd like to add these services: ${addOns
              .filter((a) => selected.includes(a.id))
              .map((a) => a.name)
              .join(', ')}`}
            className="flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 rounded-full font-semibold w-full hover:shadow-lg transition-all"
          >
            <span>Add to Booking</span>
            <Icon name="ArrowRightIcon" size={18} />
          </a>
        </div>
      )}
    </div>
  )
}