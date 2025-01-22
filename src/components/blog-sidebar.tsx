import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Image from 'next/image'
// import { Facebook, Twitter, Instagram } from 'lucide-react'
import {recentPosts, saleProducts, offerProducts} from "@/constant/blog"
import { Heart, Mail, Search, User } from "lucide-react"

export function BlogSidebar() {
  return (
  

<>
 {/* Sidebar */}
 <div className="space-y-8">
 {/* Search */}
 <div className="space-y-4">
   <h2 className="text-xl font-bold text-[#151875]">Search</h2>
   <div className="relative">
     <Input placeholder="Search For Posts" />
     <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
   </div>
 </div>

 {/* Categories */}
 <div className="space-y-4">
   <h2 className="text-xl font-bold text-[#151875]">Categories</h2>
   <div className="grid grid-cols-2 gap-4">
     {['Hobbies', 'Women', 'Women', 'Women', 'Women', 'Women'].map((category, i) => (
       <Button
         key={i}
         variant="outline"
         className={`justify-start ${i === 0 ? 'bg-[#F939BF] text-white border-[#F939BF]' : 'text-[#3F509E]'}`}
       >
         {category} {i === 0 ? '(14)' : '(21)'}
       </Button>
     ))}
   </div>
 </div>

 {/* Recent Posts */}
 <div className="space-y-4">
   <h2 className="text-xl font-bold text-[#151875]">Recent Post</h2>
   <div className="space-y-4">
     {recentPosts.map((post, i:number) => (
       <div key={i} className="flex gap-4">
         <Image
           src={post.image}
           alt={post.title}
           width={70}
           height={51}
           className="rounded"
         />
         <div>
           <h3 className="text-sm font-medium text-[#3F509E]">{post.title}</h3>
           <p className="text-xs text-[#8A8FB9]">{post.date}</p>
         </div>
       </div>
     ))}
   </div>
 </div>

 {/* Sale Products */}
 <div className="space-y-4">
   <><h2 className="text-xl font-bold text-[#151875]">Sale Product</h2><div className="space-y-4">
     {saleProducts.map((product, i:number) => (
       <div key={i} className="flex gap-4">
         <Image
           src={product.image}
           alt={product.title}
           width={70}
           height={57}
           className="rounded" />
         <div>
           <h3 className="text-sm font-medium text-[#3F509E]">{product.title}</h3>
           <p className="text-xs text-[#8A8FB9]">{product.date}</p>
         </div>
       </div>
     ))}
   </div></>
 </div>

 {/* Offer Products */}
 <div className="space-y-4">
   <h2 className="text-xl font-bold text-[#151875]">Offer Product</h2>
   <div className="grid grid-cols-2 gap-4">
     {offerProducts.map((product, i:number) => (
       <div key={i} className="space-y-2">
         <Image
           src={product.image}
           alt={product.title}
           width={126}
           height={80}
           className="rounded w-full"
         />
         <h3 className="text-sm font-medium text-[#151875] text-center">{product.title}</h3>
         <p className="text-xs text-[#8A8FB9] text-center">{product.price}</p>
       </div>
     ))}
   </div>
 </div>

 {/* Follow */}
 <div className="space-y-4">
   <h2 className="text-xl font-bold text-[#151875]">Follow</h2>
   <div className="flex gap-4">
     <Button size="icon" className="rounded-full bg-[#5625DF]">
       <Mail className="h-4 w-4" />
     </Button>
     <Button size="icon" className="rounded-full bg-[#FF27B7]">
       <Heart className="h-4 w-4" />
     </Button>
     <Button size="icon" className="rounded-full bg-[#37DAF3]">
       <User className="h-4 w-4" />
     </Button>
   </div>
 </div>

 {/* Tags */}
 <div className="space-y-4">
   <h2 className="text-xl font-bold text-[#151875]">Tags</h2>
   <div className="flex flex-wrap gap-4">
     {['General', 'Atsanil', 'Insas.', 'Bibsaas', 'Nulla.'].map((tag, i) => (
       <span
         key={i}
         className={`text-sm ${i === 1 ? 'text-[#FB2E86]' : 'text-[#151875]'} underline cursor-pointer`}
       >
         {tag}
       </span>
     ))}
   </div>
 </div>
</div>


</>    
  )
}

