import { MessageCircle, MapPin, Phone, Mail } from "lucide-react";

function FacebookIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Green gradient background */}
      <div
        className="py-12 md:py-16"
        style={{
          background: "linear-gradient(175deg, #fdf5ec 0%, #009329 81%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Logo & Socials */}
          <div>
            <h3 className="text-2xl font-bold font-heading mb-4">
              <span className="text-[#00a50c]">Farsan</span>
              <span className="text-[#e65100]">w</span>
              <span className="text-[#00a50c]">a</span>
              <span className="text-[#e65100]">d</span>
              <span className="text-[#00a50c]">i</span>
            </h3>
            <p className="text-sm text-[#444] mb-4 leading-relaxed">
              Swaad Bhi, Sehat Bhi! Healthy Indian snacks made with love.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#1877f2] text-white flex items-center justify-center hover:scale-110 hover:rotate-12 transition-all duration-300"
                aria-label="Facebook"
              >
                <FacebookIcon size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] text-white flex items-center justify-center hover:scale-110 hover:rotate-12 transition-all duration-300"
                aria-label="Instagram"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#25d366] text-white flex items-center justify-center hover:scale-110 hover:rotate-12 transition-all duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-base font-bold text-[#333] mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About Us", "Shop", "All Products", "Contact Us"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-[#444] hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Column 3: Policy */}
          <div>
            <h4 className="text-base font-bold text-[#333] mb-4">Policy</h4>
            <ul className="space-y-2">
              {[
                "Privacy Policy",
                "Terms & Conditions",
                "Shipping Policy",
                "Return & Refund",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-[#444] hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-base font-bold text-[#333] mb-4">Get in touch</h4>
            <div className="space-y-3 text-sm text-[#444]">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="text-[#e65100] mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-[#e65100]">
                    Farsanwadi Food Products
                  </p>
                  <p>- Unit I - 204, Ganpati Kings County, Sikandra, Agra 282007</p>
                  <p>- Unit II - 6/C-2, Sanjay Palace, Agra 282002</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-[#e65100] shrink-0" />
                <a href="tel:+917055991599" className="hover:text-white transition-colors">
                  +91-70-5599-1599
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Mail size={16} className="text-[#e65100] mt-0.5 shrink-0" />
                <div>
                  <a
                    href="mailto:customersupport@farsanwadi.com"
                    className="hover:text-white transition-colors block"
                  >
                    customersupport@farsanwadi.com
                  </a>
                  <a
                    href="mailto:Sales@farsanwadi.com"
                    className="text-[#e65100] hover:text-white transition-colors block"
                  >
                    Sales@farsanwadi.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-[#0b6e20] text-center py-3 text-xs text-white/80">
        <p>Copyright ©2026 – All Rights Reserved by Farsanwadi</p>
        <p className="mt-1 text-white/60">
          Developed by <span className="font-semibold">HYPF Designs</span>
        </p>
      </div>
    </footer>
  );
}
