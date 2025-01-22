import React from 'react'
import Image from "next/image";
import {Card} from './ui/card'
import { TrendingCards } from '@/constant/trendingCard';
import Link from 'next/link';

const TrendingCard = ({ loop }: { loop: TrendingCards[] }) => {
  return (
    <>
      {loop.map((item, index) => {
        return (
    <Card className="relative w-[270px] h-[350px] px-[11px] pt-[11px] bg-white shadow-lg hover:bg-[#2F1AC4]" key={index}>
      
      
      {/* Product Image */}
      <div className="absolute w-full h-[236px] bg-[#F6F7FB] top-0 left-0 flex items-center justify-center">
        <Link href={"/product"}>
        <Image
          src={item.src}
          alt="Cantilever chair"
          width={147}
          height={144}
        /></Link>
      </div>

      {/* Product Name */}
      <div className="absolute top-[69.53%] left-[26.3%] right-[27.04%] text-[#FB2E86] font-lato font-bold text-[18px] text-center">
        {item.description}
      </div>     

      
        {/* Product Code */}
      <div className="absolute top-[83.38%] left-[25.07%] right-[25.26%] text-[#151875] font-josefin text-sm text-center">
        {item.code}
      </div>

      {/* Product Price */}
      <div className="absolute top-[83.38%] left-[60.59%] right-[41.11%] text-[#E5E5EF] font-lato text-sm text-center">
        {item.price}
      </div>      
           
          </Card>
        );
      })}
    </>
  );
};

export default TrendingCard;


  