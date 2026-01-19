import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Metadata } from 'next'
import { CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Features | ShifaCom',
  description: 'Comprehensive features of ShifaCom healthcare management platform',
}

const featureCategories = [
  {
    title: 'Patient Management',
    description: 'Complete patient record management with appointment scheduling',
    features: [
      'Digital patient records and medical history',
      'Appointment scheduling and reminders',
      'Patient vitals and test results tracking',
      'Prescription management',
      'Patient portal for self-service',
      'Family member access control',
    ],
  },
  {
    title: 'Clinical Operations',
    description: 'Streamline clinical workflows and doctor-patient interactions',
    features: [
      'Doctor notes and clinical documentation',
      'Real-time consultation capabilities',
      'Lab orders and results integration',
      'Imaging reports and storage',
      'Treatment plans and follow-ups',
      'Multi-department collaboration',
    ],
  },
  {
    title: 'Pharmacy Management',
    description: 'Complete pharmacy operations from inventory to dispensing',
    features: [
      'Inventory management and tracking',
      'Prescription verification and validation',
      'Drug interaction checking',
      'Expiry date monitoring',
      'Supplier management',
      'Sales and revenue tracking',
    ],
  },
  {
    title: 'Staff Management',
    description: 'HR and workforce management tools',
    features: [
      'Employee directory and profiles',
      'Shift scheduling and management',
      'Time tracking and attendance',
      'Performance evaluations',
      'Training records',
      'Credential verification',
    ],
  },
  {
    title: 'Analytics & Reporting',
    description: 'Data-driven insights for healthcare operations',
    features: [
      'Patient statistics and trends',
      'Financial reports and billing',
      'Performance metrics dashboards',
      'Custom report generation',
      'Export capabilities',
      'Real-time analytics',
    ],
  },
  {
    title: 'Security & Compliance',
    description: 'Enterprise-grade security and regulatory compliance',
    features: [
      'HIPAA compliance certification',
      'End-to-end encryption',
      'Role-based access control',
      'Comprehensive audit logs',
      'Automated backups',
      'Disaster recovery protocols',
    ],
  },
]

export default function FeaturesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-20 bg-secondary">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Comprehensive Healthcare Features
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Everything you need to manage modern healthcare facilities with efficiency, security, and compliance.
            </p>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {featureCategories.map((category, index) => (
                <div key={index} className="bg-white border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{category.title}</h3>
                  <p className="text-muted-foreground mb-6">{category.description}</p>
                  <ul className="space-y-3">
                    {category.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HIPAA Compliance Section */}
        <section className="py-20 bg-secondary">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Enterprise-Grade Security
              </h2>
              <p className="text-lg text-muted-foreground">
                Your patient data is protected with the highest standards of security and compliance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8">
                <h3 className="text-xl font-bold text-foreground mb-4">Security Features</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">256-bit SSL/TLS encryption</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">AES-256 data encryption at rest</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">Multi-factor authentication</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">Role-based access control</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8">
                <h3 className="text-xl font-bold text-foreground mb-4">Compliance & Standards</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">HIPAA BAA compliant</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">HITECH Act compliance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">SOC 2 Type II certified</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">Regular security audits</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
