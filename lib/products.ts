export interface Product {
  id: string
  name: string
  description: string
  price: number
  category: string
  image: string
  features: string[]
  specifications: {
    material: string
    size: string
    capacity?: string
    color?: string
  }
  inStock: boolean
  rating: number
  reviews: number
}

export const categories = [
  { id: "containers", name: "Containers", icon: "📦" },
  { id: "bottles", name: "Bottles", icon: "🍶" },
  { id: "bags", name: "Bags", icon: "🛍️" },
  { id: "packaging", name: "Packaging", icon: "📮" },
  { id: "custom", name: "Custom Solutions", icon: "⚙️" },
]

export const products: Product[] = [
  {
    id: "prod-001",
    name: "Premium Food Container",
    description:
      "High-quality, food-grade plastic containers perfect for storage and transport. BPA-free and microwave safe.",
    price: 24.99,
    category: "containers",
    image: "/modern-clear-plastic-food-storage-container.jpg",
    features: ["BPA-Free material", "Microwave & dishwasher safe", "Airtight seal", "Stackable design"],
    specifications: {
      material: "PP Plastic",
      size: "1000ml",
      color: "Clear",
    },
    inStock: true,
    rating: 4.8,
    reviews: 127,
  },
  {
    id: "prod-002",
    name: "Industrial Storage Bin",
    description: "Heavy-duty storage bins designed for industrial use. Durable construction withstands heavy loads.",
    price: 89.99,
    category: "containers",
    image: "/large-red-industrial-plastic-storage-bin.jpg",
    features: ["Heavy-duty construction", "Weather resistant", "Reinforced handles", "Stackable up to 5 high"],
    specifications: {
      material: "HDPE Plastic",
      size: "50L",
      color: "Red",
    },
    inStock: true,
    rating: 4.9,
    reviews: 89,
  },
  {
    id: "prod-003",
    name: "Water Bottle - 750ml",
    description: "Ergonomic sports water bottle with leak-proof cap. Perfect for gym, travel, and outdoor activities.",
    price: 12.99,
    category: "bottles",
    image: "/modern-sports-water-bottle-red-cap.jpg",
    features: ["Leak-proof design", "Easy-grip texture", "Wide mouth opening", "BPA-Free"],
    specifications: {
      material: "PET Plastic",
      size: "750ml",
      capacity: "750ml",
      color: "Clear with Red Cap",
    },
    inStock: true,
    rating: 4.7,
    reviews: 203,
  },
  {
    id: "prod-004",
    name: "Shopping Bags - Pack of 100",
    description: "Eco-friendly reusable shopping bags. Strong, durable, and perfect for retail businesses.",
    price: 49.99,
    category: "bags",
    image: "/white-plastic-shopping-bags-handles.jpg",
    features: ["Recyclable material", "Strong handles", "Large capacity", "Bulk pricing available"],
    specifications: {
      material: "LDPE Plastic",
      size: "40x50cm",
      color: "White",
    },
    inStock: true,
    rating: 4.6,
    reviews: 156,
  },
  {
    id: "prod-005",
    name: "Bubble Wrap Roll",
    description: "Protective packaging material for shipping and storage. Keeps items safe during transit.",
    price: 34.99,
    category: "packaging",
    image: "/bubble-wrap-roll-packaging-material.jpg",
    features: ["Shock absorption", "Lightweight", "Perforated sheets", "Multi-purpose use"],
    specifications: {
      material: "Polyethylene",
      size: "50m x 60cm",
      color: "Clear",
    },
    inStock: true,
    rating: 4.8,
    reviews: 94,
  },
  {
    id: "prod-006",
    name: "Takeaway Container Set",
    description: "Professional takeaway containers for restaurants. Secure lid closure and leak-resistant.",
    price: 39.99,
    category: "containers",
    image: "/takeaway-food-containers-with-lids.jpg",
    features: ["Leak-resistant", "Microwave safe", "Stackable", "Pack of 50"],
    specifications: {
      material: "PP Plastic",
      size: "750ml",
      color: "Black base with clear lid",
    },
    inStock: true,
    rating: 4.7,
    reviews: 178,
  },
  {
    id: "prod-007",
    name: "Juice Bottles - 500ml",
    description: "Clear PET bottles perfect for beverages, juices, and cold drinks. Tamper-evident caps included.",
    price: 29.99,
    category: "bottles",
    image: "/clear-plastic-juice-bottles-caps.jpg",
    features: ["Crystal clear", "Tamper-evident caps", "Pack of 24", "Food grade"],
    specifications: {
      material: "PET Plastic",
      size: "500ml",
      capacity: "500ml",
      color: "Clear",
    },
    inStock: true,
    rating: 4.9,
    reviews: 145,
  },
  {
    id: "prod-008",
    name: "Custom Packaging Solution",
    description: "Tailored packaging solutions for your business needs. Contact us for custom designs and bulk orders.",
    price: 199.99,
    category: "custom",
    image: "/custom-branded-packaging-boxes.jpg",
    features: ["Custom design", "Brand logo printing", "Any size available", "MOQ: 500 units"],
    specifications: {
      material: "Various options",
      size: "Custom",
      color: "Custom",
    },
    inStock: true,
    rating: 5.0,
    reviews: 42,
  },
]

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id)
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category)
}

export function searchProducts(query: string): Product[] {
  const lowercaseQuery = query.toLowerCase()
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(lowercaseQuery) ||
      p.description.toLowerCase().includes(lowercaseQuery) ||
      p.category.toLowerCase().includes(lowercaseQuery),
  )
}
