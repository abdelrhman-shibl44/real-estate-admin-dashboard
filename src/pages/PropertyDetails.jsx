import { useParams, Link } from "react-router-dom";

import { useState } from "react";
import { properties } from "../data/properties";

export default function PropertyDetails() {
  const { id } = useParams();

  //note: in real life we will use useEffect to specific data to the user when id changes

  const property = properties.find((p) => p.id === Number(id));

  const [selectedImage, setSelectedImage] = useState(property?.images?.[0]);

  if (!property) {
    return (
      <div className="container py-5">
        <h3>Property not found</h3>
        <Link to="/properties" className="btn btn-secondary mt-3">
          Back
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-4">
      {/* TOP ACTIONS */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <Link to="/properties" className="btn btn-secondary">
          ← Back
        </Link>

        <button className="btn btn-primary" disabled>
          Edit
        </button>
      </div>

      <div className="row g-4">
        {/* LEFT SIDE - GALLERY */}
        <div className="col-md-6 overflow-scroll">
          {/* MAIN IMAGE */}
          <div className="gallery-main mb-3">
            <img src={selectedImage} alt={property.name} />
          </div>

          {/* THUMBNAILS */}
          <div className="gallery-thumb d-flex gap-2">
            {property.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="thumb"
                className={selectedImage === img ? "active" : ""}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
        </div>

        {/* RIGHT SIDE - INFO */}
        <div className="col-md-6">
          <h2 className="mb-2">{property.name}</h2>

          <p className="text-muted mb-2">{property.location}</p>

          <h4 className="text-primary mb-3">
            {property.price.toLocaleString()} EGP
          </h4>

          {/* STATUS */}
          <span
            className={
              property.status === "Available"
                ? "badge-available"
                : property.status === "Sold"
                  ? "badge-sold"
                  : "badge-reserved"
            }
          >
            {property.status}
          </span>

          <hr />

          {/* DETAILS */}
          <p>{property.description}</p>

          <div className="mt-3">
            <p>
              <b>Type:</b> {property.type}
            </p>
            <p>
              <b>Area:</b> {property.area} m²
            </p>
            <p>
              <b>Rooms:</b> {property.rooms}
            </p>
            <p>
              <b>Bathrooms:</b> {property.bathrooms}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
