import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | ShifaCom',
  description: 'ShifaCom privacy policy and data protection practices',
}

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-8">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: January 2024</p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                ShifaCom ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and otherwise process personal information in connection with our HIPAA-compliant healthcare management platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. HIPAA Compliance</h2>
              <p className="text-muted-foreground leading-relaxed">
                ShifaCom is a covered entity under the Health Insurance Portability and Accountability Act (HIPAA). We comply with all HIPAA privacy, security, and breach notification rules. Protected Health Information (PHI) is handled with the utmost care and security protocols.
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                <li>End-to-end encryption for all patient data</li>
                <li>Comprehensive audit trails and access logs</li>
                <li>Regular security assessments and penetration testing</li>
                <li>Employee training on privacy and security</li>
                <li>Incident response procedures</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We collect information you provide directly and information collected automatically:
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Direct Collection:</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Patient health information and medical records</li>
                    <li>Account credentials and user information</li>
                    <li>Contact information and communication preferences</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Automatic Collection:</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Usage data and analytics</li>
                    <li>Device information</li>
                    <li>Access logs and timestamps</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use collected information to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Provide and maintain healthcare management services</li>
                <li>Process medical records and treatment information</li>
                <li>Improve our services and user experience</li>
                <li>Ensure compliance with legal obligations</li>
                <li>Maintain security and prevent fraud</li>
                <li>Communicate with you about services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement comprehensive security measures including encryption, access controls, and regular security audits. All data is stored in secure, HIPAA-compliant servers with automated backups and disaster recovery protocols.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Under HIPAA and privacy regulations, you have the right to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Access your health information</li>
                <li>Request amendments to your records</li>
                <li>Receive an accounting of disclosures</li>
                <li>Request restrictions on use and disclosure</li>
                <li>Request confidential communications</li>
                <li>File a complaint with our Privacy Officer</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Data Retention</h2>
              <p className="text-muted-foreground leading-relaxed">
                We retain personal and health information for as long as necessary to provide services and comply with legal obligations. Patient records are maintained according to applicable state and federal regulations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Third-Party Services</h2>
              <p className="text-muted-foreground leading-relaxed">
                When we share information with third-party service providers, we require them to maintain HIPAA compliance and sign Business Associate Agreements (BAAs). We do not sell patient data to marketing companies or third parties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Cookies and Tracking</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use cookies and similar tracking technologies to enhance functionality and analyze usage. You can control cookie settings through your browser. However, disabling cookies may affect platform functionality.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                For privacy concerns or to exercise your rights, contact our Privacy Officer:
              </p>
              <div className="bg-secondary p-6 rounded-lg space-y-2">
                <p className="font-semibold text-foreground">Privacy Officer</p>
                <p className="text-muted-foreground">Email: privacy@shifacom.com</p>
                <p className="text-muted-foreground">Phone: +1 (234) 567-890</p>
                <p className="text-muted-foreground">Address: Healthcare Hub, Medical City</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">11. Changes to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy periodically. Significant changes will be communicated to users. Continued use of the platform constitutes acceptance of updated terms.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
