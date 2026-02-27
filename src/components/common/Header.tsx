'use client';
import { useState, useEffect } from 'react';
 import Link from'next/link';
import { usePathname } from 'next/navigation';
 import Icon from'@/components/ui/AppIcon';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { id: 'nav_portfolio', label: 'Portfolio', href: '/homepage#portfolio' },
    { id: 'nav_studio', label: 'Studio Rental', href: '/studio-rental' },
    { id: 'nav_services', label: 'Services', href: '/services-pricing' },
    { id: 'nav_about', label: 'About', href: '/about' },
    { id: 'nav_contact', label: 'Contact', href: '/contact' },
  ]

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'glass-panel shadow-lg border-b border-border'
            : 'bg-background/80 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-8xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/homepage" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg transition-transform duration-500 group-hover:rotate-[360deg]">
              <Icon name="CameraIcon" size={20} className="text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-semibold text-foreground tracking-tight">
                Soul Frame Studio
              </span>
              <span className="text-xs text-muted-foreground">Bangalore</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className={`text-sm font-medium transition-colors relative group ${
                  pathname === link.href || pathname.startsWith(link.href.split('#')[0])
                    ? 'text-primary' :'text-muted-foreground hover:text-foreground'
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                    pathname === link.href || pathname.startsWith(link.href.split('#')[0])
                      ? 'w-full' :'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <a
            href="tel:+919876543210"
            className="hidden md:flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 rounded-full font-medium text-sm shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 relative overflow-hidden group"
          >
            <span className="relative z-10">Book Your Slot</span>
            <Icon name="PhoneIcon" size={16} className="relative z-10" />
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-shimmer" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            <Icon name={isMenuOpen ? 'XMarkIcon' : 'Bars3Icon'} size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-foreground/80 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="absolute top-20 left-0 right-0 bg-card shadow-2xl rounded-b-3xl p-8 animate-fade-scale">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-lg font-medium py-2 transition-colors ${
                    pathname === link.href || pathname.startsWith(link.href.split('#')[0])
                      ? 'text-primary' :'text-foreground hover:text-primary'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:+919876543210"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium text-base shadow-lg mt-4"
              >
                <span>Book Your Slot</span>
                <Icon name="PhoneIcon" size={18} />
              </a>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}