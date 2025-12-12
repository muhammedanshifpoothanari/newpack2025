"use client"

import Image from "next/image"
import { Star, Check, ShoppingCart, Package, Shield, Truck, MessageCircle, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import type { Product } from "@/lib/products"
import { useCart } from "@/hooks/use-cart"
import { useState } from "react"
import { createProductInquiry, openWhatsApp } from "@/lib/whatsapp"
import { useRouter } from "next/navigation"
import { formatPrice } from "@/lib/currency"

interface ProductDetailsProps {
  product: Product
}

export function ProductDetails({ product }: ProductDetailsProps) {
  const { addToCart } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [isAdding, setIsAdding] = useState(false)
  const router = useRouter()

  const handleAddToCart = () => {
    setIsAdding(true)
    addToCart(product, quantity)
    setTimeout(() => setIsAdding(false), 800)
  }

  const handleOrderOnWhatsApp = () => {
    const message = createProductInquiry(product.name, product.id, quantity)
    openWhatsApp(message)
  }

  return (
    <>
      <div className="mb-6">
        <Button variant="ghost" className="gap-2 hover:gap-3 transition-all" onClick={() => router.back()}>
          <ArrowLeft className="h-4 w-4" />
          Back to Products
        </Button>
      </div>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-16">
        {/* Product Image */}
        <div className="relative aspect-square rounded-lg overflow-hidden bg-muted">
          <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" priority />
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          <div className="mb-4">
            <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full mb-3">
              {product.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mb-2 text-balance">{product.name}</h1>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${i < Math.floor(product.rating) ? "fill-primary text-primary" : "text-muted"}`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>
          </div>

          <p className="text-lg text-muted-foreground mb-6 text-pretty">{product.description}</p>

          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-3">Key Features</h3>
            <ul className="space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <Card className="p-4 mb-6 bg-muted/50 border-border">
            <h3 className="font-semibold mb-3">Specifications</h3>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <span className="text-muted-foreground">Material:</span>
                <p className="font-medium">{product.specifications.material}</p>
              </div>
              <div>
                <span className="text-muted-foreground">Size:</span>
                <p className="font-medium">{product.specifications.size}</p>
              </div>
              {product.specifications.capacity && (
                <div>
                  <span className="text-muted-foreground">Capacity:</span>
                  <p className="font-medium">{product.specifications.capacity}</p>
                </div>
              )}
              {product.specifications.color && (
                <div>
                  <span className="text-muted-foreground">Color:</span>
                  <p className="font-medium">{product.specifications.color}</p>
                </div>
              )}
            </div>
          </Card>

          <div className="flex items-center gap-4 mb-6">
            <div>
              <label className="text-sm text-muted-foreground mb-2 block">Quantity</label>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  -
                </Button>
                <span className="w-12 text-center font-semibold">{quantity}</span>
                <Button variant="outline" size="sm" onClick={() => setQuantity(quantity + 1)}>
                  +
                </Button>
              </div>
            </div>
            <div className="flex-1">
              <div className="text-sm text-muted-foreground mb-2">Price</div>
              <div className="text-3xl font-bold">{formatPrice(product.price * quantity)}</div>
            </div>
          </div>

          <div className="space-y-3 mb-8">
            <Button
              size="lg"
              className="w-full h-12 gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white shadow-sm hover:shadow-md transition-all"
              onClick={handleOrderOnWhatsApp}
            >
              <MessageCircle className="w-5 h-5" />
              Order on WhatsApp
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="w-full h-12 gap-2 bg-transparent"
              onClick={handleAddToCart}
              disabled={!product.inStock || isAdding}
            >
              <ShoppingCart className="w-5 h-5" />
              {isAdding ? "Added to Cart!" : "Add to Cart"}
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
            <div className="flex flex-col items-center text-center gap-2">
              <Package className="w-6 h-6 text-primary" />
              <span className="text-xs text-muted-foreground">Quality Guaranteed</span>
            </div>
            <div className="flex flex-col items-center text-center gap-2">
              <Truck className="w-6 h-6 text-primary" />
              <span className="text-xs text-muted-foreground">Fast Shipping</span>
            </div>
            <div className="flex flex-col items-center text-center gap-2">
              <Shield className="w-6 h-6 text-primary" />
              <span className="text-xs text-muted-foreground">Secure Payment</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
