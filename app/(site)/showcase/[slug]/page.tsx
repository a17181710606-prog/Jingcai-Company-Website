export default async function ShowcaseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  return (
    <section className="page-section surface">
      <p className="eyebrow">Showcase detail</p>
      <h1>案例详情占位</h1>
      <p>当前案例标识：{slug}。后续接入 Markdown / 富文本内容与媒体素材。</p>
    </section>
  );
}
