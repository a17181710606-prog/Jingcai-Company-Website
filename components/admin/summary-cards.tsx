const cards = [
  { title: '在库设备', value: '128', description: '可立即调度，适合快速响应项目需求。' },
  { title: '待归还', value: '12', description: '已出库设备需重点跟进归还时间。' },
  { title: '维修 / 待检', value: '9', description: '影响可用库存的异常设备。' },
  { title: '本周状态变更', value: '43', description: '便于拍摄周会快速回顾库存动态。' }
];

export function SummaryCards() {
  return (
    <div className="card-grid">
      {cards.map((card) => (
        <section className="surface stat-card" key={card.title}>
          <p className="eyebrow">{card.title}</p>
          <h3>{card.value}</h3>
          <p>{card.description}</p>
        </section>
      ))}
    </div>
  );
}
