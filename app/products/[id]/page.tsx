import { notFound } from "next/navigation"
import { getProductById, products } from "@/lib/products"
import { ProductDetails } from "@/components/product-details"
import { RelatedProducts } from "@/components/related-products"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }))
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const product = getProductById(id)

  if (!product) {
    notFound()
  }

  const relatedProducts = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4)

  return (

    <div className="min-h-screen bg-background pt-24 pb-16">
           <Navigation />
      <div className="container mx-auto px-4">
        <ProductDetails product={product} />
        {relatedProducts.length > 0 && <RelatedProducts products={relatedProducts} />}
      </div>
        <div className="mt-15">
             <Footer />
            </div>
    </div>
  )
}
