// src\components\hero-section.tsx
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ShoppingBag, TrendingUp, Award, Clock } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="container px-4 md:px-12 py-12 md:py-24 lg:py-32">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Discover Your Style, Elevate Your Life
              </h1>
              <p className="max-w-[600px]  md:text-xl text-muted-foreground">
                Shop the latest trends with confidence. Quality products, seamless experience, and fast delivery.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="inline-flex items-center gap-2">
                <ShoppingBag className="h-5 w-5" />
                Shop Now
              </Button>
              <Button variant="outline" size="lg">
                Explore Collections
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-4 lg:grid-cols-4">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Trending Styles</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Premium Quality</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Fast Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <ShoppingBag className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Easy Returns</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[450px] w-full overflow-hidden rounded-xl">
              <Image
                src="/watch.jpg" 
                alt="Featured products showcase"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute bottom-4 left-4 right-4 rounded-lg p-4 backdrop-blur-sm bg-background/90">
                <p className="text-sm font-medium">New Collection Available Now</p>
                <p className="text-xs  text-muted-foreground ">
                  Limited time offer: Get 20% off your first order
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]">
        {/* ^ Changed from bg-white bg-[linear-gradient... to use CSS variables */}
      </div>
    </section>
  )
}
