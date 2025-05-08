import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube, Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/40 border-t">
      <div className="container px-4 md:px-12 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">ShopStyle</h3>
            <p className="text-sm text-muted-foreground">
              Discover your style, elevate your life with our curated collection of fashion and accessories.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          {/* Shop Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Shop</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/shop" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                All Products
              </Link>
              <Link
                href="/new-arrivals"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                New Arrivals
              </Link>
              <Link
                href="/best-sellers"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Best Sellers
              </Link>
              <Link href="/sale" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Sale
              </Link>
              <Link
                href="/coming-soon"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Coming Soon
              </Link>
            </nav>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Customer Service</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact Us
              </Link>
              <Link href="/shipping" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Shipping & Returns
              </Link>
              <Link href="/faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                FAQ
              </Link>
              <Link
                href="/size-guide"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Size Guide
              </Link>
              <Link
                href="/privacy-policy"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms & Conditions
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 text-sm">
                <MapPin className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                <span>123 Fashion Street, Style City, SC 12345</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="h-5 w-5 text-muted-foreground" />
                <span>(123) 456-7890</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <span>support@shopstyle.com</span>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-medium">Subscribe to our newsletter</h4>
              <div className="flex space-x-2">
                <Input type="email" placeholder="Your email" className="max-w-[220px]" />
                <Button variant="outline" size="sm">
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Get 10% off your first order by subscribing to our newsletter.
              </p>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {currentYear} ShopStyle. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <img src="/placeholder.svg?height=30&width=50" alt="Visa" className="h-6" />
            <img src="/placeholder.svg?height=30&width=50" alt="Mastercard" className="h-6" />
            <img src="/placeholder.svg?height=30&width=50" alt="PayPal" className="h-6" />
            <img src="/placeholder.svg?height=30&width=50" alt="Apple Pay" className="h-6" />
          </div>
        </div>
      </div>
    </footer>
  )
}
