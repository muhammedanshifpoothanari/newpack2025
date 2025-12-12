"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Search, X } from "lucide-react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { searchProducts } from "@/lib/products"
import Image from "next/image"
import { formatPrice } from "@/lib/currency"

interface SearchDialogProps {
  open: boolean
  onClose: () => void
}

export function SearchDialog({ open, onClose }: SearchDialogProps) {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<any[]>([])
  const router = useRouter()

  useEffect(() => {
    if (query.length > 0) {
      const searchResults = searchProducts(query)
      setResults(searchResults.slice(0, 5))
    } else {
      setResults([])
    }
  }, [query])

  const handleProductClick = (productId: string) => {
    router.push(`/products/${productId}`)
    onClose()
    setQuery("")
  }

  const handleViewAll = () => {
    router.push(`/products?search=${encodeURIComponent(query)}`)
    onClose()
    setQuery("")
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl p-0">
        <div className="p-4 border-b border-border">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-12 pr-12 h-12 text-base border-0 focus-visible:ring-0"
              autoFocus
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>

        <div className="max-h-[400px] overflow-y-auto">
          {results.length > 0 ? (
            <>
              <div className="p-2">
                {results.map((product) => (
                  <button
                    key={product.id}
                    onClick={() => handleProductClick(product.id)}
                    className="w-full flex items-center gap-4 p-3 rounded-lg hover:bg-muted transition-colors text-left"
                  >
                    <div className="relative w-12 h-12 rounded-md overflow-hidden bg-muted flex-shrink-0">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium line-clamp-1">{product.name}</p>
                      <p className="text-sm text-muted-foreground">{formatPrice(product.price)}</p>
                    </div>
                  </button>
                ))}
              </div>
              <div className="p-4 border-t border-border">
                <button
                  onClick={handleViewAll}
                  className="w-full text-center text-sm font-medium text-primary hover:underline"
                >
                  View all results for "{query}"
                </button>
              </div>
            </>
          ) : query.length > 0 ? (
            <div className="p-8 text-center text-muted-foreground">No products found</div>
          ) : (
            <div className="p-8 text-center text-muted-foreground">Start typing to search products...</div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
