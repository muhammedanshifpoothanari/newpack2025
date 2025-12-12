import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Factory, Package, Truck, Award, Users, Globe } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-16 lg:pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-background via-background to-muted py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
                Premium Custom Packaging Solutions Across Saudi Arabia
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                NewPack is your trusted partner for premium plastic and corrugated packaging. We manufacture custom
                packaging solutions with your logo, delivering excellence day by day.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">Get in Touch</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/products">View Products</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold mb-2">15+</div>
                <div className="text-sm lg:text-base opacity-90">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold mb-2">5000+</div>
                <div className="text-sm lg:text-base opacity-90">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold mb-2">50+</div>
                <div className="text-sm lg:text-base opacity-90">Cities Covered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold mb-2">24/7</div>
                <div className="text-sm lg:text-base opacity-90">Support Available</div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-balance">
                  Delivering Quality, One Package at a Time
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  At NewPack, we specialize in custom corrugated boxes with your logo, premium plastic packaging, and
                  innovative solutions for businesses across Saudi Arabia. Our state-of-the-art factory and warehouse
                  ensure consistent quality and timely delivery.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  We proudly serve restaurants, bakeries, retail shops, and businesses of all sizes with custom sandwich
                  boxes, pizza boxes, duplex packaging, fish paper boxes, and much more. Every product is crafted to
                  meet your unique needs.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our commitment to excellence and customer satisfaction has made us the preferred packaging partner for
                  thousands of businesses across the Kingdom.
                </p>
              </div>
              <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
                <Image src="/modern-packaging-factory-warehouse-with-corrugated.jpg" alt="NewPack Factory" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="py-16 lg:py-24 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-balance">What Makes Us Different</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From custom printing to day-by-day delivery, we handle every aspect of your packaging needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-card p-8 rounded-2xl border border-border">
                <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                  <Package className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Custom Logo Printing</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We print your brand logo on corrugated boxes, creating professional packaging that represents your
                  business perfectly.
                </p>
              </div>

              <div className="bg-card p-8 rounded-2xl border border-border">
                <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                  <Factory className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Factory & Warehouse</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our modern facility ensures consistent quality control and maintains large inventory for quick
                  fulfillment.
                </p>
              </div>

              <div className="bg-card p-8 rounded-2xl border border-border">
                <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                  <Truck className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Day-by-Day Delivery</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Reliable daily delivery to your shop or business location across Saudi Arabia, ensuring you never run
                  out of packaging.
                </p>
              </div>

              <div className="bg-card p-8 rounded-2xl border border-border">
                <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Premium Quality</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Food-grade materials, durable construction, and rigorous quality testing on every product we
                  manufacture.
                </p>
              </div>

              <div className="bg-card p-8 rounded-2xl border border-border">
                <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Dedicated Support</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our experienced team works closely with you to understand your needs and provide personalized
                  solutions.
                </p>
              </div>

              <div className="bg-card p-8 rounded-2xl border border-border">
                <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                  <Globe className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Kingdom-Wide Coverage</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Serving businesses across all major cities and regions in Saudi Arabia with reliable logistics.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-12 lg:p-16 text-center text-primary-foreground">
              <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-balance">Ready to Elevate Your Packaging?</h2>
              <p className="text-lg lg:text-xl mb-8 max-w-2xl mx-auto opacity-95">
                Join thousands of businesses who trust NewPack for their daily packaging needs. Let's create custom
                solutions for your brand.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/contact">Contact Us Today</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                  asChild
                >
                  <Link href="/solutions">View Solutions</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
