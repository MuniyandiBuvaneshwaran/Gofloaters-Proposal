import React from "react";
import "../Styles/Styles.css"

const LocationMap = ({ location }) => {


  // Location details from the JSON
  const { lat, lng, address } = location

  const zoom = 15

  // Generate Google Maps Embed URL
  const mapEmbedUrl = `https://www.google.com/maps/embed/v1/view?key=AIzaSyAtFGn5qR4tJYFfLt4DRrZQl2xjVZzjruM&center=${lat},${lng}&zoom=${zoom}&maptype=roadmap`;

  return (
    <div className="container mt-5">
      {/* Map Section */}
      <div className="map-container">
        <iframe
          title="Google Map"
          src={mapEmbedUrl}
          width="100%"
          height="250"
          style={{ border: "0", borderRadius: "10px" }}
          allowFullScreen=""
          loading="lazy"
        >
        </iframe>
      </div>

      {/* Address Section */}
      <p className="address mt-3 text-center">
        <strong>{address}</strong>
      </p>
    </div>
  );
};

export default LocationMap;
