"use client"

import { Card } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { formatPrice } from "@/lib/currency"

interface ProductFiltersProps {
  priceRange: [number, number]
  onPriceRangeChange: (range: [number, number]) => void
  sortBy: string
  onSortChange: (sort: string) => void
}

export function ProductFilters({ priceRange, onPriceRangeChange, sortBy, onSortChange }: ProductFiltersProps) {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h3 className="font-semibold mb-4">Sort By</h3>
        <Select value={sortBy} onValueChange={onSortChange}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="featured">Featured</SelectItem>
            <SelectItem value="price-asc">Price: Low to High</SelectItem>
            <SelectItem value="price-desc">Price: High to Low</SelectItem>
            <SelectItem value="rating">Highest Rated</SelectItem>
            <SelectItem value="name">Name: A to Z</SelectItem>
          </SelectContent>
        </Select>
      </Card>

      <Card className="p-6">
        <h3 className="font-semibold mb-4">Price Range</h3>
        <div className="space-y-4">
          <Slider
            min={0}
            max={200}
            step={10}
            value={priceRange}
            onValueChange={(value) => onPriceRangeChange(value as [number, number])}
            className="w-full"
          />
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">{formatPrice(priceRange[0])}</span>
            <span className="text-muted-foreground">{formatPrice(priceRange[1])}</span>
          </div>
        </div>
      </Card>

      <Card className="p-6 bg-muted/50 border-border">
        <h3 className="font-semibold mb-3">Need Help?</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Can't find what you're looking for? Our team is here to help you find the perfect solution.
        </p>
        <button className="text-sm font-medium text-primary hover:underline">Contact Us</button>
      </Card>
    </div>
  )
}
