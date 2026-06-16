import { useNavigate } from "react-router-dom";

export default function RecentProperties({ properties }) {
  const recent = properties.slice(0, 5);
  const navigate = useNavigate();

  return (
    <div className="card shadow-sm dashboard-table">
      <div className="card-header">
        <h6 className="mb-0">Recent Properties</h6>
      </div>

      <div className="table-responsive">
        <table className="table mb-0">
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {recent.map((p) => (
              <tr
                key={p.id}
                className="table-row-clickable"
                onClick={() => navigate(`/properties/${p.id}`)}
              >
                {/* NAME + IMAGE */}
                <td>
                  <div className="table-property-cell">
                    <img
                      src={p.images[0]}
                      className="table-property-img"
                      alt={p.name}
                    />
                    <span>{p.name}</span>
                  </div>
                </td>

                <td>{p.type}</td>

                <td>{p.price.toLocaleString()} EGP</td>

                <td>
                  <span
                    className={`badge ${
                      p.status === "Available"
                        ? "badge-available"
                        : p.status === "Sold"
                          ? "badge-sold"
                          : "badge-reserved"
                    }`}
                  >
                    {p.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
