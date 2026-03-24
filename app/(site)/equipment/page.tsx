const publicEquipment = [
  ['Sony FX6', '摄影机', '4K 全画幅摄影机，支持高机动拍摄。'],
  ['DJI Ronin 4D', '稳定器 / 一体机', '适用于品牌短片与高效运动镜头。'],
  ['Aputure 600D', '灯光', '广告拍摄常用的大功率定向光源。']
];

export default function EquipmentPage() {
  return (
    <section className="page-section surface">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Equipment directory</p>
          <h1>设备目录</h1>
        </div>
        <span className="tag">Public inventory only</span>
      </div>
      <div className="card-grid">
        {publicEquipment.map(([name, category, description]) => (
          <article className="route-card surface" key={name}>
            <p className="eyebrow">{category}</p>
            <h3>{name}</h3>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
