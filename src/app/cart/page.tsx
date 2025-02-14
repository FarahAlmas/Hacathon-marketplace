// "use client"

import CartContent from "@/components/cartContent";

import { Suspense } from "react";

// import { useEffect, useState } from "react"
// import { Trash2 } from 'lucide-react'
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Separator } from "@/components/ui/separator"
// import { useSearchParams } from "next/navigation"
// import Image from "next/image"
// import { useRouter } from "next/navigation"
// import Link from "next/link"

// interface CartItem {
//   name: string
//   price: number
//   category: string
//   description:string
//   image: string
//   quantity: number
// }

// export default function CartPage() {


//   const [isMember, setIsMember] = useState(false)
//   const router = useRouter()
//   const searchParam= useSearchParams();
//   const [cartItems, setCartItems] = useState<CartItem[]>([])
//   // const [qty, setQty] = useState()

//   useEffect(()=>{
//     const cart = localStorage.getItem("cart")
//     const updatedCart = cart ? JSON.parse(cart) : []

//     const name = searchParam.get('name')
//     const price = searchParam.get('price')
//     const description = searchParam.get('description')
//     const image = searchParam.get('image')
//     const category = searchParam.get('category')

//     if(name && price && description && image){
//       const isDuplicate:boolean = updatedCart.some((item:CartItem)=>item.name === name);
//       if(!isDuplicate){
//         updatedCart.push({
//           name,
//           price,
//           category,
//           description,
//           image,
//           quantity:1
//         })

//       }
//       localStorage.setItem("cart", JSON.stringify(updatedCart))
//       setCartItems(updatedCart)
//       router.replace("/cart")
        
//     }

          
//     },[searchParam, router])

// //---------------Remove item-----------
//     function removeItem(index:number){
//       const removeCard =[...cartItems]
//       removeCard.splice(index,1)

//       localStorage.setItem("cart", JSON.stringify(removeCard))
//       setCartItems(removeCard)
//     }

//     //-------------------Quantity function-----------

//     function handleQuantity(index:number,num:string){
//      const qtyArray = [...cartItems]
//      qtyArray[index].quantity = +num

//       localStorage.setItem("cart", JSON.stringify(qtyArray))
//       setCartItems(qtyArray)
//     }

  



// //--------------------------summary------------

  

//   const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
//   const discount = isMember ? subtotal * 0.1 : 0
//   const total = subtotal - discount

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
//       <div className="grid gap-8 md:grid-cols-3">
//         <div className="md:col-span-2">
//           {cartItems.map((item:CartItem ,index:number) =>{ 
//             return(
//             <Card key={index} className="mb-4">
//               <CardContent className="p-4">
//                 <div className="flex items-center">
//                   <Image src={item.image} alt={item.name} width={80} height={80} className="w-20 h-20 object-cover rounded mr-4" />
//                   <div className="flex-grow">
//                     <h3 className="font-semibold">{item.name}</h3>
//                     <h3 className="font-semibold">{item.category}</h3>
//                     <p className="text-gray-600">${item.price}</p>
//                   </div>
//                   <div className="flex items-center">
//                     <p className="text-sm">Quantity:</p>
                   
                   
//                     <Input className="bg-slate-200 rounded  text-black w-20" type="number" min={1}
//                      value={item.quantity} onChange={(e)=>{handleQuantity(index,e.target.value)}}
//                     />
                    
//                     <h1>${item.price* item.quantity}</h1>
//                   </div>
//                   <Button variant="ghost" size="icon" className="ml-4" 
//                   onClick={()=>{removeItem(index)}}>
//                     <Trash2 className="h-4 w-4" />
//                   </Button>
//                 </div>
//               </CardContent>
//             </Card>
//           )})}
//         </div>
//         <div>
//           <Card>
//             <CardHeader>
//               <CardTitle>Order Summary</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <div className="space-y-2">
//                 <div className="flex justify-between">
//                   <span>Subtotal</span>
//                  <span>${subtotal.toFixed(2)}</span>
//                 </div>
//                 <div className="flex items-center">
//                   <Label htmlFor="member-checkbox" className="flex items-center cursor-pointer">
//                     <Input
//                       id="member-checkbox"
//                       type="checkbox"
//                       checked={isMember}
//                       onChange={() => setIsMember(!isMember)}
//                       className="mr-2"
//                     />
//                     Member Discount (10%)
//                   </Label>
//                 </div>
//                 {isMember && (
//                   <div className="flex justify-between text-green-600">
//                     <span>Discount</span>
//                     <span>-${discount.toFixed(2)}</span>
//                   </div>
//                 )}
//                 <Separator />
//                 <div className="flex justify-between font-semibold">
//                   <span>Total</span>
//                   <span>${total.toFixed(2)}</span>
//                 </div>
//               </div>
//             </CardContent>
//             <CardFooter>
//              <Link href={"/shipping"}>
//              <Button className="w-full">
//                 {isMember ? "Member Checkout" : "Proceed to Checkout"}
//               </Button>
//              </Link>
//             </CardFooter>
//           </Card>
          
//         </div>
       
//       </div>
//     </div>
//   )
// }

export default function CartPage() {


  
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CartContent />
    </Suspense>
  );
}


