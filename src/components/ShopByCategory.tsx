import Image from "next/image";
import { SectionHeader } from "./SectionHeader";
import { categories } from "@/lib/data";

export function ShopByCategory() {
  return (
    <section className="py-10 md:py-14">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeader title="Shop By Category" showViewAll />

        <div className="flex gap-4 md:gap-6 overflow-x-auto pb-4 scrollbar-hide">
          {categories.map((category) => (
            <a
              key={category.id}
              href={`/shop?category=${category.slug}`}
              className="flex flex-col items-center gap-3 shrink-0 group"
            >
              <div className="w-[100px] h-[100px] md:w-[130px] md:h-[130px] rounded-2xl overflow-hidden border-2 border-transparent group-hover:border-[#00a50c] transition-colors shadow-sm bg-gray-100">
                <Image
                  src={category.image}
                  alt={category.name}
                  width={130}
                  height={130}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-sm font-semibold text-[#333] group-hover:text-[#00a50c] transition-colors text-center">
                {category.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
