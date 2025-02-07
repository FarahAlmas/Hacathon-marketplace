"use client";

import Image from "next/image";
import {
  User, 
  Search,  
  Facebook,
  Twitter,
  Instagram,
  ChevronLeft,
  ChevronRight,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {data, offerProducts, recentPosts, saleProducts } from "@/constant/blog";
import Heading from "@/components/heading";
import { notFound } from "next/navigation";
import React from "react";



export default function SingleBlog({ params }: { params: Promise<{ id: string }> }) {
  const unwrappedParams = React.use(params)
  const { id } = unwrappedParams;

  // Convert `id` to a number
  const blogIndex = parseInt(id);

  // Validate the index and fetch the blog data
  if (isNaN(blogIndex) || blogIndex < 0 || blogIndex >= data.length) {
    return notFound(); // Render 404 page if the blog is not found
  }

  const myData = data[blogIndex];
  const { image, heading, name, date } = myData;

  return (
    <div className="min-h-screen bg-white">
      <Heading text={"Single Blog"} text2={"Single Blog"} />
      <main className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Image
              src={image}
              alt="Blog featured image"
              width={870}
              height={453}
              className="rounded-lg mb-8"
            />
             <div className="flex items-center space-x-4 mb-6">
                    <div className="bg-[#FFE7F9] px-4 py-1 rounded flex items-center space-x-2">
                      <User className="h-4 w-4 text-[#FB2E86]" />
                      <span className="text-[#151875]">{name}</span>
                    </div>
                    <div className="bg-[#FFECE2] px-4 py-1 rounded flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-[#FFA454]" />
                      <span className="text-[#151875]">{date}</span>
                    </div>
                  </div><h1 className="text-3xl font-bold text-[#151875] mb-6">
                   {heading}
                  </h1>
                  <div className="prose prose-lg max-w-none mb-8">
                    <p className="text-[#8A8FB9]">
                    &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Veli dapibus est, nunc, montes, lacus consequat integer viverra. Smorbi team quam rhoncus. Velit inarcu platea donec vitae anteposuere malesuada.&quot;
   
                    </p>

                    <div className="bg-[#FAFAFB] border-l-4 border-[#FC45A0] p-8 my-8">
                      <p className="text-[#969CB4]">
                      &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. amet, consectetur adipiscing elit. Commodo dictum sapien,Commodo dictum sapien, amet, consequat. Lorem ipsum dolor sit amet, consequat.&quot;
    
                      </p>
                    </div>

                    <p className="text-[#8A8FB9]">
                    &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velitmorbi etiam quam rhoncus. Velit in arcu platea donec vitae ante dapibus est, nunc, montes, lacus consequat integer viverr posuere malesuada.&quot;

                    </p>
                  </div>
              
            
         

            {/* Post Navigation */}
            <div className="flex justify-between items-center bg-[#F7F8FB] p-4 rounded-lg mb-8">
              <Button variant="ghost" className="text-[#8A8FB9]">
                <ChevronLeft className="mr-2 h-4 w-4" />
                Previous Post
              </Button>
              <Button variant="ghost" className="text-[#8A8FB9]">
                Next Post
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Comments */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[#151875]">Comments</h3>

              {[1, 2].map((comment) => (
                <Card key={comment} className="p-4">
                  <CardContent className="flex gap-4">
                    <Image
                      src={`/com/com-${comment + 0}.png?height=51&width=70`}
                      alt="Comment author"
                      width={80}
                      height={80}
                      className="rounded"
                    />
                    <div>
                      <h4 className="font-semibold text-[#363385]">
                        Sapien ac
                      </h4>
                      <p className="text-sm text-[#A3A2B6]">Jan 09 2020</p>
                      <p className="text-[#A3A2B6] mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        At in vitae rutrum vulputate consectetur.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Comment Form */}
              <form className="space-y-4 mt-8">
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="Your Name*" />
                  <Input placeholder="Write Your Email*" />
                </div>
                <Textarea placeholder="Write your comment*" className="h-48" />
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="save-info" />
                  <label htmlFor="save-info" className="text-sm text-[#8A91AB]">
                    Save my name, email, and website in this browser for the
                    next time I comment.
                  </label>
                </div>
                <Button className="bg-[#FB2E86] text-white">
                  Continue Shipping
                </Button>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Search */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#151875]">Search</h3>
              <div className="relative">
                <Input placeholder="Search For Posts" />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              </div>
            </div>

            {/* Categories */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#151875]">Categories</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Hobbies (14)",
                  "Women (21)",
                  "Women (21)",
                  "Women (21)",
                  "Women (21)",
                  "Women (21)",
                ].map((category) => (
                  <Button
                    key={category}
                    variant="outline"
                    className={
                      category.includes("Hobbies")
                        ? "bg-[#F939BF] text-white"
                        : "bg-white text-[#3F509E]"
                    }
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            {/* Recent Posts */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#151875]">Recent Post</h3>
              <div className="space-y-4">
                {recentPosts.map((post,i) => (
                  <div key={i} className="flex gap-4">
                    <Image
                      src={post.image}
                      alt="Recent post"
                      width={70}
                      height={50}
                      className="rounded"
                    />
                    <div>
                      <h4 className="text-sm font-medium text-[#3F509E]">
                        It is a long established fact
                      </h4>
                      <p className="text-xs text-[#8A8FB9]">Aug 09 2020</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sale Products */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-[#151875]">Sale Product</h2>
              <div className="space-y-4">
                {saleProducts.map((product, i) => (
                  <div key={i} className="flex gap-4">
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={70}
                      height={57}
                      className="rounded"
                    />
                    <div>
                      <h3 className="text-sm font-medium text-[#3F509E]">
                        {product.title}
                      </h3>
                      <p className="text-xs text-[#8A8FB9]">{product.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Offer Products */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-[#151875]">
                Offer Product
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {offerProducts.map((product, i) => (
                  <div key={i} className="space-y-2">
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={126}
                      height={80}
                      className="rounded w-full"
                    />
                    <h3 className="text-sm font-medium text-[#151875] text-center">
                      {product.title}
                    </h3>
                    <p className="text-xs text-[#8A8FB9] text-center">
                      {product.price}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Follow */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#151875]">Follow</h3>
              <div className="flex space-x-4">
                <Button size="icon" className="rounded-full bg-[#5625DF]">
                  <Facebook className="h-4 w-4 text-white" />
                </Button>
                <Button size="icon" className="rounded-full bg-[#FF27B7]">
                  <Instagram className="h-4 w-4 text-white" />
                </Button>
                <Button size="icon" className="rounded-full bg-[#37DAF3]">
                  <Twitter className="h-4 w-4 text-white" />
                </Button>
              </div>
            </div>

            {/* Tags */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#151875]">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {["General", "Atsanil", "Insas.", "Bibsaas", "Nulla."].map(
                  (tag) => (
                    <span
                      key={tag}
                      className={`text-sm ${
                        tag === "Atsanil" ? "text-[#FB2E86]" : "text-[#151875]"
                      } underline cursor-pointer`}
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
 