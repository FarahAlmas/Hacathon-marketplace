

import { client } from "@/sanity/lib/client";
// import { fetchData } from "@/services/api";
import Heading from "@/components/heading";
import { Heart, ShoppingCart, ZoomIn, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";









  interface Res{
    id:number,
    category: string,
    name:string,
    description:string,
    price:number,
    image:string,
    discountPercentage:number
  }

const Page = async () => {






  const res:Res[] = await client.fetch(`*[_type == "item"][]{
      id,
      name,
      category,
         price,
         description,
         discountPercentage,
         isFeaturedProduct,
          "image":image.asset->url
      }`)
      
  

      return (
    <main className="mt-10 overflow-hidden">
      <Heading text={"Shop Products"} text2={"Shop Products"} />
      <div className="space-y-10 mt-20">
        {res.map((item:Res, id:number) => (
          <div
            className="flex justify-start gap-y-14 gap-x-8 items-center lg:ml-24 cursor-pointer hover:scale-110 transition-all lg:flex-row flex-col"
            key={id}
          >
           <Link href={`/product/productdetail?name=${item.name}&img=${item.image}&text=${item.description}&price=${item.price}&prevPrice=${item.discountPercentage}&category=${item.category}`}
>
  <div>
    <Image
      src={item.image}
      alt={item.name ||"pic"}
      width={314}
      height={218}
      className="w-auto h-auto"
    />
  </div>
</Link>

            <div className="lg:w-[550px] w-full flex justify-center lg:block items-center flex-col">
              <div className="flex items-center gap-x-4">
                <h1 className="text-1 font-bold text-[19px] text-indigo-900">
                  {item.name}
                </h1>
              </div>
              <div className="flex items-center gap-x-4">
                <p className="text-1 text-indigo-900">${item.price}</p>
                <p className="text-red-500 text-1 line-through">
                  {item.discountPercentage}%
                </p>
                <br/>
                <p className="text-1 text-indigo-900">{item.category}</p>
                
                <div className="flex gap-x-1 items-center mb-1">
                  
                {[...Array(5)].map((_, i) => (
                     <Star key={i} className="w-4 h-4 fill-[#FFC416] text-[#FFC416]" />
                   ))}
                 
                  
                </div>
              </div>
              <p className="lato text-gray-400 text-center lg:text-start text-lg my-4">
                {item.description}
              </p>
              <div className="flex gap-x-16 mt-8">
                <ShoppingCart size={20} className="text-gray-500" />
                <Heart size={20} className="text-gray-500" />
                <ZoomIn size={20} className="text-gray-500" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Page;




