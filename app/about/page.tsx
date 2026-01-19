import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | ShifaCom',
  description: 'Learn about ShifaCom and our mission to revolutionize healthcare management',
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-20 bg-secondary">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              About ShifaCom
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Revolutionizing healthcare management through technology, security, and patient-centered design.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
                <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                  At ShifaCom, we believe that every healthcare facility deserves access to world-class digital tools that prioritize patient care, staff efficiency, and data security.
                </p>
                <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                  Our mission is to empower healthcare providers with secure, compliant, and intuitive technology that transforms how medical professionals work together to deliver exceptional patient care.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Founded with a deep understanding of healthcare challenges, we've built ShifaCom to be the most trusted digital partner for modern healthcare facilities.
                </p>
              </div>
              <div className="bg-secondary rounded-2xl p-8 h-80 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-primary mb-4">500+</div>
                  <p className="text-xl font-semibold text-foreground mb-2">Healthcare Facilities</p>
                  <p className="text-muted-foreground">Trust ShifaCom for their digital transformation</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-secondary">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8">
                <h3 className="text-xl font-bold text-foreground mb-4">Patient-First</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Every decision we make is guided by what's best for patient care and safety. We design with healthcare providers and patients in mind.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8">
                <h3 className="text-xl font-bold text-foreground mb-4">Security & Compliance</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Healthcare data is sacred. We maintain the highest standards of HIPAA compliance and data security with no compromises.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8">
                <h3 className="text-xl font-bold text-foreground mb-4">Innovation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We continuously innovate to provide cutting-edge features that solve real healthcare challenges and improve workflows.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Our Team</h2>
            <p className="text-lg text-muted-foreground text-center mb-8 leading-relaxed">
              ShifaCom is built by healthcare professionals, software engineers, and security experts who are passionate about transforming healthcare delivery. Our team brings decades of combined experience in healthcare IT and patient care.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {['Chief Medical Officer', 'Chief Technology Officer', 'Chief Security Officer'].map((role, index) => (
                <div key={index} className="bg-secondary rounded-xl p-8 text-center">
                  <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4"></div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Team Member</h3>
                  <p className="text-muted-foreground">{role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">500+</div>
                <p className="text-primary-foreground/80">Healthcare Facilities</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">1M+</div>
                <p className="text-primary-foreground/80">Patient Records</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">99.9%</div>
                <p className="text-primary-foreground/80">Uptime SLA</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">24/7</div>
                <p className="text-primary-foreground/80">Support Available</p>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8">Our Story</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                ShifaCom was founded on the belief that modern healthcare facilities need digital solutions that are as sophisticated as the care they provide. Our founders, with backgrounds in medicine, healthcare IT, and software engineering, recognized a critical gap in the market.
              </p>
              <p>
                Existing healthcare management systems were either outdated, difficult to use, or compromised on security and compliance. We decided to build something better—a platform that would combine the best practices from leading healthcare organizations with cutting-edge technology.
              </p>
              <p>
                Today, ShifaCom serves healthcare facilities across the country, helping thousands of healthcare professionals deliver better patient care every single day. We're proud to have become a trusted partner in healthcare digital transformation.
              </p>
              <p>
                Our commitment remains unchanged: to provide the most secure, user-friendly, and HIPAA-compliant healthcare management platform available. We're just getting started on our mission to transform healthcare.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
