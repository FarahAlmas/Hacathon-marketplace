import React from 'react'
import TrendingCard from './trendingCard'
import { TrendingCards } from '@/constant/trendingCard'
import Image from 'next/image'
import { Card } from './ui/card'

export default function TrendingProducts() {
  return (


    <section className="w-full mt-[96px] lg:mt-[132px] mb-[96px] lg:mb-[126px]">
  {/* Heading */}
  <div className="container mx-auto text-center mb-[32px] lg:mb-[39px]">
    <h1 className="text-[20px] lg:text-[42px] font-bold text-[#1A0B5B] font-josefin-sans">
      Trending Products
    </h1>
  </div>

  {/* Card Div */}
  <div className="container w-full mx-auto mb-[53px]">
  <div className="w-full lg:w-[1167px] mx-auto mb-[40px] lg:mb-[53px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[16px] lg:gap-[29px] items-center">
    <TrendingCard loop={TrendingCards} />
  </div>
  </div>


  
 

  <div className="w-full px-4 md:px-[374px] mt-[32px] lg:mt-[39px] flex flex-col lg:flex-row gap-[16px] lg:gap-[29px]">     
    
    {/* Card 1 */}
    <Card className="h-[270px] w-full lg:w-[420px] flex flex-col pt-[34px] pl-[16px] lg:pl-[25px] bg-[#FFF6FB]">
      <h1 className="text-[20px] lg:text-[26px] leading-[24px] lg:leading-[26px] text-[#151875]">
        23% off in all products
      </h1>
      <p className="text-[#FB2E86] text-[14px] lg:text-[16px]">Shop Now</p>
      <div className="pl-[100px] ">
        <Image
          src="/trendingpro5.png"
          alt="pic"
          width={213}
          height={207}
          
        />
      </div>
    </Card>

    {/* Card 2 */}
    <Card className="h-[270px] w-full lg:w-[420px] flex flex-col pt-[34px] pl-[16px] lg:pl-[25px] bg-[#EEEFFB]">
      <h1 className="text-[20px] lg:text-[26px] leading-[24px] lg:leading-[26px] text-[#151875]">
        23% off in all products
      </h1>
      <p className="text-[#FB2E86] text-[14px] lg:text-[16px]">Shop Now</p>
      <div className="pl-[40px]">
        <Image
          src="/trendingpro6.png"
          alt="pic"
          width={312}
          height={173}
         
        />
      </div>
    </Card>

    {/* Small Cards Section */}
    <div className="h-auto w-full lg:w-[267px] flex flex-col gap-[12px] lg:gap-[20px]">
      {/* Small Card 1 */}
      <div className="h-[74px] w-full lg:w-[267px] flex justify-between items-center">
        <Image
          src="/image 30.png"
          alt="pic"
          width={67}
          height={67}
          className="bg-[#EEEFFB]"
        />
        <div>
          <h1 className="text-[14px] lg:text-[16px]">Executive Seat chair</h1>
          <p className="text-[14px] lg:text-[16px]">$32.00</p>
        </div>
      </div>

      {/* Small Card 2 */}
      <div className="h-[74px] w-full lg:w-[267px] flex justify-between items-center">
        <Image
          src="/image 19.png"
          alt="pic"
          width={67}
          height={67}
          className="bg-[#EEEFFB]"
        />
        <div>
          <h1 className="text-[14px] lg:text-[16px]">Executive Seat chair</h1>
          <p className="text-[14px] lg:text-[16px]">$32.00</p>
        </div>
      </div>

      {/* Small Card 3 */}
      <div className="h-[74px] w-full lg:w-[267px] flex justify-between items-center">
        <Image
          src="/image 28.png"
          alt="pic"
          width={67}
          height={67}
          className="bg-[#EEEFFB]"
        />
        <div>
          <h1 className="text-[14px] lg:text-[16px]">Executive Seat chair</h1>
          <p className="text-[14px] lg:text-[16px]">$32.00</p>
        </div>
      </div>
    </div>
  </div>
  
</section>
   
  );
}


 



