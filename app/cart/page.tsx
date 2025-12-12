"use client"

import { useCart } from "@/hooks/use-cart"
import { Minus, Plus, Trash2, ShoppingBag, MessageCircle, ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { createOrderMessage, openWhatsApp } from "@/lib/whatsapp"
import { useRouter } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { formatPrice } from "@/lib/currency"

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart } = useCart()
  const router = useRouter()

  const handleBillOnWhatsApp = () => {
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
  }

  if (cart.items.length === 0) {
    return (
      <>
        <Navigation />
        <div className="min-h-screen bg-background pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center py-16">
              <ShoppingBag className="h-24 w-24 text-muted-foreground/50 mx-auto mb-6" />
              <h1 className="text-3xl font-bold mb-4">Your cart is empty</h1>
              <p className="text-muted-foreground mb-8">Looks like you haven't added any products yet</p>
              <Button size="lg" asChild>
                <Link href="/products">Start Shopping</Link>
              </Button>
            </div>
          </div>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-background pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <Button variant="ghost" className="gap-2 hover:gap-3 transition-all" onClick={() => router.back()}>
              <ArrowLeft className="h-4 w-4" />
              Continue Shopping
            </Button>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-8">Shopping Cart</h1>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cart.items.map((item) => (
                <Card key={item.product.id} className="p-4">
                  <div className="flex gap-4">
                    <div className="relative w-24 h-24 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                      <Image
                        src={item.product.image || "/placeholder.svg"}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between gap-4 mb-2">
                        <div>
                          <h3 className="font-semibold text-lg mb-1">{item.product.name}</h3>
                          <p className="text-sm text-muted-foreground line-clamp-2">{item.product.description}</p>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-lg">{formatPrice(item.product.price * item.quantity)}</div>
                          <div className="text-sm text-muted-foreground">{formatPrice(item.product.price)} each</div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="text-base font-semibold w-12 text-center">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>

                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-destructive hover:text-destructive gap-2"
                          onClick={() => removeFromCart(item.product.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                          Remove
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="p-6 sticky top-24">
                <h2 className="text-xl font-bold mb-4">Order Summary</h2>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-medium">{formatPrice(cart.total)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Items</span>
                    <span className="font-medium">{cart.items.reduce((sum, item) => sum + item.quantity, 0)}</span>
                  </div>
                  <div className="border-t border-border pt-3">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span>{formatPrice(cart.total)}</span>
                    </div>
                  </div>
                </div>

                <Button
                  size="lg"
                  className="w-full h-14 gap-3 mb-3 bg-foreground hover:bg-foreground/90 text-background shadow-lg hover:shadow-xl transition-all text-base font-semibold"
                  onClick={handleBillOnWhatsApp}
                >
                  <MessageCircle className="h-5 w-5 text-[#25D366]" />
                  Bill on WhatsApp
                </Button>

                <Button variant="outline" className="w-full bg-transparent" asChild>
                  <Link href="/products">Continue Shopping</Link>
                </Button>

                <div className="mt-6 pt-6 border-t border-border space-y-2 text-sm text-muted-foreground">
                  <p className="flex items-center gap-2">✓ Talk directly with our team</p>
                  <p className="flex items-center gap-2">✓ Discuss payment & delivery options</p>
                  <p className="flex items-center gap-2">✓ Get instant support via voice/text</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
