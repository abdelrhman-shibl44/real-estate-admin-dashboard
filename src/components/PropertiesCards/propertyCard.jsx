import { Link } from "react-router-dom";

export default function PropertyCard({ property }) {
  return (
    <Link
      to={`/properties/${property.id}`}
      className="text-decoration-none text-dark"
    >
      <div className="card property-card">
        {/* IMAGE */}
        <img src={property.images[0]} alt={property.name} />

        <div className="p-3">
          {/* NAME */}
          <h5 className="mb-1">{property.name}</h5>

          {/* TYPE */}
          <p className="text-muted mb-1">{property.type}</p>

          {/* PRICE */}
          <h6 className="text-primary mb-2">
            {property.price.toLocaleString()} EGP
          </h6>

          {/* STATUS */}
          <span
            className={`badge ${
              property.status === "Available"
                ? "badge-available"
                : property.status === "Sold"
                  ? "badge-sold"
                  : "badge-reserved"
            }`}
          >
            {property.status}
          </span>
        </div>
      </div>
    </Link>
  );
}
