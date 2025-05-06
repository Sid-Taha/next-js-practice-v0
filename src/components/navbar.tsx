// src\components\navbar.tsx
"use client"

import Link from "next/link"
import { ShoppingCart, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"
import { useMobile } from "@/hooks/use-mobile"


export function Navbar() {
  const isMobile = useMobile()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="font-bold text-xl">
            ShopStyle
          </Link>
        </div>

        {!isMobile ? (
          <nav className="mx-6 flex items-center space-x-4 lg:space-x-6 md:flex">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
              Home
            </Link>
            <Link
              href="/shop"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Shop
            </Link>
            <Link
              href="/categories"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Categories
            </Link>
            <Link
              href="/new-arrivals"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              New Arrivals
            </Link>
            <Link
              href="/sale"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Sale
            </Link>
          </nav>
        ) : null}

        <div className="flex items-center gap-4">
          <ThemeToggle />

          <Link href="/cart">
            <Button variant="ghost" size="icon" aria-label="Shopping Cart">
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Shopping Cart</span>
            </Button>
          </Link>

          {isMobile && (
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Menu">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col gap-4 mt-8">
                  <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
                    Home
                  </Link>
                  <Link
                    href="/shop"
                    className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                  >
                    Shop
                  </Link>
                  <Link
                    href="/categories"
                    className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                  >
                    Categories
                  </Link>
                  <Link
                    href="/new-arrivals"
                    className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                  >
                    New Arrivals
                  </Link>
                  <Link
                    href="/sale"
                    className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                  >
                    Sale
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </header>
  )
}
