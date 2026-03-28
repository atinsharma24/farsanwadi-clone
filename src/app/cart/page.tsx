"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useCart } from "@/lib/cart-context";
import { Minus, Plus, X, ShoppingCart } from "lucide-react";

export default function CartPage() {
  const { items, updateQuantity, removeItem, subtotal } = useCart();
  const [coupon, setCoupon] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);
  const discount = couponApplied ? Math.round(subtotal * 0.1) : 0;
  const total = subtotal - discount;

  return (
    <>
      <AnnouncementBar />
      <Header />
      <main className="flex-1">
        <div className="max-w-5xl mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <div className="text-sm text-[#888] mb-6">
            <a href="/" className="hover:text-[#00a50c]">Home</a>
            <span className="mx-2">/</span>
            <span className="text-[#333] font-medium">Cart</span>
          </div>

          <h1 className="text-2xl md:text-3xl font-extrabold font-heading text-[#222] mb-8">
            Shopping Cart
          </h1>

          {items.length === 0 ? (
            <div className="text-center py-20">
              <ShoppingCart size={64} className="mx-auto text-gray-300 mb-4" />
              <p className="text-lg text-[#888] mb-4">Your cart is empty.</p>
              <Link
                href="/shop"
                className="inline-block bg-[#0b6e20] hover:bg-[#095a1a] text-white font-bold text-sm py-3 px-8 rounded-lg uppercase transition-colors"
              >
                Return to Shop
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                {/* Header row */}
                <div className="hidden md:grid grid-cols-12 gap-4 pb-3 border-b border-gray-200 text-xs font-semibold text-[#888] uppercase">
                  <div className="col-span-6">Product</div>
                  <div className="col-span-2 text-center">Price</div>
                  <div className="col-span-2 text-center">Quantity</div>
                  <div className="col-span-2 text-right">Subtotal</div>
                </div>

                {items.map((item) => (
                  <div
                    key={item.product.id}
                    className="grid grid-cols-12 gap-4 py-5 border-b border-gray-100 items-center"
                  >
                    {/* Product */}
                    <div className="col-span-12 md:col-span-6 flex items-center gap-4">
                      <button
                        onClick={() => removeItem(item.product.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors shrink-0"
                        aria-label="Remove item"
                      >
                        <X size={16} />
                      </button>
                      <div className="w-16 h-16 relative rounded-lg overflow-hidden bg-gray-50 shrink-0">
                        <Image
                          src={item.product.image}
                          alt={item.product.name}
                          fill
                          className="object-cover"
                          sizes="64px"
                        />
                      </div>
                      <Link
                        href={`/product/${item.product.slug}`}
                        className="text-sm font-semibold text-[#333] hover:text-[#00a50c] transition-colors line-clamp-2"
                      >
                        {item.product.name}
                      </Link>
                    </div>

                    {/* Price */}
                    <div className="col-span-4 md:col-span-2 text-center text-sm text-[#666]">
                      ₹{item.product.price}
                    </div>

                    {/* Quantity */}
                    <div className="col-span-4 md:col-span-2 flex justify-center">
                      <div className="flex items-center border border-gray-200 rounded-md overflow-hidden">
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity - 1)
                          }
                          className="px-2 py-1.5 hover:bg-gray-50 transition-colors"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-8 text-center text-sm font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity + 1)
                          }
                          className="px-2 py-1.5 hover:bg-gray-50 transition-colors"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>

                    {/* Subtotal */}
                    <div className="col-span-4 md:col-span-2 text-right text-sm font-bold text-[#222]">
                      ₹{item.product.price * item.quantity}
                    </div>
                  </div>
                ))}
              </div>

              {/* Cart Summary */}
              <div className="lg:col-span-1">
                <div className="bg-gray-50 rounded-2xl p-6 sticky top-[90px]">
                  <h3 className="text-lg font-bold text-[#333] mb-5 font-heading">
                    Cart Totals
                  </h3>

                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#888]">Subtotal</span>
                      <span className="font-semibold text-[#333]">₹{subtotal}</span>
                    </div>

                    {couponApplied && (
                      <div className="flex justify-between text-[#00a50c]">
                        <span>Coupon (10% off)</span>
                        <span className="font-semibold">-₹{discount}</span>
                      </div>
                    )}

                    <div className="flex justify-between">
                      <span className="text-[#888]">Shipping</span>
                      <span className="font-semibold text-[#00a50c]">Free</span>
                    </div>

                    <hr className="border-gray-200" />

                    <div className="flex justify-between text-base">
                      <span className="font-bold text-[#333]">Total</span>
                      <span className="font-extrabold text-[#222]">₹{total}</span>
                    </div>
                  </div>

                  {/* Coupon */}
                  <div className="mt-6">
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={coupon}
                        onChange={(e) => setCoupon(e.target.value)}
                        placeholder="Coupon code"
                        className="flex-1 border border-gray-200 rounded-md px-3 py-2 text-sm outline-none"
                      />
                      <button
                        onClick={() => {
                          if (coupon.trim().length > 0) {
                            setCouponApplied(true);
                          }
                        }}
                        className="bg-[#e65100] hover:bg-[#d04a00] text-white text-xs font-bold px-4 py-2 rounded-md transition-colors"
                      >
                        Apply
                      </button>
                    </div>
                    {couponApplied && (
                      <p className="text-xs text-[#00a50c] mt-2">
                        ✓ Coupon applied! 10% discount.
                      </p>
                    )}
                  </div>

                  {/* Checkout */}
                  <Link
                    href="/checkout"
                    className="block w-full mt-6 bg-[#0b6e20] hover:bg-[#095a1a] text-white font-bold text-sm py-3.5 rounded-lg uppercase tracking-wider text-center transition-colors"
                  >
                    Proceed to Checkout
                  </Link>

                  <Link
                    href="/shop"
                    className="block text-center mt-3 text-sm text-[#e65100] font-semibold hover:underline"
                  >
                    ← Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
