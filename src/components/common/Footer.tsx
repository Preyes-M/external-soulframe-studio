import Link from 'next/link';
 import Icon from'@/components/ui/AppIcon';

export default function Footer() {
  const currentYear = 2024

  const studioInfo = [
    { id: 'footer_about', label: 'About Us', href: '/about' },
    { id: 'footer_location', label: 'Location', href: '/contact' },
    { id: 'footer_hours', label: 'Hours: Mon-Sat 10AM-7PM', href: '/contact' },
  ]

  const quickLinks = [
    { id: 'footer_portfolio', label: 'Portfolio', href: '/homepage#portfolio' },
    { id: 'footer_rental', label: 'Studio Rental', href: '/studio-rental' },
    { id: 'footer_pricing', label: 'Pricing', href: '/services-pricing' },
  ]

  const services = [
    { id: 'footer_maternity', label: 'Maternity Shoots', href: '/services-pricing#maternity' },
    { id: 'footer_kids', label: 'Kids Photography', href: '/services-pricing#kids' },
    { id: 'footer_fashion', label: 'Fashion Shoots', href: '/services-pricing#fashion' },
    { id: 'footer_product', label: 'Product Photography', href: '/services-pricing#product' },
  ]

  const socialLinks = [
    { id: 'social_instagram', icon: 'CameraIcon', href: 'https://instagram.com/soulframestudio', label: 'Instagram' },
    { id: 'social_facebook', icon: 'UserGroupIcon', href: 'https://facebook.com/soulframestudio', label: 'Facebook' },
    { id: 'social_whatsapp', icon: 'ChatBubbleLeftRightIcon', href: 'https://wa.me/919876543210', label: 'WhatsApp' },
  ]

  return (
    <footer className="bg-card border-t border-border pt-16 pb-8">
      <div className="max-w-8xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Studio Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg">
                <Icon name="CameraIcon" size={20} className="text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-semibold text-foreground">Soul Frame Studio</span>
                <span className="text-xs text-muted-foreground">Bangalore</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Capturing Bangalore&apos;s best moments. Premium photography for maternity, kids, fashion, and commercial shoots.
            </p>
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-white transition-all hover:scale-110"
                  aria-label={social.label}
                >
                  <Icon name={social.icon as any} size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block hover:translate-x-1 duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    href={service.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block hover:translate-x-1 duration-300"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <Icon name="MapPinIcon" size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  Indiranagar, Bangalore<br />Karnataka 560038
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="PhoneIcon" size={18} className="text-primary flex-shrink-0" />
                <a
                  href="tel:+919876543210"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="EnvelopeIcon" size={18} className="text-primary flex-shrink-0" />
                <a
                  href="mailto:hello@soulframestudio.com"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  hello@soulframestudio.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground">
            © {currentYear} Soul Frame Studio. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-muted-foreground">
            <Link href="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}