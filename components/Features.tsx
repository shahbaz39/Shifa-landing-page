import { Shield, Users, Zap, Lock, BarChart3, Bell } from 'lucide-react'

const features = [
  {
    icon: Users,
    title: 'Multi-User Management',
    description: 'Role-based access control for doctors, nurses, pharmacists, and administrators with granular permissions.',
  },
  {
    icon: Shield,
    title: 'HIPAA Compliance',
    description: 'Full HIPAA compliance with encryption, audit logs, and secure data handling protocols.',
  },
  {
    icon: Lock,
    title: 'Patient Privacy',
    description: 'Advanced data encryption and privacy controls to protect sensitive patient information.',
  },
  {
    icon: Zap,
    title: 'Real-Time Sync',
    description: 'Instant synchronization across all devices and departments for seamless workflow.',
  },
  {
    icon: BarChart3,
    title: 'Analytics Dashboard',
    description: 'Comprehensive insights into clinic operations, patient data, and performance metrics.',
  },
  {
    icon: Bell,
    title: 'Smart Notifications',
    description: 'Automated alerts for appointments, prescriptions, and critical patient information.',
  },
]

export function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            Powerful Features for Modern Healthcare
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to manage healthcare operations efficiently and securely
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group relative rounded-2xl border border-border bg-white p-8 hover:border-primary/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
