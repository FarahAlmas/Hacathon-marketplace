import Image from "next/image"
import Link from "next/link"
import { CalendarIcon, Pen } from 'lucide-react'
import {  data } from "@/constant/blog"


export function BlogCard(){
  return(
    <article className="mb-16">
     {data.map((item,index)=> {return(
        <> <Link key={item.id} href={`/blog/${item.id-1}`}>
        <Image
         src={item.image}
         alt={item.name || "pic"}
         width={870}
         height={453}
         className="rounded-lg mb-6" key={index} />
        </Link>
         <div className="flex gap-4 mb-4">
           <div className="flex items-center gap-2 bg-[#FFE7F9] px-4 py-1 rounded">
             <Pen className="h-4 w-4 text-[#FB2E86]" />
             <span className="text-sm text-[#151875]">{item.name}</span>
           </div>
           <div className="flex items-center gap-2 bg-[#FFECE2] px-4 py-1 rounded">
             <CalendarIcon className="h-4 w-4 text-[#FFA454]" />
             <span className="text-sm text-[#151875]">{item.date}</span>
           </div>
         </div><h2 className="text-2xl font-bold text-[#151875] mb-4">{item.name}</h2><p className="text-[#8A8FB9] mb-4">{item.heading}</p></>
      
     )})}
      <Link 
        href="#" 
        className="text-[#151875] font-semibold inline-flex items-center"
      >
        Read More
        <span className="ml-2 w-2 h-2 rounded-full bg-[#FB2E86]" />
      </Link>
    </article>
  ) 
}

