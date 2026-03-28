export function GuiltFreeSection() {
  return (
    <section className="bg-[#f7f7f7] py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-heading text-[#2d3436] mb-4 leading-tight">
            Guilt-Free Snacking Starts Here
          </h2>
          <p className="text-base md:text-lg text-[#636e72] mb-8 leading-relaxed">
            Healthy snacks with traditional taste and modern nutrition. Made with
            100% whole grains, roasted not fried, and packed with Indian flavours
            your family will love.
          </p>
          <a
            href="/shop"
            className="inline-block bg-[#0b6e20] hover:bg-[#095a1a] text-white font-bold text-base px-8 py-3.5 rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Shop Healthy Chips
          </a>
        </div>

        {/* Feature highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
          {[
            { icon: "🌾", label: "100% Whole Grain" },
            { icon: "🔥", label: "Roasted, Not Fried" },
            { icon: "🥗", label: "High Fiber" },
            { icon: "⭐", label: "Preservative Free" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center gap-2 p-4 bg-white rounded-xl shadow-sm"
            >
              <span className="text-3xl">{item.icon}</span>
              <span className="text-sm font-semibold text-[#333] text-center">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
