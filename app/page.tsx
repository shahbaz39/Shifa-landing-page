import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Features } from '@/components/Features'
import { HowItWorks } from '@/components/HowItWorks'
import { CaseStudies } from '@/components/CaseStudies'
import { Testimonials } from '@/components/Testimonials'
import { SecurityBadges } from '@/components/SecurityBadges'
import { FAQs } from '@/components/FAQs'
import { Footer } from '@/components/Footer'
import Link from 'next/link'
import { ArrowRight, TrendingUp } from 'lucide-react'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />

        {/* CTA Section - Schedule Demo */}
        <section className="py-16 bg-secondary">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
              See ShifaCom in Action
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Watch a personalized demo and discover how ShifaCom can transform your healthcare operations.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3 text-base font-semibold text-primary-foreground hover:bg-primary/90 transition-colors group"
            >
              Schedule Your Demo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>

        <HowItWorks />
        <CaseStudies />

        {/* Stats Section */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <p className="text-muted-foreground">Healthcare Facilities</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">1M+</div>
                <p className="text-muted-foreground">Patient Records</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
                <p className="text-muted-foreground">Uptime SLA</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <p className="text-muted-foreground">Support Available</p>
              </div>
            </div>
          </div>
        </section>

        <Testimonials />
        <SecurityBadges />
        <FAQs />

        {/* Final CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">
              Ready to Transform Your Healthcare Operations?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed opacity-95">
              Join hundreds of healthcare facilities already using ShifaCom to improve patient care and operational efficiency. Start your free trial today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3 text-base font-semibold text-primary hover:bg-white/90 transition-colors"
              >
                Get Started Now
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center rounded-lg border-2 border-white px-8 py-3 text-base font-semibold text-white hover:bg-white/10 transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
