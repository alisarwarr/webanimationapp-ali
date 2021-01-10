import React from 'react';
import { Carousel } from 'react-bootstrap';
import { useTheme } from '@material-ui/core/styles';
import { office, social, world, women } from '../images';

function Slider() {
    const theme = useTheme();

    return (
        <Carousel
            className="slider"
            style={theme.palette.type === "dark" ? { backgroundColor: "#000" } : { backgroundColor: "#fff" }}
        >
        {
            [office, social, world, women].map((thatSlide, index) => 
                <Carousel.Item key={index}>
                    <figure>
                        <img
                            src={thatSlide}
                            alt=""
                        />
                    </figure>
                </Carousel.Item>
            )
        }
        </Carousel>
    )
}

export default Slider;