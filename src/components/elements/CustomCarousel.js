import React from 'react'
import { Carousel } from 'react-bootstrap'

export default function CustomCarousel(props) {
    return (
        <div class="cs_CarouselContainer">
            <Carousel>
            {
                props.slides.map(slide => (<Carousel.Item>
                    <img src={ slide.image } alt={ slide.title }/>
                    <Carousel.Caption>
                        <h3>{ slide.title }</h3>
                        <p>{ slide.description }</p>
                    </Carousel.Caption>
                </Carousel.Item>))
            }
            </Carousel>
        </div>
    )
}
