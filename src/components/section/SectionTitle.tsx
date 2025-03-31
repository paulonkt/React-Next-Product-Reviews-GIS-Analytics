export default function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xl uppercase font-bold mb-4 border-b pb-2">{children}</h2>
  );
}
