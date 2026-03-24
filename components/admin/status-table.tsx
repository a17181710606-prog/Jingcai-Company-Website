const rows = [
  { sku: 'CAM-A001', name: 'Sony FX6', owner: '景彩自有', status: '在库', location: 'A 区机柜' },
  { sku: 'LEN-B014', name: 'Sigma 24-70mm', owner: '合作商：峰影设备', status: '已预留', location: '项目：春季广告片' },
  { sku: 'LGT-C008', name: 'Aputure 600D', owner: '景彩自有', status: '维修中', location: '维修点：南山服务站' }
];

export function StatusTable() {
  return (
    <div className="surface table-card">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Inventory snapshot</p>
          <h2>关键设备状态示例</h2>
        </div>
        <span className="tag">日志驱动</span>
      </div>
      <table>
        <thead>
          <tr>
            <th>编号</th>
            <th>设备</th>
            <th>所属方</th>
            <th>状态</th>
            <th>当前位置</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.sku}>
              <td>{row.sku}</td>
              <td>{row.name}</td>
              <td>{row.owner}</td>
              <td>
                <span className="tag">{row.status}</span>
              </td>
              <td>{row.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
