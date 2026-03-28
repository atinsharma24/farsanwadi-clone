"use client";

import { useState } from "react";
import { Search, User, Menu, X, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/lib/cart-context";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
  { label: "My Account", href: "/account" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { itemCount } = useCart();
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
      setMobileOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-[70px]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="text-2xl md:text-3xl font-bold font-heading">
            <span className="text-[#00a50c]">Farsan</span>
            <span className="text-[#e65100]">w</span>
            <span className="text-[#00a50c]">a</span>
            <span className="text-[#e65100]">d</span>
            <span className="text-[#00a50c]">i</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 ml-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-[#444] hover:text-[#00a50c] transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#e65100] transition-all group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Right side: User icon + Search + Cart */}
        <div className="hidden md:flex items-center gap-3 ml-auto">
          <Link
            href="/account"
            className="p-2 text-[#444] hover:text-[#00a50c] transition-colors"
            aria-label="Account"
          >
            <User size={22} />
          </Link>

          <form onSubmit={handleSearch} className="flex items-center border border-gray-200 rounded-md overflow-hidden">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search your favorite snacks"
              className="px-3 py-2 text-sm w-[220px] outline-none placeholder:text-gray-400"
            />
            <button
              type="submit"
              className="bg-[#e65100] hover:bg-[#d04a00] text-white p-2 transition-colors"
              aria-label="Search"
            >
              <Search size={18} />
            </button>
          </form>

          <Link
            href="/cart"
            className="p-2 text-[#444] hover:text-[#00a50c] transition-colors relative"
            aria-label="Cart"
          >
            <ShoppingCart size={22} />
            <span className="absolute -top-1 -right-1 bg-[#e65100] text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
              {itemCount}
            </span>
          </Link>
        </div>

        {/* Mobile: Cart + Menu toggle */}
        <div className="md:hidden flex items-center gap-2">
          <Link
            href="/cart"
            className="p-2 text-[#444] relative"
            aria-label="Cart"
          >
            <ShoppingCart size={22} />
            <span className="absolute -top-1 -right-1 bg-[#e65100] text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
              {itemCount}
            </span>
          </Link>
          <button
            className="p-2 text-[#444]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="flex flex-col p-4 gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium text-[#444] hover:text-[#00a50c] py-2 border-b border-gray-50"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="px-4 pb-4">
            <form onSubmit={handleSearch} className="flex items-center border border-gray-200 rounded-md overflow-hidden">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search your favorite snacks"
                className="px-3 py-2 text-sm flex-1 outline-none"
              />
              <button type="submit" className="bg-[#e65100] text-white p-2">
                <Search size={18} />
              </button>
            </form>
          </div>
        </div>
      )}
    </header>
  );
}
