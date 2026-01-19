'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const caseStudies = [
  {
    title: 'Metropolitan Medical Center',
    subtitle: '500-bed tertiary hospital',
    challenge: 'Managing patient records across 20+ departments with outdated systems',
    solution: 'Implemented ShifaCom for centralized patient management and real-time data sync',
    result: 'Reduced appointment errors by 75%, improved staff efficiency by 40%',
    metric: '99.8% system uptime',
  },
  {
    title: 'Sunrise Pharmacy Network',
    subtitle: '15-location pharmacy chain',
    challenge: 'Inventory management and prescription fulfillment across multiple locations',
    solution: 'Deployed ShifaCom pharmacy module with cloud synchronization',
    result: 'Inventory reduction time cut by 60%, prescription accuracy at 99.9%',
    metric: '3-day ROI',
  },
  {
    title: 'Central Clinic Group',
    subtitle: 'Multi-specialty clinic network',
    challenge: 'Patient data fragmentation and compliance auditing concerns',
    solution: 'Full-platform implementation with custom workflows for each specialty',
    result: 'Successful HIPAA audit with zero findings, 80% faster patient onboarding',
    metric: '100% audit pass',
  },
]

export function CaseStudies() {
  return (
    <section className="py-20 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            Real Results from Real Customers
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how healthcare organizations transformed their operations with ShifaCom
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="mb-4">
                <h3 className="text-xl font-bold text-foreground mb-1">{study.title}</h3>
                <p className="text-sm text-primary font-semibold">{study.subtitle}</p>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase mb-1">Challenge</p>
                  <p className="text-sm text-foreground">{study.challenge}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase mb-1">Solution</p>
                  <p className="text-sm text-foreground">{study.solution}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase mb-1">Result</p>
                  <p className="text-sm text-foreground font-medium text-primary">{study.result}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <p className="text-sm text-center font-semibold text-primary">{study.metric}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3 text-base font-semibold text-primary-foreground hover:bg-primary/90 transition-colors group"
          >
            See Your Success Story
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
