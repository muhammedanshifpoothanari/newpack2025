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
  { id: "pizza-boxes", name: "pizza-boxes", icon: "🍕" },
  { id: "corrugated-boxes", name: "corrugated-boxes", icon: "📦" }
]
export const products: Product[] = [
  // =====================
  // PIZZA BOXES
  // =====================
  {
    id: "pizza-001",
    name: "Custom Pizza Box",
    description:
      "Premium custom-printed pizza boxes made from food-grade cardboard. Available in all standard pizza sizes.",
    price: 0.49,
    category: "pizza-boxes",
    image: "/pizzaBox1.png",
    features: [
      "Food grade",
      "Grease resistant",
      "Custom printing",
      "All sizes",
    ],
    specifications: {
      material: "Corrugated Kraft Cardboard",
      size: "9 / 12 / 14 / 16 inch",
      color: "Brown / Custom Print",
    },
    inStock: true,
    rating: 4.8,
    reviews: 142,
  },

  {
    id: "pizza-002",
    name: "Pizza Slice Box",
    description:
      "Compact pizza slice boxes ideal for takeaway counters and quick service restaurants.",
    price: 0.29,
    category: "pizza-boxes",
    image: "/pizzaBox2.png",
    features: [
      "Compact design",
      "Quick service",
      "Grease resistant",
      "Easy folding",
    ],
    specifications: {
      material: "Kraft Paperboard",
      size: "Single / Double / Family",
      color: "White / Custom Print",
    },
    inStock: true,
    rating: 4.9,
    reviews: 98,
  },

  {
    id: "pizza-003",
    name: "Pizza Box With Window",
    description:
      "Pizza boxes with transparent window for premium presentation without opening the box.",
    price: 0.69,
    category: "pizza-boxes",
    image: "/pizzabox3.png",
    features: [
      "Clear window",
      "Premium look",
      "Heat vents",
      "Custom print",
    ],
    specifications: {
      material: "Corrugated Cardboard + PET Window",
      size: "9 / 12 / 14 / 16 inch",
      color: "Brown / Custom Print",
    },
    inStock: true,
    rating: 4.7,
    reviews: 121,
  },

  {
    id: "pizza-004",
    name: "Double Wall Pizza Box",
    description:
      "Heavy-duty pizza boxes designed for extra toppings and long-distance delivery.",
    price: 0.79,
    category: "pizza-boxes",
    image: "/pizzaBox4.png",
    features: [
      "Double wall",
      "Extra strength",
      "Heat insulation",
      "Delivery safe",
    ],
    specifications: {
      material: "Double Wall Corrugated Cardboard",
      size: "9 / 12 / 14 / 16 inch",
      color: "White / Custom Print",
    },
    inStock: true,
    rating: 4.9,
    reviews: 76,
  },

  // =====================
  // CORRUGATED BOXES
  // =====================
  {
    id: "corrugated-001",
    name: "Single Wall Corrugated Box",
    description:
      "Lightweight corrugated boxes suitable for shipping, storage, and retail packaging.",
    price: 1.29,
    category: "corrugated-boxes",
    image: "/corrugatedBox1.jpg",
    features: [
      "Lightweight strength",
      "Cost effective",
      "Eco friendly",
      "Custom sizes",
    ],
    specifications: {
      material: "Single Wall Corrugated Cardboard",
      size: "Small / Medium / Large",
      color: "Brown / Custom Print",
    },
    inStock: true,
    rating: 4.7,
    reviews: 64,
  },

  {
    id: "corrugated-002",
    name: "Double Wall Corrugated Box",
    description:
      "Heavy-duty corrugated boxes for fragile goods and long-distance transportation.",
    price: 2.49,
    category: "corrugated-boxes",
    image: "/corrugatedBox2.jpg",
    features: [
      "Heavy duty",
      "High strength",
      "Impact resistant",
      "Bulk orders",
    ],
    specifications: {
      material: "Double Wall Corrugated Cardboard",
      size: "Medium / Large / Extra Large",
      color: "Brown / Custom Print",
    },
    inStock: true,
    rating: 4.9,
    reviews: 112,
  },

  {
    id: "corrugated-003",
    name: "Printed Corrugated Box",
    description:
      "Custom printed corrugated boxes for ecommerce branding and retail presentation.",
    price: 2.99,
    category: "corrugated-boxes",
    image: "/corrugatedBox3.jpg",
    features: [
      "Custom printing",
      "Brand ready",
      "Retail friendly",
      "Food safe",
    ],
    specifications: {
      material: "Corrugated Cardboard",
      size: "All custom sizes",
      color: "White / Custom Print",
    },
    inStock: true,
    rating: 4.8,
    reviews: 89,
  },

  {
    id: "corrugated-004",
    name: "Die Cut Corrugated Box",
    description:
      "Precision die-cut corrugated boxes for secure fit and fast assembly.",
    price: 3.49,
    category: "corrugated-boxes",
    image: "/corrugatedBox4.jpg",
    features: [
      "Die cut",
      "Easy assembly",
      "Secure fit",
      "Custom design",
    ],
    specifications: {
      material: "Corrugated Cardboard",
      size: "Custom dimensions",
      color: "Brown / White",
    },
    inStock: true,
    rating: 4.8,
    reviews: 53,
  },

  {
    id: "corrugated-005",
    name: "Heavy Duty Shipping Box",
    description:
      "Industrial-grade corrugated boxes designed for high load and warehouse use.",
    price: 3.99,
    category: "corrugated-boxes",
    image: "/corrugatedBox5.jpg",
    features: [
      "Industrial grade",
      "High load",
      "Warehouse use",
      "Long distance",
    ],
    specifications: {
      material: "Triple Wall Corrugated Cardboard",
      size: "Large / Extra Large",
      color: "Brown",
    },
    inStock: true,
    rating: 5.0,
    reviews: 41,
  },

  {
    id: "corrugated-006",
    name: "Custom Corrugated Packaging",
    description:
      "Fully customized corrugated packaging solutions tailored to your product needs.",
    price: 4.99,
    category: "corrugated-boxes",
    image: "/corrugatedBox6.jpg",
    features: [
      "Fully custom",
      "Any size",
      "Branding ready",
      "Bulk pricing",
    ],
    specifications: {
      material: "Corrugated Cardboard",
      size: "Any custom size",
      color: "Brown / White / Printed",
    },
    inStock: true,
    rating: 4.9,
    reviews: 78,
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
