import { ProductListing } from "@/components/product-listing"
import { ProductFilters } from "@/components/product-filters"

export const metadata = {
  title: "Shop | ShopStyle",
  description: "Browse our collection of premium products",
}

export default function ShopPage() {
  return (
    <main className="container px-4 py-8 md:px-6 md:py-12">
      <div className="flex flex-col gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Shop</h1>
          <p className="text-muted-foreground">Browse our collection of premium products</p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-[240px_1fr] lg:grid-cols-[280px_1fr]">
          <div className="hidden md:block">
            <ProductFilters />
          </div>
          <div>
            <ProductListing />
          </div>
        </div>
      </div>
    </main>
  )
}
