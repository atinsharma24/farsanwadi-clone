import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
  maxStars?: number;
  size?: number;
}

export function StarRating({ rating, maxStars = 5, size = 16 }: StarRatingProps) {
  return (
    <span className="inline-flex items-center gap-[2px]">
      {Array.from({ length: maxStars }, (_, i) => {
        const filled = i < Math.floor(rating);
        const half = !filled && i < rating;
        return (
          <Star
            key={i}
            size={size}
            className={
              filled
                ? "fill-[#f5a623] text-[#f5a623]"
                : half
                  ? "fill-[#f5a623]/50 text-[#f5a623]"
                  : "fill-gray-200 text-gray-200"
            }
          />
        );
      })}
    </span>
  );
}
