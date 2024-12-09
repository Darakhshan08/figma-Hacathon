import React from 'react'
import { CalendarDays, PenTool } from "lucide-react";
import Image from 'next/image';

function Blog() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-gray-50">
    <h2 className="text-center text-3xl font-bold text-blue-900 mb-12">
      Latest Blog
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {/* Blog Card 1 */}
  <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
    <Image
      src="https://s3-alpha-sig.figma.com/img/9e7e/909c/6de3d358d2ea968a5624e707d8c55157?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VyTdkPxbW8F-nmHRw~mJ70cbx4gxVgBK3-ORla7-mMYjxl7xunsg~3uKNA6UJdgh3n5bRi12le-tvpB~4I8hoS3rZUym4HnvdFXl1i5hbxAaBpNK~KNhN3iJkbJotMnl3Hy0HHaYl0cBu9q3mMv95EUc1L7sl1YJAEEmyMJYrQwoIJFwo7nUHO9kDqAsV7OuUU3ddNs~-Y1kc2X2B1MHrZZVASdrlrOfMVgNW9WpBLIu4SgEoPoKnWonuD0OHmJl75oBRLxysH0hSV1gTYExbkAqo64Ojn1i96bSTu0ExAB~SzUtRjzdneW3yYqhFtI92QGXckkH5BkOD7fWD9x7lg__"
      alt="Modern living room with minimalist furniture"
      width={800} // Set width of the image
      height={320} // Set height of the image
      className="w-full object-cover"
    />
    <div className="p-6">
    <div className="flex items-center text-sm text-gray-600 mb-4">
    <span className="flex items-center">
    <PenTool className="w-4 h-4 mr-2 text-[#FB2E86]" />
    SaberAli
  </span>
  <span className="mx-5"></span>
  <span className="flex items-center">
    <CalendarDays className="w-4 h-4 mr-2 text-[#FFA454]" />
    21 August 2020
  </span>
</div>

      <h3 className="text-xl font-semibold text-blue-900 mb-3 hover:text-[#FB2E86] transition-colors duration-300 cursor-pointer">
        Top essential Trends in 2021
      </h3>
      <p className="text-gray-600 mb-4">
        More off this less hello samlande lied much over tightly circa horse taped mightily
      </p>
      <a className="text-blue-600 hover:text-[#FB2E86] font-medium transition-colors duration-300">
        Read More
      </a>
    </div>
  </div>

  {/* Blog Card 2 */}
  <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
    <Image
      src="https://s3-alpha-sig.figma.com/img/e3c4/499d/9a11a4d1f9f95293b7180830d656c096?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VX8ZXQLiNKRuHeqWizJ6GwAo8G01TL0RS2PF1XtLosPNAXWGGwTGsmtrrAz01cL~oq0dQ8-ZlAQZnmy8e91-Gz~HRIpU4mDEZKNks3eBy77TsTBCLKFih1J~a1d0VCRoNUc-uLM0hEyRS67qRUkxFVIGNLKjd1FdimqLFmybUaYcUToiiLe7o5tgz6FU8OY3R9D4Lx9CYgmJqUQVyKxYxoGzF81Ghv19ghPg~n5CK-1B8~R8mOm2OkF7rRNMdpg3LirPC3WybxBJT8BDnQpT8KwJBDNLmxw2gH1yO0gBNFQ5MwOtFA73yaH3rosYA2y1KENE96hiVMC~STgOvimbtg__"
      alt="Contemporary bedroom design"
      width={800}
      height={320}
      className="w-full object-cover"
    />
    <div className="p-6">
    <div className="flex items-center text-sm text-gray-600 mb-4">
    <span className="flex items-center">
    <PenTool className="w-4 h-4 mr-2 text-[#FB2E86]" />
    SaberAli
  </span>
  <span className="mx-5"></span>
  <span className="flex items-center">
    <CalendarDays className="w-4 h-4 mr-2 text-[#FFA454]" />
    21 August 2020
  </span>
</div>
      <h3 className="text-xl font-semibold text-blue-900 mb-3 hover:text-[#FB2E86] transition-colors duration-300 cursor-pointer">
        Top essential Trends in 2021
      </h3>
      <p className="text-gray-600 mb-4">
        More off this less hello samlande lied much over tightly circa horse taped mightily
      </p>
      <a className="text-blue-600 hover:text-[#FB2E86] font-medium transition-colors duration-300">
        Read More
      </a>
    </div>
  </div>

  {/* Blog Card 3 */}
  <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
    <Image
      src="https://s3-alpha-sig.figma.com/img/6287/0a73/cbbe0be3bb081d3dd4e072cd840872d6?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Mq06rOJ1Jw3FlJ-D7A0vrgbod3moL8W3bhKfsRTV6pbkrAEp2DP5aW7p-0JbNPI8Lm2a2YaH~C79jFeQdIIGLtHhaGfAepxcLFqFrY18jjodZpelBHQaxRNa9lWZjZKe90VLAZLqDjKLImI-UsCguruqnmPB8q59NjZ6GiBctCFo2i4c9K5hyahGObDMNYSyAfQ6e9RTdIFttwqxrhMRWc1EVDQsS0LuF61CBxenyFHMfp682Wm-9qWbTKEDzwNSp7c5fKve3Y7S~yV7nKRz6JnpDatmFlZpDABfdJL6Yn78KBWA1gpdSrjiuaTyEJf7dpqm-soqwP-9rNKxfWXTFA__"
      alt="Stylish home office setup"
      width={800}
      height={320}
      className="w-full object-cover"
    />
    <div className="p-6">
    <div className="flex items-center text-sm text-gray-600 mb-4">
  <span className="flex items-center">
    <PenTool className="w-4 h-4 mr-2 text-[#FB2E86]" />
    SaberAli
  </span>
  <span className="mx-5"></span>
  <span className="flex items-center">
    <CalendarDays className="w-4 h-4 mr-2 text-[#FFA454]" />
    21 August 2020
  </span>
</div>
      <h3 className="text-xl font-semibold text-blue-900 mb-3 hover:text-[#FB2E86] transition-colors duration-300 cursor-pointer">
        Top essential Trends in 2021
      </h3>
      <p className="text-gray-600 mb-4">
        More off this less hello samlande lied much over tightly circa horse taped mightily
      </p>
      <a className="text-blue-600 hover:text-[#FB2E86] font-medium transition-colors duration-300">
        Read More
      </a>
    </div>
  </div>
</div>
</div>
  )
}

export default Blog