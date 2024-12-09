import { Tag, Heart, Share2, ShoppingCart } from "lucide-react";
import Image from "next/image";

import React from 'react'

function LatestProducts() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
    <header className="mb-8">
      <h2 className="text-4xl font-bold text-navy-800 text-center mb-4 text-[#151875]">
        Latest Products
      </h2>

      <nav className="flex justify-center space-x-8">
      <button className="text-pink-500 font-normal text-lg pb-2 border-b-2 border-pink-500">
        New Arrival
      </button>
      <button className="text-[#151875] font-normal text-lg hover:text-gray-700  pb-2">
        Best Seller
      </button>
      <button className="text-[#151875] font-normal text-lg hover:text-gray-700 pb-2">
        Featured
      </button>
      <button className="text-[#151875] font-normal text-lg hover:text-gray-700 pb-2">
        Special Offer
      </button>
      </nav>
    </header>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="bg-[#F7F7F7] rounded-lg shadow p-4 group relative">
        <div className="relative">
        <div className="flex justify-center items-center h-full">
  <Image
    src="https://s3-alpha-sig.figma.com/img/4e1b/8c82/f15b5765f466da190975101e10dfdab2?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b7Z7r55L5ju3SPvVVSihI-PWF3QcuX6TmdTjQ7KzeB0XxgwjOY1X3laCv6xAereqdXpWncX-FOmMZhNVTiXB3xAeFNiREs8bdU5g6zGC1CevkMRLPz5puykwi0lgWmGiqQ5C3h6h35CTl2GkmzD5Hvap1OybPbO4PA0eGjECHXSLF~yOqbPiKtBMev2F8xnLlrLp3RImUXNHLB~SXk~ssRL0IONIFNAlIAwijZfPsArZtDAenNh5dG18IlIz6bVBCaqjAeOm43l0sGz9cBDk4JNXkknzZrxnAR-hutKfrWk3aZlybMDFwwC5WnFrwzDSWtokibWNHx4T8zvxxu70PA__"
    alt="Brown chair"
    width={223}
    height={229}
    className="object-cover"
  />
</div>
          <div className="absolute left-2 bottom-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col gap-2">
            <button className="p-2 rounded-full hover:bg-[#EEEFFB]">
              <Heart className="w-5 h-5 text-[#2F1AC4]" />
            </button>
            <button className="p-2 rounded-full hover:bg-[#EEEFFB] ">
              <Share2 className="w-5 h-5 text-[#2F1AC4]" />
            </button>
            <button className="p-2 rounded-full hover:bg-[#EEEFFB]">
              <ShoppingCart className="w-5 h-5 text-[#2F1AC4]" />
            </button>
          </div>
          
        </div>
        <div className="mt-4 flex justify-between items-center">
          <h3 className="text-lg font-normal text-[#151875]">Comfort Handy Craft</h3>
          <div className="flex items-center">
            <span className="text-lg font-bold text-[#151875]">$45.00</span>
            <span className="ml-2 text-[#FB2448] line-through">$65.00</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-4 group relative">
        <div className="relative">

         <div className="flex justify-center items-center h-full">
  <Image
    src="/Images/image5.png"
    alt="Brown chair"
    width={223}
    height={229}
    className="object-cover"
  />
</div>
          <div className="absolute left-2 bottom-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col gap-2">
          <button className="p-2 rounded-full hover:bg-[#EEEFFB]">
              <Heart className="w-5 h-5 text-[#2F1AC4]" />
            </button>
            <button className="p-2 rounded-full hover:bg-[#EEEFFB] ">
              <Share2 className="w-5 h-5 text-[#2F1AC4]" />
            </button>
            <button className="p-2 rounded-full hover:bg-[#EEEFFB]">
              <ShoppingCart className="w-5 h-5 text-[#2F1AC4]" />
            </button>
          </div>
          <span className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded text-sm">
            <Tag className="w-4 h-4 inline mr-1" />
            Sale
          </span>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <h3 className="text-lg font-normal text-[#151875]">Comfort Handy Craft</h3>
          <div className="flex items-center">
            <span className="text-lg font-bold text-[#151875]">$45.00</span>
            <span className="ml-2 text-[#FB2448] line-through">$65.00</span>
          </div>
        </div>
      </div>

      <div className="bg-[#F7F7F7] rounded-lg shadow p-4 group relative">
        <div className="relative">
        <div className="flex justify-center items-center h-full">
  <Image
    src="/Images/image6.png"
    alt="Brown chair"
    width={223}
    height={229}
    className="object-cover"
  />
</div>
          <div className="absolute left-2 bottom-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col gap-2">
          <button className="p-2 rounded-full hover:bg-[#EEEFFB]">
              <Heart className="w-5 h-5 text-[#2F1AC4]" />
            </button>
            <button className="p-2 rounded-full hover:bg-[#EEEFFB] ">
              <Share2 className="w-5 h-5 text-[#2F1AC4]" />
            </button>
            <button className="p-2 rounded-full hover:bg-[#EEEFFB]">
              <ShoppingCart className="w-5 h-5 text-[#2F1AC4]" />
            </button>
          </div>
         
        </div>
        <div className="mt-4 flex justify-between items-center">
          <h3 className="text-lg font-normal text-[#151875]">Comfort Handy Craft</h3>
          <div className="flex items-center">
            <span className="text-lg font-bold text-[#151875]">$45.00</span>
            <span className="ml-2 text-[#FB2448] line-through">$65.00</span>
          </div>
        </div>
      </div>

      <div className="bg-[#F7F7F7] rounded-lg shadow p-4 group relative">
        <div className="relative">
        <div className="flex justify-center items-center h-full">
  <Image
    src="https://s3-alpha-sig.figma.com/img/e8d0/7d05/5f94bd8eef92ee5845fcca1420c3e6fa?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qApKWtYTo8tuuzgaZH~leeyvu-Ab2it6P-22fhZtPkbZuqnICw-iHyfY9C9yL7oCA1d2XmnXwi8cj72QHmoHQ5kqYJxn-H2Mv0mLOBQa8OMYwMF5ViHqnWQRuiCGsjJbMkUlMOZNNpYag23BjchVemWnABeUHPFKNlhiBgvn69FdEgdbAnxAJCQueBfwDBtGvj~6AJU4A-PqiWn5huvXHxLk-M1rp6VhPT8LvQuyNuSXK6IAOAgUpnsAkZIqvCKjvwlxWdEQmy-ZhKpSjbN6-RXFoWJAZX67IHtWSRjHPLoEWy9meUDwEi1LR-ElHhdA~djQ-1wNFg6jWmTEfhZ-Og__"
    alt="Brown chair"
    width={223}
    height={229}
    className="object-cover"
  />
</div>
          <div className="absolute left-2 bottom-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col gap-2">
          <button className="p-2 rounded-full hover:bg-[#EEEFFB]">
              <Heart className="w-5 h-5 text-[#2F1AC4]" />
            </button>
            <button className="p-2 rounded-full hover:bg-[#EEEFFB] ">
              <Share2 className="w-5 h-5 text-[#2F1AC4]" />
            </button>
            <button className="p-2 rounded-full hover:bg-[#EEEFFB]">
              <ShoppingCart className="w-5 h-5 text-[#2F1AC4]" />
            </button>
          </div>
         
        </div>
        <div className="mt-4 flex justify-between items-center">
          <h3 className="text-lg font-normal text-[#151875]">Comfort Handy Craft</h3>
          <div className="flex items-center">
            <span className="text-lg font-bold text-[#151875]">$45.00</span>
            <span className="ml-2 text-[#FB2448] line-through">$65.00</span>
          </div>
        </div>
      </div>

      <div className="bg-[#F7F7F7] rounded-lg shadow p-4 group relative">
        <div className="relative">
        <div className="flex justify-center items-center h-full">
  <Image
    src="
https://s3-alpha-sig.figma.com/img/0081/87bd/b43127cc352f32aef1be3bab70906d81?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZIGKfdtLzEgHMKhw~aqegJR7L5YcGgudDkH2jD6Uj87CeYNgVaT8sQnwULBZ3v4wHkVOtlIoV2N3-toZyYJRReFGaesEIKfnoQJKO7FKa7w2Ucj3AwQsY2Krg6rgeIGRrImSmK4dXdRLUZ1yjnhPCAPLGztdzuk8WrhP6m1GsE6hvCPpyBqoh6dBK1YPoDDvFydAgjIbiQjvGda1NZO3SCk3FtIUjxSfZY0PB7F2jQ4ifNVpwSLm8mcs1VSveB62xkIDpP1uzZ7pfCCmcsZn9qI2GxooLriK27X4C30AS~E~JfSp8vToma8xQdWL~MWP14NfPjq5xnX0YcdaEL0V-w__"
    alt="Brown chair"
    width={345}
    height={306}
    className="object-cover"
  />
</div>
          <div className="absolute left-2 bottom-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col gap-2">
          <button className="p-2 rounded-full hover:bg-[#EEEFFB]">
              <Heart className="w-5 h-5 text-[#2F1AC4]" />
            </button>
            <button className="p-2 rounded-full hover:bg-[#EEEFFB] ">
              <Share2 className="w-5 h-5 text-[#2F1AC4]" />
            </button>
            <button className="p-2 rounded-full hover:bg-[#EEEFFB]">
              <ShoppingCart className="w-5 h-5 text-[#2F1AC4]" />
            </button>
          </div>
         
        </div>
        <div className="mt-4 flex justify-between items-center">
          <h3 className="text-lg font-normal text-[#151875]">Comfort Handy Craft</h3>
          <div className="flex items-center">
            <span className="text-lg font-bold text-[#151875]">$45.00</span>
            <span className="ml-2 text-[#FB2448] line-through">$65.00</span>
          </div>
        </div>
      </div>

      <div className="bg-[#F7F7F7] rounded-lg shadow p-4 group relative">
        <div className="relative">
        <div className="flex justify-center items-center h-full">
  <Image
    src="https://s3-alpha-sig.figma.com/img/fe50/2c91/678776be52471704ed6aa26cd1d28dd8?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QiOcOmW4pI3zdbRIy~FsfCDeiAEPJ~ABdrN-HK-u-3vVZjkNsB61LDvNkR9SUVAtxQ3xPtK63SKl7NoGBW1hta7iHodghSuzkElrrW~gRC-KzqJYFR6kLC0IULdcRtv226jyLdN0Vi75KH1FNi2HHlngDTWVa3ieNZD-qeZBPZ~Kz1wsvbAdtftPfeFZMl7Y19hnuUbENdLCUrh3aeb9fshdvYf9hFceCyYfOor7pxJ25PUEz-xpy2dJM5HQTsd~JMnVf2caw2il9NqCyMIYzEz91OFSICSxK3P9L69F5nmVkStedViXXuvQVzV3ukUCCeg0AApGyh4ftLoDDchkrg__"
    alt="Brown chair"
    width={345}
    height={306}
    className="object-cover"
  />
</div>
          <div className="absolute left-2 bottom-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col gap-2">
          <button className="p-2 rounded-full hover:bg-[#EEEFFB]">
              <Heart className="w-5 h-5 text-[#2F1AC4]" />
            </button>
            <button className="p-2 rounded-full hover:bg-[#EEEFFB] ">
              <Share2 className="w-5 h-5 text-[#2F1AC4]" />
            </button>
            <button className="p-2 rounded-full hover:bg-[#EEEFFB]">
              <ShoppingCart className="w-5 h-5 text-[#2F1AC4]" />
            </button>
          </div>
         
        </div>
        <div className="mt-4 flex justify-between items-center">
          <h3 className="text-lg font-normal text-[#151875]">Comfort Handy Craft</h3>
          <div className="flex items-center">
            <span className="text-lg font-bold text-[#151875]">$45.00</span>
            <span className="ml-2 text-[#FB2448] line-through">$65.00</span>
          </div>
        </div>
      </div>
    </div>
   </div>

  )
}

export default LatestProducts