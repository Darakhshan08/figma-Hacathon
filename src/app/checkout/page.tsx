"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

// Define types for form data and errors
interface FormData {
  email: string;
  firstName?: string;
  lastName: string;
  address: string;
  apartment?: string;
  city: string;
  country: string;
  postalCode: string;
  newsletter: boolean;
}

interface FormErrors {
  email?: string;
  lastName?: string;
  address?: string;
  city?: string;
  postalCode?: string;
}

export default function CheckoutPage() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    city: "",
    country: "United States",
    postalCode: "",
    newsletter: false,
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = (): boolean => {
    const errors: FormErrors = {};
    if (!formData.email) errors.email = "Email is required";
    if (!formData.lastName) errors.lastName = "Last name is required";
    if (!formData.address) errors.address = "Address is required";
    if (!formData.city) errors.city = "City is required";
    if (!formData.postalCode) errors.postalCode = "Postal code is required";
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
    }
  };

  return (

    <main className="min-h-screen bg-[#FFFFFF]">
      <header className="bg-[#F6F5FF] py-4 sm:py-6 lg:py-8 w-full">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h1 className="text-2xl sm:text-2xl lg:text-3xl font-bold mb-2 text-[#101750]">
            Hekto Demo
          </h1>

        </div>
      </header>
      <header className="bg-white">
        <div className="max-w-7xl mx-auto py-10 px-4 md:px-6">
          <h1 className="text-2xl font-bold text-[#1D3178]">Hekto Demo</h1>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <nav className="flex space-x-2 text-sm">
          <span className="text-[#1D3178]">Cart</span>
          <span className="text-[#1D3178]">/</span>
          <span className="text-[#1D3178]">Information</span>
          <span className="text-[#1D3178]">/</span>
          <span className="text-[#1D3178]">Shipping</span>
          <span className="text-[#1D3178]">/</span>
          <span className="text-[#1D3178]">Payment</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 bg-[#F8F8FD] p-6 shadow-sm">
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                {/* Contact Information */}
                <div className="py-8">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg text-[#1D3178] font-medium">Contact Information</h2>
                    <p className="text-sm text-[#C1C8E1]">
                      Already have an account?{" "}
                      <a className="text-[#C1C8E1] hover:text-blue-700">Login</a>
                    </p>
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email or Mobile Phone number"
                      className={`w-full px-0 py-2 bg-[#F8F8FD]  border-b-2 border-[#BFC6E0] focus:outline-none `}
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                    {formErrors.email && (
                      <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
                    )}
                    <div className="flex items-center mt-6">
                      <input
                        type="checkbox"
                        checked={true}
                        readOnly
                        className="h-4 w-4 accent-green-400 text-white border-gray-300 focus:ring-green-500 rounded"
                      />


                      <span className="text-[#8A91AB] text-sm ml-2">Keep me up to date on news and excluive offers</span>
                    </div>


                  </div>

                </div>

                {/* Shipping Address */}
                <div className="py-12">
                  <h2 className="text-lg text-[#1D3178] font-medium mb-4">Shipping Address</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* First Name */}
                    <div className="mt-8">

                      <input
                        type="text"
                        name="firstName"
                        placeholder="First name (optional)"
                        className={`w-full px-0 py-2 bg-[#F8F8FD]  border-b-2 border-[#BFC6E0] focus:outline-none `}
                        value={formData.firstName}
                        onChange={handleInputChange}
                      />
                    </div>
                    {/* Last Name */}
                    <div className="mt-8">

                      <input
                        type="text"
                        name="lastName"
                        placeholder="Last name"
                        className={`w-full px-0 py-2 bg-[#F8F8FD]  border-b-2 border-[#BFC6E0] focus:outline-none `}
                        value={formData.lastName}
                        onChange={handleInputChange}
                      />
                      {formErrors.lastName && (
                        <p className="text-red-500 text-sm mt-1">{formErrors.lastName}</p>
                      )}
                    </div>
                  </div>
                  {/* Address */}
                  <div className="mt-8">

                    <input
                      type="text"
                      name="address"
                      placeholder=" Address"
                      className={`w-full px-0 py-2 bg-[#F8F8FD]  border-b-2 border-[#BFC6E0] focus:outline-none `}
                      value={formData.address}
                      onChange={handleInputChange}
                    />
                    {formErrors.address && (
                      <p className="text-red-500 text-sm mt-1">{formErrors.address}</p>
                    )}
                  </div>
                  {/* City */}
                  <div className="mt-8">

                    <input
                      type="text"
                      name="city"
                      placeholder="Appaetnentment,suit,e.t.c (optinal)"
                      className={`w-full px-0 py-2 bg-[#F8F8FD]  border-b-2 border-[#BFC6E0] focus:outline-none `}
                      value={formData.city}
                      onChange={handleInputChange}
                    />
                    {formErrors.city && (
                      <p className="text-red-500 text-sm mt-1">{formErrors.city}</p>
                    )}
                  </div>
                  {/* Postal Code */}
                  <div className="mt-8">

                    <input
                      type="text"
                      name="postalCode"
                      placeholder="City"
                      className={`w-full px-0 py-2 bg-[#F8F8FD]  border-b-2 border-[#BFC6E0] focus:outline-none `}
                      value={formData.postalCode}
                      onChange={handleInputChange}
                    />
                    {formErrors.postalCode && (
                      <p className="text-red-500 text-sm mt-1">{formErrors.postalCode}</p>
                    )}
                  </div>
                  <div className="mt-8 flex space-x-6">
                    <div className="flex-1">

                      <input
                        type="text"
                        name="city"
                        placeholder="Bangladesh"
                        className={`w-full px-0 py-2 bg-[#F8F8FD]  border-b-2 border-[#BFC6E0] focus:outline-none `}
                        value={formData.city}
                        onChange={handleInputChange}
                      />
                      {formErrors.city && (
                        <p className="text-red-500 text-sm mt-1">{formErrors.city}</p>
                      )}
                    </div>
                    {/* Postal Code */}
                    <div className="flex-1">
                      <input
                        type="text"
                        name="postalCode"
                        placeholder="Postal Code"
                        className={`w-full px-0 py-2 bg-[#F8F8FD]  border-b-2 border-[#BFC6E0] focus:outline-none `}
                        value={formData.postalCode}
                        onChange={handleInputChange}
                      />
                      {formErrors.postalCode && (
                        <p className="text-red-500 text-sm mt-1">{formErrors.postalCode}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>


              <button
                type="submit"
                className="mt-8 bg-[#FB2E86] text-white py-3 px-8 hover:bg-[#FB2E86] transition-colors"
              >
                <Link href="/product">
                Continue to shipping
                </Link>
              </button>
            </form>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">


              <div className="space-y-4">
                {[
                  {
                    id: 1,
                    name: "Ut diam consequat",
                    color: "Brown",
                    size: "Large",
                    price: 32.00,
                    image:
                      "/Images/Rectangle 38.png",
                  },
                  {
                    id: 2,
                    name: "Ut diam consequat",
                    size: "One Size",
                    color: "Brown",
                    price: 32.00,
                    image:
                      "/Images/Rectangle 144.png",
                  },
                  {
                    id: 3,
                    name: "Ut diam consequat",
                    size: "One Size",
                    color: "Brown",
                    price: 32.00,
                    image:
                      "/Images/Rectangle 145.png",
                  },
                  {
                    id: 4,
                    name: "Ut diam consequat",
                    size: "Medium",
                    color: "Brown",
                    price: 32.00,
                    image:
                      "/Images/Rectangle 146.png",
                  },
                  {
                    id: 5,
                    name: "Ut diam consequat",
                    size: "One Size",
                    color: "Brown",
                    price: 32.00,
                    image:
                      "/Images/Rectangle 147.png",
                  },
                ].map((product) => (
                  <div
                    key={product.id}
                    className={`flex items-center space-x-4 pb-4 ${product.id !== 5 ? "border-b border-gray-200" : ""}`}

                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={83}
                      height={87}
                      className="rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium text-sm">{product.name}</h3>
                      <p className="text-sm text-[#A1A8C1]">
                        Color: {product.color}
                      </p>
                      <p className="text-sm text-[#A1A8C1]">
                        Size: {product.size}
                      </p>
                    </div>
                    <p className="font-medium text-[#15245E] text-base">${product.price.toFixed(2)}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#F4F4FC] p-6 rounded-lg shadow-sm">
              <div className="space-y-4">
                <div className="flex justify-between border-b-2 border-[#E8E6F1] pb-4">
                  <span className="font-semibold text-lg text-[#1D3178]">Subtotals:</span>
                  <span className="font-medium text-base text-[#15245E]">£219.00</span>
                </div>
                <div className="flex justify-between border-b-2 border-[#E8E6F1] pt-4">
                  <span className="font-semibold text-lg text-[#1D3178]">Total</span>
                  <span className="font-medium text-base text-[#15245E]">£325.00</span>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={true}  // Make it checked by default
                    readOnly
                    className="h-4 w-4 accent-green-500 border-gray-300 focus:ring-green-500 rounded"
                  />
                  <span className="text-sm text-gray-500">Shipping & taxes calculated at checkout</span>
                </div>


                <button className="w-full mt-4 bg-[#19D16F] text-white py-3 px-4 hover:bg-green-700 transition-colors rounded">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}