  import Image from 'next/image'
  import { Check } from 'lucide-react'
    
   


    export default function DiscountItem() {
      return (
        <div className="w-full px-4 sm:px-6 lg:px-[374px] flex flex-col m-auto mb-[79px]">
          {/* Heading */}
          <h1 className="text-center text-[#151875] text-2xl sm:text-3xl lg:text-[42px] leading-[49px] font-bold">
            Discount Item
          </h1>
    
          {/* Category Tabs */}
          <div className="flex justify-center items-center gap-4 mt-[33px] text-sm sm:text-base lg:text-[18px]">
            <div className="text-[#FB2E86] cursor-pointer">Wood Chair</div>
            <div className="text-[#151875] cursor-pointer">Plastic Chair</div>
            <div className="text-[#151875] cursor-pointer">Sofa Collection</div>
          </div>
    
          {/* Discount Section */}
          <div className="w-full bg-white py-12 sm:py-16 px-4 sm:px-8 lg:px-16">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left Content */}
              <div className="space-y-6">
                <h1 className="text-[#151875] font-['Josefin_Sans'] text-xl sm:text-2xl lg:text-[35px] leading-[46.2px] tracking-[0.015em]">
                  20% Discount On All Products
                </h1>
    
                <h2 className="text-[#FB2E86] font-['Josefin_Sans']text-[21px] text-lg sm:text-xl leading-[27.7px] tracking-[0.015em]">
                  Eams Sofa Compact
                </h2>
    
                <p className="text-[#B7BACB] font-['Lato'] text-sm sm:text-base md:text-[17px] leading-[30px] tracking-[0.02em]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.
                </p>
    
                <div className="space-y-4">
                  {[
                    "Material expose like metals",
                    "Simple neutral colours",
                    "Clear lines and geometric figures",
                    "Material expose like metals",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <Check className="w-5 h-5 text-[#7569B2] mt-1.5" />
                      <span className="text-[#B8B8DC] font-['Lato'] text-sm sm:text-base leading-[30px] tracking-[0.02em]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
    
                <button className="bg-[#FB2E86] text-white font-['Josefin_Sans'] text-sm sm:text-[17px] leading-[20px] tracking-[0.02em] px-8 py-3 rounded-[2px] hover:bg-opacity-90 transition-colors">
                  Shop Now
                </button>
              </div>
    
              {/* Right Content */}
              <div className="relative flex justify-center">
                <div className="absolute inset-0 bg-[#FCECF1] rounded-full transform translate-x-4 translate-y-4 hidden sm:block" />
                <Image
                  src="/pic.png"
                  alt="Eams Sofa Compact"
                  width={500}
                  height={500}
                  className="relative z-10 max-w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      );
    }
    