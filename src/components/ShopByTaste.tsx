import { tasteCategories } from "@/lib/data";
import { SectionHeader } from "./SectionHeader";

export function ShopByTaste() {
  const icons = ["🌶️", "🧀", "🔥"];

  return (
    <section className="py-10 md:py-14 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeader title="Shop By Taste" showViewAll />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {tasteCategories.map((taste, idx) => (
            <a
              key={taste.id}
              href={`/shop?taste=${taste.slug}`}
              className="group relative rounded-2xl overflow-hidden p-8 text-center transition-all duration-300 hover:shadow-xl border border-gray-100"
              style={{
                background: `linear-gradient(135deg, ${taste.color}08 0%, ${taste.color}18 100%)`,
              }}
            >
              <div className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center text-4xl bg-white shadow-sm group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                {icons[idx]}
              </div>
              <h3
                className="text-xl font-bold font-heading mb-2"
                style={{ color: taste.color }}
              >
                {taste.name}
              </h3>
              <div
                className="text-sm font-semibold group-hover:underline"
                style={{ color: taste.color }}
              >
                Shop Now →
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
