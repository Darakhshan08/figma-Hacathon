"use client";
import React from 'react'
import Image from 'next/image';

function page() {
  return (
    <>
  
    {/* Header */}
    <header className="bg-[#f9f5ff] py-4 sm:py-6 lg:py-8 w-full">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 text-[#101750]">
           About Us
         </h1>
         <nav className="text-base sm:text-sm font-medium">
            <span className="text-base font-medium ">Home</span> • <span className="text-base font-medium ">Pages</span> •{" "}
            <span className="text-[#FB2E86] text-base font-medium ">About Us</span>
          </nav>
       </div>
     </header>

 <div className="container mx-auto px-4 py-12 md:py-24">
   <div className="flex flex-col md:flex-row gap-8 md:gap-12 max-w-6xl mx-auto pl-6 md:pl-12">
   <div className="w-full md:w-1/2">
      <Image
        src="https://s3-alpha-sig.figma.com/img/9437/2134/69a47fa45eda4e206e1a6fb580313c6b?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DQRAB8NsZZM6PmkXqSzXQ6mRg4nqBprojZGGrAxbLbmAkl62le5S1HUhZ5ukiDSPish3JODWelrz~YeRkG7cousaXC0nZ0FgfveI8EVLozc9gisq5bafHiDEbP90zoYj6V-wahi4Xl5rGE6Ri4gsUKbLPvU2dz5tnjfcFKJnvc2pA2r9hsHDIA2BGltN-kMu25uAlWLwJVbqnglII-sIBSbfSobmiA91SCYjhgXZ5Vn4qgb3NdXlmJPnyOTiWhBN81aQ3b9tHhcbRVXHvEJpieXu5I9Mb8xvEGdpJY3-2hkhmnok8gXCvi5QJ-Oyj83YxtHHsOqXoZNHtAgg~Sfx3w__"
        alt="Business professionals in a meeting"
        width={1470} // Original width of the image
        height={400} // Approximate height based on class
        className="w-full h-[300px] md:h-[400px] object-cover rounded-lg"
      />
    </div>

     <div className="w-full md:w-1/2 flex flex-col justify-center">
       <h2 className="text-[#151875] text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
         Know About Our Ecommerce Business, History
       </h2>

       <p className="text-[#8A8FB9] text-base md:text-lg mb-6 md:mb-8">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
         neque ultrices mattis aliquam, malesuada diam est. Malesuada sem
         tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
         vitae lobortis quis bibendum quam.
       </p>

       <button className="bg-[#EC4899] text-white px-6 py-2 rounded-lg text-base md:text-lg w-fit hover:bg-[#EC4899]/90 transition-colors">
         Contact us
       </button>
     </div>
   </div>
 </div>


 <div className="max-w-7xl mx-auto px-4 py-12">
    <h1 className="text-center text-3xl md:text-4xl font-bold mb-12">
      Our Features
    </h1>

    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
      <div className="flex flex-col items-center p-8 bg-white rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="flex justify-center items-center h-24 w-full">
    <Image
      src="/Images/free.png"
      alt="Free Service"
      width={70} 
      height={70} 
      className="object-contain"
    />
  </div>
  <h3 className="text-xl font-semibold text-blue-900 mb-2">
    24/7 Support
  </h3>
  <p className="text-gray-600 text-center">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
  </p>
</div>


      <div className="flex flex-col items-center p-8 bg-white rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
  <div className="flex justify-center items-center h-24 w-full">
    <Image
      src="/Images/cashback.png"
      alt="Free Service"
      width={70} 
      height={70} 
      className="object-contain"
    />
  </div>
  <h3 className="text-xl font-semibold text-blue-900 mb-2">
    24/7 Support
  </h3>
  <p className="text-gray-600 text-center">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
  </p>
</div>


<div className="flex flex-col items-center p-8 bg-white rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
  <div className="flex justify-center items-center h-24 w-full">
    <Image
      src="/Images/premium.png"
      alt="Free Service"
      width={70} 
      height={70} 
      className="object-contain"
    />
  </div>
  <h3 className="text-xl font-semibold text-blue-900 mb-2">
    24/7 Support
  </h3>
  <p className="text-gray-600 text-center">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
  </p>
</div>

<div className="flex flex-col items-center p-8 bg-white rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
  <div className="flex justify-center items-center h-24 w-full">
    <Image
      src="/Images/24hours.png"
      alt="Free Service"
      width={70} 
      height={70} 
      className="object-contain"
    />
  </div>
  <h3 className="text-xl font-semibold text-blue-900 mb-2">
    24/7 Support
  </h3>
  <p className="text-gray-600 text-center">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
  </p>
</div>
    </div>
</div>



 <section className="flex flex-col items-center justify-center py-16 px-4 max-w-6xl mx-auto min-h-screen">
   <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Client Say!</h2>

   <div className="flex justify-center items-center gap-4 mb-8">
   <div className="w-16 h-16 md:w-20 md:h-20 overflow-hidden transition-transform hover:scale-105 transform -rotate-12">
        <Image
          src="https://s3-alpha-sig.figma.com/img/0ea0/dcc8/f0922b9597d6bf10e35abbf68b863f93?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nX4mI6K~OC-aUEcRWZIL6FcejUg6Ms2T3IGj45dtgTPG7pgfNe9EYmCtVhNkQ2eM7Gu5m3fFFYXIqdjBYBPbFNXaegGsgOFNwlQkf~Igknkfohwjwi7KrPJZQSDGpcSTzJ5nvC8nNa~HRHttv7MYjFaS9GeyQHYfTLFjgP0HGmbkmwyTe-pH0y0XbTMyC-bciQGNje2O0omAH00Ekh6Rq8XByiSEMl41vQDRWmh4F8ZD6fOqtRwBSCK94p2BMhb3v~DZ3KFTAWzXPo27KOLItMqA2OrAq3ECJoGvLyqbL4a2-ZnfbiHF3K~54s6AHSU2~cHvKNla2EOW1N56qWCQXQ__"
          alt="Client testimonial"
          width={80}
          height={80}
          className="object-cover"
        />
      </div>
      <div className="w-16 h-16 md:w-20 md:h-20 overflow-hidden transition-transform hover:scale-105">
        <Image
          src="https://s3-alpha-sig.figma.com/img/9913/1567/b63ac48b2ddcea0c0d906d2b8b3b984b?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ALVPQnsRp-h7kQU8vqX57NXrAfoJ-hTQ-avMEJ8iDSHAlUAzQ9~4EZS1kF1ym3mC0yfkw4LMQnmYiKpXa6w4b8DI6NDZIEgBI3ZlhdCKbDXh4moHepcvKGom5Z6qkDPa9XpUSRtbBSX2wmOnzATWue5bvwPzXHh9D2pT8VBIY--F3gZYer9NhMacP4q26v8nll8438fDfMnszgcWY2Yuy-iaCLJdOErXbGzYho1Bm4jjgtlNhZXer6BiF8TA0ttlfNHKNJ5WHrH~xhUomIshfVC4FpY5To8DWQQv32FJ0JwtwqeR-QIFI4Y9QcRZZptn8grsbRPM5av2uVNgOdqHVg__"
          alt="Client testimonial"
          width={80}
          height={80}
          className="object-cover"
        />
      </div>
      <div className="w-16 h-16 md:w-20 md:h-20 overflow-hidden transition-transform hover:scale-105 transform rotate-12">
        <Image
          src="https://s3-alpha-sig.figma.com/img/f66d/9da2/ae2ee4fbe305351c838c2ed3294bbeb3?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XVT5erKLpBwoaIEfpdP6dZJKwp1Y6ch1YFFxrFmPFAGESh8xv4hj8rQJQqrLutvOqzcmQLDWg94hAXBd8AlihG~vtm1dBjn2dVaUYBeeyCARdZG63uRmR0tU7xV7Rwll88E9~e4Vy6kSSl0m6CepHPtmcHK4zwHUlwtjtB1sSpZiFtfwdT9cNNlix78vWv1mZ~W02Uf0E8KKq3-nZv6bb55IuqH01Zu6qqhkGA8R3iRSB8cdLyM9acHwP6No8EKUBGCt4LLUwUnb~bsqyKfvypO0Jw~6WHHO0LigcjY~pM7JYWuKNii5Z8SO-mTvlnK7vc-nU3C6pMcyVRGhqQvCAg__"
          alt="Client testimonial"
          width={80}
          height={80}
          className="object-cover"
        />
      </div>
   </div>

   <h3 className="text-xl md:text-2xl font-medium mb-2">Selina Gomez</h3>
   <p className="text-sm md:text-base text-gray-600 mb-8">
     Co-fo Webkey Digital
   </p>

   <p className="text-[#8A8FB9] text-center max-w-2xl leading-relaxed">
     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis
     ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim
     nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus
     volutpat praesent.
   </p>

   <div className="flex justify-center gap-3 mt-8">
     <div className="w-8 h-2 bg-blue-500 rounded-full"></div>
     <div className="w-8 h-2 bg-purple-500 rounded-full"></div>
     <div className="w-8 h-2 bg-pink-500 rounded-full"></div>
   </div>
 </section>
</>

  )
}

export default page