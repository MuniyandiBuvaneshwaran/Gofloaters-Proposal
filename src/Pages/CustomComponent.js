import React from "react";

const CustomComponent = () => {
    const containerStyle = {
        width: "635.541px",
        height: "123.082px",
    };

    const imageContainerStyle = (width, height, translateX, translateY) => ({
        width,
        height,
        transform: `translate(${translateX}px, ${translateY}px)`,
        position: "absolute",
    });

    const imageStyle = (scale) => ({
        transform: `scale(${scale})`,
        transformOrigin: "0px 0px",
        width: "100%",
        height: "100%",
    });

    const images = [
        {
            src: "https://gofloaters-1.my.canva.site/gofloaters-proposal/media/8cd6d2b68df8ae59d655382ae82ed640.png",
            width: "50.4004px",
            height: "25.7042px",
            translateX: 519.503,
            translateY: 95.0164,
            scale: 1,
        },
        {
            src: "https://gofloaters-1.my.canva.site/gofloaters-proposal/media/7a28ea01262c1b4d6b9d7c62befad761.png",
            width: "155.304px",
            height: "34.4277px",
            translateX: 180.258,
            translateY: 88.6547,
            scale: 1,
        },

        {
            src: "https://gofloaters-1.my.canva.site/gofloaters-proposal/media/6429ae19ccf156e801febd7c48816f68.png",
            width: "115.426px",
            height: "25.7042px",
            translateX: 0,
            translateY: 0,
            scale: 1,
        },
        {
            src: "https://gofloaters-1.my.canva.site/gofloaters-proposal/media/2e83bbaaf42f943234fc5a9ddddee0f0.png",
            width: "68.3695px",
            height: "31.3867px",
            translateX: 135.49,
            translateY: 0,
            scale: 1,
        },
        {
            src: "https://gofloaters-1.my.canva.site/gofloaters-proposal/media/4fb1e90461f6b4ade2c34e2356b15cc0.png",
            width: "155.304px",
            height: "34.4277px",
            translateX: 205.503,
            translateY: 1.0164,
            scale: 1,
        },
        {
            src: "https://gofloaters-1.my.canva.site/gofloaters-proposal/media/d5f90b49bab9efd60dc7f878df8ff948.png",
            width: "102.657px",
            height: "17.7675px",
            translateX: 362.001,
            translateY: 3.80959,
            scale: 1,
        },
        {
            src: "	https://gofloaters-1.my.canva.site/gofloaters-proposal/media/e21d0925707c0a33abc212bdbcc9857c.png",
            width: "100.3695px",
            height: "31.3867px",
            translateX: 469.49,
            translateY: 0,
            scale: 1,
        },

        {
            src: "https://gofloaters-1.my.canva.site/gofloaters-proposal/media/db904d363f9e659d1994951866cb9813.png",
            width: "84.3695px",
            height: "31.3867px",
            translateX: 11.49,
            translateY: 46,
            scale: 1,
        },

        {
            src: "https://gofloaters-1.my.canva.site/gofloaters-proposal/media/a1fd96a95751c5dfafd3ca4b542bd258.png",
            width: "70.3695px",
            height: "31.3867px",
            translateX: 130.49,
            translateY: 46,
            scale: 1,
        },

        {
            src: "https://gofloaters-1.my.canva.site/gofloaters-proposal/media/ee5bf1ecad8d5fdf8648d91621d09b0b.png",
            width: "85.3695px",
            height: "31.3867px",
            translateX: 216.503,
            translateY: 46,
            scale: 1,
        },

        {
            src: "https://gofloaters-1.my.canva.site/gofloaters-proposal/media/b64b566e1f06bbf5e0e6506b200ea49d.png",
            width: "86.3695px",
            height: "31.3867px",
            translateX: 325.49,
            translateY: 46,
            scale: 1,
        },

        {
            src: "https://gofloaters-1.my.canva.site/gofloaters-proposal/media/8e15de6bf92fa5af7a00ea6ae69b57a6.png",
            width: "86.3695px",
            height: "91.3867px",
            translateX: 435.49,
            translateY: 10,
            scale: 1,
        },

        {
            src: "https://gofloaters-1.my.canva.site/gofloaters-proposal/media/19b814f43dd318e3b6f4521c1c45d1e0.png",
            width: "68.3695px",
            height: "31.3867px",
            translateX: 6.49,
            translateY: 95,
            scale: 1,
        },

        {
            src: "https://gofloaters-1.my.canva.site/gofloaters-proposal/media/eab3155c858cd5e47bc538014c876bbf.png",
            width: "68.3695px",
            height: "31.3867px",
            translateX: 108.49,
            translateY: 95,
            scale: 1,
        },

        {
            src: "https://gofloaters-1.my.canva.site/gofloaters-proposal/media/e6f5cefcbf81f5d9ae6a1dc3ff2fd62a.png",
            width: "68.3695px",
            height: "31.3867px",
            translateX: 335.49,
            translateY: 95,
            scale: 1,
        },
        {
            src: "https://gofloaters-1.my.canva.site/gofloaters-proposal/media/7f6d4709bf0549f03f33841863891354.png",
            width: "68.3695px",
            height: "31.3867px",
            translateX: 435.49,
            translateY: 95,
            scale: 1,
        },
    ];

    return (
        <div style={containerStyle} className="mt-4">
            {images.map((img, index) => (
                <div
                    key={index}
                    style={imageContainerStyle(img.width, img.height, img.translateX, img.translateY)}
                >
                    <img src={img.src} alt={`img-${index}`} style={imageStyle(img.scale)} />
                </div>
            ))}
        </div>
    );
};

export default CustomComponent;
