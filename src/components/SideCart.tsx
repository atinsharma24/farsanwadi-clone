"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
  SheetFooter,
} from "@/components/ui/sheet";

export function SideCart() {
  const [isOpen, setIsOpen] = useState(false);
  const { items, itemCount, subtotal, updateQuantity, removeItem } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      {/* Cart Icon Trigger */}
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 text-[#444] hover:text-[#00a50c] transition-colors relative"
        aria-label="Open cart"
      >
        <ShoppingCart size={22} />
        {itemCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-[#e65100] text-white text-[10px] font-bold rounded-full min-w-4 h-4 flex items-center justify-center px-1">
            {itemCount > 99 ? "99+" : itemCount}
          </span>
        )}
      </button>

      {/* Sheet Content */}
      <SheetContent side="right" className="flex flex-col">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <ShoppingBag className="size-5 text-[#00a50c]" />
            Your Cart
            {itemCount > 0 && (
              <span className="text-sm font-normal text-muted-foreground">
                ({itemCount} {itemCount === 1 ? "item" : "items"})
              </span>
            )}
          </SheetTitle>
          <SheetClose />
        </SheetHeader>

        {/* Cart Body */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            /* Empty State */
            <div className="flex flex-col items-center justify-center h-full px-6 py-12 text-center">
              <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                <ShoppingCart className="size-10 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-foreground mb-2">
                Your cart is empty
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                Looks like you haven&apos;t added any items to your cart yet.
              </p>
              <Button
                onClick={() => setIsOpen(false)}
                className="bg-[#00a50c] hover:bg-[#0b8f3a] text-white px-6"
                asChild
              >
                <Link href="/shop">Continue Shopping</Link>
              </Button>
            </div>
          ) : (
            /* Cart Items */
            <ul className="divide-y divide-gray-100">
              {items.map((item) => (
                <li key={item.product.id} className="p-4 hover:bg-gray-50/50 transition-colors">
                  <div className="flex gap-4">
                    {/* Thumbnail */}
                    <div className="relative w-20 h-20 shrink-0 rounded-lg overflow-hidden bg-gray-100 border border-gray-100">
                      <Image
                        src={item.product.image}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium text-foreground truncate pr-2">
                        {item.product.name}
                      </h4>
                      <p className="text-sm text-muted-foreground mt-0.5">
                        {formatPrice(item.product.price)}
                      </p>

                      {/* Quantity Controls */}
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                          <button
                            onClick={() =>
                              updateQuantity(item.product.id, item.quantity - 1)
                            }
                            className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 hover:text-[#e65100] transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="size-3.5" />
                          </button>
                          <span className="w-10 h-8 flex items-center justify-center text-sm font-medium border-x border-gray-200">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.product.id, item.quantity + 1)
                            }
                            className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 hover:text-[#00a50c] transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="size-3.5" />
                          </button>
                        </div>

                        {/* Remove Button */}
                        <button
                          onClick={() => removeItem(item.product.id)}
                          className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                          aria-label={`Remove ${item.product.name} from cart`}
                        >
                          <Trash2 className="size-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer - Only show when cart has items */}
        {items.length > 0 && (
          <SheetFooter className="space-y-4">
            {/* Subtotal */}
            <div className="flex items-center justify-between">
              <span className="text-base font-medium text-foreground">Subtotal</span>
              <span className="text-lg font-bold text-foreground">
                {formatPrice(subtotal)}
              </span>
            </div>
            <p className="text-xs text-muted-foreground">
              Shipping and taxes calculated at checkout
            </p>

            {/* Checkout Button */}
            <Button
              asChild
              className="w-full h-12 bg-[#e65100] hover:bg-[#d04a00] text-white font-semibold text-base"
            >
              <Link href="/checkout" onClick={() => setIsOpen(false)}>
                Proceed to Checkout
              </Link>
            </Button>

            {/* Continue Shopping Link */}
            <button
              onClick={() => setIsOpen(false)}
              className="w-full text-center text-sm text-[#00a50c] hover:text-[#0b8f3a] font-medium py-2 transition-colors"
            >
              Continue Shopping
            </button>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
}
