import DiscountItem from "@/components/discountItem";
import FeaturedProducts from "@/components/featuredProducts";
import LatestProducts from "@/components/latestProducts";
import NewsletterAndBlog from "@/components/letters";
import Hero from "@/components/hero";
import TopCategories from "@/components/topCategories";
import TrendingProducts from "@/components/trendingProducts";
import Unique from "@/components/unique";
// import { postReq } from "@/services/shippnemt-api";




export default async function Home() {
 
  // const res =await postReq()

  return (
    <div>
    <Hero/>
    <FeaturedProducts/>
    <LatestProducts/>
    <Unique/>
    <TrendingProducts/>
    <DiscountItem/>
    <TopCategories/>
    <NewsletterAndBlog/>
    
    </div>
  );
}
