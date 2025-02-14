'use client';



import { useState } from 'react';
import { Star, ShoppingCart,  Search } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { useSearchParams } from 'next/navigation';
import Heading from '@/components/heading';
import Link from 'next/link';

// declare global {
//   interface Window {
//     Snipcart: any;
//   }
// }

export default function ProductDetails() {
  const searchParams = useSearchParams();

  const imgArray = searchParams.get("img")?.split(",") || []; // Convert to array
  const name = searchParams.get("name");
  const price = searchParams.get("price");
  const discountPercentage = searchParams.get("discountPercentage");
  const description = searchParams.get("description");
  const category = searchParams.get("category");

  const [selectedImage, setSelectedImage] = useState(0)

  // const handleAddToCart = () => {
  //   window.Snipcart.api.cart.items.add({
      
  //     id: imgArray[selectedImage], // Use the selected image
  //     name:name,
  //     price:price,
  //     text:text,
  //     discountPercentage:discountPercentage,
  //     url: `/product/productdetail?name=${name}&img=${imgArray.join(",")}&text=${text}&price=${price}&discountPercentage=${discountPercentage}`,
  //     image: imgArray[selectedImage],
  //   });
  // };

  return (
    <div className="h-auto mb-[140px] bg-white">
      <Heading text={"Product Detail"} text2={"Product Detail"} />

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-[4/5] relative">
              <Image
                src={imgArray[selectedImage]} // Use the selected image
                alt="Product image"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {imgArray.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square relative rounded-lg overflow-hidden ${
                    selectedImage === index ? 'ring-2 ring-[#FB2E86]' : ''
                  }`}
                >
                  <Image
                    src={image}
                    alt={`Product thumbnail ${index + 1} || 'pic'`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-[#0D134E]">{name}</h1>
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#FFC416] text-[#FFC416]" />
                ))}
              </div>
              <span className="text-[#151875]">(22)</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xl font-bold text-[#151875]">${price}</span>
              <span className="text-xl text-[#FB2E86] ">{discountPercentage || 0}% off</span>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-[#0D134E]">Color</h3>
              <p className="text-[#A9ACC6]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.
              </p>
            </div>
            {/* <div className="flex gap-4">
              <Button className="bg-[#FB2E86] hover:bg-[#FB2E86]/90" onClick={handleAddToCart}>
                Add To Cart
              </Button>
              <Button variant="outline" size="icon">
                <Heart className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                 <ZoomIn size={20} className="text-gray-500" />
            </Button>
            </div> */}


<div className="flex gap-4">
        <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white" size="lg">
         
                {/* //link------------- */}

                <Link  href={`/cart?name=${name}&price=${price}&description=${description}&category=${category}&discountPercentage =${discountPercentage}&image=${imgArray}`}
            className="flex items-center justify-center w-full">


            <ShoppingCart className="h-5 w-5 mr-2" />
            Add to Cart
          </Link>
        </Button>
        <Button size="icon" variant="outline" className="bg-white hover:bg-gray-100">
          <Search className="h-5 w-5" />
        </Button>
      </div>
          </div>
        </div>
      </div>
      
    
         {/* Product Tabs */}
         <div className="mt-16">
         <Tabs defaultValue="description">
           <TabsList className="w-full justify-start border-b">
             <TabsTrigger value="description" className="text-xl">Description</TabsTrigger>
             <TabsTrigger value="additional" className="text-xl">Additional Info</TabsTrigger>
             <TabsTrigger value="reviews" className="text-xl">Reviews</TabsTrigger>
             <TabsTrigger value="video" className="text-xl">Video</TabsTrigger>
           </TabsList>
           <TabsContent value="description" className="mt-8">
             <h3 className="text-xl font-semibold text-[#151875] mb-4">Varius tempor.</h3>
             <p className="text-[#A9ACC6] leading-relaxed">
            {description}
            </p>
           </TabsContent>
           <TabsContent value="additional" className="mt-8">
             Additional information content
           </TabsContent>
           <TabsContent value="reviews" className="mt-8">
             Reviews content
           </TabsContent>
           <TabsContent value="video" className="mt-8">
             Video content
           </TabsContent>
         </Tabs>
       </div>

       {/* Related Products */}
       <div className="mt-16 mb-32">
         <h2 className="text-4xl font-bold text-[#101750] mb-8">Related Products</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           {[
             { img:"/s-g-6.png",title: "Mens Fashion Wear", price: "$43.00" },
             {img:"/s-g-7.png", title: "Women's Fashion", price: "$67.00" },
             { img:"/s-g-4.png",title: "Wolx Dummy Fashion", price: "$67.00" },
             { img:"/s-g-1.png",title: "Top Wall Digital Clock", price: "$51.00" }
           ].map((product, index) => (
             <div key={index} className="group">
               <div className="aspect-square relative mb-4 bg-[#F6F7FB] rounded-lg overflow-hidden">
                 <Image
                   src={product.img}
                   alt={product.title || 'pic'}
                   fill
                   className="object-cover group-hover:scale-110 transition-transform"
                 />
               </div>
               <h3 className="font-semibold text-[#151875]">{product.title}</h3>
               <div className="flex items-center justify-between mt-2">
                 <span className="text-[#151875]">{product.price}</span>
                 <div className="flex">
                   {[...Array(5)].map((_, i) => (
                     <Star key={i} className="w-4 h-4 fill-[#FFC416] text-[#FFC416]" />
                   ))}
                 </div>
               </div>
             </div>
           ))}
         </div>
       </div>
     </div>
  
  );
}
  