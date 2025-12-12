import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function TermsOfServicePage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-16 lg:pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-background via-background to-muted py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">Terms of Service</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Last Updated:{" "}
                {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
              </p>
            </div>
          </div>
        </section>

        {/* Terms of Service Content */}
        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-4">Agreement to Terms</h2>
              <p className="text-muted-foreground mb-8">
                By accessing and using NewPack's website and services, you agree to be bound by these Terms of Service
                and all applicable laws and regulations of the Kingdom of Saudi Arabia. If you do not agree with any of
                these terms, you are prohibited from using our services.
              </p>

              <h2 className="text-3xl font-bold mb-4 mt-12">Business Information</h2>
              <p className="text-muted-foreground mb-8">
                NewPack is a packaging solutions provider operating in accordance with Saudi Arabian commercial law. Our
                business is registered and operates from Al Falh District, Jeddah, Kingdom of Saudi Arabia. All
                transactions and services are governed by Saudi Arabian law.
              </p>

              <h2 className="text-3xl font-bold mb-4 mt-12">Products and Services</h2>
              <p className="text-muted-foreground mb-4">We offer a range of plastic packaging products including:</p>
              <ul className="list-disc pl-6 mb-8 text-muted-foreground space-y-2">
                <li>Food containers and storage solutions</li>
                <li>Retail packaging products</li>
                <li>Custom pizza box printing</li>
                <li>Corrugated box printing</li>
                <li>Sandwich boxes and food service packaging</li>
                <li>Custom packaging solutions for businesses</li>
              </ul>
              <p className="text-muted-foreground mb-8">
                Product specifications, availability, and pricing are subject to change without notice. We reserve the
                right to limit quantities and discontinue products.
              </p>

              <h2 className="text-3xl font-bold mb-4 mt-12">Ordering and Payment</h2>
              <p className="text-muted-foreground mb-4">
                Orders can be placed through our website or via WhatsApp. By placing an order, you:
              </p>
              <ul className="list-disc pl-6 mb-8 text-muted-foreground space-y-2">
                <li>Confirm that all information provided is accurate and complete</li>
                <li>Authorize us to charge the agreed-upon amount</li>
                <li>Accept that orders are subject to acceptance and availability</li>
                <li>Understand that prices are quoted in Saudi Riyal (SAR)</li>
              </ul>
              <p className="text-muted-foreground mb-8">
                Payment terms will be agreed upon during the ordering process. We accept various payment methods in
                compliance with Saudi Arabian banking regulations.
              </p>

              <h2 className="text-3xl font-bold mb-4 mt-12">Pricing</h2>
              <p className="text-muted-foreground mb-8">
                All prices are listed in Saudi Riyal (SAR) and are subject to applicable VAT as per Saudi Arabian tax
                regulations. Prices may be adjusted without prior notice. The price applicable to your order will be the
                price at the time of order confirmation.
              </p>

              <h2 className="text-3xl font-bold mb-4 mt-12">Delivery and Shipping</h2>
              <p className="text-muted-foreground mb-8">
                We provide delivery services across major cities in Saudi Arabia, including Riyadh, Jeddah, Dammam,
                Mecca, Medina, and other locations. Delivery times are estimates and may vary. Risk of loss and title
                pass to you upon delivery. We are not responsible for delays caused by circumstances beyond our control.
              </p>

              <h2 className="text-3xl font-bold mb-4 mt-12">Returns and Refunds</h2>
              <p className="text-muted-foreground mb-4">
                Returns and refunds are handled in accordance with Saudi Arabian consumer protection laws:
              </p>
              <ul className="list-disc pl-6 mb-8 text-muted-foreground space-y-2">
                <li>Defective products must be reported within 7 days of delivery</li>
                <li>Custom-made or printed products cannot be returned unless defective</li>
                <li>Products must be unused and in original packaging for returns</li>
                <li>Refunds will be processed within 14 business days of approved returns</li>
              </ul>

              <h2 className="text-3xl font-bold mb-4 mt-12">Intellectual Property</h2>
              <p className="text-muted-foreground mb-8">
                All content on our website, including text, graphics, logos, images, and software, is the property of
                NewPack or its licensors and is protected by Saudi Arabian and international intellectual property laws.
                You may not reproduce, distribute, or create derivative works without our express written permission.
              </p>

              <h2 className="text-3xl font-bold mb-4 mt-12">Custom Design Services</h2>
              <p className="text-muted-foreground mb-8">
                For custom printing and design services, you warrant that you have the right to use any logos,
                trademarks, or designs you provide. You agree to indemnify NewPack against any claims arising from the
                use of your provided designs.
              </p>

              <h2 className="text-3xl font-bold mb-4 mt-12">Limitation of Liability</h2>
              <p className="text-muted-foreground mb-8">
                To the maximum extent permitted by Saudi Arabian law, NewPack shall not be liable for any indirect,
                incidental, special, consequential, or punitive damages resulting from your use or inability to use our
                products or services. Our total liability shall not exceed the amount paid for the specific product or
                service in question.
              </p>

              <h2 className="text-3xl font-bold mb-4 mt-12">Quality Standards</h2>
              <p className="text-muted-foreground mb-8">
                We are committed to providing high-quality products that meet industry standards. While we strive for
                excellence, we make no warranties beyond those required by Saudi Arabian consumer protection law. We
                support Saudi Vision 2030's goals for quality and sustainability in manufacturing.
              </p>

              <h2 className="text-3xl font-bold mb-4 mt-12">Dispute Resolution</h2>
              <p className="text-muted-foreground mb-8">
                Any disputes arising from these Terms of Service shall be resolved in accordance with Saudi Arabian law.
                Both parties agree to first attempt to resolve disputes through good-faith negotiation. If unresolved,
                disputes shall be submitted to the competent courts in Jeddah, Kingdom of Saudi Arabia.
              </p>

              <h2 className="text-3xl font-bold mb-4 mt-12">Compliance with Saudi Law</h2>
              <p className="text-muted-foreground mb-8">
                These Terms of Service are governed by and construed in accordance with the laws of the Kingdom of Saudi
                Arabia, including but not limited to the Commercial Law, E-Commerce Law, Consumer Protection Law, and
                VAT regulations. All business activities are conducted in compliance with Saudi Arabian regulatory
                requirements.
              </p>

              <h2 className="text-3xl font-bold mb-4 mt-12">Modifications to Terms</h2>
              <p className="text-muted-foreground mb-8">
                We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately
                upon posting to our website. Your continued use of our services after changes constitutes acceptance of
                the modified terms.
              </p>

              <h2 className="text-3xl font-bold mb-4 mt-12">Contact Information</h2>
              <p className="text-muted-foreground mb-4">
                For questions about these Terms of Service, please contact us:
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
                <p className="text-muted-foreground mt-2">
                  WhatsApp:{" "}
                  <a
                    href="https://wa.me/966565273087"
                    target="_blank"
                    className="text-primary hover:underline"
                    rel="noreferrer"
                  >
                    +966 56 527 3087
                  </a>
                </p>
              </div>

              <p className="text-sm text-muted-foreground italic">
                These Terms of Service are governed by the laws of the Kingdom of Saudi Arabia. All rights reserved. ©{" "}
                {new Date().getFullYear()} NewPack.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
