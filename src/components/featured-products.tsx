"use client"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { ShoppingCart, Heart } from "lucide-react"

// Sample product data
const products = [
  {
    id: 1,
    name: "Casual Cotton T-Shirt",
    price: 29.99,
    salePrice: 24.99,
    image: "/watch.jpg",
    isNew: false,
    isSale: true,
  },
  {
    id: 2,
    name: "Slim Fit Jeans",
    price: 59.99,
    salePrice: null,
    image: "/watch.jpg",
    isNew: true,
    isSale: false,
  },
  {
    id: 3,
    name: "Leather Jacket",
    price: 199.99,
    salePrice: 149.99,
    image: "/watch.jpg",
    isNew: false,
    isSale: true,
  },
  {
    id: 4,
    name: "Running Shoes",
    price: 89.99,
    salePrice: null,
    image: "/watch.jpg",
    isNew: true,
    isSale: false,
  },
  {
    id: 5,
    name: "Wool Sweater",
    price: 79.99,
    salePrice: null,
    image: "/watch.jpg",
    isNew: false,
    isSale: false,
  },
  {
    id: 6,
    name: "Summer Dress",
    price: 69.99,
    salePrice: 49.99,
    image: "/watch.jpg",
    isNew: false,
    isSale: true,
  },
  {
    id: 7,
    name: "Leather Belt",
    price: 34.99,
    salePrice: null,
    image: "/watch.jpg",
    isNew: false,
    isSale: false,
  },
  {
    id: 8,
    name: "Sunglasses",
    price: 129.99,
    salePrice: 99.99,
    image: "/watch.jpg",
    isNew: true,
    isSale: true,
  },
]

export function FeaturedProducts() {
  return (
    <section className="px-12 py-6 relative">
      <div className="container">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-4">
            <Badge className="px-3 py-1 text-md font-medium rounded-sm bg-red-600 text-white border-0 hover:bg-red-700">
              Featured Products
            </Badge>
          </div>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {products.map((product) => (
              <CarouselItem key={product.id} className="pl-2 md:pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                <Card className="product-card overflow-hidden border border-border">
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
                  <CardFooter className="p-4 pt-0">
                    <Button size="sm" className="w-full gap-1">
                      <ShoppingCart className="h-4 w-4" />
                      Add to Cart
                    </Button>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex items-center justify-end gap-2 mt-6">
            <CarouselPrevious className="static transform-none" />
            <CarouselNext className="static transform-none" />
          </div>
        </Carousel>
      </div>
    </section>
  )
}
