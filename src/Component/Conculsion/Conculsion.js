import React from 'react'
import conculsion from "../../assest/image/conculsion.png"
export default function Conculsion() {
    return (
        <div>
            <div className='container ' style={{ marginTop: 100 ,height:100}}>
                <div className='row'  >
                    <div className='col-5' >
                        <img
                            src="https://assets.gofloaters.com/logo.png"
                            alt="GoFloaters Logo"
                            className="conculsionlogo mb-3"
                            width="230"
                            height="65"
                        />
                        <h1 className='conculsionh1 display-1 mt-5'>
                            Thank You<br />
                            So Much
                        </h1>
                        <div className='conculsioncontent mx-4 mt-5'>
                            <p className='name mb-2 fw-bold'>Shyam Sundar Nagarajan</p>
                            <span className='span mt-2'>Founder& CEO</span><br></br>
                            <span className='span'>shyam@gofloaters.com</span>
                        </div>

                    </div>
                    <div className='col-7'>
                        <div className='conculsionimage'>
                            <img
                                src={conculsion}
                                alt="Office Space"
                                className=" "
                                width="530"
                                height="600"
                            />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
