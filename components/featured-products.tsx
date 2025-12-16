"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, ShoppingCart } from "lucide-react"
import Link from "next/link"

const products = [
  {
    id: "pizza-001",
    name: "Custom Pizza Box",
    category: "Food Service",
    price: "0.49 sar",
    unit: "starting from",
    image: "/1.png",
    features: [
      "Food Grade",
      "Grease Resistant",
      "Custom Printing",
      "All Sizes",
    ],
  },
  {
    id: "pizza-002",
    name: "Pizza Box Window",
    category: "Food Service",
    price: "0.69 sar",
    unit: "starting from",
    image: "/2.png",
    features: [
      "Clear Window",
      "Heat Retention",
      "Grease Resistant",
      "Multiple Sizes",
    ],
  },
  {
    id: "pizza-003",
    name: "Double Wall Box",
    category: "Food Service",
    price: "0.79 sar",
    unit: "starting from",
    image: "/3.png",
    features: [
      "Double Wall",
      "Extra Strong",
      "Moisture Control",
      "All Sizes",
    ],
  },
  {
    id: "pizza-004",
    name: "Printed Pizza Box",
    category: "Custom",
    price: "0.99 sar",
    unit: "starting from",
    image: "/4.png",
    features: [
      "Full Color",
      "Food Safe",
      "Eco Friendly",
      "Any Size",
    ],
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

                    {/* <div className="flex items-baseline gap-1 mb-4">
                      <span className="text-2xl font-bold text-foreground">{product.price}</span>
                      <span className="text-sm text-muted-foreground">{product.unit}</span>
                    </div> */}

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
