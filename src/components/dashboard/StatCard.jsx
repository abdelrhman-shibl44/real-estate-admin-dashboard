export default function StatCard({ title, value, icon, color }) {
  return (
    <div className="card stat-card shadow-sm p-3">
      <div className="d-flex align-items-center justify-content-between">
        <div>
          <h6 className="text-muted mb-1">{title}</h6>
          <h3 className="fw-bold mb-0">{value}</h3>
        </div>

        <div
          className="stat-icon w-10 h-10 text-white rounded-circle d-flex align-items-center justify-content-center"
          style={{ width: "30px", height: "30px", backgroundColor: color }}
        >
          <i className={`bi ${icon}`}></i>
        </div>
      </div>
    </div>
  );
}
