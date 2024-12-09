import Image from 'next/image';
import React, { useState } from 'react'

function TopCategories() {
    const [activeSlide, setActiveSlide] = useState(0);
    const products = [
      {
        id: 1,
        name: "Mini LCW Chair",
        price: 56.0,
        image: "https://s3-alpha-sig.figma.com/img/b385/2c7e/ad352f97e7cdd9b4848c0ae24630f6ae?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MNw-pIQfCkFDFoTWPWU8I6KyAEWjecYOimhZhN8UWGq2GMHdCPt0nxvbuK8SI34RLT4BOAURfQPpFXkqyL~ndZy1MEBf7KyXF9iarR6ztQ7szcpV50mnyM4gjWKSQPzMs~5vGxKJSQ7m6zgpm2qwKLgfEqEbn-si0TUVfLLUlkKqlJfc0DyuYuLDbeFjq4t2iVbKQ0WU5eOZFmuiXPvDiS32Y3vO7AP9rRHXDBIyvM-qyvr0NiqfmC8VP0VHyLsssGTOLDVFpUOV2zjIrRnNwbYylYlKpGCqd1GAxea8WNspaQwLTxdPH6BO2sHlybYtF0uaeOq64opGBW2kzZ3ExA__",
        hotDeal: true,
      },
      {
        id: 2,
        name: "Mini LCW Chair",
        price: 56.0,
        image: "https://s3-alpha-sig.figma.com/img/1ade/62f0/6db0a7630b347e6423288fc09447f1a8?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A1ASbX5PQ2xgkZQUVT7fty3DynXlxANL8qO7IW9wlpV268-RxQDtE0hx8rHqWqchih~We1J7ct41jlqizDklTOyDwJf5rNeexRN0TQ4ofReelqg8AAuSqkLUmt5CRUl0gMtBipAaF6qgJHFfXKsXhYeLJ3xkLNjy3YHciF5OtkD~ion-eT4JSywJ14Llo~WekPvS9oB6Vcrrf66ItGWDKcZ0Q36qjQDhv96sBH~gPG~xVzO8N7RWSWdqDTVd-k6DvfIpRZGhEIM-Xq4SzNW0Zg85v9CcuqGx~kqQtYx9qngixxXg3moXFnASwQurY8uP7m3xjVf7nYkMx-KrVER0oA__",
      },
      {
        id: 3,
        name: "Mini LCW Chair",
        price: 56.0,
        image: "https://s3-alpha-sig.figma.com/img/6eac/9ed6/f0567dbeace7c9dbaa02b7b75570f3bc?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ShVtA8s5iMjpp1sml5nxcqBFOpIzBbKAJ8jaIOpRs9DlTNoPt0BXSMHJGOYcD9GJuxcQMfK65AZQbt3iRLKEPWZno5T2nOtoVdknkpq~6so-NYD9K9d4DSAlhMqsRX7~FD0cY0LVnIV4AZGVNYjMy96ZhPu6J7LdCcO0ABt5U6K1s-qJr4vKes7Lk0BzEmxnvEL6QXYVyDhXfxSv2E0-zsv3W53ISLmOZKrDjZW1bwXhvly9FlDBEUJVL7rQdy-ZFi7GQraClo5gDVt2B7FyNQZ0~GOcgat7STo-jfgbFRPrAofscNPDGjPxf2PfBxigr1cYwXY64zoCB27KbmjvyQ__",
      },
      {
        id: 4,
        name: "Mini LCW Chair",
        price: 56.0,
        image: "https://s3-alpha-sig.figma.com/img/b385/2c7e/ad352f97e7cdd9b4848c0ae24630f6ae?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MNw-pIQfCkFDFoTWPWU8I6KyAEWjecYOimhZhN8UWGq2GMHdCPt0nxvbuK8SI34RLT4BOAURfQPpFXkqyL~ndZy1MEBf7KyXF9iarR6ztQ7szcpV50mnyM4gjWKSQPzMs~5vGxKJSQ7m6zgpm2qwKLgfEqEbn-si0TUVfLLUlkKqlJfc0DyuYuLDbeFjq4t2iVbKQ0WU5eOZFmuiXPvDiS32Y3vO7AP9rRHXDBIyvM-qyvr0NiqfmC8VP0VHyLsssGTOLDVFpUOV2zjIrRnNwbYylYlKpGCqd1GAxea8WNspaQwLTxdPH6BO2sHlybYtF0uaeOq64opGBW2kzZ3ExA__",
      },
    ];
    const nextSlide = () => {
      setActiveSlide((prev) => (prev + 1) % products.length);
    };
    const prevSlide = () => {
      setActiveSlide((prev) => (prev - 1 + products.length) % products.length);
    };
  return (
    <main className="w-full">
    {/* Top Categories Section */}
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
  <h2 className="text-4xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-[#1E1E70]">
    Top Categories
  </h2>

  <div className="relative">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8">
      {products.map((product, index) => (
        <div key={product.id} className="flex flex-col items-center group">
          <div className="relative rounded-full bg-[#F6F7FB] shadow-lg p-4 sm:p-6 lg:p-8 mb-4 w-full aspect-square group-hover:shadow-[0px_15px_25px_-10px_rgba(142,_68,_173,_0.5)]"> {/* Apply shadow here */}
          <Image
            src={product.image}
            alt={product.name}
            width={500} // Set a fixed width, adjust as needed
            height={500} // Set a fixed height, adjust as needed
            className="w-full h-full object-cover"
          />
            
            {/* View Details Button */}
            <div className="absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
              <button className="mb-10 px-6 py-2 bg-[#08D15F] text-white font-bold rounded shadow-lg transform translate-y-full group-hover:translate-y-0 transition duration-300 ease-in-out">
                View Shop
              </button>
            </div>
          </div>
          
          <h3 className="font-bold text-[#1E1E70] mb-1 text-center">
            {product.name}
          </h3>
          <p className="text-[#1E1E70] font-semibold">
            ${product.price.toFixed(2)}
          </p>
        </div>
      ))}
    </div>

    {/* Carousel or Pagination Dots */}
    <div className="flex justify-center gap-2">
      {products.map((_, index) => (
        <button
          key={index}
          className={`w-2 h-2 rounded-full ${index === activeSlide ? "bg-[#FF4E9F]" : "bg-gray-300"}`}
          onClick={() => setActiveSlide(index)}
        />
      ))}
    </div>
  </div>
</section>

    {/* Newsletter Section */}
    <section
      className="relative h-[300px] sm:h-[350px] lg:h-[400px] bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://s3-alpha-sig.figma.com/img/fc5b/0171/c1d0c8969022c818d8d4ef9026d858fa?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d42H0Jj567jR-V6B5PhRpNI7Cjsz0x81-JWcvcXv0MZ12bdYHQlDZNly6G13DqIO~6UuhlyPBN0ORWG879~aKbYhk2~wAFmQ4qjrCuN8H~uZnmbatZgXySipFfy0gXv~UaF9EsBk0BSMOqRLoj3ytWtvpghdE3MRMU7RRIxVddx7qdGsjuYepWOIT5btyw22jI~HhS-RZEaKj~95Rv9F1EIUkbe20cySUwFMb7QibrnR45tYQ3aMq0vX6VohRGNLDWRojcY9Hn-6GevIZ1nGry5vh2kFYXPvyOYomI6DiZzJfzjscCO2VoUFjTs4xq15UzbT-0GQYiXOGrbFb~IzZA__')",
      }}
    >
      <div className="absolute inset-0 " />
      <div className="relative h-full flex flex-col items-center justify-center text-white px-4 sm:px-6 lg:px-8">
     
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-center text-[#1E1E70]">
          Get Latest Update By Subscribe
          <br/>
          Our Newslater
        </h2>
        <button className="bg-[#FF4E9F] text-white px-6 sm:px-8 py-2 sm:py-3 rounded hover:bg-opacity-90 transition">
          Shop Now
        </button>
      </div>
    </section>

    {/* Logo Showcase */}
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
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
  </main>
  )
}

export default TopCategories