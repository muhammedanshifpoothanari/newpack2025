"use client"

import { useState, useEffect } from "react"
import type { Product } from "@/lib/products"
import {
  type Cart,
  getCart,
  addToCart as addToCartUtil,
  removeFromCart as removeFromCartUtil,
  updateQuantity as updateQuantityUtil,
  clearCart as clearCartUtil,
  getCartItemCount,
} from "@/lib/cart"

export function useCart() {
  const [cart, setCart] = useState<Cart>({ items: [], total: 0 })
  const [itemCount, setItemCount] = useState(0)

  useEffect(() => {
    // Load cart from localStorage on mount
    const loadedCart = getCart()
    setCart(loadedCart)
    setItemCount(getCartItemCount())
  }, [])

  const addToCart = (product: Product, quantity = 1) => {
    const updatedCart = addToCartUtil(product, quantity)
    setCart(updatedCart)
    setItemCount(getCartItemCount())
  }

  const removeFromCart = (productId: string) => {
    const updatedCart = removeFromCartUtil(productId)
    setCart(updatedCart)
    setItemCount(getCartItemCount())
  }

  const updateQuantity = (productId: string, quantity: number) => {
    const updatedCart = updateQuantityUtil(productId, quantity)
    setCart(updatedCart)
    setItemCount(getCartItemCount())
  }

  const clearCart = () => {
    const updatedCart = clearCartUtil()
    setCart(updatedCart)
    setItemCount(0)
  }

  return {
    cart,
    itemCount,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
  }
}
