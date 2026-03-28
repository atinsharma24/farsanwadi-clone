"use client";

import Image from "next/image";
import Link from "next/link";
import { StarRating } from "./StarRating";
import { useCart } from "@/lib/cart-context";
import type { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  const discount = product.badge;

  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100">
      {/* Image container */}
      <Link href={`/product/${product.slug}`} className="block relative aspect-square overflow-hidden bg-gray-50">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
        {discount && (
          <span className="absolute top-3 left-3 bg-[#00a50c] text-white text-xs font-bold px-2 py-1 rounded-md">
            {discount}
          </span>
        )}
      </Link>

      {/* Info */}
      <div className="p-4">
        <Link href={`/product/${product.slug}`}>
          <h3 className="text-sm font-semibold text-[#333] line-clamp-2 min-h-[40px] leading-tight hover:text-[#00a50c] transition-colors">
            {product.name}
          </h3>
        </Link>

        <div className="flex items-center gap-2 mt-2">
          <StarRating rating={product.rating} size={14} />
          <span className="text-xs text-[#e65100]">
            ({product.reviewCount} Reviews)
          </span>
        </div>

        <div className="flex items-center gap-2 mt-3">
          <span className="price-original text-sm">₹{product.originalPrice}</span>
          <span className="price-sale text-lg">₹{product.price}</span>
        </div>

        <button
          onClick={() => addItem(product)}
          className="mt-3 w-full bg-[#0b8f3a] hover:bg-[#097a30] text-white text-xs font-bold py-2.5 px-4 rounded-md uppercase tracking-wider transition-colors duration-200 cursor-pointer"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
