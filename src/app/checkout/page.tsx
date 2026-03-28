"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useCart } from "@/lib/cart-context";
import { ShieldCheck, Truck, CreditCard } from "lucide-react";

declare global {
  interface Window {
    Razorpay: new (options: RazorpayOptions) => RazorpayInstance;
  }
}

interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  order_id: string;
  handler: (response: RazorpayResponse) => void;
  prefill: { name: string; email: string; contact: string };
  theme: { color: string };
  modal?: { ondismiss?: () => void };
}

interface RazorpayInstance {
  open: () => void;
}

interface RazorpayResponse {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
}

type PaymentMethod = "razorpay" | "cod";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
}

export default function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart();
  const router = useRouter();
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("razorpay");
  const [processing, setProcessing] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [form, setForm] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  const shipping = 0; // Free shipping
  const total = subtotal + shipping;

  const updateForm = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const isFormValid = () => {
    return (
      form.firstName.trim() &&
      form.lastName.trim() &&
      form.email.trim() &&
      form.phone.trim() &&
      form.address.trim() &&
      form.city.trim() &&
      form.state.trim() &&
      form.pincode.trim() &&
      agreeTerms
    );
  };

  const loadRazorpayScript = (): Promise<boolean> => {
    return new Promise((resolve) => {
      if (window.Razorpay) {
        resolve(true);
        return;
      }
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handleRazorpayPayment = async () => {
    setProcessing(true);

    const scriptLoaded = await loadRazorpayScript();
    if (!scriptLoaded) {
      alert("Failed to load Razorpay. Please try again.");
      setProcessing(false);
      return;
    }

    try {
      // Create order on backend
      const response = await fetch("/api/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: total,
          currency: "INR",
          receipt: `order_${Date.now()}`,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to create order");
      }

      // Open Razorpay checkout
      const options: RazorpayOptions = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "",
        amount: data.amount,
        currency: data.currency,
        name: "Farsanwadi",
        description: "Order Payment",
        order_id: data.orderId,
        handler: async (response: RazorpayResponse) => {
          // Verify payment on backend
          try {
            const verifyResponse = await fetch("/api/verify-payment", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
              }),
            });

            const verifyData = await verifyResponse.json();

            if (verifyData.success) {
              clearCart();
              router.push(
                `/order-success?paymentId=${response.razorpay_payment_id}`
              );
            } else {
              alert("Payment verification failed. Please contact support.");
            }
          } catch {
            alert("Payment verification error. Please contact support.");
          }
          setProcessing(false);
        },
        prefill: {
          name: `${form.firstName} ${form.lastName}`,
          email: form.email,
          contact: form.phone,
        },
        theme: {
          color: "#0b6e20",
        },
        modal: {
          ondismiss: () => {
            setProcessing(false);
          },
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error("Payment error:", error);
      alert("Payment failed. Please try again.");
      setProcessing(false);
    }
  };

  const handleCODOrder = () => {
    setProcessing(true);
    // Simulate order placement
    setTimeout(() => {
      clearCart();
      router.push("/order-success?method=cod");
    }, 1500);
  };

  const handlePlaceOrder = () => {
    if (!isFormValid()) {
      alert("Please fill all required fields and accept terms.");
      return;
    }

    if (items.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    if (paymentMethod === "razorpay") {
      handleRazorpayPayment();
    } else {
      handleCODOrder();
    }
  };

  return (
    <>
      <AnnouncementBar />
      <Header />
      <main className="flex-1">
        <div className="max-w-6xl mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <div className="text-sm text-[#888] mb-6">
            <a href="/" className="hover:text-[#00a50c]">Home</a>
            <span className="mx-2">/</span>
            <a href="/cart" className="hover:text-[#00a50c]">Cart</a>
            <span className="mx-2">/</span>
            <span className="text-[#333] font-medium">Checkout</span>
          </div>

          <h1 className="text-2xl md:text-3xl font-extrabold font-heading text-[#222] mb-8">
            Checkout
          </h1>

          {items.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-lg text-[#888] mb-4">
                Your cart is empty. Add some snacks first!
              </p>
              <a
                href="/shop"
                className="inline-block bg-[#0b6e20] text-white font-bold text-sm py-3 px-8 rounded-lg uppercase"
              >
                Go to Shop
              </a>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {/* Billing Form */}
              <div className="lg:col-span-3">
                <div className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8">
                  <h2 className="text-lg font-bold text-[#333] mb-6 font-heading">
                    Billing Details
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#555] mb-1">
                        First Name *
                      </label>
                      <input
                        type="text"
                        value={form.firstName}
                        onChange={(e) => updateForm("firstName", e.target.value)}
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#00a50c] transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#555] mb-1">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        value={form.lastName}
                        onChange={(e) => updateForm("lastName", e.target.value)}
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#00a50c] transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#555] mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => updateForm("email", e.target.value)}
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#00a50c] transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#555] mb-1">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => updateForm("phone", e.target.value)}
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#00a50c] transition-colors"
                        required
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-[#555] mb-1">
                        Street Address *
                      </label>
                      <input
                        type="text"
                        value={form.address}
                        onChange={(e) => updateForm("address", e.target.value)}
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#00a50c] transition-colors"
                        placeholder="House number, street name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#555] mb-1">
                        City *
                      </label>
                      <input
                        type="text"
                        value={form.city}
                        onChange={(e) => updateForm("city", e.target.value)}
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#00a50c] transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#555] mb-1">
                        State *
                      </label>
                      <input
                        type="text"
                        value={form.state}
                        onChange={(e) => updateForm("state", e.target.value)}
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#00a50c] transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#555] mb-1">
                        PIN Code *
                      </label>
                      <input
                        type="text"
                        value={form.pincode}
                        onChange={(e) => updateForm("pincode", e.target.value)}
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#00a50c] transition-colors"
                        required
                      />
                    </div>
                  </div>

                  {/* Payment Method */}
                  <div className="mt-8">
                    <h3 className="text-base font-bold text-[#333] mb-4">
                      Payment Method
                    </h3>

                    <div className="space-y-3">
                      <label
                        className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                          paymentMethod === "razorpay"
                            ? "border-[#0b6e20] bg-[#f0faf3]"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <input
                          type="radio"
                          name="payment"
                          value="razorpay"
                          checked={paymentMethod === "razorpay"}
                          onChange={() => setPaymentMethod("razorpay")}
                          className="accent-[#0b6e20]"
                        />
                        <CreditCard size={20} className="text-[#0b6e20]" />
                        <div>
                          <span className="text-sm font-semibold text-[#333]">
                            Pay Online (Razorpay)
                          </span>
                          <p className="text-xs text-[#888]">
                            Cards, NetBanking, UPI, Wallets
                          </p>
                        </div>
                      </label>

                      <label
                        className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                          paymentMethod === "cod"
                            ? "border-[#0b6e20] bg-[#f0faf3]"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <input
                          type="radio"
                          name="payment"
                          value="cod"
                          checked={paymentMethod === "cod"}
                          onChange={() => setPaymentMethod("cod")}
                          className="accent-[#0b6e20]"
                        />
                        <Truck size={20} className="text-[#e65100]" />
                        <div>
                          <span className="text-sm font-semibold text-[#333]">
                            Cash on Delivery
                          </span>
                          <p className="text-xs text-[#888]">
                            Pay when your order arrives
                          </p>
                        </div>
                      </label>
                    </div>
                  </div>

                  {/* Terms */}
                  <div className="mt-6">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={agreeTerms}
                        onChange={(e) => setAgreeTerms(e.target.checked)}
                        className="mt-1 accent-[#0b6e20]"
                      />
                      <span className="text-xs text-[#666] leading-relaxed">
                        I have read and agree to the{" "}
                        <a href="#" className="text-[#e65100] font-semibold hover:underline">
                          Terms & Conditions
                        </a>{" "}
                        and{" "}
                        <a href="#" className="text-[#e65100] font-semibold hover:underline">
                          Privacy Policy
                        </a>
                        .
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-2">
                <div className="bg-gray-50 rounded-2xl p-6 sticky top-[90px]">
                  <h3 className="text-lg font-bold text-[#333] mb-5 font-heading">
                    Your Order
                  </h3>

                  <div className="space-y-4 mb-6">
                    {items.map((item) => (
                      <div
                        key={item.product.id}
                        className="flex items-center gap-3"
                      >
                        <div className="w-14 h-14 relative rounded-lg overflow-hidden bg-white shrink-0">
                          <Image
                            src={item.product.image}
                            alt={item.product.name}
                            fill
                            className="object-cover"
                            sizes="56px"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-[#333] truncate">
                            {item.product.name}
                          </p>
                          <p className="text-xs text-[#888]">
                            Qty: {item.quantity}
                          </p>
                        </div>
                        <span className="text-sm font-bold text-[#222] shrink-0">
                          ₹{item.product.price * item.quantity}
                        </span>
                      </div>
                    ))}
                  </div>

                  <hr className="border-gray-200" />

                  <div className="space-y-3 mt-4 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#888]">Subtotal</span>
                      <span className="font-semibold">₹{subtotal}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#888]">Shipping</span>
                      <span className="font-semibold text-[#00a50c]">Free</span>
                    </div>
                    <hr className="border-gray-200" />
                    <div className="flex justify-between text-lg">
                      <span className="font-bold">Total</span>
                      <span className="font-extrabold text-[#222]">
                        ₹{total}
                      </span>
                    </div>
                  </div>

                  {/* Trust badges */}
                  <div className="flex items-center gap-4 mt-5 py-3 border-t border-gray-200">
                    <ShieldCheck size={16} className="text-[#00a50c]" />
                    <span className="text-xs text-[#888]">
                      Secure SSL encrypted payment
                    </span>
                  </div>

                  <button
                    onClick={handlePlaceOrder}
                    disabled={processing || !isFormValid()}
                    className={`w-full mt-4 font-bold text-sm py-4 rounded-lg uppercase tracking-wider transition-colors cursor-pointer ${
                      processing || !isFormValid()
                        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                        : "bg-[#0b6e20] hover:bg-[#095a1a] text-white"
                    }`}
                  >
                    {processing
                      ? "Processing..."
                      : paymentMethod === "razorpay"
                      ? "Pay Now"
                      : "Place Order (COD)"}
                  </button>
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
