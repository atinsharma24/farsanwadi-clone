import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Leaf, Award, Heart, Users } from "lucide-react";

export default function AboutPage() {
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
            <span className="text-[#333] font-medium">About Us</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold font-heading text-[#222] mb-6">
            About <span className="text-[#00a50c]">Farsanwadi</span>
          </h1>

          <div className="space-y-6 text-[#555] leading-relaxed max-w-3xl">
            <p className="text-lg">
              <strong className="text-[#222]">Swaad Bhi, Sehat Bhi!</strong> — At Farsanwadi, we
              believe snacking should never compromise on health. We bring you the finest Indian
              snacks that are crafted with authentic recipes and wholesome ingredients.
            </p>
            <p>
              Founded with the mission to revolutionize Indian snacking, Farsanwadi offers a
              wide range of traditional snacks — from crispy Khakhras and crunchy Namkeens to
              flavorful Bakarwadi and healthy Millet Chips — all made with carefully selected
              whole grains, roasted (not fried), and free from artificial preservatives.
            </p>
            <p>
              Our snacks are prepared in a state-of-the-art FSSAI-certified facility under
              strict quality controls, ensuring every bite is fresh, safe, and delicious. We take
              pride in being 100% vegetarian and using only the finest natural ingredients.
            </p>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {[
              { icon: Leaf, title: "100% Natural", desc: "No artificial colors, flavors, or preservatives." },
              { icon: Award, title: "Premium Quality", desc: "FSSAI-certified facility with strict quality checks." },
              { icon: Heart, title: "Made with Love", desc: "Authentic recipes passed down through generations." },
              { icon: Users, title: "10K+ Happy Customers", desc: "Trusted by families across India." },
            ].map((v) => (
              <div key={v.title} className="bg-[#f8fdf5] rounded-2xl p-6 text-center">
                <v.icon size={36} className="text-[#00a50c] mx-auto mb-3" />
                <h3 className="text-base font-bold text-[#333] mb-2">{v.title}</h3>
                <p className="text-sm text-[#666]">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
