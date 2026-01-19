import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Metadata } from 'next'
import { Shield, Lock, FileText, UserCheck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'HIPAA Compliance | ShifaCom',
  description: 'ShifaCom HIPAA compliance and healthcare data security information',
}

export default function HIPAAPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-20 bg-secondary">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              HIPAA Compliance
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              ShifaCom is fully HIPAA compliant with comprehensive security measures and audit protocols to protect your patient data.
            </p>
          </div>
        </section>

        {/* Compliance Overview */}
        <section className="py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-12">Our HIPAA Commitment</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <Shield className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Privacy Rule</h3>
                  <p className="text-muted-foreground">
                    We comply with all HIPAA Privacy Rule requirements including patient rights, permitted uses, and disclosures of Protected Health Information (PHI).
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Lock className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Security Rule</h3>
                  <p className="text-muted-foreground">
                    Administrative, physical, and technical safeguards protect electronic Protected Health Information (ePHI) with encryption and access controls.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <FileText className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Breach Notification</h3>
                  <p className="text-muted-foreground">
                    We maintain comprehensive incident response procedures and notification protocols for any potential security breaches.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <UserCheck className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Business Associate Agreements</h3>
                  <p className="text-muted-foreground">
                    All vendors and third parties sign Business Associate Agreements (BAAs) ensuring they maintain HIPAA compliance standards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Security Measures */}
        <section className="py-20 bg-secondary">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-12">Technical Safeguards</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-4">Encryption & Access Control</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>AES-256 encryption for all data at rest</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>TLS 1.2+ encryption for data in transit</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Multi-factor authentication (MFA) for all users</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Role-based access control with granular permissions</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Regular password policy enforcement</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-foreground mb-4">Audit & Logging</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Comprehensive audit logs for all PHI access</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>24/7 monitoring and intrusion detection</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Real-time alerts for suspicious activities</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Monthly security analysis and reporting</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-foreground mb-4">Infrastructure & Disaster Recovery</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>99.9% uptime SLA with redundant systems</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Automatic daily encrypted backups</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Tested disaster recovery procedures</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Geographic redundancy across data centers</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Administrative Safeguards */}
        <section className="py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-12">Administrative Safeguards</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-secondary p-8 rounded-xl">
                <h3 className="text-xl font-bold text-foreground mb-4">Workforce Security</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Mandatory HIPAA training for all staff</li>
                  <li>• Background checks and credentialing</li>
                  <li>• Access management and deprovisioning</li>
                  <li>• Performance evaluations on security</li>
                  <li>• Incident response training</li>
                </ul>
              </div>
              <div className="bg-secondary p-8 rounded-xl">
                <h3 className="text-xl font-bold text-foreground mb-4">Information Management</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Data retention and disposal policies</li>
                  <li>• Secure media handling procedures</li>
                  <li>• PHI tracking and accountability</li>
                  <li>• Regular risk assessments</li>
                  <li>• Security incident procedures</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-20 bg-secondary">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Certifications & Standards</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 text-center">
                <h3 className="text-2xl font-bold text-primary mb-2">HIPAA</h3>
                <p className="text-muted-foreground">Health Insurance Portability and Accountability Act Compliant</p>
              </div>
              <div className="bg-white rounded-xl p-8 text-center">
                <h3 className="text-2xl font-bold text-primary mb-2">HITECH</h3>
                <p className="text-muted-foreground">Health Information Technology for Economic and Clinical Health Act</p>
              </div>
              <div className="bg-white rounded-xl p-8 text-center">
                <h3 className="text-2xl font-bold text-primary mb-2">SOC 2 Type II</h3>
                <p className="text-muted-foreground">System and Organization Controls Certified</p>
              </div>
              <div className="bg-white rounded-xl p-8 text-center">
                <h3 className="text-2xl font-bold text-primary mb-2">NIST</h3>
                <p className="text-muted-foreground">National Institute of Standards and Technology Framework</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact for Audit */}
        <section className="py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Security & Compliance Questions?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our security team is available to discuss HIPAA compliance, conduct security audits, and address any concerns.
            </p>
            <div className="bg-secondary p-8 rounded-xl inline-block">
              <p className="font-semibold text-foreground mb-2">Compliance & Security Team</p>
              <p className="text-muted-foreground">Email: security@shifacom.com</p>
              <p className="text-muted-foreground">Phone: +1 (234) 567-890</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
