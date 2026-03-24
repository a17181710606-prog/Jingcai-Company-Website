export default async function AdminEquipmentDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <section className="page-section surface">
      <p className="eyebrow">Equipment edit</p>
      <h1>设备详情 / 编辑</h1>
      <p>当前设备 ID：{id}。后续接入规格 JSON、图片上传、状态流转与日志写入。</p>
    </section>
  );
}
