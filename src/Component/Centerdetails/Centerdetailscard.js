import React, { useEffect, useState } from "react";
import axios from "axios";
import Centerdetails from "../../Pages/Centerdetails";

const Centerdetailscard = () => {
  const [proposal, setProposal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://gofloaters.firebaseapp.com/proposal/asdfasdf");
        setProposal(response.data.proposal);
        setLoading(false);
      } catch (err) {
        setError("Failed to load data");
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container">
      {proposal.proposedOptions.map((option, index) => {
        console.log(option.location ,"lat"); // Logging the location
        return (
          <Centerdetails
            key={index}
            centerName={option.centerName}
            inventoryDescription={option.inventoryDescription}
            billableSeats={option.billableSeats}
            pricePerSeat={option.pricePerSeat}
            totalRentPerMonth={option.totalRentPerMont}
            amenities={option.amenities}
            termsAndConditions={option.termsAndConditions}
            location={option.location}
            layouts={option.layout}
            photos={option.photos}
          />
        );
      })}

    </div>
  );
};

export default Centerdetailscard;
