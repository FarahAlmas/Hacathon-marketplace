import React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Instagram } from 'lucide-react'


   
    
    export default function Footer() {
      return (
        <footer className="w-full bg-[#EEEFFB]">
          <div className="container px-4 py-12 mx-auto">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {/* Logo and Newsletter Section */}
              <div className="space-y-6">
                <h2 className="text-4xl font-bold font-['Josefin_Sans']">Hekto</h2>
                <div className="flex ">
                  <Input 
                    type="email" 
                    placeholder="Enter Email Address"
                    className="bg-white/45"
                  />
                  <Button className="bg-[#FB2E86] hover:bg-[#FB2E86]/90">Sign Up</Button>
                </div>
                <div className="space-y-2 text-[#8A8FB9]">
                  <p className="font-lato">Contact Info</p>
                  <p className="font-lato">17 Princess Road, London, Greater London NW1 8JR, UK</p>
                </div>
              </div>
    
              {/* Categories */}
              <div className="space-y-4">
                <h3 className="text-2xl font-['Josefin_Sans']">Categories</h3>
                <ul className="space-y-3 text-[#8A8FB9]">
                  <li>Laptops & Computers</li>
                  <li>Cameras & Photography</li>
                  <li>Smart Phones & Tablets</li>
                  <li>Video Games & Consoles</li>
                  <li>Waterproof Headphones</li>
                </ul>
              </div>
    
              {/* Customer Care */}
              <div className="space-y-4">
                <h3 className="text-2xl font-['Josefin_Sans']">Customer Care</h3>
                <ul className="space-y-3 text-[#8A8FB9]">
                  <li>My Account</li>
                  <li>Discount</li>
                  <li>Returns</li>
                  <li>Orders History</li>
                  <li>Order Tracking</li>
                </ul>
              </div>
    
              {/* Pages */}
              <div className="space-y-4">
                <h3 className="text-2xl font-['Josefin_Sans']">Pages</h3>
                <ul className="space-y-3 text-[#8A8FB9]">
                  <li>Blog</li>
                  <li>Browse the Shop</li>
                  <li>Category</li>
                  <li>Pre-Built Pages</li>
                  <li>Visual Composer Elements</li>
                  <li>WooCommerce Pages</li>
                </ul>
              </div>
            </div>
          </div>
    
          {/* Bottom Bar */}
          <div className="w-full bg-[#E7E4F8] py-4">
            <div className="container px-4 mx-auto flex justify-between items-center">
              <p className="text-[#9DA0AE] font-semibold">©Webecy - All Rights Reserved</p>
              <div className="flex gap-4">
                <Button size="icon" variant="ghost" className="bg-[#151875] hover:bg-[#151875]/90 text-white rounded-full p-2">
                  <Facebook  className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="ghost" className="bg-[#151875] hover:bg-[#151875]/90 text-white rounded-full p-2">
                  <Instagram className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="ghost" className="bg-[#151875] hover:bg-[#151875]/90 text-white rounded-full p-2">
                  <Twitter className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </footer>
      )
    }
    