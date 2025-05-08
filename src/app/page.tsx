// src\app\page.tsx
import { BestSellingProduct } from "@/components/best-selling-product";
import { FeaturedProducts } from "@/components/featured-products";
import { HeroSection } from "@/components/hero-section";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturedProducts />
      <BestSellingProduct />
    </main>
  )
}
