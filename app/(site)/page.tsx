import { Hero } from '@/components/site/hero';
import { RouteGrid } from '@/components/ui/route-grid';
import { sitePages } from '@/lib/data/site';

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="page-section surface">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Public routes</p>
            <h2>前台展示路由骨架</h2>
          </div>
          <span className="tag">只展示公开内容</span>
        </div>
        <RouteGrid items={sitePages} />
      </section>
    </>
  );
}
