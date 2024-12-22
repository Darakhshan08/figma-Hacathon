"use client";
import { Minus, Plus, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function Page() {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "Ut diam consequat",
            image: "/Images/Rectangle 34.png",
            color: "Brown",
            size: "XL",
            price: 32.0,
            quantity: 1,
        },
        {
            id: 2,
            name: "Vel faucibus posuere",
            image: "/Images/Rectangle 35.png",
            color: "Brown",
            size: "XL",
            price: 32.0,
            quantity: 1,
        },
        {
            id: 3,
            name: "Ac vitae vestibulum",
            image: "/Images/Rectangle 36.png",
            color: "Brown",
            size: "XL",
            price: 32.0,
            quantity: 1,
        },
        {
            id: 4,
            name: "Elit massa diam",
            image: "/Images/Rectangle 37.png",
            color: "Brown",
            size: "XL",
            price: 32.0,
            quantity: 1,
        },
        {
            id: 5,
            name: "Proin pharetra elementum",
            image: "/Images/Rectangle 38.png",
            color: "Brown",
            size: "XL",
            price: 32.0,
            quantity: 1,
        },
    ]);

    const increaseQuantity = (productId: number) => {
        setCartItems(
            cartItems.map((item) =>
                item.id === productId
                    ? { ...item, quantity: item.quantity + 1 }
                    : item,
            ),
        );
    };

    const decreaseQuantity = (productId: number) => {
        setCartItems(
            cartItems.map((item) =>
                item.id === productId && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item,
            ),
        );
    };

    const removeItem = (productId: number) => {
        setCartItems(cartItems.filter((item) => item.id !== productId));
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const calculateSubtotal = () => {
        return cartItems.reduce(
            (total, item) => total + item.price * item.quantity,
            0,
        );
    };

    const calculateTotal = () => {
        const subtotal = calculateSubtotal();
        const shipping = 106.0; // Example shipping cost
        return subtotal + shipping;
    };

    const subtotal = calculateSubtotal();
    const total = calculateTotal();

    return (
        <>
            {/* Header */}
            <header className="bg-[#F6F5FF] py-4 sm:py-6 lg:py-8 w-full">
                <div className="max-w-7xl mx-auto px-4 py-12">
                    <h1 className="text-2xl sm:text-2xl lg:text-3xl font-bold mb-2 text-[#101750]">
                        Shopping Cart
                    </h1>
                    <nav className="text-base sm:text-sm font-medium">
                        <span className="text-base font-medium">Home</span> • <span className="text-base font-medium">Pages</span> •{" "}
                        <span className="text-[#FB2E86] text-base font-medium">Shopping Cart</span>
                    </nav>
                </div>
            </header>

            {/* Main content */}
            <div className="max-w-7xl mx-auto px-4 py-24">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Cart Items */}
                    <div className="overflow-x-auto lg:overflow-hidden">
                        <table className="w-full lg:w-[80%] min-w-[800px]">
                            <thead>
                                <tr className="border-b">
                                    <th className="text-left text-xl pb-4 pl-12">Product</th>
                                    <th className="text-center text-xl pb-4">Price</th>
                                    <th className="text-center text-xl pb-4">Quantity</th>
                                    <th className="text-center text-xl pb-4">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.map((product) => (
                                    <tr key={product.id} className="border-b">
                                        <td className="py-4">
                                            <div className="flex items-center gap-4">
                                                <button
                                                    className="text-gray-400 hover:text-gray-600"
                                                    onClick={() => removeItem(product.id)}
                                                >
                                                    <X size={16} />
                                                </button>
                                                <Image
                                                    src={product.image}
                                                    alt={product.name}
                                                    width={83}
                                                    height={87}
                                                    className="rounded-lg object-cover"
                                                />
                                                <div>
                                                    <h3 className="font-bold text-sm">{product.name}</h3>
                                                    <p className="text-[#A1A8C1]">Color: {product.color}</p>
                                                    <p className="text-[#A1A8C1]">Size: {product.size}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-4 text-center text-[#15245E]">
                                            £{product.price.toFixed(2)}
                                        </td>
                                        <td className="py-4 text-center">
                                            <div className="flex items-center justify-center gap-2">
                                                <button
                                                    className="p-1 border rounded text-[#BEBFC2]"
                                                    onClick={() => decreaseQuantity(product.id)}
                                                >
                                                    <Minus size={16} />
                                                </button>
                                                <span className="w-8 text-center text-[#BEBFC2]">
                                                    {product.quantity}
                                                </span>
                                                <button
                                                    className="p-1 border rounded text-[#BEBFC2]"
                                                    onClick={() => increaseQuantity(product.id)}
                                                >
                                                    <Plus size={16} />
                                                </button>
                                            </div>
                                        </td>
                                        <td className="py-4 text-center text-[#15245E]">
                                            £{(product.price * product.quantity).toFixed(2)}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {/* Cart Actions */}
                        <div className="flex justify-between mt-8">
                            <button className="px-6 py-2 bg-[#FB2E86] text-white rounded hover:bg-pink-600">
                                Update Cart
                            </button>
                            <button
                                className="px-6 py-2 bg-[#FB2E86] text-white rounded hover:bg-pink-600"
                                onClick={clearCart}
                            >
                                Clear Cart
                            </button>
                        </div>
                    </div>

                    {/* Cart Summary */}
                    <div className="w-full lg:w-1/3 space-y-6">
                        <div className="bg-[#E8E6F1] border-b border-[#C7CEE4] rounded-lg shadow-sm p-6">
                            <h2 className="text-xl text-center font-semibold text-[#1D3178] mb-2">
                                Cart Totals
                            </h2>
                            <div className="flex justify-between mb-4 pb-4 border-b border-[#C7CEE4]">
                                <span className="text-[#1D3178] text-lg font-semibold">Subtotals:</span>
                                <span className="font-medium text-base text-[#15245E]">£{subtotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between mb-6 pb-4 border-b border-[#C7CEE4]">
                                <span className="text-[#1D3178] text-lg font-semibold">Totals:</span>
                                <span className="font-medium text-base text-[#15245E]">£{total.toFixed(2)}</span>
                            </div>
                            <div className="flex items-center gap-2 mb-6">
                                <input
                                    type="checkbox"
                                    className="h-4 w-4 text-white border-gray-300 rounded focus:ring-[#19D16F] checked:bg-[#19D16F] checked:border-[#19D16F]"
                                />
                                <p className="text-sm text-[#8A91AB]">
                                    Shipping & taxes calculated at checkout
                                </p>
                            </div>
                            <button className="w-full py-2.5 bg-[#19D16F] text-white rounded-lg font-medium hover:bg-green-600 transition-colors">
                                <Link href="/checkout">Proceed To Checkout</Link>
                            </button>
                        </div>

                        <h2 className="text-xl font-semibold text-center text-[#1D3178] mb-4">
                            Calculate Shopping
                        </h2>
                        <div className="bg-[#F4F4FC] border border-gray-200 rounded-lg shadow-sm p-6">

                            <input
                                type="text"
                                placeholder="Bangladesh"
                                className="w-full px-0 py-1.5 bg-[#F4F4FC]   border-b border-[#C7CEE4] mb-3 outline-none placeholder-[#C5CBE3] hover:border-gray-400 transition-colors"
                            />

                            <input
                                type="text"
                                placeholder="Mirpur Dhaka - 1200"
                                className="w-full px-0 py-1.5 bg-[#F4F4FC]  border-b border-[#C7CEE4] mb-3 outline-none placeholder-[#C5CBE3] hover:border-gray-400 transition-colors"
                            />

                            <input
                                type="text"
                                placeholder="Postal Code"
                                className="w-full px-0 py-1.5  bg-[#F4F4FC] border-b border-[#C7CEE4] mb-5 outline-none placeholder-[#C5CBE3] hover:border-gray-400 transition-colors"
                            />

                            <button className="w-full py-2.5 bg-[#FB2E86] text-white rounded-lg font-medium hover:bg-pink-600 transition-colors">
                                Calculate Shipping
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Page;
