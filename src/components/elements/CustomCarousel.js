import React from 'react'
import { Carousel } from 'react-bootstrap'
import CustomImage from './CustomImage'

export default function CustomCarousel(props) {
    return (
        <div class="cs_CarouselContainer">
            <Carousel>
            {
                props.slides.map(slide => (<Carousel.Item>
                    <CustomImage height={300} src={ slide.image } alt={ slide.title }/>
                </Carousel.Item>))
            }
            </Carousel>
        </div>
    )
}
