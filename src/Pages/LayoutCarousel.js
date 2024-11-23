import React from "react";
import { Carousel } from "react-bootstrap";
import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa";
import "../Styles/Styles.css"



const LayoutCarousel = ({ layouts }) => {
    return (
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

                >
                    <FaChevronCircleRight size={30} />
                </span>
            }
        >
            {layouts.map((layout, index) => (
                <Carousel.Item key={index}>
                    <img
                        className="d-block w-100"
                        src={layout.url}
                        alt={layout.label}
                        style={{ height: "80vh", objectFit: "contain" }}
                    />

                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default LayoutCarousel;
