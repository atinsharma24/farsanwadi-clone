"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { CheckCircle, Package, ArrowRight } from "lucide-react";

function OrderSuccessContent() {
  const searchParams = useSearchParams();
  const paymentId = searchParams.get("paymentId");
  const method = searchParams.get("method");

  return (
    <>
      <AnnouncementBar />
      <Header />
      <main className="flex-1">
        <div className="max-w-2xl mx-auto px-4 py-16 text-center">
          <div className="w-20 h-20 bg-[#e8f5e9] rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={48} className="text-[#0b6e20]" />
          </div>

          <h1 className="text-3xl font-extrabold font-heading text-[#222] mb-4">
            Order Placed Successfully!
          </h1>

          <p className="text-[#666] mb-2">
            Thank you for your order. We&apos;ll start preparing your snacks right away!
          </p>

          {paymentId && (
            <p className="text-sm text-[#888] mb-6">
              Payment ID: <span className="font-mono font-semibold text-[#333]">{paymentId}</span>
            </p>
          )}

          {method === "cod" && (
            <p className="text-sm text-[#e65100] font-semibold mb-6">
              💰 Cash on Delivery — Please keep exact change ready.
            </p>
          )}

          <div className="bg-gray-50 rounded-2xl p-8 mt-6 mb-8">
            <div className="flex items-center justify-center gap-3 text-[#0b6e20] mb-3">
              <Package size={24} />
              <span className="font-bold">What happens next?</span>
            </div>
            <ul className="text-sm text-[#666] space-y-2 text-left max-w-sm mx-auto">
              <li>✓ You&apos;ll receive an order confirmation email</li>
              <li>✓ We&apos;ll prepare your snacks with care</li>
              <li>✓ You&apos;ll get tracking details once shipped</li>
              <li>✓ Estimated delivery: 3-5 business days</li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/shop"
              className="flex items-center gap-2 bg-[#0b6e20] hover:bg-[#095a1a] text-white font-bold text-sm py-3 px-8 rounded-lg uppercase transition-colors"
            >
              Continue Shopping <ArrowRight size={16} />
            </Link>
            <Link
              href="/"
              className="text-sm font-semibold text-[#e65100] hover:underline"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default function OrderSuccessPage() {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <OrderSuccessContent />
    </Suspense>
  );
}
