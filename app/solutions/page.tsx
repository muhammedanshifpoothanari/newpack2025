"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Check, MessageCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { createGeneralInquiry, openWhatsApp } from "@/lib/whatsapp"

const solutions = [
  {
    title: "Custom Pizza Boxes",
    description:
      "Durable corrugated pizza boxes with your restaurant logo. Available in multiple sizes with custom printing.",
    features: [
      "Custom logo printing in full color",
      "Food-grade safe materials",
      'Multiple sizes: 10", 12", 14", 16"',
      "Hot & cold resistant",
      "Stackable design for easy storage",
    ],
    image: "/branded-pizza-box-with-logo-custom-printing.jpg",
  },
  {
    title: "Sandwich & Burger Boxes",
    description: "Premium sandwich and burger boxes designed to keep food fresh and secure during delivery.",
    features: [
      "Leak-resistant construction",
      "Your brand logo prominently displayed",
      "Window options available",
      "Eco-friendly materials",
      "Perfect for takeaway and delivery",
    ],
    image: "/custom-sandwich-box-with-window-and-logo.jpg",
  },
  {
    title: "Duplex Packaging",
    description: "High-quality duplex board packaging for bakeries, desserts, and premium food items.",
    features: [
      "Elegant matte or glossy finish",
      "Custom shapes and sizes",
      "Perfect for cakes and pastries",
      "Grease-resistant coating",
      "Premium brand presentation",
    ],
    image: "/duplex-cake-box-bakery-packaging.jpg",
  },
  {
    title: "Fish & Seafood Packaging",
    description: "Specialized paper and plastic packaging designed for fresh fish and seafood products.",
    features: [
      "Moisture-resistant materials",
      "Odor-barrier technology",
      "FDA approved for food contact",
      "Custom printed with your branding",
      "Available in bulk quantities",
    ],
    image: "/fish-seafood-packaging-paper-box.jpg",
  },
  {
    title: "Corrugated Shipping Boxes",
    description: "Heavy-duty corrugated boxes with custom logo printing for shipping and storage.",
    features: [
      "Multiple strength options",
      "Logo printing on all sides",
      "Various sizes and dimensions",
      "Stackable and space-efficient",
      "Bulk ordering discounts",
    ],
    image: "/corrugated-shipping-box-with-company-logo.jpg",
  },
  {
    title: "Plastic Food Containers",
    description: "Crystal-clear plastic containers for food storage, display, and takeaway services.",
    features: [
      "BPA-free food-grade plastic",
      "Leak-proof secure lids",
      "Microwave and freezer safe",
      "Custom sticker labels available",
      "Perfect for restaurants and catering",
    ],
    image: "/clear-plastic-food-containers-with-lids.jpg",
  },
]

export default function SolutionsPage() {
  const handleTalkOnWhatsApp = (solutionTitle: string) => {
    const message = createGeneralInquiry(solutionTitle)
    openWhatsApp(message)
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-16 lg:pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-background via-background to-muted py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
                Custom Packaging Solutions for Every Business
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                From custom-printed pizza boxes to specialized seafood packaging, we deliver day-by-day solutions
                tailored to your needs.
              </p>
              <Button size="lg" className="gap-2" onClick={() => handleTalkOnWhatsApp("Custom Packaging Solutions")}>
                <MessageCircle className="h-5 w-5 text-[#25D366]" />
                Talk on WhatsApp
              </Button>
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-24">
              {solutions.map((solution, index) => (
                <div
                  key={solution.title}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4">{solution.title}</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">{solution.description}</p>

                    <div className="space-y-3 mb-8">
                      {solution.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-3">
                          <div className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="h-3 w-3" />
                          </div>
                          <span className="text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-4">
                      <Button className="gap-2" onClick={() => handleTalkOnWhatsApp(solution.title)}>
                        <MessageCircle className="h-5 w-5 text-[#25D366]" />
                        Talk on WhatsApp
                      </Button>
                      <Button variant="outline" asChild>
                        <Link href="/products">View Products</Link>
                      </Button>
                    </div>
                  </div>

                  <div
                    className={`relative h-[300px] lg:h-[400px] rounded-2xl overflow-hidden ${index % 2 === 1 ? "lg:order-1" : ""}`}
                  >
                    <Image
                      src={solution.image || "/placeholder.svg"}
                      alt={solution.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Custom Solutions CTA */}
        <section className="py-16 lg:py-24 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-balance">Need a Custom Solution?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                We specialize in creating unique packaging solutions tailored to your specific requirements. Whether you
                need special sizes, unique materials, or complex designs, our team is ready to help.
              </p>
              <Button size="lg" className="gap-2" onClick={() => handleTalkOnWhatsApp("Custom Solution Inquiry")}>
                <MessageCircle className="h-5 w-5 text-[#25D366]" />
                Discuss on WhatsApp
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
