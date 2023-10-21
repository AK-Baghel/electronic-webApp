import React from 'react'
import { CCarousel } from "@coreui/react"
import { CCarouselItem ,CImage} from "@coreui/react"
import "./style.css"
function Carousel() {
    return (
        <CCarousel controls indicators interval={2000}>
            <CCarouselItem> 
                <CImage className="d-block w-80 new" src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt="slide 1" />
            </CCarouselItem>
            <CCarouselItem>
                <CImage className="d-block w-80 new" src="https://i.pinimg.com/564x/84/bb/80/84bb80a5e0ce779fca4c1f6a4d444987.jpg" alt="slide 1" />
            </CCarouselItem>
            <CCarouselItem>
                <CImage className="d-block w-80 new" src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt="slide 1" />
            </CCarouselItem>
            
        </CCarousel>
    )
}

export default Carousel