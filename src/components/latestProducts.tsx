
import { Heart, Search, ShoppingCart } from 'lucide-react'
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card } from "@/components/ui/card"
import Image from 'next/image'
import { client } from '@/sanity/lib/client'
import Link from 'next/link'


interface card{
  name: string
  sale: number
  latestProductImage:string,
  latestProductPrice:number,
  latestProductName:string,
  latestProductOriginalPrice:number,
  latestProductTag:string

}



  async function LatestProducts() {

  const res = await client.fetch(`*[_type == 'landingPage'][0].sections[2]
{'cards':cards[]
{'latestProductImage': latestProductImage.asset->url,
 latestProductPrice,
 latestProductName,
  latestProductOriginalPrice,
  latestProductTag
}}`);



  return (
    <div className=" flex flex-col justify-center items-center">
      {/* Latest Products Section */}
      <div className="space-y-8">
        <h2 className="text-[#151875] text-[32px] md:text-[42px] leading-[40px] md:leading-[49px] mt-[50px] md:mt-[71px]font-josefin text-center">Latest Products</h2>
        
        <Tabs defaultValue="new" className="w-full">
          <TabsList className="flex justify-center gap-4 md:gap-[8px] sm:gap-[4px] border-none bg-transparent">
            <TabsTrigger 
              value="new" 
              className="text-lg md:text-[18px] data-[state=active]:text-[#FB2E86] data-[state=active]:border-b-2 data-[state=active]:border-[#FB2E86] bg-transparent"
            >
              New Arrival
            </TabsTrigger>
            <TabsTrigger 
              value="best" 
              className="text-lg md:text-[18px] data-[state=active]:text-[#FB2E86] data-[state=active]:border-b-2 data-[state=active]:border-[#FB2E86] bg-transparent"
            >
              Best Seller
            </TabsTrigger>
            <TabsTrigger 
              value="featured" 
              className="text-lg md:text-[18px] data-[state=active]:text-[#FB2E86] data-[state=active]:border-b-2 data-[state=active]:border-[#FB2E86] bg-transparent"
            >
              Featured
            </TabsTrigger>
            <TabsTrigger 
              value="special" 
              className="text-lg md:text-[18px] data-[state=active]:text-[#FB2E86] data-[state=active]:border-b-2 data-[state=active]:border-[#FB2E86] bg-transparent"
            >
              Special Offer
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <div className='w-full flex items-center justify-center my-[40px] md:my-[58px]'>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Product Cards */}
          {res.cards.map((product:card, index:number) => (
            <Card key={index} className="group relative border-none">
              <div className="relative bg-[#F7F7F7] p-4 h-[350px] flex items-center justify-center">
                {product.sale && (
                  <div className="absolute top-4 left-4 bg-[#3F509E] text-white px-3 py-1 rotate-[-18deg] text-sm">
                  {product.latestProductTag}
                  </div>
                )}
              <Link href={"/product"}>
              <Image
                  src={product.latestProductImage}
                  alt={product.name}
                  className="max-h-[250px] w-auto object-contain"
                  width={223}
                  height={229}
                /></Link>
                {/* Hover Actions */}
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-2 bg-white rounded-full hover:bg-[#2F1AC4] hover:text-white transition-colors">
                    <ShoppingCart className="h-5 w-5" />
                  </button>
                  <button className="p-2 bg-white rounded-full hover:bg-[#2F1AC4] hover:text-white transition-colors">
                    <Heart className="h-5 w-5" />
                  </button>
                  <button className="p-2 bg-white rounded-full hover:bg-[#2F1AC4] hover:text-white transition-colors">
                    <Search className="h-5 w-5" />
                  </button>
                </div>
              </div>
              <div className="p-4 bg-white shadow-lg hover:bg-[#2F1AC4]">
                <h3 className="text-[#151875] font-josefin text-lg ">{product.latestProductName}</h3>
                <div className="flex gap-2 mt-1">
                  <span className="text-[#151875] font-josefin ">${product.latestProductPrice}.00</span>
                  <span className="text-[#FB2448] line-through text-sm">${product.latestProductOriginalPrice}.00</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
        </div>
      </div>

       {/* Navigation Dots */}
       <div className="flex justify-center gap-2 pt-[50px]">
        {[1, 2, 3].map((dot) => (
          <div
            key={dot}
            className={`w-2.5 h-2.5 transform rotate-45 ${
              dot === 1 ? "bg-[#FB2E86]" : "border border-[#FB2E86]"
            }`}
          />
        ))}
      </div>


               {/* Shopex Offer Section */}
       <h1 className="text-[#151875] text-[32px] md:text-[42px] leading-[40px] md:leading-[49px] mt-[50px] md:mt-[71px]">
         What Shopex Offer!
       </h1>
       <div className="w-full mt-[40px] md:mt-[55px] mb-[70px] md:mb-[135px]">
         <div className="w-full max-w-screen-lg m-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-[28px] px-4">
           <Card className="w-full max-w-xs h-auto px-4 py-6 flex flex-col justify-center items-center">
             <Image src={"/g-1.png"} alt={"img"} width={65} height={65} />
             <h1 className="text-[20px] md:text-[22px] leading-[25px] text-[#151875] mb-[15px]">
               24/7 Support
             </h1>
            <p className="text-[14px] md:text-[16px] leading-[25px] text-center">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
               purus gravida.
             </p>
           </Card>

           <Card className="w-full max-w-xs h-auto px-4 py-6 flex flex-col justify-center items-center text-center">
             <Image src={"/g-2.png"} alt={"img"} width={65} height={65} />
             <h1 className="text-[20px] md:text-[22px] leading-[25px] text-[#151875] mb-[15px]">
               Secure Payment
             </h1>
             <p className="text-[14px] md:text-[16px] leading-[25px] text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
               purus gravida.
             </p>
           </Card>

           <Card className="w-full max-w-xs h-auto px-4 py-6 flex flex-col justify-center items-center text-center">
             <Image src={"/g-3.png"} alt={"img"} width={65} height={65} />
             <h1 className="text-[20px] md:text-[22px] leading-[25px] text-[#151875] mb-[15px]">
               Free Delivery
             </h1>
            <p className="text-[14px] md:text-[16px] leading-[25px] text-center">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
               purus gravida.
             </p>
           </Card>

           <Card className="w-full max-w-xs h-auto px-4 py-6 flex flex-col justify-center items-center text-center">
             <Image src={"/g-4.png"} alt={"img"} width={65} height={65} />
             <h1 className="text-[20px] md:text-[22px] leading-[25px] text-[#151875] mb-[15px]">
               Easy Returns
             </h1>
             <p className="text-[14px] md:text-[16px] leading-[25px] text-center">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              purus gravida.
            </p>
           </Card>
         </div>
      </div>
</div>


)
}
export default LatestProducts;