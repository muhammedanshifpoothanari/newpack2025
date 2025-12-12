// Currency formatting utility for Saudi Riyal
export function formatPrice(price: number): string {
  return `${price.toFixed(2)} sr.`
}

export function formatPriceShort(price: number): string {
  return `${price.toFixed(2)} SAR`
}
