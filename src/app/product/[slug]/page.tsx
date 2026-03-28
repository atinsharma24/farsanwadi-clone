"use client";

import { useState, use } from "react";
import Image from "next/image";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StarRating } from "@/components/StarRating";
import { ProductCard } from "@/components/ProductCard";
import { useCart } from "@/lib/cart-context";
import { products } from "@/lib/data";
import { Minus, Plus, Truck, ShieldCheck, Leaf } from "lucide-react";

type TabKey = "description" | "additional" | "reviews";

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const product = products.find((p) => p.slug === slug);
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<TabKey>("description");

  if (!product) {
    return (
      <>
        <AnnouncementBar />
        <Header />
        <main className="flex-1 flex items-center justify-center py-20">
          <p className="text-lg text-[#888]">Product not found.</p>
        </main>
        <Footer />
      </>
    );
  }

  const relatedProducts = products
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  return (
    <>
      <AnnouncementBar />
      <Header />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <div className="text-sm text-[#888] mb-6">
            <a href="/" className="hover:text-[#00a50c]">Home</a>
            <span className="mx-2">/</span>
            <a href="/shop" className="hover:text-[#00a50c]">Shop</a>
            <span className="mx-2">/</span>
            <span className="text-[#333] font-medium">{product.name}</span>
          </div>

          {/* Product Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14">
            {/* Image */}
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-50 border border-gray-100">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {product.badge && (
                <span className="absolute top-4 left-4 bg-[#00a50c] text-white text-sm font-bold px-3 py-1.5 rounded-lg">
                  {product.badge}
                </span>
              )}
            </div>

            {/* Details */}
            <div>
              <h1 className="text-2xl md:text-3xl font-extrabold font-heading text-[#222] leading-tight">
                {product.name}
              </h1>

              <div className="flex items-center gap-3 mt-3">
                <StarRating rating={product.rating} size={18} />
                <span className="text-sm text-[#e65100] font-medium">
                  ({product.reviewCount} customer reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-3 mt-5">
                <span className="text-2xl font-extrabold text-[#222]">
                  ₹{product.price}
                </span>
                <span className="text-lg text-[#999] line-through">
                  ₹{product.originalPrice}
                </span>
                {product.badge && (
                  <span className="text-sm font-bold text-[#00a50c] bg-[#e8f5e9] px-2 py-1 rounded">
                    Save {product.badge}
                  </span>
                )}
              </div>

              {/* Urgency */}
              {product.urgencyText && (
                <p className="mt-4 text-sm text-[#e65100] font-semibold bg-[#fff3e0] px-4 py-2 rounded-lg">
                  🔥 {product.urgencyText}
                </p>
              )}

              {/* Description */}
              <p className="mt-5 text-sm text-[#666] leading-relaxed">
                {product.description}
              </p>

              {/* Flavours */}
              {product.flavours && product.flavours.length > 0 && (
                <div className="mt-4">
                  <p className="text-sm font-semibold text-[#333] mb-2">
                    Flavours:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {product.flavours.map((f) => (
                      <span
                        key={f}
                        className="text-xs font-medium bg-gray-100 text-[#555] px-3 py-1.5 rounded-full"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity + Add to Cart */}
              <div className="flex items-center gap-4 mt-8">
                <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:bg-gray-50 transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="w-12 text-center text-sm font-semibold">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:bg-gray-50 transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus size={16} />
                  </button>
                </div>

                <button
                  onClick={() => {
                    addItem(product, quantity);
                    setQuantity(1);
                  }}
                  className="flex-1 bg-[#0b6e20] hover:bg-[#095a1a] text-white font-bold text-sm py-3.5 px-8 rounded-lg uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Add to Cart
                </button>
              </div>

              {/* Trust badges */}
              <div className="grid grid-cols-3 gap-4 mt-8 py-5 border-t border-gray-100">
                <div className="flex items-center gap-2 text-xs text-[#555]">
                  <Truck size={18} className="text-[#00a50c]" />
                  <span>Free Shipping</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#555]">
                  <ShieldCheck size={18} className="text-[#00a50c]" />
                  <span>Secure Payment</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#555]">
                  <Leaf size={18} className="text-[#00a50c]" />
                  <span>100% Veg</span>
                </div>
              </div>

              {/* Weight & category */}
              <div className="mt-4 text-sm text-[#888] space-y-1">
                {product.weight && <p><span className="font-semibold text-[#555]">Weight:</span> {product.weight}</p>}
                <p><span className="font-semibold text-[#555]">Category:</span> {product.category}</p>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="mt-16">
            <div className="flex border-b border-gray-200">
              {(["description", "additional", "reviews"] as TabKey[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 text-sm font-semibold capitalize transition-colors border-b-2 -mb-[1px] ${
                    activeTab === tab
                      ? "text-[#0b6e20] border-[#0b6e20]"
                      : "text-[#888] border-transparent hover:text-[#333]"
                  }`}
                >
                  {tab === "additional" ? "Additional Information" : tab}
                </button>
              ))}
            </div>

            <div className="py-8">
              {activeTab === "description" && (
                <div className="max-w-3xl text-sm text-[#666] leading-relaxed space-y-4">
                  <p>{product.description}</p>
                  <p>
                    Made with premium quality ingredients, our snacks are crafted to deliver
                    authentic Indian taste while keeping your health in mind. Roasted, not fried.
                    No artificial preservatives or colors.
                  </p>
                </div>
              )}
              {activeTab === "additional" && (
                <table className="w-full max-w-lg text-sm">
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 font-semibold text-[#555] pr-8">Weight</td>
                      <td className="py-3 text-[#666]">{product.weight || "N/A"}</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 font-semibold text-[#555] pr-8">Category</td>
                      <td className="py-3 text-[#666] capitalize">{product.category.replace(/-/g, " ")}</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 font-semibold text-[#555] pr-8">Dietary</td>
                      <td className="py-3 text-[#666]">100% Vegetarian</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 font-semibold text-[#555] pr-8">Shelf Life</td>
                      <td className="py-3 text-[#666]">6 months from date of manufacture</td>
                    </tr>
                  </tbody>
                </table>
              )}
              {activeTab === "reviews" && (
                <div className="max-w-lg">
                  {product.reviewCount > 0 ? (
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <StarRating rating={product.rating} size={18} />
                        <span className="text-sm text-[#666]">
                          Based on {product.reviewCount} reviews
                        </span>
                      </div>
                      <p className="text-sm text-[#888]">
                        Customer reviews are being loaded...
                      </p>
                    </div>
                  ) : (
                    <p className="text-sm text-[#888]">
                      There are no reviews yet. Be the first to review this product!
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Related Products */}
          <div className="mt-12">
            <h2 className="text-2xl font-extrabold font-heading text-[#333] mb-6">
              Related Products
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
