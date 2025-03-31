import HomeHero from '@/components/home/HomeHero';
import LazyHomeCategories from '@/components/home/LazyHomeCategories';
import LazyTopRatedProducts from '@/components/home/LazyTopRatedProducts';

export default function Home() {
  return (
    <div className="space-y-12 my-10">
      <HomeHero />
      <LazyHomeCategories />
      <LazyTopRatedProducts limit={4} />
    </div>
  );
}
