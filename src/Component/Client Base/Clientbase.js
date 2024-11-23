import React from 'react'
import Clientbaseimg from "../../assest/image/clientBase.png"

export default function Clientbase() {
    return (
        <div>
            <div class="Clientbase">
                <div class="row">
                    <div class="col-9">
                        <h3 className='display-4 Clientbase1'>Growing Client Base</h3>
                        <div>
                            <div className='clientbase2 '>
                                <img src={Clientbaseimg} alt='Clientbaseimg'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
