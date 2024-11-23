import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../Styles/Recommendedspaces.css"

const Recommendedspaces = () => {
  const [proposal, setProposal] = useState(null); // To store fetched data
  const [loading, setLoading] = useState(true);  // Loading state
  const [error, setError] = useState(null);      // Error state

  useEffect(() => {
    const fetchProposalData = async () => {
      try {
        const response = await axios.get("https://gofloaters.firebaseapp.com/proposal/asdfasdf");
        setProposal(response.data.proposal); // Set the proposal data
        setLoading(false); // Turn off the loading state
      } catch (err) {
        setError(err.message || "Failed to fetch data");
        setLoading(false); // Turn off the loading state
      }
    };

    fetchProposalData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container1" style={{marginTop:100}}>
      <h2 className="display-4 text-start" style={{fontWeight:600}}>Recommended Spaces</h2>
      <div className="table-responsive">
        <table className="tables table-bordered">
          <thead className="header">
            <tr>
              <th >Space Details</th>
              {proposal.proposedOptions.map((option, index) => (
                <th key={index}>{option.centerName}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* Price per Seat */}
            <tr>
              <td className="sideheader">Price per Seat</td>
              {proposal.proposedOptions.map((option, index) => (
                <td key={index}>₹{option.pricePerSeat}</td>
              ))}
            </tr>

            {/* Total Rent */}
            <tr>
              <td className="sideheader">Total Rent per Month</td>
              {proposal.proposedOptions.map((option, index) => (
                <td key={index}>₹{option.totalRentPerMont}</td>
              ))}
            </tr>

            {/* Location */}
            <tr>
              <td className="sideheader">Location</td>
              {proposal.proposedOptions.map((option, index) => (
                <td key={index}>{option.locality}</td>
              ))}
            </tr>

            {/* Security Deposit */}
            <tr>
              <td className="sideheader">Security Deposit</td>
              {proposal.proposedOptions.map((option, index) => (
                <td key={index}>₹{option.securityDeposit}</td>
              ))}
            </tr>

            {/* Notice Period */}
            <tr>
              <td className="sideheader">Notice Period</td>
              {proposal.proposedOptions.map((option, index) => (
                <td key={index}>{option.noticePeriod}</td>
              ))}
            </tr>

            {/* Lockin Period */}
            <tr>
              <td className="sideheader">Lockin Period</td>
              {proposal.proposedOptions.map((option, index) => (
                <td key={index}>{option.lockinPeriod}</td>
              ))}
            </tr>

            {/* Parking Charges */}
            <tr>
              <td className="sideheader">Parking Charges</td>
              {proposal.proposedOptions.map((option, index) => (
                <td key={index}>{option.parkingCharges}</td>
              ))}
            </tr>

            {/* Available From */}
            <tr>
              <td className="sideheader">Available From</td>
              {proposal.proposedOptions.map((option, index) => (
                <td key={index}>{option.availableFrom}</td>
              ))}
            </tr>

           
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Recommendedspaces;
