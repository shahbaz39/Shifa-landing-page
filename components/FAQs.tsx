'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'Is ShifaCom fully HIPAA compliant?',
    answer: 'Yes, ShifaCom is fully HIPAA compliant with end-to-end encryption, detailed audit logs, role-based access controls, and regular security assessments. We maintain BAA agreements with all clients.',
  },
  {
    question: 'How long does implementation typically take?',
    answer: 'Implementation typically takes 4-8 weeks depending on your facility size and complexity. Our onboarding team provides dedicated support throughout the process to ensure a smooth transition.',
  },
  {
    question: 'Can ShifaCom integrate with existing systems?',
    answer: 'Absolutely. ShifaCom offers API integrations with most major EHR systems, billing software, and pharmacy management solutions. We can also create custom integrations for your specific needs.',
  },
  {
    question: 'What kind of support do you provide?',
    answer: 'We offer 24/7 technical support, regular training sessions, video tutorials, comprehensive documentation, and a dedicated account manager for enterprise customers.',
  },
  {
    question: 'How is patient data secured?',
    answer: 'Patient data is secured using military-grade AES-256 encryption, SSL/TLS protocols, two-factor authentication, and is stored in HIPAA-compliant data centers with redundant backups.',
  },
  {
    question: 'What happens if there is downtime?',
    answer: 'ShifaCom guarantees 99.9% uptime with redundant infrastructure and disaster recovery protocols. In the rare event of issues, our incident response team works around the clock to restore service.',
  },
  {
    question: 'Can I migrate from another system?',
    answer: 'Yes, we provide free data migration services for all new customers. Our migration specialists ensure zero data loss and manage the entire transition process with minimal disruption.',
  },
  {
    question: 'How much does ShifaCom cost?',
    answer: 'ShifaCom offers flexible pricing based on your facility size and needs. Contact our sales team for a customized quote. We also offer discounts for non-profit healthcare organizations.',
  },
]

export function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Find answers to common questions about ShifaCom
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 bg-white hover:bg-secondary transition-colors"
              >
                <h3 className="text-lg font-semibold text-foreground text-left">{faq.question}</h3>
                <ChevronDown
                  className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 py-4 bg-secondary border-t border-border">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Didn't find what you're looking for?
          </p>
          <a
            href="mailto:support@shifacom.com"
            className="inline-flex rounded-lg bg-primary px-8 py-3 text-base font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Contact Our Team
          </a>
        </div>
      </div>
    </section>
  )
}
