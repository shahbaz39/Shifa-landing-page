import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Metadata } from 'next'
import { CheckCircle } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Pricing | ShifaCom',
  description: 'ShifaCom flexible pricing plans for healthcare facilities',
}

const plans = [
  {
    name: 'Starter',
    description: 'For small clinics and practices',
    price: '$999',
    period: '/month',
    features: [
      'Up to 5 users',
      '500 patient records',
      'Basic appointment scheduling',
      'Patient portal',
      'HIPAA compliant',
      'Email support',
      'Daily backups',
      'Mobile app access',
    ],
    cta: 'Get Started',
    featured: false,
  },
  {
    name: 'Professional',
    description: 'For growing healthcare facilities',
    price: '$2,999',
    period: '/month',
    features: [
      'Up to 25 users',
      'Unlimited patient records',
      'Advanced scheduling',
      'Clinic & pharmacy modules',
      'HIPAA compliant',
      'Priority support',
      'Real-time analytics',
      'Custom workflows',
      'Staff management',
      'Integration APIs',
    ],
    cta: 'Start Free Trial',
    featured: true,
  },
  {
    name: 'Enterprise',
    description: 'For large hospital networks',
    price: 'Custom',
    period: 'pricing',
    features: [
      'Unlimited users',
      'Unlimited patient records',
      'All features included',
      'Multi-facility support',
      'Custom integrations',
      'Dedicated account manager',
      'On-premise options',
      'SSO & advanced security',
      'Custom reporting',
      '99.99% SLA',
    ],
    cta: 'Contact Sales',
    featured: false,
  },
]

export default function PricingPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-20 bg-secondary">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Transparent, Flexible Pricing
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Choose the perfect plan for your healthcare facility. No hidden fees, no surprises. Scale as you grow.
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative rounded-2xl transition-all duration-300 ${
                    plan.featured
                      ? 'lg:scale-105 border-2 border-primary bg-gradient-to-b from-secondary to-white shadow-2xl'
                      : 'border border-border bg-white hover:shadow-lg'
                  }`}
                >
                  {plan.featured && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                    <p className="text-muted-foreground mb-6">{plan.description}</p>

                    <div className="mb-6">
                      <span className="text-5xl font-bold text-primary">{plan.price}</span>
                      <span className="text-muted-foreground ml-2">{plan.period}</span>
                    </div>

                    <Link
                      href="/contact"
                      className={`block w-full rounded-lg font-semibold py-3 text-center transition-colors mb-8 ${
                        plan.featured
                          ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                          : 'border-2 border-primary text-primary hover:bg-primary/5'
                      }`}
                    >
                      {plan.cta}
                    </Link>

                    <div className="space-y-4 border-t border-border pt-8">
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-secondary">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">Can I change plans anytime?</h3>
                <p className="text-muted-foreground">
                  Yes! You can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">Is there a free trial?</h3>
                <p className="text-muted-foreground">
                  Yes! All plans come with a 14-day free trial. No credit card required. Full access to all features.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">What payment methods do you accept?</h3>
                <p className="text-muted-foreground">
                  We accept all major credit cards, ACH transfers, and wire transfers. Enterprise customers can arrange custom payment terms.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">Do you offer annual discounts?</h3>
                <p className="text-muted-foreground">
                  Yes! Pay annually and save 20%. Contact our sales team to discuss volume discounts for large organizations.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">Is support included?</h3>
                <p className="text-muted-foreground">
                  All plans include support. Starter plans get email support, Professional plans get priority support, and Enterprise plans get dedicated account managers.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">Can I add users beyond my plan?</h3>
                <p className="text-muted-foreground">
                  Absolutely! You can add additional users at any time. We'll pro-rate the cost based on your billing cycle.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Ready to get started?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Start your free 14-day trial today. No credit card required.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-base font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Start Your Free Trial
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
