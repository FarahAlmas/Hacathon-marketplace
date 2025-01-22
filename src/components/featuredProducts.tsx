import React from 'react'
import Image from 'next/image'
// import {Flash_Card } from '@/constant/flashCard'
import { Button } from './ui/button'
import { Card } from './ui/card'
import { Heart, SearchX, ShoppingCart } from 'lucide-react'
import { client } from '@/sanity/lib/client'
import Link from 'next/link'

interface cards{
    featureCardImg: string;
    featureCardHeading: string;
    price: number;
    discountprice: number;
    discountBtn: string;
    shoppingCart: boolean;
    heartIcon: boolean;
    view: boolean;
    view2: boolean;
    searchX: boolean;
    code: boolean;
  };




export default async function FeaturedProducts() {
  const res = await client.fetch(
    "*[_type == 'landingPage'][0].sections[1]{'cards':cards[]{'featureCardImg': featureCardImg.asset->url,featureCardHeading,price,discountprice,discountBtn,shoppingCart,heartIcon,view,view2,searchX,code}}"
  );

  if (!res || !res.cards || !Array.isArray(res.cards)) {
    return <div>No products available</div>; // Handle empty or undefined data
  }

  return (
    <div className="w-full flex flex-col justify-center items-center pt-32 lg:pt-[129px]">
      <h1 className="text-2xl lg:text-[42px] lg:leading-[49px] text-[#1A0B5B]">
        Featured Products
      </h1>
      <div className="w-full lg:w-[1167px] flex flex-wrap justify-center items-center gap-6 lg:gap-[29px] mt-12 lg:mt-[48px] mb-12 lg:mb-[53px]">
        {res.cards.map((card:cards, index:number) => {
          if (!card) return null;

          // Define icons dynamically
          const icons = [
            {
              condition: card.shoppingCart,
              component: <ShoppingCart size={30} />,
            },
            {
              condition: card.heartIcon,
              component: <Heart size={30} />,
            },
            {
              condition: card.searchX,
              component: <SearchX size={30} />,
            },
          ];

          return (
            <Card
              className="w-[90%] sm:w-[270px] h-full overflow-hidden grow-0 shrink-0 relative"
              key={index}
            >
              {/* Top Image */}
              <div className="w-full h-[200px] sm:h-[250px] bg-[#f5f5f5] p-3 flex justify-center items-center relative">
                <Link href={'/product'}>
                <Image
                  src={card.featureCardImg || "/placeholder-image.jpg"} // Fallback image
                  alt={card.featureCardHeading || "Product Image"}
                  width={172}
                  height={152}
                />
                </Link>

                {/* Conditional View2 */}
                {card.view2 && (
                  <div className="w-[94px] h-[29px] bg-[#08D15F] absolute mt-[198px] left-[95px] flex justify-center items-center">
                    <button className="text-[12px] leading-[12px] text-white">
                      {card.view}
                    </button>
                  </div>
                )}

                {/* Badge */}
                {card.discountBtn && (
                  <button className="bg-[#db4444] py-1 px-3 absolute top-3 left-3 text-white">
                    -{card.discountprice}%
                  </button>
                )}

                {/* Icons */}
                <div className="absolute top-3 right-3 flex gap-2">
                  {icons.map((icon, idx) =>
                    icon.condition ? (
                      <Button
                        size="icon"
                        variant="outline"
                        className="rounded-full w-[34px] h-[34px]"
                        key={idx}
                      >
                        {icon.component}
                      </Button>
                    ) : null
                  )}
                </div>
              </div>

              {/* Bottom Content */}
              <div className="w-full flex flex-col justify-center items-center gap-2 text-sm lg:text-[16px] lg:leading-[24px] font-medium pl-[3px]  bg-white shadow-lg hover:bg-[#2F1AC4]">
                <p className="mt-[10px] text-[#FB2E86] font-bold text-[14px] lg:text-[18px] leading-[21px]">
                  {card.featureCardHeading || "Product Title"}
                </p>
                <div className="flex gap-1 lg:gap-[5px]">
                  <div className="w-3 h-1 lg:w-[14px] lg:h-[4px] bg-[#05E6B7]"></div>
                  <div className="w-3 h-1 lg:w-[14px] lg:h-[4px] bg-[#F701A8]"></div>
                  <div className="w-3 h-1 lg:w-[14px] lg:h-[4px] bg-[#00009D]"></div>
                </div>
                <p>{card.code || "Product Code"}</p>
                <div className="flex gap-3">
                  <span className="text-[#151875]">
                    ${card.price || "0.00"}
                  </span>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}











//  export default async function FeaturedProducts() {
  
//   const res =
//   await client.fetch("*[_type == 'landingPage'][0].sections[1]{'cards':cards[]{'featureCardImg': featureCardImg.asset->url,featureCardHeading,price,discountprice,discountBtn,shoppingCart,heartIcon,view,view2,searchX,code}}")

//   return (

//   )
// }




// {/* <div className="w-full lg:w-[1167px] flex flex-wrap justify-center items-center gap-6 lg:gap-[29px] mt-12 lg:mt-[48px] mb-12 lg:mb-[53px]">
// {(res?.cards || []).map((card:any, index:number) => {
//   return (
//     <Card
//       className="w-[90%] sm:w-[270px] h-full overflow-hidden grow-0 shrink-0 relative"
//       key={index}
//     >
//       {/* top img */}
//       <div className="w-full h-[200px] sm:h-[250px] bg-[#f5f5f5] p-3 flex justify-center items-center relative">
//         <Image
//           src={card.featureCardImg || ""}
//           alt="img"
//           width={172}
//           height={152}
//         ></Image>
       
//         <div className={`${card.view2 == true ?'w-[94px] h-[29px] bg-[#08D15F] absolute mt-[198px] left-[95px] flex justify-center items-center':"hidden"}`}><button className='text-[12px] leading-[12px] text-white '>{card.view}</button></div>
        


//         {/* -------badge-------- */}
//         {res.cards[index].discountBtn && (
//           <button className="bg-[#db4444] py-1 px-3 absolute top-3 left-3 text-white">
//             -{card.discountPrice}%
//           </button>
//         )}

//         {/* -------------------icon div------------- */}
//         <div className="absolute top-3 left-3 flex  gap-2">
//           {/* ---trash---------- */}
//           {card.shoppingCart && (
//             <Button
//               size={"icon"}
//               variant={"outline"}
//               className="rounded-full w-[34px] h-[34px]"
//             >
//               <ShoppingCart size={30} />
//             </Button>
//           )}

//           {card.heartIcon && (
//             <Button
//               size={"icon"}
//               variant={"outline"}
//               className="rounded-full w-[34px] h-[34px]"
//             >
//               <Heart size={30} />
//             </Button>
//           )}

//           {card.searchX  && (
//             <Button
//               size={"icon"}
//               variant={"outline"}
//               className="rounded-full w-[34px] h-[34px]"
//             >
//               <SearchX size={30} />
//             </Button>
//           )}
//         </div>
//       </div>

//       {/* ------bottom content------- */}
//       <div className="w-full flex flex-col justify-center items-center gap-2 text-sm lg:text-[16px] lg:leading-[24px] font-medium pl-[3px]">
//         <p className="mt-[10px] text-[#FB2E86] font-bold text-[14px] lg:text-[18px] leading-[21px]">
//           {card.featureCardHeading}
//         </p>
//         <div className="flex gap-1 lg:gap-[5px]">
//           <div className="w-3 h-1 lg:w-[14px] lg:h-[4px] bg-[#05E6B7]"></div>
//           <div className="w-3 h-1 lg:w-[14px] lg:h-[4px] bg-[#F701A8]"></div>
//           <div className="w-3 h-1 lg:w-[14px] lg:h-[4px] bg-[#00009D]"></div>
//         </div>
//         <p>{card.code}</p>
//         <div className="flex gap-3">
//           <span className="text-[#151875]">${card.price}</span>
//         </div>
//       </div>
//     </Card>
//   );
// })}
// </div> */}