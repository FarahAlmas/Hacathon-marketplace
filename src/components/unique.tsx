import React from 'react'
 import { Button } from "@/components/ui/button"
 import Image from "next/image"
import { client } from '@/sanity/lib/client';




export default async function Unique() {

const res = await client.fetch(`*[_type == "landingPage"][0].sections[3]{heading,para_1,para_2,para_3,price,productName,"image":uniqueImg.asset->url}`)


  return (
    <div className="w-full mx-auto bg-[#F1F0FF] mb-[132px] px-4 sm:px-6 lg:px-0 ">
      <div className="flex flex-col lg:flex-row items-center lg:items-start mx-auto max-w-[1200px]">
        {/* Left Side - Image */}
        <div className="relative w-full lg:w-1/2 flex justify-center  lg:mb-0">
          <div className="absolute inset-0 bg-[#F5E1FC] rounded-full transform -translate-x-4 translate-y-4 hidden sm:block" />
          <div className="relative">
            <Image
              src={res.image}
              alt="B&B Italian Sofa"
              width={509}
              height={550}
              className="relative z-10 w-[80%] sm:w-[70%] lg:w-auto h-auto"
            />
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left pt-[120px]">
          <h2 className="text-[#151875] font-josefin text-2xl sm:text-3xl lg:text-[35px] leading-tight tracking-wider mb-8">
            {res.heading}
          </h2>

          <div className="space-y-6 mb-8">
            {/* Feature 1 */}
            <div className="flex items-start gap-4">
              <div className="w-3 h-3 rounded-full bg-[#F52B70] mt-2" />
              <p className="text-[#ACABC3] font-lato text-sm sm:text-base">
               {res.para_1}
              </p>
            </div>
            {/* Feature 2 */}
            <div className="flex items-start gap-4">
              <div className="w-3 h-3 rounded-full bg-[#2B2BF5] mt-2" />
              <p className="text-[#ACABC3] font-lato text-sm sm:text-base">
               {res.para_2}
              </p>
            </div>
            {/* Feature 3 */}
            <div className="flex items-start gap-4">
              <div className="w-3 h-3 rounded-full bg-[#2BF5CC] mt-2" />
              <p className="text-[#ACABC3] font-lato text-sm sm:text-base">
                {res.para_3}
              </p>
            </div>
          </div>

          {/* Button & Product Info */}
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-4 mb-10 lg:mb-[140px]">
            <Button className="bg-[#FB2E86] hover:bg-[#FB2E86]/90 text-white font-josefin px-8 py-2">
              Add To Cart
            </Button>
            <div className="text-center lg:text-left">
              <h3 className="text-[#151875] font-josefin text-sm">{res.productName}</h3>
              <p className="text-[#151875] font-lato text-sm">${res.price}.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
