'use client';
import { useState } from 'react';
 import Icon from'@/components/ui/AppIcon';

interface FAQ {
  id: string
  question: string
  answer: string
}

const faqs: FAQ[] = [
  {
    id: 'faq_1',
    question: 'How do I book a photography session?',
    answer: 'You can book by calling us at +91 98765 43210, messaging us on WhatsApp, or filling out the contact form on this page. We recommend booking at least 2 weeks in advance for maternity and kids photography.',
  },
  {
    id: 'faq_2',
    question: 'What is included in the photography packages?',
    answer: 'All packages include professional photography, digital edited photos delivered via online gallery, and usage rights for personal use. The number of photos and session duration vary by package. Check our Services & Pricing page for detailed package information.',
  },
  {
    id: 'faq_3',
    question: 'Can I rent the studio without a photographer?',
    answer: 'Yes! We offer studio rental for photographers, content creators, and brands. The rental includes access to our lighting equipment, backdrops, and props. Check our Studio Rental page for pricing and equipment details.',
  },
  {
    id: 'faq_4',
    question: 'How long does it take to receive edited photos?',
    answer: 'Edited photos are typically delivered within 7-10 working days. For urgent deliveries, we offer a rush service for an additional fee. Product photography can be delivered on the same day if requested.',
  },
  {
    id: 'faq_5',
    question: 'What is your cancellation policy?',
    answer: 'You can reschedule your session up to 48 hours before the scheduled time at no charge. Cancellations made less than 48 hours in advance forfeit 50% of the booking amount. We understand emergencies happen, so contact us to discuss your situation.',
  },
  {
    id: 'faq_6',
    question: 'Do you provide hair and makeup services?',
    answer: 'We can recommend trusted hair and makeup artists in Bangalore. These services are not included in our photography packages but can be arranged separately.',
  },
]

export default function FAQAccordion() {
  const [openId, setOpenId] = useState<string | null>(null)

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <div className="space-y-4">
      {faqs.map((faq) => (
        <div key={faq.id} className="glass-panel rounded-2xl overflow-hidden">
          <button
            onClick={() => toggleFAQ(faq.id)}
            className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/50 transition-colors"
          >
            <h3 className="text-lg font-semibold text-foreground pr-4">{faq.question}</h3>
            <Icon
              name="ChevronDownIcon"
              size={24}
              className={`text-foreground flex-shrink-0 transition-transform ${
                openId === faq.id ? 'rotate-180' : ''
              }`}
            />
          </button>
          {openId === faq.id && (
            <div className="px-6 pb-6 animate-fade-scale">
              <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}