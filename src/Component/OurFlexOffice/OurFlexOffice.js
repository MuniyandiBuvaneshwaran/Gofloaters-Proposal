import React from 'react'
import ourflex from "../../assest/image/ourflex.webp"
import ourflex2 from "../../assest/image/ourflex.webp"
import ourflex3 from "../../assest/image/ourflex.webp"
import "../../Styles/OurFlexOffice.css"

export default function OurFlexOffice() {
    return (
        <div className='' style={{ marginTop: 190 }}>
            <div className="container text-cente my-5 " style={{ marginLeft: 90 }}>
                <h2 className="mb-4 display-4 fw-bold">Our Flex Office Offerings</h2>
                <div className="row">
                    {/* Card 1 */}
                    <div className="col-md-4">
                        <div className=" flex-card cards">
                            <img
                               src={ourflex}
                                alt="Unified Hybrid Workplace"
                                className="card-img-top"
                            />
                            <div className="card-body p-3">
                                <h4 className="card-title text-white text-start" >Unified Hybrid Workplace</h4>
                                <p className="card-text text-white mt-4 text-start" style={{fontSize:20}}>
                                    Simplify hybrid work across India and manage corporate offices
                                    with one platform. Pay-per-use, no contracts.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="col-md-4">
                        <div className=" flex-card cards">
                            <img
                                src={ourflex2}
                                alt="Meeting Spaces as a Service"
                                className="card-img-top"
                            />
                            <div className="card-body p-3">
                                <h4 className="card-title text-white text-start">Meeting Spaces As a Service</h4>
                                <p className="card-text text-white mt-4 text-start" style={{fontSize:20}}>
                                    Our 2300+ spaces cater to all meeting needs, from boardrooms to
                                    training sessions.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="col-md-4">
                        <div className=" flex-card cards">
                            <img
                                src={ourflex3}
                                alt="Flex Offices on Rent"
                                className="card-img-top"
                            />
                            <div className="card-body p-3">
                                <h4 className="card-title text-white text-start">Flex Offices on Rent</h4>
                                <p className="card-text text-white mt-4 text-start" style={{fontSize:20}}>
                                    We find the perfect office <br></br>(coworking or managed) – stress-free
                                    & free of charge.   
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
