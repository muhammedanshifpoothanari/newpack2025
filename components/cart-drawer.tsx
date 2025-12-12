"use client"

import { X, Minus, Plus, ShoppingBag, MessageCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useCart } from "@/hooks/use-cart"
import { useEffect } from "react"
import { formatPrice } from "@/lib/currency"
import { createOrderMessage, openWhatsApp } from "@/lib/whatsapp"

interface CartDrawerProps {
  open: boolean
  onClose: () => void
}

export function CartDrawer({ open, onClose }: CartDrawerProps) {
  const { cart, updateQuantity, removeFromCart } = useCart()

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [open])

  return (
    <>
      {/* Backdrop */}
      {open && (
        <div className="fixed inset-0 bg-black/50 z-50 transition-opacity" onClick={onClose} aria-hidden="true" />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-background border-l border-border z-50 transform transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border">
            <h2 className="text-lg font-semibold">Shopping Cart ({cart.items.length})</h2>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Cart Items */}
          {cart.items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
              <ShoppingBag className="h-16 w-16 text-muted-foreground/50 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Your cart is empty</h3>
              <p className="text-sm text-muted-foreground mb-6">Add some products to get started</p>
              <Button onClick={onClose} asChild>
                <Link href="/products">Browse Products</Link>
              </Button>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {cart.items.map((item) => (
                  <div key={item.product.id} className="flex gap-4 pb-4 border-b border-border">
                    <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                      <Image
                        src={item.product.image || "/placeholder.svg"}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-sm mb-1 line-clamp-1">{item.product.name}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{formatPrice(item.product.price)}</p>

                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="h-7 w-7 p-0 bg-transparent"
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="text-sm font-medium w-8 text-center">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="sm"
                          className="h-7 w-7 p-0 bg-transparent"
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="ml-auto text-xs text-destructive hover:text-destructive"
                          onClick={() => removeFromCart(item.product.id)}
                        >
                          Remove
                        </Button>
                      </div>
                    </div>

                    <div className="text-right font-semibold text-sm">
                      {formatPrice(item.product.price * item.quantity)}
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="border-t border-border p-4 space-y-4">
                <div className="flex items-center justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>{formatPrice(cart.total)}</span>
                </div>

                <div className="space-y-2">
                  <Button
                    className="w-full gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white"
                    size="lg"
                    onClick={() => {
                      const orderDetails = {
                        items: cart.items.map((item) => ({
                          name: item.product.name,
                          quantity: item.quantity,
                          price: item.product.price,
                        })),
                        total: cart.total,
                      }
                      const message = createOrderMessage(orderDetails)
                      openWhatsApp(message)
                      onClose()
                    }}
                  >
                    <MessageCircle className="h-4 w-4" />
                    Proceed on WhatsApp
                  </Button>
                  <Button variant="outline" className="w-full bg-transparent" onClick={onClose} asChild>
                    <Link href="/products">Continue Shopping</Link>
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}
