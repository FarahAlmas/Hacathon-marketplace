
import React from 'react';
import Image from "next/image";
import { Card } from './ui/card';
import { TrendingCards } from '@/constant/trendingCard';
import Link from 'next/link';

const TrendingCard = ({ loop }: { loop: TrendingCards[] }) => {
  return (
    <>
      {loop.map((item, index) => {
        return (
          <Card
            className="relative w-full sm:w-[270px] h-[350px] px-4 pt-4 bg-white shadow-lg hover:bg-[#2F1AC4] transition-all duration-300 ease-in-out"
            key={index}
          >
            {/* Product Image */}
            <div className="w-full h-[236px] bg-[#F6F7FB] flex items-center justify-center rounded-md">
              <Link href="/product">
                <Image
                  src={item.src}
                  alt="Cantilever chair"
                  width={147}
                  height={144}
                  className="object-contain"
                />
              </Link>
            </div>

            {/* Product Details */}
            <div className="flex flex-col items-center justify-center mt-4">
              {/* Product Name */}
              <h2 className="text-[#FB2E86] font-lato font-bold text-base sm:text-lg text-center">
                {item.description}
              </h2>

              {/* Product Code and Price */}
              <div className="flex justify-between w-full mt-2 text-sm sm:text-base">
                <p className="text-[#151875] font-josefin">{item.code}</p>
                <p className="text-[#E5E5EF] font-lato">{item.price}</p>
              </div>
            </div>
          </Card>
        );
      })}
    </>
  );
};

export default TrendingCard;
