
import Heading from '@/components/heading'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import {ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { Grid2X2, List } from 'lucide-react'
import React from 'react'
import Image from 'next/image'
import { Card } from "@/components/ui/card"
import { ShoppingCart, Heart, Search, Star } from 'lucide-react'
import { ShopListCard } from '@/constant/shopListCard'

function ShopList() {
  return (
      <section>
        
          {/* Banner content can be added here */}
  
         <Heading  text={"Shop List"} text2={"Shop List"}/>
        
  
        <div className="container w-[95%] 2xl:w-[1920px] mx-auto mt-[124px] mb-[144]">
          <div className="w-full max-w-[1171px] mx-auto py-4 flex items-center justify-between ">
            <div className="space-y-2">
              <h1 className="text-[22px] leading-[26px] text-[#151875] font-['Josefin_Sans']">
                Ecommerce Acceories & Fashion item
              </h1>
              <p className="text-xs text-[#8A8FB9]">
                About 9,620 results (0.62 seconds)
              </p>
            </div>
  
            <div className="hidden lg:flex items-center justify-end gap-6 mt-4">
              <div className="flex items-center gap-2">
                <span className="text-[#3F509E]">Per Page:</span>
                <Select defaultValue="10">
                  <SelectTrigger className="w-[100px] border-[#E7E6EF]">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="10">10</SelectItem>
                    <SelectItem value="20">20</SelectItem>
                    <SelectItem value="50">50</SelectItem>
                  </SelectContent>
                </Select>
              </div>
  
              <div className="flex items-center gap-2">
                <span className="text-[#3F509E]">Sort By:</span>
                <Select defaultValue="best-match">
                  <SelectTrigger className="w-[120px] border-[#E7E6EF]">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="best-match">Best Match</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="newest">Newest First</SelectItem>
                  </SelectContent>
                </Select>
              </div>
  
              <div className="flex items-center gap-2">
                <span className="text-[#3F509E]">View:</span>
                <ToggleGroup type="single" defaultValue="grid">
                  <ToggleGroupItem value="grid" aria-label="Grid view">
                    <Grid2X2 className="h-4 w-4 text-[#151875]" />
                  </ToggleGroupItem>
                  <ToggleGroupItem value="list" aria-label="List view">
                    <List className="h-4 w-4 text-[#151875]" />
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>
            </div>
          </div>
        </div>
  
         {/* -------------card container------------ */}
  
  
         <div className='flex  flex-col gap-[33px] justify-center items-center'>

        {ShopListCard.map((item, index)=>{
          return(
            <Card className="max-w-[1141px] p-6 shadow-lg bg-white" key={index}>
           <div className="flex flex-col md:flex-row gap-6">
             {/* Product Image */}
             <div className="w-full md:w-[313px] h-[217px] bg-[#F5F5F5]">
               <Image
                 src={item.src}
                 alt="Modern sofa and coffee table"
                 width={313}
                 height={217}
                 className="w-full h-full object-cover"
               />
             </div>
     
             {/* Product Details */}
             <div className="flex-1 space-y-4">
               {/* Title and Color Options */}
               <div className="flex items-center justify-between">
                 <div className="space-y-1">
                   <h3 className="text-[#111C85] font-['Josefin_Sans'] text-xl">{item.detail}</h3>
                   <div className="flex gap-2">
                     <span className="text-[#111C85] font-['Josefin_Sans']">arm</span>
                     <span className="text-[#111C85] font-['Josefin_Sans']">Sofa</span>
                   </div>
                 </div>
                 <div className="flex gap-2">
                   <div className="w-3 h-3 rounded-full bg-[#DE9034]" />
                   <div className="w-3 h-3 rounded-full bg-[#E60584]" />
                   <div className="w-3 h-3 rounded-full bg-[#5E37FF]" />
                 </div>
               </div>
     
               {/* Price and Rating */}
               <div className="flex items-center gap-4">
                 <span className="text-[#111C85] font-['Josefin_Sans'] text-sm">{item.price}</span>
                 <span className="text-[#FF2AAA] font-['Josefin_Sans'] text-sm line-through">{item.oldPrice}</span>
                 <div className="flex gap-1">
                   {[1, 2, 3, 4].map((star) => (
                     <Star key={star} className="w-4 h-4 fill-[#FFC416] text-[#FFC416]" />
                   ))}
                   <Star className="w-4 h-4 fill-[#B2B2B2] text-[#B2B2B2]" />
                   <span className="text-[#5A5C7E] text-sm ml-2">(32)</span>
                 </div>
               </div>
     
               {/* Description */}
               <p className="text-[#9295AA] font-['Lato'] text-base leading-relaxed">
                 {item.description}
               </p>
     
               {/* Action Buttons */}
               <div className="flex gap-4">
                 <button className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50">
                   <ShoppingCart className="w-5 h-5 text-[#535399]" />
                 </button>
                 <button className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50">
                   <Heart className="w-5 h-5 text-[#535399]" />
                 </button>
                 <button className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50">
                   <Search className="w-5 h-5 text-[#535399]" />
                 </button>
               </div>
             </div>
           </div>
         </Card>
          )
        })}
        
        <Image src={"/brandlogo.png"} alt={"brandlogo"}  width={904} height={93} className="mt-[234px] mb-[132px]"/>
         </div>





  
   </section>                
  )
}

export default ShopList