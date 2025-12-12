import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-16 lg:pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-background via-background to-muted py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">Get in Touch</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Have questions about our packaging solutions? Our team is here to help you find the perfect packaging
                for your business.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Contact Info */}
              <div>
                <h2 className="text-3xl font-bold mb-8">Contact Information</h2>

                <div className="space-y-6 mb-12">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <a
                        href="tel:+966565273087"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        +966 56 527 3087
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">Available 24/7 for urgent orders</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a
                        href="mailto:sanewpack@gmail.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        sanewpack@gmail.com
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">We'll respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Location</h3>
                      <p className="text-muted-foreground">Al Falah District</p>
                      <p className="text-muted-foreground">Jeddah</p>
                      <p className="text-muted-foreground">Kingdom of Saudi Arabia</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Business Hours</h3>
                      <p className="text-muted-foreground">Saturday - Thursday: 8:00 AM - 8:00 PM</p>
                      <p className="text-muted-foreground">Friday: 2:00 PM - 8:00 PM</p>
                      <p className="text-sm text-muted-foreground mt-1">Emergency orders: 24/7 via WhatsApp</p>
                    </div>
                  </div>
                </div>

                {/* Service Areas */}
                <div className="bg-muted/50 p-8 rounded-2xl">
                  <h3 className="text-xl font-bold mb-4">Service Coverage</h3>
                  <p className="text-muted-foreground mb-4">
                    We deliver day-by-day across all major cities in Saudi Arabia:
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>Riyadh</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>Jeddah</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>Dammam</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>Mecca</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>Medina</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>Khobar</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>Tabuk</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>All Major Cities</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <div className="bg-gradient-to-br from-[#25D366]/10 to-[#25D366]/5 border-2 border-[#25D366]/20 rounded-3xl p-12 text-center">
                  <div className="h-20 w-20 rounded-full bg-[#25D366] text-white flex items-center justify-center mx-auto mb-6">
                    <MessageCircle className="h-10 w-10" />
                  </div>

                  <h3 className="text-2xl font-bold mb-4">Let's Chat on WhatsApp</h3>
                  <p className="text-muted-foreground mb-8 text-pretty leading-relaxed">
                    Skip the forms! Talk directly with our packaging experts via WhatsApp. Get instant responses through
                    voice messages, audio calls, or text chat.
                  </p>

                  <Button
                    size="lg"
                    className="h-14 px-8 text-base bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-lg hover:shadow-xl transition-all gap-3"
                    asChild
                  >
                    <Link href="https://wa.me/966565273087" target="_blank">
                      <MessageCircle className="h-5 w-5" />
                      Start WhatsApp Chat
                    </Link>
                  </Button>

                  <div className="mt-8 pt-8 border-t border-border space-y-3 text-sm text-muted-foreground">
                    <p className="flex items-center justify-center gap-2">✓ Instant voice & audio chat</p>
                    <p className="flex items-center justify-center gap-2">✓ Share photos & requirements easily</p>
                    <p className="flex items-center justify-center gap-2">✓ Get quotes in real-time</p>
                  </div>
                </div>

                <p className="text-center text-sm text-muted-foreground mt-6">
                  Prefer email? Send us a message at{" "}
                  <a href="mailto:sanewpack@gmail.com" className="text-primary hover:underline">
                    sanewpack@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
