import React from 'react';
import '../../Styles/AboutGoFloaters.css'; // Optional custom CSS file
import workspaceImage from '../../assest/image/gofloaters4.webp'; // Replace with the correct image path
import sociallink from "../../assest/image/Gofloaters3.webp"

const Aboutgofloater = () => {
    return (
        <div className="container my-5">
            <div className="row ">
                {/* Text Section */}
                <div className="col-md-8 mt-5">
                    <h1 className="mb-4 About d-flex text-align-start">About GoFloaters</h1>
                    <p className=" content">
                        GoFloaters is a leading provider of flexible and affordable<br></br> coworking space solutions. We began our journey in 2018 as a <br></br>cafe coworking startup.
                    </p>
                    <p className=" content">
                        We now offer a wide range of workspace solutions including <br></br>hybrid workplace solution, meeting space as a service, and<br></br> private offices.
                    </p>
                    <div className="">
                        <div className="d-flex text-align-start mt-5">
                            <img
                                className="socialimage"
                                crossorigin="anonymous"
                                src={sociallink}
                                alt="Custom Content"
                                draggable="false"
                            />
                        </div>
                    </div>
                </div>

                {/* Image Section */}
                <div className="col-md-4 main">
                    <img
                        src={workspaceImage}
                        alt="Office Space"
                        className=" workspace  shadow"
                    />
                </div>
            </div>


        </div>
    );
};

export default Aboutgofloater;
