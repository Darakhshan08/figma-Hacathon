"use client";
import React from "react";
import FeaturedProducts from "./components/FeaturedProducts";
import HeroSection from "./components/HeroSection";
import LatestProducts from "./components/LatestProducts";
import TrendingProducts from "./components/TrendingProducts";
import Shopex from "./components/Shopex";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import TopCategories from "./components/TopCategories";

export default function HektoHeader() {
  return (
   <>
 
  

 {/* Main Navigation */} 

     {/* Hero Section */}
      {/* <div className="bg-[#F2F0FF] min-h-[600px]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="order-2 md:order-1 relative z-10">
              <div className="space-y-6 md:space-y-8">
                <div className="relative">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/b0ab/7b45/906d2aaf430d5bb6b86d462a9e91a8af?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kpoOmKWmB6sveVWwYmPqgDk-Z3k-BY4czXh1MaXvmyeNa1Ah-SP3bEZ1sBNGu8PwV~d5HyQ18ppw-6pKmFwXmJW~nTBs9igUOOIYQwcwnxR9SLx9anJXnbBw2IgmYS2jl4i02MbgYUUqlCZ~S6GyxPFsg0Kv8FIDvWGJYXrZIEKZAjgnqrSQ-FjuvIe-Iy05LgFuSik-9eJcVk~DDzaIDNmJWPm6JlXUnbyix1Gbz~YvmgLQMLOZrA27KzdO4C0OMUZEGNGRS62-keSSbHg5g4LCjOHrFtCqOgHcEQ242MmMjyZ~GT0Ng9OPIfdIebK5B~DbB35DABbaqagXQI2nbQ__"
                    alt="Decorative lamp"
                    className="absolute -top-28 -left-24 w-48 md:w-56 z-0"
                  />
                </div>
                <p className="text-[#FB2E86] text-base md:text-lg font-bold">
                  Best Furniture For Your Castle....
                </p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0D0E43] leading-tight">
                  New Furniture Collection Trends in 2020
                </h2>
                <p className="text-[#8A8FB9] text-base md:text-lg leading-relaxed max-w-xl">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                  in est adipiscing in phasellus non in justo.
                </p>
                <button className="bg-[#FB2E86] text-white px-8 md:px-12 py-3 md:py-4 rounded-sm hover:bg-[#E91E63] transition-colors duration-300 text-lg font-medium">
                  Shop Now
                </button>

                <div className="flex space-x-4 mt-10">
                  <div className="w-3 h-3 rounded-full bg-[#FB2E86]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#FB2E86] opacity-30"></div>
                  <div className="w-3 h-3 rounded-full bg-[#FB2E86] opacity-30"></div>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2 relative">
              <img
                src="https://s3-alpha-sig.figma.com/img/c453/494a/61ecc67b127029400b09a70cf2e9e973?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bfnjCHRCyGpKFG0MkP9C3u1Ni9VT4laLaRoxphGre-qXfr7F3B6WPRT92guukA~T0SFy2O-s842jF1sEgs4OEahM~aXDtFYsk7sRWbyByMgLcvK3SaZgSwBoR4mvcopt2HGaJi7vrUWqLhHsgI-b~I870glBwplx~jAaC-7gbZFbUk5nTKj2ktd-UY5bynhH9Kaw1aN3ZdRFad2FBdvOAh4vK9q35EWInU4T8dEtGAMEzi2hcVmvFM41uSUspuBvAQ1o9gOw7RW0VoIhA0qlC5kqoAkq5bz0ZS9Q-ZQVTDjrgAMbVZI2nyDBlw229-V3M4lSDVoI8D25XpKejTci9g__"
                alt="Modern chair"
                className="w-full max-w-2xl mx-auto z-10 relative"
              />
              <div className="absolute top-8 right-8 bg-[#00C1FE] text-white rounded-full w-20 h-20 flex items-center justify-center z-20">
                <div className="text-center">
                  <div className="text-2xl font-bold">50%</div>
                  <div className="text-sm">off</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}


<HeroSection/>
<FeaturedProducts />
<LatestProducts/>
<Shopex/>
<TrendingProducts/>
<TopCategories/>
<Blog/>
   
   {/* <ProductDetails/> */}
   <Footer/>
   
   
   </>

    


  );
}

