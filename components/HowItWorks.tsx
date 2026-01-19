'use client'

import { CheckCircle2 } from 'lucide-react'

const steps = [
  {
    number: 1,
    title: 'Easy Onboarding',
    description: 'Set up your healthcare facility in minutes with our intuitive wizard. Import existing patient records and configure user roles seamlessly.',
  },
  {
    number: 2,
    title: 'Configure Workflows',
    description: 'Customize workflows for doctors, nurses, pharmacists, and staff. Set up appointment types, prescription templates, and communication preferences.',
  },
  {
    number: 3,
    title: 'Train Your Team',
    description: 'Access comprehensive training materials and live webinars. Our dedicated support team ensures smooth adoption across all departments.',
  },
  {
    number: 4,
    title: 'Go Live',
    description: 'Launch ShifaCom with confidence. Our migration specialists ensure zero data loss and minimal downtime during the transition.',
  },
  {
    number: 5,
    title: 'Optimize & Scale',
    description: 'Monitor analytics, gather team feedback, and continuously optimize your workflows. Scale effortlessly as your facility grows.',
  },
  {
    number: 6,
    title: 'Ongoing Support',
    description: 'Benefit from 24/7 technical support, regular updates, and new feature releases. We grow with your healthcare organization.',
  },
]

export function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            How ShifaCom Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A simple, proven process to transform your healthcare operations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-white font-bold text-lg">
                    {step.number}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>

              {step.number < 6 && (
                <div className="hidden lg:block absolute -right-4 top-12 w-8 h-1 bg-gradient-to-r from-primary to-primary/30"></div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 bg-secondary rounded-2xl p-8 border border-border">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex gap-3">
              <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground mb-1">No Hidden Costs</h4>
                <p className="text-sm text-muted-foreground">Transparent pricing with no setup fees or long-term contracts required.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground mb-1">Data Migration</h4>
                <p className="text-sm text-muted-foreground">We handle secure data migration from your existing systems with zero downtime.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground mb-1">Expert Support</h4>
                <p className="text-sm text-muted-foreground">Dedicated account managers and 24/7 technical support included with every plan.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
