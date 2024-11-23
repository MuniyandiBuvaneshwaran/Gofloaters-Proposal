import React from 'react'
import "../../Styles/LargestNetwork.css"
import CustomComponent from '../../Pages/CustomComponent';
import ImageContainer from '../../Pages/ImageContainer';

export default function LargestNetwork() {
    const stats = [
        { value: '50+', label: 'Cities' },
        { value: '320+', label: 'Operators' },
        { value: '35K', label: 'Seats' },
        { value: '2000+', label: 'Meeting Rooms' },
    ];
    return (
        <div>
            <div class="container">
                <div class="row">
                    <div class="col-7">
                        <span className="title-text">Largest Network On Tap</span>
                        <p className='content2'>GoFloaters is India’s largest network of coworking spaces,<br />
                            managed offices & ondemand ofices.</p>
                        <div className="  mt-4">
                            <div className="row text-center">
                                {stats.map((stat, index) => (
                                    <div key={index} className="col-md-3 col-sm-6 mb-3">
                                        <div className="stats-card d-flex flex-column align-items-center justify-content-center mt-2">
                                            <h2 className="stats-value mt-3 text-white">{stat.value}</h2>
                                            <p className="stats-label text-white">{stat.label}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <CustomComponent />
                        </div>
                    </div>
                    <div class="col-5">
                        <div>
                            <ImageContainer />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
