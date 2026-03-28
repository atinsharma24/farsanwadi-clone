import { occasionCategories } from "@/lib/data";
import { SectionHeader } from "./SectionHeader";

export function ShopByOccasion() {
  const icons = ["☕", "👨‍👩‍👧‍👦", "🌙", "✈️"];

  return (
    <section className="py-10 md:py-14">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeader title="Shop By Occasion" showViewAll />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {occasionCategories.map((occasion, idx) => (
            <a
              key={occasion.id}
              href={`/shop?occasion=${occasion.slug}`}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 p-6 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#fdf5ec] to-[#e8f5e9] flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                {icons[idx]}
              </div>
              <h3 className="text-base font-bold text-[#333] mb-1 font-heading">
                {occasion.name}
              </h3>
              <p className="text-xs text-[#888] leading-relaxed">
                {occasion.description}
              </p>
              <div className="mt-3 text-xs font-semibold text-[#e65100] group-hover:underline">
                Explore →
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
