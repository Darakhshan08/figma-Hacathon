import { Check } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function TrendingProducts() {
  const products = [
    {
      name: "Executive Seat chair",
      price: "$32.00",
      image:
        "https://s3-alpha-sig.figma.com/img/f465/6277/0a8fe5a5431dd1e8da59ce63ebdf445d?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QVcnM5DRxd4xWZUb7ruHctg90HyVyRfDsGgLAZCuGVMoL8X0S6dEf6JYNpdczj8EkVxI9EXDo4PjvdLEXykkb32hnajaBAFkOnFRLZoBmMw5uUwbM7BfgiBNGNrmNhhtuxPWGks1ZROQ3I7uauYOS7jF0qWJgmXoqPlkiMPN7XGwacXWzWoTWaWd26RvrC3Q9j6twFr7y4ce6vRm3b3qNN1-nrk9v2k8J8rwLDECtTszY92mVZ~GR6s8uY5a94MoGQ20dPtW2qDNBWhelsXLkavLcONGTb5Mbbb1FbcBOpXnOi5FfGkr-BPRb~Zj17VJI6hFhDlGfl5umEF6h8wEnQ__",
    },
    {
      name: "Executive Seat chair",
      price: "$32.00",
      image:
        "https://s3-alpha-sig.figma.com/img/8f9e/3360/812ad9085efca29edde766f48d07bc8c?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YBPj0lVqKPFp7buZ6rA0jFclPPUvK~bBq061MeHufrdNbm7bu5XFJ0EkuDSjNAb2Mvf6wb0CoNgdhiQa76GezRTpGDe1J6bv0niFFTtgfLUO1mSzQFbGQhrI76yNlL4GZfVj9msvZYCw74IDOlj7GtWILpmxRBexQ2sMiRnpHCYevchJSa9~D0ON5JO4Vf~w7k4D8X8gzuz-XjDKRiBUVKHKgj80GNgqKI4-YTvw6iuVwQPc~LUOyUzsA-h4ipyqFTHXxw7o7495kAwQSRQ3o~zyqyRIHK16Rt5HJaDLc20cLWCJN7FlvXCEWsrN2Lk95u~-wztBnWDw9W2WjLrnzw__",
    },
    {
      name: "Executive Seat chair",
      price: "$32.00",
      image:
        "https://s3-alpha-sig.figma.com/img/d6c0/2151/5b60fe030b1c494d6461176139d9d671?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DHcFo5eMyTtJLVjjEgreYEnlrSiAPa1-vaI6lpY9ABZSn7z2sy~hTJxQl0loHEPgC9oxchj~HwW5RFRzJ8mGxRgrYKNl5UNxJVOL6zVaKGtR061ofdglnm6DBcZJxEIasK32MZUe5kttxNvlqeHoO9253GF9CzJ-7mB0IQ64KRMiV59JeQw7eBMTE7ceqVKz9jgASLo4gTRIeVUwfCSYZRO6AyGwM4Tn-CtVcWyhMRBnUEeJKlyy14oYVrGp0avfAsC4y-yZFZuSHBQNlnDCsA50e48ZFB1bTHuv~k~1TvsIHtmK8upz0VVoAaeBRD8nf~J-kT9hS8YjEjqjnyMsfQ__",
    },
  ];

  return (
    <>
      <section className="bg-[#F1F0FF] rounded-2xl h-auto lg:h-[579px]">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
            {/* Left Side - Chair Image */}
            <div className="w-full lg:w-1/2 flex justify-center items-center relative">
              <div className="w-[300px] h-[300px] lg:w-[440px] lg:h-[440px] rounded-full bg-pink-200 absolute top-0 bottom-0 left-0 right-0 m-auto" />
              <Image
                src="/Images/Sofa.png"
                alt="Blue Italian Sofa"
                width={400}
                height={0}
                className="relative z-10 max-w-xs sm:max-w-sm lg:max-w-lg mx-auto"
              />
            </div>

            {/* Right Side - Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#151875] mb-8">
                Unique Features Of Latest &
                <br />
                Trending Products
              </h2>

              <ul className="space-y-6 mb-8 font-medium text-[#ACABC3] text-sm sm:text-base">
                {[
                  "All frames constructed with hardwood solids and laminates",
                  "Reinforced with double wood dowels glue screw nails and machine nails",
                  "Arms, backs and seats are structurally reinforced",
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span
                      className={`w-3 h-3 rounded-full mt-1 ${i === 0
                          ? "bg-[#F52B70]"
                          : i === 1
                            ? "bg-[#2B2BF5]"
                            : "bg-[#2BF5CC]"
                        }`}
                    />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
                <button className="px-6 py-2 sm:px-8 sm:py-3 bg-[#FF4B9F] text-white rounded-md hover:bg-pink-600 transition-colors">
                  Add To Cart
                </button>
                <div className="text-center sm:text-left">
                  <div className="font-semibold text-sm text-[#151875]">
                    B&B Italian Sofa
                  </div>
                  <div className="font-normal text-sm text-[#151875]">$88</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      <div className="container mx-auto px-4 py-8 max-w-[1200px]">
        <h2 className="text-4xl font-bold text-center mb-4 text-[#151875]">
          Trending Products
        </h2>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {/* Card 1 */}
          <div className="bg-gray-100 p-4 rounded-lg">
            <div className="flex justify-center items-center h-[250px]">
              <Image
                src="https://s3-alpha-sig.figma.com/img/6eac/9ed6/f0567dbeace7c9dbaa02b7b75570f3bc?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KedwMaHmooAQ8BeqnMTS6ron-nDSn1vSWlCXqqsnY9BL1gGKWqfnufkIk5P1rojU2xkr3AXPRsYf6-lYl3Z7~OWPPtJiAZd13bu8PtxvoCdZNm0wU8EelENJq-PwAgQAgwCRLpbDa0sMaj36CHJETNMmEayAGIdeYaUE34w1ZFptWXahOwcwUHP6c-I0ty210ZgxLqKvFGQ6yeZNC~wuK5qT818f77~vZuF43~slLVLMkniTM0AkM2Uv2EDdYn5eha5R96wPuOLwloHoVU1WYAcDVrLBvD-uK4d1lNEhW-p4uZatBB1vTALmVcoOYwzMRgWgYZVG8ke5ZJuE0qhJwQ__"
                alt="Cantilever chair"
                width={223}
                height={229}
                className="object-cover"
              />
            </div>
            <h3 className="text-center font-bold text-[#151875] mt-4">Cantilever chair</h3>
            <div className="flex justify-center items-center mt-2">
              <span className="text-lg font-bold text-[#151875]">$26.00</span>
              <span className="ml-2 text-[#FB2448] line-through">$42.00</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-100 p-4 rounded-lg">
            <div className="flex justify-center items-center h-[250px]">
              <Image
                src="https://s3-alpha-sig.figma.com/img/e70a/c286/dc012e6f46348c947e76cbc241026273?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jqZv5jy3kNhrRk7XqrMcWGz5qu52dutv6dFySNN1BFhEkww1IU-IpqCLpRvLVcQ8cAy67KNrotvyAi54sOlRCY22QjHKbl~B7jcNap9UKXaVBlcsleQ8LoCKgxwBJ~zK1dGItjoIMlAGhUN9T4qnplXEvKR-lEW7jCXvGdiadlGYaij2l3ctAzY74P-VXHisbqcDdLDugUEi2pdiqGuFoagz2tLcLi1j5Z-BCPMn0kDk~nL-K~bV~RJJwNKT8N231O4YPYVZuqrl0y01JVTPejFWKPUc4IzoVcOzNXYOgaGyxY7zgZdu48yV156jM799xvoR2LJBVu~rx6LA5mFhcw__"
                alt="Cantilever chair"
                width={223}
                height={229}
                className="object-cover"
              />
            </div>
            <h3 className="text-center font-bold text-[#151875] mt-4">Cantilever chair</h3>
            <div className="flex justify-center items-center mt-2">
              <span className="text-lg font-bold text-[#151875]">$26.00</span>
              <span className="ml-2 text-[#FB2448] line-through">$42.00</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-100 p-4 rounded-lg">
            <div className="flex justify-center items-center h-[250px]">
              <Image
                src="https://s3-alpha-sig.figma.com/img/402f/024e/43e865f7def49808ba73dcffe65b6b21?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NbgvhEJFg-Tl1miUjdtV~prcO10dkG-VbHCi~2qsnCBgwQLHegKShZ40AQxX6~wkBgq7z0Nr0KkAUHV83xEH57fkttsiRxnoCVsH9rMiIF7NcLoN3p4HWTvcsm-Mqby424-cx9yDjPAzLSJsSlEq1p0FIsH1sDqMjXI9fErM12WFIBj23fugE8K9YVsfO0tFUuktjlhRgcyreyZSyE1NVVrMicZRBbe-PhWXx~3ofuJNJWPN~igeKH2pj123ITXh09IyKlAocJWGzrE1KfSvk8xIdrqwZmBCrpfRLIhoqbvPsLYzM4-jMkwMSVUONGHlSFNrP-YoXtfBQr-JYly9tg__"
                alt="Cantilever chair"
                width={223}
                height={229}
                className="object-cover"
              />
            </div>
            <h3 className="text-center font-bold text-[#151875] mt-4">Cantilever chair</h3>
            <div className="flex justify-center items-center mt-2">
              <span className="text-lg font-bold text-[#151875]">$26.00</span>
              <span className="ml-2 text-[#FB2448] line-through">$42.00</span>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-gray-100 p-4 rounded-lg">
            <div className="flex justify-center items-center h-[250px]">
              <Image
                src="https://s3-alpha-sig.figma.com/img/0081/87bd/b43127cc352f32aef1be3bab70906d81?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JSS25CaixHePGJiHIM5QbMnqZ1DcrtA7KgXYMZDBYE3fiFaht21svkKXRJcVbMna8gzYsr4yn3mYA3zRpN55jjvg6SXp9VyeV7thoV0LoJJfcYiiFHa-PYJ4wZNze~WdTYLXJ04-Isj5kR~4yBFSfrBAstWpnoYYjJh0sWwgvWOcH6s38Q0jITQQ4~gYMIwemjkYfCBvMaW811wXBokoID1BjBsG~eTHYhM~501wGncb3Azp8xwB9HyIde4FJs9mhP~E3jUI7-e7AgD8EQU3VHsLfbGOW7UUXK7mWjvw7EMT7PmrXAPFG04eWgKP4faBchOw8Hsd2gpTgfQ9ytP-nQ__"
                alt="Cantilever chair"
                width={223}
                height={229}
                className="object-cover"
              />
            </div>
            <h3 className="text-center font-bold text-[#151875] mt-4">Cantilever chair</h3>
            <div className="flex justify-center items-center mt-2">
              <span className="text-lg font-bold text-[#151875]">$26.00</span>
              <span className="ml-2 text-[#FB2448] line-through">$42.00</span>
            </div>
          </div>
        </div>

        {/* Promotional Banners */}
        <div className="container mx-auto px-4 py-12 bg-gray-50 w-full min-h-fit ">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Promo Card 1 */}
            <div className="bg-pink-50 rounded-lg p-6 relative overflow-hidden h-[300px]">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-purple-900">
                  23% off in all products
                </h3>
                <button className="text-pink-500 font-semibold hover:text-pink-600 transition-colors underline">
                  Shop Now
                </button>
              </div>
              <Image
                src="/Images/image 12.png"
                alt="Brown chair"
                width={223}
                height={229}

                className="absolute bottom-0 right-0 w-48 h-48 object-contain"
              />
            </div>

            {/* Promo Card 2 */}
            <div className="bg-[#EEEFFB] rounded-lg p-6 relative overflow-hidden h-[300px]">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-purple-900">
                  23% off in all products
                </h3>
                <button className="text-pink-500 font-semibold hover:text-pink-600 transition-colors underline">
                  View Collection
                </button>
              </div>
              <Image
                src="/Images/image 11.png"
                alt="Brown chair"
                width={223}
                height={229}

                className="absolute bottom-0 right-0 w-72 h-48 object-contain"
              />
            </div>

            {/* Product List */}
            <div className="space-y-4">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 object-cover rounded bg-gray-200"
                  />
                  <div>
                    <h4 className="font-semibold text-[#151875]">
                      {product.name}
                    </h4>
                    <p className="text-[#151875]">{product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>


        {/* Sidebar Products */}


        {/* Discount Item Section */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold text-[#1D1F5B] mb-8 text-center">
            Discount Item
          </h2>

          <div className="flex justify-center space-x-4 mb-8">
            <button className="px-6 py-2 rounded text-[#FB2E86] underline text-lg">Wood Chair</button>
            <button className="px-6 py-2 rounded text-lg">Plastic Chair</button>
            <button className="px-6 py-2 rounded text-lg">Sofa Collection</button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-[#151875]">20% Discount Of All Products</h2>
              <h3 className="text-xl text-pink-600">Eams Sofa Compact</h3>
              <p className="text-[#B7BACB]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et eget
                feugiat habitasse non, bibendum condimentum.
              </p>

              <ul className="grid grid-cols-2 gap-4 text-[#B7BACB]">
                {[
                  "Material expose like metals",
                  "Clear lines and geometric figures",
                  "Simple neutral colours",
                  "Material expose like metals",
                ].map((text, i) => (
                  <li key={i} className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-[#7569B2]" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>


              <button className="bg-pink-500 text-white px-8 py-3 rounded">
                Shop Now
              </button>
            </div>

            <div className="relative">
              <div className="w-[300px] h-[300px] lg:w-[340px] lg:h-[340px] rounded-full bg-pink-100 absolute top-0 bottom-0 left-0 right-0 m-auto" />
              <img
                src="https://s3-alpha-sig.figma.com/img/72a8/a1fa/c3f4dfc7179464e113c3b725fc00d212?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Mb2Akdx0Ks~-gEnQ7jCY4f9dGonGb7mKLnSmdimqrx3Fg2sgLvWsr5eC2lbnKpN2dmJcx0QGLmo4SC7lokqNKmfKWCEmbTFYHyAyUMad4ozfMP-SaOYWQ9ob~oAIN4OJKOdr088FwDN5xJhuDR8OJieogRyWJWpZNJc6bw1OGKXY5KWkihXZ2zJeP1MZ9WLPpRyESdJU7gzpyQWiDLpIK-KQ~UcM6u-YywtdAqkS9N7lq11ymFgUi5SYNC1OtkFTc7b-KILlSpY~2e91bTeZirZpK~aYBjI8CKGgiqwNe8ImZSVMTrtwdXYfiA6sav5P8PU06xhYOsLAcfZYeaC90w__"
                alt="Featured chair"
                className="relative z-10 w-full h-full object-contain"
              />
            </div>
          </div>
        </section>
      </div>

    </>
  )
}

export default TrendingProducts