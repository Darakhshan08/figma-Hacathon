"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function NotFound404() {

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <>
       <header className="bg-[#F6F5FF] py-4 sm:py-6 lg:py-8 w-full">
                <div className="max-w-7xl mx-auto px-4 py-12">
                    <h1 className="text-2xl sm:text-2xl lg:text-3xl font-bold mb-2 text-[#101750]">
                    404 Not Found
                    </h1>
                    <nav className="text-base sm:text-sm font-medium">
                        <span className="text-base font-medium ">Home</span> • <span className="text-base font-medium ">Pages</span> •{" "}
                        <span className="text-[#FB2E86] text-base font-medium ">404 Not Found</span>
                    </nav>
                </div>
            </header>

    
    
    
    <main className="w-full flex flex-col items-center justify-center p-4 md:p-8">
      <div
        className={`max-w-2xl w-full text-center transition-all duration-1000 `}
      >
        {/* Construction SVG */}
        <div className="flex justify-center items-center h-[55vh] ">
      <Image
        src="/Images/Group 197.png"
        alt="Crane SVG"
        width={800}
        height={400}
        className=""
      />
    </div>

        <h1 className="text-3xl md:text-2xl font-bold text-[#152970] mb-6 ">
          oops! The page you requested was not found!
        </h1>

        <a
          href="/"
          className="inline-flex items-center px-6 py-3 bg-[#FB2E86] hover:bg-pink-600 text-white font-medium  transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
        >
          
          Back To Home
        </a>

        {/* Decorative Elements */}
      
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </main>
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 ">
      <div className="overflow-x-auto">
      <div className="flex justify-center items-center bg-white py-4">
                    <div className="flex justify-between items-center w-full max-w-6xl px-4">
                    <Image
      src="https://s3-alpha-sig.figma.com/img/8b8f/73ef/0917d8479a5c41ee633cb4a6233f64b7?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QtaRKpQa58WhEx4WrkNOgoy~DA7m~EQ8fu8mUxFJJfoEaDtCLkbgc85Ygc2VZoQs70W8Ug8Ug8Jw6a96P6VprhRBwfKdV-1AQXcHED382XyT06z7PZifBj1KO6xZ1C2ycZX73UBgXQabRkkKcr0UxuOg2wYx-BeQThti-Hk~gTepLRdGmeosHD4Q9c9nTCVua1PoE4h2BC0rmplIMUVB7f~48i4h5XU2MBkNg7Ur~6KsuqrUikMGwDv2aEOwU2MnLeEdLugQq0oZQBTdjszsEr7aCuS~GyJhrqqMIp7u21~YXEcpls9GBKu0wBI6IXy3eFDZ1VsenJsV6xY0o05UBQ__"
      alt="Fashion LIVE logo"
      layout="responsive"
      width={100}
      height={50}
    />
      
                    </div>
                </div>

</div>
      
    </section>
    </>
  );
}
