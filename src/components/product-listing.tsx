"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Heart, SlidersHorizontal } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ProductFilters } from "@/components/product-filters"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Sample product data - same as in carousel components
const products = [
  {
    id: 1,
    name: "Casual Cotton T-Shirt",
    price: 29.99,
    salePrice: 24.99,
    image: "/watch.jpg",
    isNew: false,
    isSale: true,
    category: "clothing",
  },
  {
    id: 2,
    name: "Slim Fit Jeans",
    price: 59.99,
    salePrice: null,
    image: "/watch.jpg",
    isNew: true,
    isSale: false,
    category: "clothing",
  },
  {
    id: 3,
    name: "Leather Jacket",
    price: 199.99,
    salePrice: 149.99,
    image: "/watch.jpg",
    isNew: false,
    isSale: true,
    category: "clothing",
  },
  {
    id: 4,
    name: "Running Shoes",
    price: 89.99,
    salePrice: null,
    image: "/watch.jpg",
    isNew: true,
    isSale: false,
    category: "shoes",
  },
  {
    id: 5,
    name: "Wool Sweater",
    price: 79.99,
    salePrice: null,
    image: "/watch.jpg",
    isNew: false,
    isSale: false,
    category: "clothing",
  },
  {
    id: 6,
    name: "Summer Dress",
    price: 69.99,
    salePrice: 49.99,
    image: "/watch.jpg",
    isNew: false,
    isSale: true,
    category: "clothing",
  },
  {
    id: 7,
    name: "Leather Belt",
    price: 34.99,
    salePrice: null,
    image: "/watch.jpg",
    isNew: false,
    isSale: false,
    category: "accessories",
  },
  {
    id: 8,
    name: "Sunglasses",
    price: 129.99,
    salePrice: 99.99,
    image: "/watch.jpg",
    isNew: true,
    isSale: true,
    category: "accessories",
  },
  {
    id: 9,
    name: "Classic Watch",
    price: 199.99,
    salePrice: null,
    image: "/watch.jpg",
    isNew: true,
    isSale: false,
    category: "accessories",
  },
  {
    id: 10,
    name: "Wireless Headphones",
    price: 149.99,
    salePrice: 129.99,
    image: "/watch.jpg",
    isNew: false,
    isSale: true,
    category: "electronics",
  },
  {
    id: 11,
    name: "Smartphone Case",
    price: 24.99,
    salePrice: null,
    image: "/watch.jpg",
    isNew: false,
    isSale: false,
    category: "electronics",
  },
  {
    id: 12,
    name: "Fitness Tracker",
    price: 89.99,
    salePrice: 79.99,
    image: "/watch.jpg",
    isNew: true,
    isSale: true,
    category: "electronics",
  },
]

export function ProductListing() {
  const [sortOption, setSortOption] = useState("featured")

  // Sort products based on selected option
  const sortedProducts = [...products].sort((a, b) => {
    switch (sortOption) {
      case "price-low-high":
        return (a.salePrice || a.price) - (b.salePrice || b.price)
      case "price-high-low":
        return (b.salePrice || b.price) - (a.salePrice || a.price)
      case "newest":
        return a.isNew ? -1 : b.isNew ? 1 : 0
      case "sale":
        return a.isSale ? -1 : b.isSale ? 1 : 0
      default:
        return 0
    }
  })

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2 md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm" className="gap-1">
                <SlidersHorizontal className="h-4 w-4" />
                Filters
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <div className="px-1 py-6">
                <ProductFilters />
              </div>
            </SheetContent>
          </Sheet>
          <div className="text-sm text-muted-foreground">
            Showing <strong>{products.length}</strong> products
          </div>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <Select value={sortOption} onValueChange={setSortOption}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="price-low-high">Price: Low to High</SelectItem>
              <SelectItem value="price-high-low">Price: High to Low</SelectItem>
              <SelectItem value="sale">On Sale</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {sortedProducts.map((product) => (
          <Link key={product.id} href={`/product/${product.id}`} className="group">
            <Card className="product-card overflow-hidden border border-border h-full">
              <div className="relative aspect-square">
                {product.isNew && <span className="product-badge new-badge">New</span>}
                {product.isSale && <span className="product-badge sale-badge">Sale</span>}
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="product-card-image object-cover"
                />
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute right-2 top-2 h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm"
                >
                  <Heart className="h-4 w-4" />
                  <span className="sr-only">Add to wishlist</span>
                </Button>
              </div>
              <CardContent className="p-4">
                <h3 className="font-medium line-clamp-1">{product.name}</h3>
                <div className="mt-2 flex items-center">
                  {product.salePrice ? (
                    <>
                      <span className="font-medium text-primary">${product.salePrice.toFixed(2)}</span>
                      <span className="ml-2 text-sm text-muted-foreground line-through">
                        ${product.price.toFixed(2)}
                      </span>
                    </>
                  ) : (
                    <span className="font-medium">${product.price.toFixed(2)}</span>
                  )}
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0 mt-auto">
                <Button size="sm" className="w-full gap-1">
                  <ShoppingCart className="h-4 w-4" />
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
