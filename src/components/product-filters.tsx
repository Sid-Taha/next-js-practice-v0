"use client"

import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function ProductFilters() {
  const [priceRange, setPriceRange] = useState([0, 200])

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h3 className="font-medium">Price Range</h3>
        <div className="pt-4 px-2">
          <Slider
            defaultValue={[0, 200]}
            max={500}
            step={10}
            value={priceRange}
            onValueChange={setPriceRange}
            className="mb-6"
          />
          <div className="flex items-center justify-between">
            <span className="text-sm">${priceRange[0]}</span>
            <span className="text-sm">${priceRange[1]}</span>
          </div>
        </div>
      </div>

      <Accordion type="multiple" defaultValue={["categories", "availability"]}>
        <AccordionItem value="categories">
          <AccordionTrigger className="font-medium">Categories</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-2 pt-2">
              <div className="flex items-center gap-2">
                <Checkbox id="category-all" />
                <Label htmlFor="category-all" className="text-sm font-normal cursor-pointer">
                  All Categories
                </Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="category-clothing" />
                <Label htmlFor="category-clothing" className="text-sm font-normal cursor-pointer">
                  Clothing
                </Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="category-shoes" />
                <Label htmlFor="category-shoes" className="text-sm font-normal cursor-pointer">
                  Shoes
                </Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="category-accessories" />
                <Label htmlFor="category-accessories" className="text-sm font-normal cursor-pointer">
                  Accessories
                </Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="category-electronics" />
                <Label htmlFor="category-electronics" className="text-sm font-normal cursor-pointer">
                  Electronics
                </Label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="availability">
          <AccordionTrigger className="font-medium">Availability</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-2 pt-2">
              <div className="flex items-center gap-2">
                <Checkbox id="availability-in-stock" />
                <Label htmlFor="availability-in-stock" className="text-sm font-normal cursor-pointer">
                  In Stock
                </Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="availability-out-of-stock" />
                <Label htmlFor="availability-out-of-stock" className="text-sm font-normal cursor-pointer">
                  Out of Stock
                </Label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="deals">
          <AccordionTrigger className="font-medium">Deals</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-2 pt-2">
              <div className="flex items-center gap-2">
                <Checkbox id="deals-sale" />
                <Label htmlFor="deals-sale" className="text-sm font-normal cursor-pointer">
                  On Sale
                </Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="deals-new" />
                <Label htmlFor="deals-new" className="text-sm font-normal cursor-pointer">
                  New Arrivals
                </Label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="ratings">
          <AccordionTrigger className="font-medium">Ratings</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-2 pt-2">
              <div className="flex items-center gap-2">
                <Checkbox id="rating-5" />
                <Label htmlFor="rating-5" className="text-sm font-normal cursor-pointer">
                  5 Stars
                </Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="rating-4" />
                <Label htmlFor="rating-4" className="text-sm font-normal cursor-pointer">
                  4 Stars & Up
                </Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="rating-3" />
                <Label htmlFor="rating-3" className="text-sm font-normal cursor-pointer">
                  3 Stars & Up
                </Label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Button className="mt-2">Apply Filters</Button>
      <Button variant="outline">Reset Filters</Button>
    </div>
  )
}
