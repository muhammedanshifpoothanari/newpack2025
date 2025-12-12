"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Package, Recycle, Shield } from "lucide-react"
import Link from "next/link"
import { createSampleKitRequest, openWhatsApp } from "@/lib/whatsapp"

export function HeroSection() {
  const handleRequestSample = () => {
    const message = createSampleKitRequest()
    openWhatsApp(message)
  }

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              <Recycle className="h-4 w-4" />
              <span>Sustainable Packaging Solutions</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6 text-balance leading-[1.1]">
              Premium plastic packaging for modern business
            </h1>

            <p className="text-lg lg:text-xl text-muted-foreground mb-8 max-w-xl text-pretty leading-relaxed">
              Transform your product presentation with innovative, reliable, and eco-conscious packaging solutions
              designed to elevate your brand and protect what matters most.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base h-12 px-8 group" asChild>
                <Link href="/products">
                  Explore Products
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base h-12 px-8 bg-transparent"
                onClick={handleRequestSample}
              >
                Request Sample Kit
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 pt-8 border-t border-border">
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold text-foreground mb-1">500+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-foreground mb-1">2M+</div>
                  <div className="text-sm text-muted-foreground">Units Delivered</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-foreground mb-1">2030</div>
                  <div className="text-sm text-muted-foreground">Vision Aligned</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right visual - Product showcase */}
          <div className="relative">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted">
              <img
                src="/modern-plastic-containers-and-packaging-products-a.jpg"
                alt="NewPack Products"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating cards */}
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-4 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Package className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-semibold">Fast Delivery</div>
                  <div className="text-xs text-muted-foreground">2-5 business days</div>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-card border border-border rounded-xl p-4 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-semibold">Quality Assured</div>
                  <div className="text-xs text-muted-foreground">100% guarantee</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
