"use client"


import {
  ChevronDown,
  Heart,
  Mail,
  PhoneCall,
  Search,
  ShoppingCart,
  User,
} from "lucide-react";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import Link from "next/link";
import { Input } from "./ui/input";
import { Button } from "./ui/button";



import { useState } from "react";
import { UserButton } from "@clerk/nextjs";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full font-josefinSans">
      {/* Top Header */}
      <div className="px-4 sm:px-6 lg:px-[372px] py-[14px] flex flex-wrap justify-between items-center bg-[#7E33E0] text-white">
        {/* Contact Info */}
        <div className="flex flex-wrap gap-4 items-center text-sm">
          <Mail size={16} />
          <p className="mr-4">mhhasanul@gmail.com</p>
          <PhoneCall size={16} />
          <p>(12345)67890</p>
        </div>

        {/* Language, Currency, and Links */}
        <div className="flex flex-wrap gap-4 items-center text-sm">
          {/* Language Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 focus:outline-none">
              English
              <ChevronDown size={16} />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Urdu</DropdownMenuItem>
              <DropdownMenuItem>Arabic</DropdownMenuItem>
              <DropdownMenuItem>English</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Currency Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 focus:outline-none">
              USD
              <ChevronDown size={16} />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>PKR</DropdownMenuItem>
              <DropdownMenuItem>INR</DropdownMenuItem>
              <DropdownMenuItem>USD</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Login and Wishlist */}
          <div className="flex gap-2 items-center">
            <Link href={"/product"}>Login</Link>
            <User size={16} />
          </div>
          <div className="flex gap-2 items-center">
            <Link href={"/wishlist"}>Wishlist</Link>
            <Heart size={16} />
          </div>
          {/* Cart */}
          <div>
            <Link href={"/cart"}>
              <ShoppingCart size={24} />
            </Link>
          </div>
         <UserButton showName/> 
        </div>
      </div>

      {/* Bottom Header */}

      <div className="w-full px-4 sm:px-6 lg:px-[372px] py-[19px] flex flex-wrap justify-between items-center">
  {/* Logo */}
  <Link href={"/"} className="text-2xl lg:text-3xl font-bold">
    Hekto
  </Link>

  {/* Navigation & Burger Menu */}
  <div className="flex items-center w-full lg:w-auto justify-between">
    {/* Navigation for Large Screens */}
    <nav className="hidden lg:flex items-center gap-6">
      <Link href={"/"} className="text-[#FB2E86] text-sm">
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-1 focus:outline-none">
            Home
            <ChevronDown size={16} />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <Link href={"/shopGrid"}>Shop Grid Default</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={"shopList"}>Shop List</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>Shop Left Sidebar</DropdownMenuItem>
            <DropdownMenuItem>Product Detail</DropdownMenuItem>
            <DropdownMenuItem>Shopping Cart</DropdownMenuItem>
            <DropdownMenuItem>Order Complete</DropdownMenuItem>
            <DropdownMenuItem>Hekto Demo</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </Link>
      <Link href={"/shopGrid"} className="text-sm hover:text-gray-600">
        Pages
      </Link>
      <Link href={"/product"} className="text-sm hover:text-gray-600">
        Products
      </Link>
      <Link href={"/blog"} className="text-sm hover:text-gray-600">
        Blog
      </Link>
      <Link href={"/shopList"} className="text-sm hover:text-gray-600">
        Shop
      </Link>
      <Link href={"/contact"} className="text-sm hover:text-gray-600">
        Contact
      </Link>
    </nav>

    {/* Burger Menu for Small Screens */}
    <button
      className="lg:hidden text-[#7E33E0] focus:outline-none ml-auto"
      onClick={() => setMenuOpen(!menuOpen)}
    >
      {menuOpen ? "✖" : "☰"}
    </button>
  </div>

  {/* Collapsible Menu for Small Screens */}
  {menuOpen && (
    <nav className="mt-4 lg:hidden bg-[#F9F9F9] shadow-md p-4 rounded w-full">
      <Link href={"/"} className="block text-sm py-2">
        Home
      </Link>
      <Link href={"/shopGrid"} className="block text-sm py-2">
        Pages
      </Link>
      <Link href={"/product"} className="block text-sm py-2">
        Products
      </Link>
      <Link href={"/blog"} className="block text-sm py-2">
        Blog
      </Link>
      <Link href={"/shopList"} className="block text-sm py-2">
        Shop
      </Link>
      <Link href={"/contact"} className="block text-sm py-2">
        Contact
      </Link>
    </nav>
  )}

  {/* Search Bar */}
  <div className="mt-4 lg:mt-0 flex items-center w-full lg:w-auto">
    <div className="relative w-full lg:w-auto">
      <Input
        className="w-full lg:w-[200px] bg-white border border-gray-300 text-sm"
        type="search"
        placeholder="Search..."
      />
      <Button className="absolute bg-[#FB2E86] top-1/2 transform -translate-y-1/2 right-[2px]">
        <Search className="text-[#F3F9FF]" />
      </Button>
    </div>
  </div>
</div>


     
    </div>
  );
}

export default Header;
