"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, ShoppingCart } from "lucide-react"
import Link from "next/link"

const products = [
  {
    id: "prod-001",
    name: "Premium Food Containers",
    category: "Food Service",
    price: "24.99 sar",
    unit: "per 100 units",
    image: "/modern-clear-plastic-food-storage-container.jpg",
    features: ["BPA-Free", "Microwave Safe", "Leak-Proof"],
  },
  {
    id: "prod-002",
    name: "Industrial Storage Bins",
    category: "Industrial",
    price: "89.99 sar",
    unit: "per 50 units",
    image: "/large-red-industrial-plastic-storage-bin.jpg",
    features: ["Heavy Duty", "Stackable", "UV Resistant"],
  },
  {
    id: "prod-006",
    name: "Takeaway Container Set",
    category: "Retail",
    price: "39.99 sar",
    unit: "per 50 units",
    image: "/takeaway-food-containers-with-lids.jpg",
    features: ["Leak-Resistant", "Microwave Safe", "Stackable"],
  },
  {
    id: "prod-008",
    name: "Custom Packaging Solution",
    category: "Custom",
    price: "199.99 sar",
    unit: "starting from",
    image: "/custom-branded-packaging-boxes.jpg",
    features: ["Custom Design", "Logo Printing", "Any Size"],
  },
]


export function FeaturedProducts() {
  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-end justify-between mb-12 lg:mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-balance">Featured products</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Discover our most popular packaging solutions trusted by leading businesses worldwide
            </p>
          </div>
          <Link href="/products">
            <Button variant="ghost" className="hidden lg:inline-flex group">
              View All
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        {/* Products grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`}>
              <Card className="group cursor-pointer border-border hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
                <CardContent className="p-0">
                  {/* Product image */}
                  <div className="relative aspect-square overflow-hidden bg-muted">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="inline-block px-3 py-1 bg-card text-xs font-medium rounded-full">
                        {product.category}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                    <Button
                      size="icon"
                      className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <ShoppingCart className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Product info */}
                  <div className="p-5">
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {product.features.map((feature) => (
                        <span key={feature} className="text-xs px-2 py-1 bg-muted rounded text-muted-foreground">
                          {feature}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-baseline gap-1 mb-4">
                      <span className="text-2xl font-bold text-foreground">{product.price}</span>
                      <span className="text-sm text-muted-foreground">{product.unit}</span>
                    </div>

                    <Button className="w-full bg-transparent" variant="outline">
                      See More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center lg:hidden">
          <Link href="/products">
            <Button variant="ghost" className="group">
              View All Products
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
