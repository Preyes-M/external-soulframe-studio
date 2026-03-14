'use client';
import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FormData {
  name: string;
  phone: string;
  email: string;
  shootType: string;
  date: string;
  message: string;
}

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    shootType: '',
    date: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      setLoading(true);

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      setSubmitted(true);

      setFormData({
        name: '',
        phone: '',
        email: '',
        shootType: '',
        date: '',
        message: '',
      });
    } catch (err) {
      alert('Failed to send inquiry. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = 'Invalid phone number (10 digits starting with 6-9)';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.shootType) newErrors.shootType = 'Please select shoot type';
    if (!formData.date) newErrors.date = 'Please select preferred date';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleChange = (field: keyof FormData, value: string) => {
    setFormData({ ...formData, [field]: value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: undefined });
    }
  };

  const minDate = new Date().toISOString().split('T')[0];

  return (
    <div className="glass-panel rounded-3xl p-8 md:p-12">
      {submitted ? (
        <div className="text-center py-12 animate-fade-scale">
          <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="CheckCircleIcon" size={40} className="text-success" />
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-2">Thank You!</h3>
          <p className="text-muted-foreground mb-4">
            We&apos;ve received your inquiry and will call you within 24 hours.
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({
                name: '',
                phone: '',
                email: '',
                shootType: '',
                date: '',
                message: '',
              });
            }}
            className="text-primary font-medium hover:underline"
          >
            Submit another inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              className={`w-full px-4 py-3 rounded-xl border ${
                errors.name ? 'border-error' : 'border-input'
              } bg-background text-foreground focus:ring-2 focus:ring-primary outline-none transition-all`}
              placeholder="Your full name"
            />
            {errors.name && <p className="text-error text-xs mt-1">{errors.name}</p>}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                className={`w-full px-4 py-3 rounded-xl border ${
                  errors.phone ? 'border-error' : 'border-input'
                } bg-background text-foreground focus:ring-2 focus:ring-primary outline-none transition-all`}
                placeholder="10-digit mobile number"
              />
              {errors.phone && <p className="text-error text-xs mt-1">{errors.phone}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Email Address *
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className={`w-full px-4 py-3 rounded-xl border ${
                  errors.email ? 'border-error' : 'border-input'
                } bg-background text-foreground focus:ring-2 focus:ring-primary outline-none transition-all`}
                placeholder="your@email.com"
              />
              {errors.email && <p className="text-error text-xs mt-1">{errors.email}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Shoot Type *</label>
              <select
                value={formData.shootType}
                onChange={(e) => handleChange('shootType', e.target.value)}
                className={`w-full px-4 py-3 rounded-xl border ${
                  errors.shootType ? 'border-error' : 'border-input'
                } bg-background text-foreground focus:ring-2 focus:ring-primary outline-none transition-all`}
              >
                <option value="">Select shoot type</option>
                <option value="Maternity">Maternity Photography</option>
                <option value="Kids">Kids Photography</option>
                <option value="Fashion">Fashion Photography</option>
                <option value="Product">Product Photography</option>
                <option value="Studio Rental">Studio Rental</option>
              </select>
              {errors.shootType && <p className="text-error text-xs mt-1">{errors.shootType}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Preferred Date *
              </label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) => handleChange('date', e.target.value)}
                min={minDate}
                className={`w-full px-4 py-3 rounded-xl border ${
                  errors.date ? 'border-error' : 'border-input'
                } bg-background text-foreground focus:ring-2 focus:ring-primary outline-none transition-all`}
              />
              {errors.date && <p className="text-error text-xs mt-1">{errors.date}</p>}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Message (Optional)
            </label>
            <textarea
              value={formData.message}
              onChange={(e) => handleChange('message', e.target.value)}
              rows={4}
              className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:ring-2 focus:ring-primary outline-none transition-all resize-none"
              placeholder="Any specific requirements or questions..."
            />
          </div>

          {/* <button
            type="submit"
            className="w-full bg-primary text-primary-foreground py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
          >
            <span>Submit Inquiry</span>
            <Icon name="PaperAirplaneIcon" size={20} />
          </button> */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-primary-foreground py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 flex items-center justify-center gap-2 disabled:opacity-60"
          >
            {loading ? 'Sending...' : 'Submit Inquiry'}
            {!loading && <Icon name="PaperAirplaneIcon" size={20} />}
          </button>

          <p className="text-xs text-muted-foreground text-center">
            We&apos;ll get back to you within 24 hours
          </p>
        </form>
      )}
    </div>
  );
}
