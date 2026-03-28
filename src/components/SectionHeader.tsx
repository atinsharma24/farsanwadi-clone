import Link from "next/link";

interface SectionHeaderProps {
  title: string;
  showViewAll?: boolean;
  viewAllHref?: string;
}

export function SectionHeader({ title, showViewAll = false, viewAllHref = "/shop" }: SectionHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-2xl md:text-3xl font-extrabold font-heading text-[#333] tracking-tight">
        {title}
      </h2>
      {showViewAll && (
        <Link href={viewAllHref} className="section-view-all whitespace-nowrap">
          View All
        </Link>
      )}
    </div>
  );
}
