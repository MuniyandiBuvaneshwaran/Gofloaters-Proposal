import React from "react";
import "../Styles/Styles.css"
import LocationMap from "./Locationmap";
import LayoutCarousel from "./LayoutCarousel";
import ImageCarousel from "./ImageCarousel";

const Centerdetails = ({
    centerName,
    inventoryDescription,
    billableSeats,
    pricePerSeat,
    totalRentPerMonth,
    amenities,
    termsAndConditions,
    location,
    layouts,
    photos
}) => {
    console.log(location,'ghdgfh')

    return (
        <div className="container2 my-4 p-4  ">
            <h2 className="mb-4 text-start ml-3">{centerName}</h2>
            <table className="centercardtable table-bordered">
                <thead className="centercardtablehead">
                    <tr>
                        <th>Inventory</th>
                        <th>Capacity</th>
                        <th>Rate for Desk</th>
                        <th>Total Rent Per Month</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{inventoryDescription || "As per requirement"}</td>
                        <td>{billableSeats || "N/A"} billable</td>
                        <td>₹{pricePerSeat || "N/A"}</td>
                        <td>{totalRentPerMonth ? `₹${totalRentPerMonth}` : "N/A"}</td>
                    </tr>
                </tbody>
            </table>
            <p className="text-muted small text-end mx-5 mt-3">*Taxes extra as applicable</p>

            <div className="row">
                <div className="col-md-6 centercard">
                    <div className="centercardheader text-white p-2 mb-2">Amenities and Benefits</div>
                    <ul className="list-unstyled text-start  p-3 bg-light">
                        {amenities.map((amenity, index) => (
                            <li key={index}>• {amenity}</li>
                        ))}
                    </ul>
                </div>
                <div className="col-md-6 centercard">
                    <div className="centercardheader text-white text-start p-2 mb-2">Terms and Conditions</div>
                    <ul className="list-unstyled text-start p-3 bg-light">
                        {termsAndConditions.map((term, index) => (
                            <li key={index}>• {term}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="container my-5">
                <LocationMap location={location} />
            </div>

            <div>
                <LayoutCarousel layouts={layouts} />
            </div>
            <div>
                <ImageCarousel images={photos} />
            </div>
        </div>
    );
};

export default Centerdetails;
