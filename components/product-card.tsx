"use client"

import type React from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Star, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import type { Product } from "@/lib/products"
import { useCart } from "@/hooks/use-cart"
import { useState } from "react"
import { formatPrice } from "@/lib/currency"

interface ProductCardProps {
  product: Product
  size?: "large" | "medium" | "small"
}

export function ProductCard({
  product,
  size = "medium",
}: ProductCardProps) {
  const { addToCart } = useCart()
  const router = useRouter()
  const [isAdding, setIsAdding] = useState(false)

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsAdding(true)
    addToCart(product, 1)
    setTimeout(() => setIsAdding(false), 600)
  }

  const handleCardClick = () => {
    router.push(`/products/${product.id}`)
  }

  // 🔥 SCALE ONLY (no layout break)
  const imageScale =
    size === "large" ? "scale-150" : size === "small" ? "scale-80" : "scale-110"

  return (
    <Card
      className="group overflow-hidden border-border hover:border-primary/50 transition-all duration-300 cursor-pointer"
      onClick={handleCardClick}
    >
      {/* IMAGE AREA */}
      <div className="relative aspect-square overflow-hidden flex items-center justify-center">
        {/* Background image */}
        <Image
          src="/backdropPizza.jpeg"
          alt="Background"
          fill
          className="object-cover opacity-20"
        />

        {/* Product image */}
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          width={400}
          height={400}
          className={`relative z-10 object-contain transition-transform duration-500 group-hover:scale-105 ${imageScale}`}
        />

        {!product.inStock && (
          <div className="absolute inset-0 bg-background/80 flex items-center justify-center z-20">
            <span className="text-sm font-semibold text-muted-foreground">
              Out of Stock
            </span>
          </div>
        )}
      </div>

      {/* CONTENT */}
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-1 group-hover:text-primary transition-colors">
          {product.name}
        </h3>

        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center gap-1 mb-3">
          <Star className="w-4 h-4 fill-primary text-primary" />
          <span className="text-sm font-medium">{product.rating}</span>
          <span className="text-sm text-muted-foreground">
            ({product.reviews})
          </span>
        </div>

        <div className="flex items-center justify-between">
          {/* <span className="text-2xl font-bold">
            {formatPrice(product.price)}
          </span> */}
          
           <Button
         
        
             onClick={handleCardClick}

      
          >   <ShoppingCart className="w-4 h-4" />View More</Button>
          {/* <Button
            size="sm"
            onClick={handleAddToCart}
            disabled={!product.inStock || isAdding}
            className="gap-2"
          >
            <ShoppingCart className="w-4 h-4" />
            {isAdding ? "Added!" : "Add"}
          </Button> */}
        </div>
      </div>
    </Card>
  )
}
