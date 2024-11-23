import React, { useEffect, useState } from "react";
import axios from "axios";
import Gofloaters from "../../assest/image/download.jpg"
import "../../Styles/OfficeProposal.css"

export default function OfficeProposal() {
    const [proposal, setProposal] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://gofloaters.firebaseapp.com/proposal/asdfasdf");
                setProposal(response.data.proposal);
                setLoading(false);
                console.log(loading)
            } catch (err) {
                setError("Failed to load data");
                console.log(error)
                setLoading(false);
            }
        };
        fetchData();
    }, [error, loading]);
    return (
        <div>
            <div className='mt-5' >
                <div className="row align-items-center">
                    {/* Left Section */}
                    <div className="col-md-6 text-center">
                        <img
                            src="https://assets.gofloaters.com/logo.png"
                            alt="GoFloaters Logo"
                            className="logo mb-3"
                            width="230"
                            height="65"
                        />
                        <p className="textprimary fw-bold" style={{ marginTop: "30px" }}>Office Space</p>
                        <p className=" textprimarys fw-bold" style={{ marginLeft: 20 }}>Prposal</p>
                        <p className="text-info">{proposal?.clientName}</p>
                    </div>
                    {/* Right Section */}
                    <div className="col-md-6">
                        <img
                            src={Gofloaters}
                            alt="Office Space"
                            className="OfficeSpace  shadow"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
