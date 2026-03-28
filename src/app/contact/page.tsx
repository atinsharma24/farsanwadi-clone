"use client";

import { useState } from "react";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MapPin, Phone, Mail, Send } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
  };

  return (
    <>
      <AnnouncementBar />
      <Header />
      <main className="flex-1">
        <div className="max-w-5xl mx-auto px-4 py-12">
          {/* Breadcrumb */}
          <div className="text-sm text-[#888] mb-6">
            <a href="/" className="hover:text-[#00a50c]">Home</a>
            <span className="mx-2">/</span>
            <span className="text-[#333] font-medium">Contact Us</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold font-heading text-[#222] mb-10">
            Contact <span className="text-[#00a50c]">Us</span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-lg font-bold text-[#333] mb-6 font-heading">
                Get in Touch
              </h2>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#e8f5e9] flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-[#00a50c]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#333] text-sm">Our Locations</h3>
                    <p className="text-sm text-[#666] mt-1">
                      Unit I — 204, Ganpati Kings County, Sikandra, Agra 282007
                    </p>
                    <p className="text-sm text-[#666]">
                      Unit II — 6/C-2, Sanjay Palace, Agra 282002
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#e8f5e9] flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-[#00a50c]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#333] text-sm">Phone</h3>
                    <a href="tel:+917055991599" className="text-sm text-[#666] hover:text-[#e65100]">
                      +91-70-5599-1599
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#e8f5e9] flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-[#00a50c]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#333] text-sm">Email</h3>
                    <a href="mailto:customersupport@farsanwadi.com" className="text-sm text-[#666] hover:text-[#e65100] block">
                      customersupport@farsanwadi.com
                    </a>
                    <a href="mailto:Sales@farsanwadi.com" className="text-sm text-[#e65100] hover:underline block">
                      Sales@farsanwadi.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              {submitted ? (
                <div className="bg-[#e8f5e9] rounded-2xl p-8 text-center">
                  <h3 className="text-lg font-bold text-[#0b6e20] mb-2">
                    Thank You!
                  </h3>
                  <p className="text-sm text-[#555]">
                    Your message has been sent. We&apos;ll get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-[#555] mb-1">Name *</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#00a50c] transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#555] mb-1">Email *</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#00a50c] transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#555] mb-1">Subject</label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#00a50c] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#555] mb-1">Message *</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#00a50c] transition-colors resize-none"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-[#0b6e20] hover:bg-[#095a1a] text-white font-bold text-sm py-3 px-8 rounded-lg uppercase tracking-wider flex items-center gap-2 transition-colors"
                  >
                    Send Message <Send size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
