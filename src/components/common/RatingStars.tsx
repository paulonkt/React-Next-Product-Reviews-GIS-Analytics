import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

type Props = {
  rating?: number;
  size?: number;
};

export default function StarRating({ rating = 0, size = 16 }: Props) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.25 && rating % 1 < 0.75;
  const empty = 5 - fullStars - (hasHalf ? 1 : 0);

  return (
    <div className="flex items-center text-yellow-500 gap-0.5">
      {Array.from({ length: fullStars }).map((_, i) => (
        <FaStar key={`f-${i}`} size={size} />
      ))}
      {hasHalf && <FaStarHalfAlt size={size} />}
      {Array.from({ length: empty }).map((_, i) => (
        <FaRegStar key={`e-${i}`} size={size} />
      ))}
    </div>
  );
}
