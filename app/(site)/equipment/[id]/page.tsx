export default async function EquipmentDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <section className="page-section surface">
      <p className="eyebrow">Equipment detail</p>
      <h1>设备详情占位</h1>
      <p>当前路由参数：{id}。后续会接入公开设备查询、参数展示与联系询价入口。</p>
    </section>
  );
}
