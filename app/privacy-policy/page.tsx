import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-16 lg:pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-background via-background to-muted py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">Privacy Policy</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Last Updated:{" "}
                {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
              </p>
            </div>
          </div>
        </section>

        {/* Privacy Policy Content */}
        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-4">Introduction</h2>
              <p className="text-muted-foreground mb-8">
                NewPack ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how
                we collect, use, disclose, and safeguard your information when you visit our website and use our
                services, in compliance with the Personal Data Protection Law (PDPL) of the Kingdom of Saudi Arabia.
              </p>

              <h2 className="text-3xl font-bold mb-4 mt-12">Information We Collect</h2>
              <p className="text-muted-foreground mb-4">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 mb-8 text-muted-foreground space-y-2">
                <li>Name, email address, phone number, and business information</li>
                <li>Shipping and billing addresses</li>
                <li>Order details and purchase history</li>
                <li>Communication preferences and correspondence with us</li>
                <li>Payment information (processed securely through third-party payment processors)</li>
              </ul>

              <h2 className="text-3xl font-bold mb-4 mt-12">How We Use Your Information</h2>
              <p className="text-muted-foreground mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 mb-8 text-muted-foreground space-y-2">
                <li>Process and fulfill your orders</li>
                <li>Communicate with you about products, services, and promotions</li>
                <li>Provide customer support and respond to your inquiries</li>
                <li>Improve our website, products, and services</li>
                <li>Comply with legal obligations under Saudi Arabian law</li>
                <li>Detect and prevent fraud or security issues</li>
              </ul>

              <h2 className="text-3xl font-bold mb-4 mt-12">Data Protection and Security</h2>
              <p className="text-muted-foreground mb-8">
                We implement appropriate technical and organizational measures to protect your personal data against
                unauthorized access, alteration, disclosure, or destruction. All data is stored securely in accordance
                with PDPL requirements and Saudi Arabian data protection standards.
              </p>

              <h2 className="text-3xl font-bold mb-4 mt-12">Your Rights Under PDPL</h2>
              <p className="text-muted-foreground mb-4">
                Under the Personal Data Protection Law of Saudi Arabia, you have the right to:
              </p>
              <ul className="list-disc pl-6 mb-8 text-muted-foreground space-y-2">
                <li>Access your personal data that we hold</li>
                <li>Request correction of inaccurate or incomplete data</li>
                <li>Request deletion of your personal data</li>
                <li>Object to the processing of your personal data</li>
                <li>Withdraw consent at any time</li>
                <li>Lodge a complaint with the Saudi Data & AI Authority (SDAIA)</li>
              </ul>

              <h2 className="text-3xl font-bold mb-4 mt-12">Data Retention</h2>
              <p className="text-muted-foreground mb-8">
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in
                this Privacy Policy, unless a longer retention period is required or permitted by law. Business records
                are maintained in accordance with Saudi Arabian commercial law requirements.
              </p>

              <h2 className="text-3xl font-bold mb-4 mt-12">Third-Party Services</h2>
              <p className="text-muted-foreground mb-8">
                We may share your information with trusted third-party service providers who assist us in operating our
                business, such as payment processors, shipping companies, and communication platforms (including
                WhatsApp for customer service). These providers are contractually obligated to protect your data and use
                it only for the purposes we specify.
              </p>

              <h2 className="text-3xl font-bold mb-4 mt-12">Cookies and Tracking</h2>
              <p className="text-muted-foreground mb-8">
                Our website uses cookies and similar tracking technologies to enhance your browsing experience. You can
                control cookie settings through your browser preferences.
              </p>

              <h2 className="text-3xl font-bold mb-4 mt-12">International Data Transfers</h2>
              <p className="text-muted-foreground mb-8">
                Your personal data is primarily stored and processed within the Kingdom of Saudi Arabia. If we need to
                transfer data internationally, we ensure appropriate safeguards are in place in compliance with PDPL
                requirements.
              </p>

              <h2 className="text-3xl font-bold mb-4 mt-12">Children's Privacy</h2>
              <p className="text-muted-foreground mb-8">
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal
                information from children.
              </p>

              <h2 className="text-3xl font-bold mb-4 mt-12">Changes to This Policy</h2>
              <p className="text-muted-foreground mb-8">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the
                new policy on this page and updating the "Last Updated" date.
              </p>

              <h2 className="text-3xl font-bold mb-4 mt-12">Contact Us</h2>
              <p className="text-muted-foreground mb-4">
                If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us:
              </p>
              <div className="bg-muted/50 p-6 rounded-xl mb-8">
                <p className="text-muted-foreground mb-2">
                  <strong>NewPack</strong>
                </p>
                <p className="text-muted-foreground mb-2">Al Falh District, Jeddah, Kingdom of Saudi Arabia</p>
                <p className="text-muted-foreground mb-2">
                  Email:{" "}
                  <a href="mailto:sanewpack@gmail.com" className="text-primary hover:underline">
                    sanewpack@gmail.com
                  </a>
                </p>
                <p className="text-muted-foreground">
                  Phone:{" "}
                  <a href="tel:+966565273087" className="text-primary hover:underline">
                    +966 56 527 3087
                  </a>
                </p>
              </div>

              <p className="text-sm text-muted-foreground italic">
                This Privacy Policy is governed by the laws of the Kingdom of Saudi Arabia and complies with the
                Personal Data Protection Law (PDPL) and regulations issued by the Saudi Data & AI Authority (SDAIA).
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
