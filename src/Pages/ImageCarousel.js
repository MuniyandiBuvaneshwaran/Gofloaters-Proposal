import React from "react";
import { Carousel } from "react-bootstrap";
import {  FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa"; // Import custom icons
import "../Styles/Styles.css"
const ImageCarousel = ({ images }) => {
    return (
        <div className="custom-carousel-container">
            <Carousel
                interval={null}
                prevIcon={
                    <span
                        className="custom-carousel-control prev"
                    >
                        <FaChevronCircleLeft size={30} />
                    </span>
                }
                nextIcon={
                    <span
                        className="custom-carousel-control next"
                        style={{
                        }}
                    >
                        <FaChevronCircleRight size={30} />
                    </span>
                }
            >
                {images.map((_, index) => {
                    const threeImages = images.slice(index * 3, index * 3 + 3);
                    return (
                        <Carousel.Item key={index} style={{ boxSizing: "inherit" }}>
                            <div className="image-row">
                                {threeImages.map((image, idx) => (
                                    <div key={idx} className="image-item">
                                        <img
                                            className="d-block "
                                            src={image.url}
                                            alt={image.label}
                                        />

                                    </div>
                                ))}
                            </div>
                        </Carousel.Item>
                    );
                })}
            </Carousel>
        </div>
    );
};

export default ImageCarousel;
