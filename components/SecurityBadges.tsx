'use client'

import { Shield, Lock, CheckCircle2 } from 'lucide-react'

const badges = [
  {
    icon: Shield,
    title: 'HIPAA Certified',
    description: 'Full HIPAA compliance with annual audits',
  },
  {
    icon: Lock,
    title: 'SOC 2 Type II',
    description: 'Security, availability & confidentiality verified',
  },
  {
    icon: CheckCircle2,
    title: '256-bit Encryption',
    description: 'Military-grade data protection',
  },
  {
    icon: Shield,
    title: 'HITRUST CSF',
    description: 'Healthcare industry certification',
  },
  {
    icon: Lock,
    title: '99.9% Uptime',
    description: 'Enterprise-grade reliability',
  },
  {
    icon: CheckCircle2,
    title: 'Daily Backups',
    description: 'Redundant data protection',
  },
]

export function SecurityBadges() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary/5 to-primary/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            Security & Compliance
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your patients' data security is our top priority
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {badges.map((badge, index) => {
            const Icon = badge.icon
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{badge.title}</h3>
                <p className="text-sm text-muted-foreground">{badge.description}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 border border-border">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Data Protection</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">End-to-end encryption for all data</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">Role-based access control</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">Detailed audit trails</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">Regular penetration testing</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Compliance</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">HIPAA BAA ready</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">GDPR compliant</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">State data privacy laws</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">Annual compliance audits</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
