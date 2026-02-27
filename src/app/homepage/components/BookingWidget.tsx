'use client';
import { useState } from 'react';
 import Icon from'@/components/ui/AppIcon';

export default function BookingWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    shootType: '',
    date: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const message = `Hi, I'd like to book a ${formData.shootType} shoot on ${formData.date}. My name is ${formData.name}, phone: ${formData.phone}`
    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <>
      {/* Floating Button (Desktop) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="hidden lg:flex fixed bottom-8 right-8 w-16 h-16 bg-primary text-primary-foreground rounded-full shadow-2xl items-center justify-center hover:scale-110 transition-transform z-40 animate-float"
        aria-label="Open booking form"
      >
        <Icon name={isOpen ? 'XMarkIcon' : 'CalendarIcon'} size={28} />
      </button>

      {/* Floating Widget */}
      {isOpen && (
        <div className="hidden lg:block fixed bottom-28 right-8 w-80 glass-panel rounded-2xl shadow-2xl p-6 z-40 animate-fade-scale border border-border">
          <h3 className="text-lg font-semibold text-foreground mb-4">Quick Booking</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary outline-none"
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary outline-none"
              required
            />
            <select
              value={formData.shootType}
              onChange={(e) => setFormData({ ...formData, shootType: e.target.value })}
              className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary outline-none"
              required
            >
              <option value="">Select Shoot Type</option>
              <option value="Maternity">Maternity</option>
              <option value="Kids">Kids</option>
              <option value="Fashion">Fashion</option>
              <option value="Product">Product</option>
              <option value="Studio Rental">Studio Rental</option>
            </select>
            <input
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary outline-none"
              required
            />
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-3 rounded-full font-medium hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <span>Book via WhatsApp</span>
              <Icon name="ChatBubbleLeftRightIcon" size={18} />
            </button>
          </form>
        </div>
      )}

      {/* Mobile Sticky Bottom Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 glass-panel border-t border-border p-4 z-40 shadow-2xl">
        <a
          href="https://wa.me/919876543210"
          className="flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 rounded-full font-medium shadow-lg w-full"
        >
          <Icon name="ChatBubbleLeftRightIcon" size={20} />
          <span>WhatsApp Us</span>
        </a>
      </div>
    </>
  )
}