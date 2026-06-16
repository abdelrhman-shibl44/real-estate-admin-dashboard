import RecentProperties from "../components/dashboard/RecentProperties";
import StatCard from "../components/dashboard/StatCard";
import { properties } from "../data/properties";

export default function Dashboard() {
  const statItems = [
    {
      title: "Total Properties",
      value: properties.length,
      icon: "bi-buildings",
      color: "#0d6efd",
    },

    {
      title: "Total Clients",
      value: 124,
      icon: "bi-people",
      color: "#198754",
    },

    {
      title: "New Requests",
      value: 18,
      icon: "bi-bell",
      color: "#ffc107",
    },

    {
      title: "Total Sales",
      value:
        properties
          .filter((p) => p.status === "Sold")
          .reduce((sum, p) => sum + p.price, 0)
          .toLocaleString() + " EGP",
      icon: "bi-cash-coin",
      color: "#dc3545",
    },
  ];

  return (
    <div className="container-fluid">
      <div className="row g-3 mb-4">
        {statItems.map((item, index) => (
          <div className="col-md-6 col-lg-3" key={index}>
            <StatCard {...item} />
          </div>
        ))}
      </div>
      <RecentProperties properties={properties} />
    </div>
  );
}
