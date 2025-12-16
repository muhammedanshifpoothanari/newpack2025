"use client"

import Link from "next/link"
import { ShoppingCart, Menu, X, Search, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import { useCart } from "@/hooks/use-cart"
import { CartDrawer } from "@/components/cart-drawer"
import { SearchDialog } from "@/components/search-dialog"
import { createGeneralInquiry, openWhatsApp } from "@/lib/whatsapp"

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  const { itemCount } = useCart()
  const router = useRouter()
  const pathname = usePathname()

  const handleWhatsAppContact = () => {
    const message = createGeneralInquiry()
    openWhatsApp(message)
  }

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/"
    return pathname?.startsWith(path)
  }

  const handleMobileNav = (path: string) => {
    setMobileMenuOpen(false)
    setTimeout(() => {
      router.push(path)
    }, 50)
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <div className="h-20 flex items-center">
              <Link href="/" className="flex items-center">
                <img
                  src="/images/newpack-logo.png"
                  alt="NewPack"
                  className="h-16 w-auto scale-150"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <Link
                href="/products"
                className={`text-sm font-medium transition-colors ${
                  isActive("/products")
                    ? "text-primary font-semibold"
                    : "text-foreground hover:text-primary"
                }`}
              >
                Products
              </Link>
              <Link
                href="/solutions"
                className={`text-sm font-medium transition-colors ${
                  isActive("/solutions")
                    ? "text-primary font-semibold"
                    : "text-foreground hover:text-primary"
                }`}
              >
                Solutions
              </Link>
              <Link
                href="/about"
                className={`text-sm font-medium transition-colors ${
                  isActive("/about")
                    ? "text-primary font-semibold"
                    : "text-foreground hover:text-primary"
                }`}
              >
                About
              </Link>
              <Link
                href="/contact"
                className={`text-sm font-medium transition-colors ${
                  isActive("/contact")
                    ? "text-primary font-semibold"
                    : "text-foreground hover:text-primary"
                }`}
              >
                Contact
              </Link>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="icon"
                className="hidden sm:inline-flex"
                onClick={() => setSearchOpen(true)}
              >
                <Search className="h-5 w-5" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="relative"
                onClick={() => setCartOpen(true)}
              >
                <ShoppingCart className="h-5 w-5" />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 h-5 w-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center font-semibold">
                    {itemCount}
                  </span>
                )}
              </Button>

              <Button
                className="hidden sm:inline-flex gap-2 bg-muted hover:bg-muted/80 text-foreground shadow-sm"
                onClick={handleWhatsAppContact}
              >
                <MessageCircle className="h-4 w-4 text-[#25D366]" />
                <span>Talk on WhatsApp</span>
              </Button>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-border">
              <div className="flex flex-col gap-4">
                <button
                  onClick={() => handleMobileNav("/products")}
                  className={`text-left text-base font-medium transition-colors ${
                    isActive("/products")
                      ? "text-primary font-semibold"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  Products
                </button>

                <button
                  onClick={() => handleMobileNav("/solutions")}
                  className={`text-left text-base font-medium transition-colors ${
                    isActive("/solutions")
                      ? "text-primary font-semibold"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  Solutions
                </button>

                <button
                  onClick={() => handleMobileNav("/about")}
                  className={`text-left text-base font-medium transition-colors ${
                    isActive("/about")
                      ? "text-primary font-semibold"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  About
                </button>

                <button
                  onClick={() => handleMobileNav("/contact")}
                  className={`text-left text-base font-medium transition-colors ${
                    isActive("/contact")
                      ? "text-primary font-semibold"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  Contact
                </button>

                <Button
                  className="w-full mt-2 gap-2 bg-muted hover:bg-muted/80 text-foreground"
                  onClick={handleWhatsAppContact}
                >
                  <MessageCircle className="h-4 w-4 text-[#25D366]" />
                  <span>Talk on WhatsApp</span>
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
      <SearchDialog open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  )
}
