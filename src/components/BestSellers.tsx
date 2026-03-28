import { ProductCard } from "./ProductCard";
import { SectionHeader } from "./SectionHeader";
import { products } from "@/lib/data";

export function BestSellers() {
  const bestSellers = products.slice(0, 4);

  return (
    <section className="py-10 md:py-14">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeader title="Best Sellers" showViewAll />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
