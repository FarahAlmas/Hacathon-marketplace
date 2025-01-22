import React from 'react'
import Image from 'next/image'

import { Button } from './ui/button'
import Link from 'next/link'

function TopCategories() {
  return (

<div className="w-full px-4 sm:px-6 lg:px-[350px] mb-[178px]">
  {/* Title */}
  <h1 className="flex justify-center items-center text-[#151875] text-[28px] sm:text-[36px] lg:text-[42px] leading-[36px] sm:leading-[42px] lg:leading-[49px] text-center">
    Top Categories</h1>

  {/* Categories Grid */}
  <div className="w-full mt-[56px]">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-[39px]">
      {/* Cards */}



    <div className="relative w-[269px]">
      {/* Circular container with gradient border */}
      <div className="relative aspect-square rounded-full p-1 hover:bg-gradient-to-br from-purple-500 to-indigo-600">
        {/* Inner white circular container */}
        <div className="relative h-full w-full rounded-full bg-[#F6F7FB] p-8 flex flex-col items-center justify-center">
          {/* Product image */}
          <div className="relative w-44 h-44 mb-4">
           <Link href={"/product"}>
           <Image
              src="/card1.png"
              alt="Modern Chair"
              fill
              className="object-contain"
              priority
            /></Link>
          </div>
          
          {/* View Shop button */}
          <Button 
            className="bg-[#08D15F] hover:bg-[#07bf56] text-white text-xs py-1 px-4 rounded"
          >
            View Shop
          </Button>
        </div>
      </div>

      {/* Product details below the circle */}
      <div className="mt-4 text-center">
        <div className="flex justify-between px-8 mb-2">
          <span className="text-[#151875] font-josefin text-xl">Mini</span>
          <span className="text-[#151875] font-josefin text-xl">LCW</span>
          <span className="text-[#151875] font-josefin text-xl">Chair</span>
        </div>
        <p className="text-[#151875] font-josefin text-base">$56.00</p>
      </div>
    </div>

    
    <div className="relative w-[269px]">
      {/* Circular container with gradient border */}
      <div className="relative aspect-square rounded-full p-1 hover:bg-gradient-to-br from-purple-500 to-indigo-600">
        {/* Inner white circular container */}
        <div className="relative h-full w-full rounded-full bg-[#F6F7FB] p-8 flex flex-col items-center justify-center">
          {/* Product image */}
          <div className="relative w-44 h-44 mb-4">
            <Image
              src="/c-1.png"
              alt="Modern Chair"
              fill
              className="object-contain"
              priority
            />
          </div>
          
          {/* View Shop button  none*/}
          
        </div>
      </div>

      {/* Product details below the circle */}
      <div className="mt-4 text-center">
        <div className="flex justify-between px-8 mb-2">
          <span className="text-[#151875] font-josefin text-xl">Mini</span>
          <span className="text-[#151875] font-josefin text-xl">LCW</span>
          <span className="text-[#151875] font-josefin text-xl">Chair</span>
        </div>
        <p className="text-[#151875] font-josefin text-base">$56.00</p>
      </div>
    </div>

    <div className="relative w-[269px]">
      {/* Circular container with gradient border */}
      <div className="relative aspect-square rounded-full p-1 hover:bg-gradient-to-br from-purple-500 to-indigo-600">
        {/* Inner white circular container */}
        <div className="relative h-full w-full rounded-full bg-[#F6F7FB] p-8 flex flex-col items-center justify-center">
          {/* Product image */}
          <div className="relative w-44 h-44 mb-4">
            <Image
              src="/tc1.png"
              alt="Modern Chair"
              fill
              className="object-contain"
              priority
            />
          </div>
          
          {/* View Shop button  none*/}
          
        </div>
      </div>

      {/* Product details below the circle */}
      <div className="mt-4 text-center">
        <div className="flex justify-between px-8 mb-2">
          <span className="text-[#151875] font-josefin text-xl">Mini</span>
          <span className="text-[#151875] font-josefin text-xl">LCW</span>
          <span className="text-[#151875] font-josefin text-xl">Chair</span>
        </div>
        <p className="text-[#151875] font-josefin text-base">$56.00</p>
      </div>
    </div>

    <div className="relative w-[269px]">
      {/* Circular container with gradient border */}
      <div className="relative aspect-square rounded-full p-1 hover:bg-gradient-to-br from-purple-500 to-indigo-600">
        {/* Inner white circular container */}
        <div className="relative h-full w-full rounded-full bg-[#F6F7FB] p-8 flex flex-col items-center justify-center">
          {/* Product image */}
          <div className="relative w-44 h-44 mb-4">
            <Image
              src="/card1.png"
              alt="Modern Chair"
              fill
              className="object-contain"
              priority
            />
          </div>
          
          {/* View Shop button  none*/}
          
        </div>
      </div>

      {/* Product details below the circle */}
      <div className="mt-4 text-center">
        <div className="flex justify-between px-8 mb-2">
          <span className="text-[#151875] font-josefin text-xl">Mini</span>
          <span className="text-[#151875] font-josefin text-xl">LCW</span>
          <span className="text-[#151875] font-josefin text-xl">Chair</span>
        </div>
        <p className="text-[#151875] font-josefin text-base">$56.00</p>
      </div>
    </div>
    </div>
  </div>
</div>
  )








}
export default TopCategories



