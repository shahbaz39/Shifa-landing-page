import Link from 'next/link'
import { Mail, MapPin, Phone } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">ShifaCom</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              HIPAA-compliant healthcare management platform for modern medical facilities.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/features" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/hipaa" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  HIPAA Compliance
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <a href="mailto:support@shifacom.com" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  support@shifacom.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">Healthcare Hub, Medical City</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/80 text-sm">
              © 2024 ShifaCom. All rights reserved. HIPAA Compliant.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors">
                Terms
              </Link>
              <Link href="/contact" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
