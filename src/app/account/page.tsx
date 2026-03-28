"use client";

import { useState } from "react";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { User, Lock, Mail } from "lucide-react";

type Tab = "login" | "register";

export default function AccountPage() {
  const [tab, setTab] = useState<Tab>("login");
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [registerForm, setRegisterForm] = useState({ email: "", password: "", confirm: "" });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Login functionality requires backend integration.");
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (registerForm.password !== registerForm.confirm) {
      alert("Passwords do not match.");
      return;
    }
    alert("Registration functionality requires backend integration.");
  };

  return (
    <>
      <AnnouncementBar />
      <Header />
      <main className="flex-1">
        <div className="max-w-md mx-auto px-4 py-12">
          {/* Breadcrumb */}
          <div className="text-sm text-[#888] mb-6">
            <a href="/" className="hover:text-[#00a50c]">Home</a>
            <span className="mx-2">/</span>
            <span className="text-[#333] font-medium">My Account</span>
          </div>

          <h1 className="text-2xl font-extrabold font-heading text-[#222] mb-8 text-center">
            My Account
          </h1>

          {/* Tab switcher */}
          <div className="flex border-b border-gray-200 mb-8">
            <button
              onClick={() => setTab("login")}
              className={`flex-1 py-3 text-sm font-semibold text-center border-b-2 transition-colors ${
                tab === "login"
                  ? "text-[#0b6e20] border-[#0b6e20]"
                  : "text-[#888] border-transparent hover:text-[#333]"
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setTab("register")}
              className={`flex-1 py-3 text-sm font-semibold text-center border-b-2 transition-colors ${
                tab === "register"
                  ? "text-[#0b6e20] border-[#0b6e20]"
                  : "text-[#888] border-transparent hover:text-[#333]"
              }`}
            >
              Register
            </button>
          </div>

          {tab === "login" ? (
            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-[#555] mb-1">
                  <Mail size={14} /> Email *
                </label>
                <input
                  type="email"
                  value={loginForm.email}
                  onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#00a50c] transition-colors"
                  required
                />
              </div>
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-[#555] mb-1">
                  <Lock size={14} /> Password *
                </label>
                <input
                  type="password"
                  value={loginForm.password}
                  onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#00a50c] transition-colors"
                  required
                />
              </div>
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="accent-[#0b6e20]" />
                  <span className="text-[#666]">Remember me</span>
                </label>
                <a href="#" className="text-[#e65100] font-semibold hover:underline">
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full bg-[#0b6e20] hover:bg-[#095a1a] text-white font-bold text-sm py-3.5 rounded-lg uppercase transition-colors flex items-center justify-center gap-2"
              >
                <User size={16} /> Log In
              </button>
            </form>
          ) : (
            <form onSubmit={handleRegister} className="space-y-5">
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-[#555] mb-1">
                  <Mail size={14} /> Email *
                </label>
                <input
                  type="email"
                  value={registerForm.email}
                  onChange={(e) => setRegisterForm({ ...registerForm, email: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#00a50c] transition-colors"
                  required
                />
              </div>
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-[#555] mb-1">
                  <Lock size={14} /> Password *
                </label>
                <input
                  type="password"
                  value={registerForm.password}
                  onChange={(e) => setRegisterForm({ ...registerForm, password: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#00a50c] transition-colors"
                  required
                />
              </div>
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-[#555] mb-1">
                  <Lock size={14} /> Confirm Password *
                </label>
                <input
                  type="password"
                  value={registerForm.confirm}
                  onChange={(e) => setRegisterForm({ ...registerForm, confirm: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#00a50c] transition-colors"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#0b6e20] hover:bg-[#095a1a] text-white font-bold text-sm py-3.5 rounded-lg uppercase transition-colors flex items-center justify-center gap-2"
              >
                <User size={16} /> Register
              </button>
            </form>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
