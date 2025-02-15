import ContactForm from "@/components/contact";
import React from "react";
import Image from "next/image";
import Heading from "@/components/heading";

export default function AboutContact() {
  return (
    <>
      
        {/* Banner content can be added here */}

        <Heading text={"Contact Us"} text2={"Contact Us"}/>
     
      <div className="container mx-auto px-4 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Information About Us Section */}
          <div className="space-y-6">
            <h2 className="font-['Josefin_Sans'] text-[36px] leading-[48px] text-[#151875]">
              Information About us
            </h2>
            <p className="font-['Lato'] font-semibold text-base leading-[26px] text-[#8A8FB9] max-w-[550px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
              neque ultrices mattis aliquam, malesuada diam est. Malesuada sem
              tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
              vitae lobortis quis bibendum quam.
            </p>
            <div className="flex gap-3.5 mt-8">
              <div className="w-[25px] h-[25px] rounded-full bg-[#5625DF]"></div>
              <div className="w-[25px] h-[25px] rounded-full bg-[#FF27B7]"></div>
              <div className="w-[25px] h-[25px] rounded-full bg-[#37DAF3]"></div>
            </div>
          </div>

          {/* Contact Way Section */}
          <div className=" space-y-4 lg:space-y-6 mb-[140px] lg:mb-1">
            <h2 className="font-['Josefin_Sans'] text-[36px] leading-[48px] text-[#151875]">
              Contact Way
            </h2>
            <div className="w-full max-w-[489px] h-[155px] grid grid-cols-2 gap-x-4 lg:gap-x-16 gap-y-14">
              {/* Phone and Email Section */}
              <div className="flex gap-4">
                <div className="w-[45px] h-[45px] rounded-full bg-[#5726DF] shrink-0" />
                <div className="space-y-1">
                  <p className="font-['Lato'] font-semibold text-base leading-[26px] text-[#8A8FB9]">
                    Tel: 877-67-88-99
                  </p>
                  <p className="font-['Lato'] font-semibold text-base leading-[26px] text-[#8A8FB9]">
                    E-Mail: shop@store.com
                  </p>
                </div>
              </div>

              {/* Support Forum Section */}
              <div className="flex gap-4">
                <div className="w-[45px] h-[45px] rounded-full bg-[#FB2E86] shrink-0" />
                <div className="space-y-1">
                  <p className="font-['Lato'] font-semibold text-base leading-[26px] text-[#8A8FB9]">
                    Support Forum
                  </p>
                  <p className="font-['Lato'] font-semibold text-base leading-[26px] text-[#8A8FB9]">
                    For over 24hr
                  </p>
                </div>
              </div>

              {/* Address Section */}
              <div className="flex gap-4">
                <div className="w-[45px] h-[45px] rounded-full bg-[#FFB265] shrink-0" />
                <div className="space-y-1">
                  <p className="font-['Lato'] font-semibold text-base leading-[26px] text-[#8A8FB9]">
                    20 Margaret st, London
                  </p>
                  <p className="font-['Lato'] font-semibold text-base leading-[26px] text-[#8A8FB9]">
                    Great britain, 3NM98-LK
                  </p>
                </div>
              </div>

              {/* Shipping Section */}
              <div className="flex gap-4">
                <div className="w-[45px] h-[45px] rounded-full bg-[#1BE982] shrink-0" />
                <div className="space-y-1">
                  <p className="font-['Lato'] font-semibold text-base leading-[26px] text-[#8A8FB9]">
                    Free standard shipping
                  </p>
                  <p className="font-['Lato'] font-semibold text-base leading-[26px] text-[#8A8FB9]">
                    on all orders.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Get In Touch Section */}
          <div className="space-y-6 col-span-full py-2 mt-16 ">
            <h2 className="font-['Josefin_Sans'] text-[36px] leading-[48px] text-[#151875]">
              Get In Touch
            </h2>
            <p className="font-['Lato'] lg:font-semibold text-base leading-[26px] text-[#8A8FB9] max-w-[550px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
              neque ultrices tristique amet erat vitae eget dolor los vitae
              lobortis quis bibendum quam.
            </p>
          </div>
        </div>
        <div className="container mx-auto px-4 flex flex-col lg:flex-row ">
          <ContactForm />
          <div className="lg:ml-10 w-[250px] mt-4 lg:mt-0 h-[250px] lg:w-[723px] lg:h-[692px] mb-[100px]">
            <Image
              src="/Group 124.png"
              alt="contact"
              width={506}
              height={506}
            ></Image>
          </div>
        </div>
      </div>
    </>
  );
}
  