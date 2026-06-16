import { useState } from "react";
import { properties } from "../../data/properties";
import PropertyCard from "./propertyCard";
import useDebounce from "../../hooks/useDebounce";

export default function Properties() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const debounceSearch = useDebounce(search, 500);

  const filtered = properties.filter((p) => {
    const matchSearch = p.name
      .toLowerCase()
      .includes(debounceSearch.toLowerCase());

    const matchStatus = statusFilter === "All" || p.status === statusFilter;

    return matchSearch && matchStatus;
  });

  return (
    <div className="container py-3">
      {/* HEADER */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3>Properties</h3>
      </div>

      {/* SEARCH + FILTER */}
      <div className="row g-2 mb-4">
        <div className="col-md-6">
          <input
            className="form-control"
            placeholder="Search property name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="col-md-3">
          <select
            className="form-control"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Available">Available</option>
            <option value="Sold">Sold</option>
            <option value="Reserved">Reserved</option>
          </select>
        </div>
      </div>

      {/* CARDS */}
      <div className="row g-3">
        {filtered.map((property) => (
          <div className="col-md-6 col-lg-4" key={property.id}>
            <PropertyCard property={property} />
          </div>
        ))}
      </div>
    </div>
  );
}
