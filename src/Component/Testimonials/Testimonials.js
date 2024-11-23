import React from 'react'
import Testimonials1 from "../../assest/image/Testimonials1.webp"
import Testimonials2 from "../../assest/image/Testimonials2.webp"
import Testimonials3 from "../../assest/image/Testimonials3.webp"
import Testimonials4 from "../../assest/image/Testimonials4.webp"
import Testimonials5 from "../../assest/image/Testimonials5.webp"
import Testimonials6 from "../../assest/image/Testimonials6.webp"

export default function Testimonials() {
    return (
        <div>
            <div class="container mt-5">
                <div class="row">
                    <h2 className="display-4 text-start mb-4" style={{ fontWeight: 600 }}>Customer Testimonials</h2>
                    <div class="col-12">
                        <div class="d-flex flex-row" style={{ marginLeft: 5 }}>
                            <img class="w-25 " src={Testimonials1} alt='Testimonials1' />
                            <img class="w-25 mx-2" src={Testimonials2} alt='Testimonials2' />
                            <img class="w-25 mx-2" src={Testimonials3} alt='Testimonials3' />
                            <img class="w-25 mx-2" src={Testimonials4} alt='Testimonials4' />

                        </div>

                    </div>
                </div>
                <div class="col-12 mt-3">
                    <img class="w-25 mx-2" src={Testimonials5} alt='Testimonials5' />
                    <img class="w-25" src={Testimonials6} alt='Testimonials6' />
                </div>
            </div>
        </div>
    )
}
