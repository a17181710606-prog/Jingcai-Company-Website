import Link from 'next/link';

import type { RouteCard } from '@/types/navigation';

export function RouteGrid({ items }: { items: RouteCard[] }) {
  return (
    <div className="card-grid">
      {items.map((item) => (
        <Link className="surface route-card" href={item.href} key={item.href}>
          <span className="eyebrow">{item.status ?? 'Ready for build'}</span>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </Link>
      ))}
    </div>
  );
}
