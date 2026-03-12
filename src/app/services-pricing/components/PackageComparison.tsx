'use client';
import Icon from'@/components/ui/AppIcon';

interface Package {
  id: string
  name: string
  price: string
  popular?: boolean
  features: {
    id: string
    name: string
    basic: boolean
    standard: boolean
    premium: boolean
  }[]
}

const packageData: Package = {
  id: 'packages',
  name: 'Photography Packages',
  price: '',
  features: [
    {
      id: 'feat_duration',
      name: 'Shoot Duration',
      basic: true,
      standard: true,
      premium: true,
    },
    {
      id: 'feat_photos',
      name: 'Edited Photos',
      basic: true,
      standard: true,
      premium: true,
    },
    {
      id: 'feat_locations',
      name: 'Multiple Locations',
      basic: false,
      standard: true,
      premium: true,
    },
    {
      id: 'feat_outfits',
      name: 'Outfit Changes',
      basic: false,
      standard: true,
      premium: true,
    },
    {
      id: 'feat_album',
      name: 'Printed Album',
      basic: false,
      standard: false,
      premium: true,
    },
    {
      id: 'feat_retouching',
      name: 'Advanced Retouching',
      basic: false,
      standard: false,
      premium: true,
    },
  ],
}

const packages = [
  { id: 'pkg_basic', name: 'Basic', price: '₹6,999', type: 'basic' },
  { id: 'pkg_standard', name: 'Standard', price: '₹12,999', type: 'standard', popular: true },
  { id: 'pkg_premium', name: 'Premium', price: '₹19,999', type: 'premium' },
]

export default function PackageComparison() {
  const getValue = (feature: any, type: string) => {
    if (type === 'basic') return feature.basic
    if (type === 'standard') return feature.standard
    return feature.premium
  }

  const getDisplayValue = (feature: any, type: string) => {
    const value = getValue(feature, type)
    
    if (feature.id === 'feat_duration') {
      if (type === 'basic') return '1 hour'
      if (type === 'standard') return '2 hours'
      return '4 hours'
    }
    if (feature.id === 'feat_photos') {
      if (type === 'basic') return '15 photos'
      if (type === 'standard') return '30 photos'
      return '60 photos'
    }
    if (feature.id === 'feat_locations') {
      if (type === 'basic') return false
      if (type === 'standard') return '2 locations'
      return '3 locations'
    }
    if (feature.id === 'feat_outfits') {
      if (type === 'basic') return false
      if (type === 'standard') return '2 outfits'
      return '4 outfits'
    }
    
    return value
  }

  return (
    <div className="overflow-x-auto">
      <div className="min-w-[768px] glass-panel rounded-2xl p-6">
        {/* Header */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-foreground">Features</h3>
          </div>
          {packages.map((pkg) => (
            <div key={pkg.id} className="text-center">
              {pkg.popular && (
                <div className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold mb-2">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-bold text-foreground mb-1">{pkg.name}</h3>
              <p className="text-2xl font-bold text-primary">{pkg.price}</p>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="space-y-4">
          {packageData.features.map((feature) => (
            <div key={feature.id} className="grid grid-cols-4 gap-4 py-4 border-t border-border">
              <div className="col-span-1 flex items-center">
                <span className="text-sm text-muted-foreground">{feature.name}</span>
              </div>
              {packages.map((pkg) => {
                const value = getDisplayValue(feature, pkg.type)
                return (
                  <div key={`${feature.id}_${pkg.id}`} className="flex items-center justify-center">
                    {typeof value === 'boolean' ? (
                      value ? (
                        <Icon name="CheckCircleIcon" size={24} className="text-primary" />
                      ) : (
                        <Icon name="XMarkIcon" size={24} className="text-muted-foreground" />
                      )
                    ) : (
                      <span className="text-sm font-medium text-foreground">{value}</span>
                    )}
                  </div>
                )
              })}
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="grid grid-cols-4 gap-4 mt-8">
          <div className="col-span-1" />
          {packages.map((pkg) => (
            <div key={`cta_${pkg.id}`}>
              <a
                href={`https://wa.me/919731741573?text=I'm interested in the ${pkg.name} package`}
                className={`block w-full text-center py-3 rounded-full font-semibold transition-all ${
                  pkg.popular
                    ? 'bg-primary text-primary-foreground hover:shadow-lg'
                    : 'bg-muted text-foreground hover:bg-primary/10'
                }`}
              >
                Choose Plan
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}