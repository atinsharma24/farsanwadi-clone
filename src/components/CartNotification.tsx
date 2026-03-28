"use client";

import { useCart } from "@/lib/cart-context";
import { X } from "lucide-react";
import Link from "next/link";

export function CartNotification() {
  const { notification, clearNotification } = useCart();

  if (!notification) return null;

  return (
    <div className="fixed top-[110px] left-1/2 -translate-x-1/2 z-[60] w-[90%] max-w-lg animate-in slide-in-from-top-2 duration-300">
      <div className="bg-[#0b6e20] text-white py-3 px-5 rounded-lg shadow-xl flex items-center justify-between gap-4">
        <span className="text-sm font-medium">{notification}</span>
        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/cart"
            className="text-xs font-bold uppercase bg-white text-[#0b6e20] px-3 py-1.5 rounded hover:bg-gray-100 transition-colors"
          >
            View Cart
          </Link>
          <button
            onClick={clearNotification}
            className="text-white/80 hover:text-white"
            aria-label="Dismiss"
          >
            <X size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
