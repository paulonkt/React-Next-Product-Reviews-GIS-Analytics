type Props = {
  title: string;
  subtitle?: string;
};

export default function HeroSection({ title, subtitle }: Props) {
  return (
    <section className="text-center px-4 py-8">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">{title}</h1>
      {subtitle && (
        <p className="text-gray-600 max-w-xl mx-auto text-base sm:text-lg">
          {subtitle}
        </p>
      )}
    </section>
  );
}
