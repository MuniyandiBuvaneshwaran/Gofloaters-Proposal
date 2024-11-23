import React from 'react'
import OfficeProposal from '../Component/OfficeProposal/OfficeProposal'
import Aboutgofloater from '../Component/Aboutgofloater.js/Aboutgofloater'
import LargestNetwork from '../Component/LargestNetwork/LargestNetwork'
import OurFlexOffice from '../Component/OurFlexOffice/OurFlexOffice'
import Whychooseus from '../Component/WhyChooseUs/Whychooseus'
import RecommendedSpaces from '../Component/RecommendedSpaces/Recommendedspaces'
import Centerdetailscard from '../Component/Centerdetails/Centerdetailscard'
import Clientbase from '../Component/Client Base/Clientbase'
import Testimonials from '../Component/Testimonials/Testimonials'
import Conculsion from '../Component/Conculsion/Conculsion'

export default function Screen() {
    return (
        <div>
            <OfficeProposal />
            <Aboutgofloater />
            <LargestNetwork/>
            <OurFlexOffice/>
            <Whychooseus/>
            <RecommendedSpaces/>
            <Centerdetailscard/>
            <Clientbase/>
            <Testimonials/>
            <Conculsion/>
        </div>
    )
}
