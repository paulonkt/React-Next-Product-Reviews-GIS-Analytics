import Link from 'next/link';
import { Home, ChevronRight } from 'lucide-react';

type Crumb = {
  label: string;
  href?: string;
};

type Props = {
  items: Crumb[];
};

export default function Breadcrumbs({ items }: Props) {
  return (
    <nav className="text-sm text-gray-500 mb-4 flex items-center space-x-1">
      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-1">
          {index > 0 && <ChevronRight className="w-4 h-4" />}
          {index === 0 && item.href ? (
            <Link href={item.href} className="hover:underline text-gray-700 inline-flex items-center gap-1">
              <Home className="w-4 h-4" />
              {item.label}
            </Link>
          ) : item.href ? (
            <Link href={item.href} className="hover:underline text-gray-700">
              {item.label}
            </Link>
          ) : (
            <span className="text-gray-400">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
}
