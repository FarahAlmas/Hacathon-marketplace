import React from 'react'
import Image from 'next/image'
import { client } from '@/sanity/lib/client'


async function Hero() {
const res= await client.fetch(`*[_type == 'landingPage'][0]{'heroImg':sections[0].heroImg.asset->url}`)

const {heroImg} = await res
  return (
    <div>
    
    <Image src={heroImg} alt={"hero"} width={1920} height={764}/> 
  </div>
  )
  }

  export default Hero
