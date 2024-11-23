import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../Styles/WhyChooseUs.css";
import gofloaters5 from "../../assest/image/gofloaters5.webp"
import gofloaters6 from "../../assest/image/Gofloaters9.webp"
import gofloaters7 from "../../assest/image/gofloaters8.webp"
import gofloaters8 from "../../assest/image/gofloaters7.png"
import gofloaters9 from "../../assest/image/gofloaters6.webp"

const Whychooseus = () => {
  return (
    <div className="container" style={{marginTop:100}}>
      <h2 className="text-center mb-3 display-3" style={{fontWeight:600}}>Why choose GoFloaters?</h2>
      <p className="text-center subheading ">Co-working and Managed offices</p>
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="row gy-4 Whychoose">
            {/* Item 1 */}
            <div className="col-md-6 d-flex align-items-start">
              <img
                src={gofloaters5}
                alt="Lowest Price Guaranteed"
                className="icon"
              />
              <div className="ms-3 choosecontent">
                <h5>Lowest Price Guaranteed</h5>
                <p>You can trust us with our fair and dependable prices.</p>
              </div>
            </div>

            {/* Item 2 */}


            <div className="col-md-6 d-flex align-items-start">
              <img
                src={gofloaters8}
                alt="SafeContracts"
                className="icon"
              />
              <div className="ms-3 choosecontent">
                <h5>SafeContracts</h5>
                <p>Get a free agreement review from experts.</p>
              </div>
            </div>

            {/* Item 3 */}

            <div className="col-md-6 d-flex align-items-start">
              <img
                src={gofloaters6}
                alt="Try Before You Commit"
                className="icon"
              />
              <div className="ms-3 choosecontent">
                <h5>Try before you commit</h5>
                <p>Explore space usage for free before finalizing the agreement.</p>
              </div>
            </div>


            {/* Item 4 */}
            <div className="col-md-6 d-flex align-items-start">
              <img
                src={gofloaters9}
                alt="Free SaaS Marketplace"
                className="icon"
              />
              <div className="ms-3 choosecontent">
                <h5>Free SaaS Marketplace</h5>
                <p>Save up to 40% on your SaaS expenses.</p>
              </div>
            </div>

            {/* Item 5 */}

            <div className="col-md-6 d-flex align-items-start">
              <img
                src={gofloaters7}
                alt="Free PAN India Membership"
                className="icon"
              />
              <div className="ms-3 choosecontent">
                <h5>Free PAN India Membership</h5>
                <p>On-demand access to meeting rooms and day passes across 50+ cities.</p>
              </div>
            </div>

            {/* Item 6 */}
            <div className="col-md-6 d-flex align-items-start">
              <img
                src={gofloaters9}
                alt="SecureStart"
                className="icon"
              />
              <div className="ms-3 choosecontent">
                <h5>SecureStart</h5>
                <p>Secure entry until Ready to Establish.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whychooseus;
