
import { Heart, Search, ShoppingCart } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import Link from 'next/link';

interface CardProps {
  name: string;
  sale: number;
  latestProductImage: string;
  latestProductPrice: number;
  latestProductName: string;
  latestProductOriginalPrice: number;
  latestProductTag: string;
}

async function LatestProducts() {
  const res = await client.fetch(`
    *[_type == 'landingPage'][0].sections[2]{
      'cards': cards[]{
        'latestProductImage': latestProductImage.asset->url,
        latestProductPrice,
        latestProductName,
        latestProductOriginalPrice,
        latestProductTag
      }
    }
  `);

  return (
    <div className="flex flex-col justify-center items-center">
      {/* Latest Products Section */}
      <div className="space-y-8 w-full">
        <h2 className="text-[#151875] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[42px] leading-[30px] md:leading-[49px] mt-[40px] md:mt-[60px] text-center font-josefin">
          Latest Products
        </h2>

        <Tabs defaultValue="new" className="w-full">
          <TabsList className="flex justify-center gap-2 sm:gap-4 md:gap-8 border-none bg-transparent">
            {['New Arrival', 'Best Seller', 'Featured', 'Special Offer'].map((tab, idx) => (
              <TabsTrigger
                key={idx}
                value={tab.toLowerCase().replace(' ', '')}
                className="text-sm sm:text-lg md:text-[18px] font-medium data-[state=active]:text-[#FB2E86] data-[state=active]:border-b-2 data-[state=active]:border-[#FB2E86] bg-transparent"
              >
                {tab}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <div className="w-full flex justify-center my-[30px] md:my-[50px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {res.cards.map((product: CardProps, index: number) => (
              <Card key={index} className="group relative border-none">
                <div className="relative bg-[#F7F7F7] p-4 h-[300px] sm:h-[350px] flex items-center justify-center">
                  {product.sale && (
                    <div className="absolute top-4 left-4 bg-[#3F509E] text-white px-3 py-1 rotate-[-18deg] text-sm">
                      {product.latestProductTag}
                    </div>
                  )}
                  <Link href="/product">
                    <Image
                      src={product.latestProductImage}
                      alt={product.name}
                      className="max-h-[200px] sm:max-h-[250px] w-auto object-contain"
                      width={223}
                      height={229}
                    />
                  </Link>
                  {/* Hover Actions */}
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-3 sm:gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    {[
                      <ShoppingCart />,
                      <Heart />,
                      <Search />,
                    ].map((Icon, idx) => (
                      <button
                        key={idx}
                        className="p-2 bg-white rounded-full hover:bg-[#2F1AC4] hover:text-white transition-colors"
                      >
                        {Icon}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="p-4 bg-white shadow-lg hover:bg-[#2F1AC4] transition">
                  <h3 className="text-[#151875] font-josefin text-sm sm:text-lg">
                    {product.latestProductName}
                  </h3>
                  <div className="flex gap-2 mt-1">
                    <span className="text-[#151875] font-josefin">${product.latestProductPrice}.00</span>
                    <span className="text-[#FB2448] line-through text-sm">${product.latestProductOriginalPrice}.00</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center gap-2 py-6">
        {[1, 2, 3].map((dot) => (
          <div
            key={dot}
            className={`w-3 h-3 transform rotate-45 ${
              dot === 1 ? 'bg-[#FB2E86]' : 'border border-[#FB2E86]'
            }`}
          />
        ))}
      </div>

      {/* Shopex Offer Section */}
      <h1 className="text-[#151875] text-[24px] sm:text-[32px] md:text-[42px] leading-[30px] md:leading-[49px] mt-[40px] sm:mt-[50px] md:mt-[60px] text-center font-josefin">
        What Shopex Offer!
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 px-4 py-[30px]">
        {[
          { src: '/g-1.png', title: '24/7 Support' },
          { src: '/g-2.png', title: 'Secure Payment' },
          { src: '/g-3.png', title: 'Free Delivery' },
          { src: '/g-4.png', title: 'Easy Returns' },
        ].map((offer, idx) => (
          <Card key={idx} className="w-full px-4 py-6 flex flex-col justify-center items-center text-center">
            <Image src={offer.src} alt={offer.title} width={65} height={65} />
            <h1 className="text-[18px] sm:text-[20px] md:text-[22px] leading-[25px] text-[#151875] mb-3">
              {offer.title}
            </h1>
            <p className="text-[14px] sm:text-[16px] leading-[22px] text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default LatestProducts;
