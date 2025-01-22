// "use client"



// import { useEffect, useState } from 'react'

// import { client } from '@/sanity/lib/client'
// import Link from 'next/link'
// import Image from "next/image"
// import { fetchData } from '@/services/api'





// interface Res{
//   category: string,
//   name:string,
//   description:string,
//   price:number,
//   image:string
// }

// export function ProductGrid() {


//   const [cards , setCards] = useState <Res[]>([])
//   //------------------------use useEffect
//    useEffect(()=>{
//     const fetchCard = async ()=>{
//       const res:Res[] = await client.fetch(`*[_type == 'product'][]{
//         price,name,description,colors,'image': image.asset->url}`)
//       setCards(res)
  
//       if(!res || res.length === 0){
//        await fetchData()
      
//         const res:Res[] = await client.fetch(`*[_type == 'product'][]{
//           price,name,description,'image': image.asset->url}`)
//         setCards(res)
//       }}
//       fetchCard()
//    },[])
     

//   return (
//     <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//       {cards.map((product:Res,index:number) => (
//         <div key={index} className="group relative rounded-lg bg-white p-4 shadow-lg">
//           <div className="relative mb-4 aspect-square overflow-hidden rounded-lg bg-gray-100">
//           <Link href={`./product/id?name=${product.name}&price=${product.price}&image=${product.image}&category=${product.category}&description=${product.description}`}>
//             <Image
//               src={product.image}
//               alt={product.name}
//               width={600}
//               height={600}
//               className="h-full w-full object-cover object-center"
//             />
//             </Link>
           
//           </div>
//           <h3 className="mb-2 text-lg font-semibold text-[#111C85]">{product.name}</h3>
//           {/* <div className="mb-2 flex gap-2">
//             {product.colors.map((color, index) => (
//               <div
//                 key={index}
//                 className="h-3 w-3 rounded-full"
//                 style={{ backgroundColor: color }}
//               />
//             ))}
//           </div> */}
//           <div className="flex items-center gap-2">
//             <span className="text-sm font-semibold text-[#111C85]">${product.price}</span>
//             {product.category && (
//               <span className="text-sm text-pink-500 line-through">
//                 {product.category}
//               </span>
//             )}
//           </div>
//         </div>
//       ))}
//     </div>
//   )
// }
//-----------------------------------

// const products = [
//   {
//     id: 1,
//     name: "Dictum morbi",
//     price: 26.00,
//     oldPrice: 52.00,
//     image: "/placeholder.svg?height=200&width=200",
//     colors: ["#DE9034", "#E60584", "#5E37FF"]
//   },
//   {
//     id: 2,
//     name: "Sodales sit",
//     price: 26.00,
//     oldPrice: 52.00,
//     image: "/placeholder.svg?height=200&width=200",
//     colors: ["#DE9034", "#E60584", "#5E37FF"]
//   },
//   // Add more products as needed
// ]

