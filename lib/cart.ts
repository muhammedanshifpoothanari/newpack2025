import type { Product } from "./products"

export interface CartItem {
  product: Product
  quantity: number
}

export interface Cart {
  items: CartItem[]
  total: number
}

const CART_STORAGE_KEY = "newpack_cart"

export function getCart(): Cart {
  if (typeof window === "undefined") {
    return { items: [], total: 0 }
  }

  try {
    const stored = localStorage.getItem(CART_STORAGE_KEY)
    if (stored) {
      const cart = JSON.parse(stored)
      return cart
    }
  } catch (error) {
    console.error("Error loading cart:", error)
  }

  return { items: [], total: 0 }
}

export function saveCart(cart: Cart): void {
  if (typeof window === "undefined") return

  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart))
  } catch (error) {
    console.error("Error saving cart:", error)
  }
}

export function addToCart(product: Product, quantity = 1): Cart {
  const cart = getCart()

  const existingItemIndex = cart.items.findIndex((item) => item.product.id === product.id)

  if (existingItemIndex > -1) {
    cart.items[existingItemIndex].quantity += quantity
  } else {
    cart.items.push({ product, quantity })
  }

  cart.total = calculateTotal(cart.items)
  saveCart(cart)

  return cart
}

export function removeFromCart(productId: string): Cart {
  const cart = getCart()

  cart.items = cart.items.filter((item) => item.product.id !== productId)
  cart.total = calculateTotal(cart.items)

  saveCart(cart)
  return cart
}

export function updateQuantity(productId: string, quantity: number): Cart {
  const cart = getCart()

  const itemIndex = cart.items.findIndex((item) => item.product.id === productId)

  if (itemIndex > -1) {
    if (quantity <= 0) {
      cart.items.splice(itemIndex, 1)
    } else {
      cart.items[itemIndex].quantity = quantity
    }
  }

  cart.total = calculateTotal(cart.items)
  saveCart(cart)

  return cart
}

export function clearCart(): Cart {
  const cart: Cart = { items: [], total: 0 }
  saveCart(cart)
  return cart
}

export function calculateTotal(items: CartItem[]): number {
  return items.reduce((total, item) => {
    return total + item.product.price * item.quantity
  }, 0)
}

export function getCartItemCount(): number {
  const cart = getCart()
  return cart.items.reduce((count, item) => count + item.quantity, 0)
}
