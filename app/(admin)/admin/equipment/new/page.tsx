export default function NewEquipmentPage() {
  return (
    <section className="form-card surface">
      <p className="eyebrow">Equipment create</p>
      <h1>新建设备</h1>
      <div className="two-column">
        <label>
          设备名称
          <input placeholder="例如 Sony FX6" />
        </label>
        <label>
          内部编号
          <input placeholder="CAM-A001" />
        </label>
        <label>
          设备分类
          <select>
            <option>摄影机</option>
            <option>镜头</option>
            <option>灯光</option>
          </select>
        </label>
        <label>
          当前状态
          <select>
            <option>在库</option>
            <option>已预留</option>
            <option>已出库</option>
            <option>维修中</option>
          </select>
        </label>
      </div>
    </section>
  );
}
