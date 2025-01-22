
import { BlogCard } from "@/components/blog-card"
import { BlogSidebar } from "@/components/blog-sidebar"
import Heading from "@/components/heading"
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import Link from "next/link"




export default function BlogPage() {
 

 

  return (
    <>
      <Heading text={"Blog Page"} text2={"Blog Page"}/>
      <main className="container mx-auto py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            
   
          {/* {data.map((blog) => (
              <Link key={blog.id} href={`/blog/${blog.id}`}> */}
                <BlogCard />
              {/* </Link>
            ))} */}
         

           

             {/* change pages */}
             <div className="flex justify-center gap-4 mt-8">
              <Link href="/blog"><Button className="bg-[#FB2CA8] hover:bg-[#FB2CA8]/90 h-8 w-8 p-0">1</Button></Link>
              <Link href="/blog/singleblog"><Button variant="outline" className="h-8 w-8 p-0 text-[#E0D3F5]">2</Button></Link>
              <Link href="/blog/singleblog"><Button variant="outline" className="h-8 w-8 p-0 text-[#E0D3F5]">3</Button></Link>
              <Link href="/blog/singleblog"><Button variant="outline" className="h-8 w-8 p-0 text-[#E0D3F5]">4</Button></Link>
            </div>
          </div>
          <BlogSidebar />
          
        </div>
        <Image src={"/brandlogo.png"} alt={"brandlogo"}  width={904} height={93} className="mt-[234px] mb-[132px] m-auto"/>
      </main>
    </>
  )
}

