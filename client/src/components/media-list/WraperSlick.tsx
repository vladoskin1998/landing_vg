import { useId, useRef } from "react";
import Slider from "react-slick";
import { CloseSlick } from "../../svg/closeSlick";
import { PrevSlick } from "../../svg/prevSlick";
import { NextSlick } from "../../svg/nextSlick";
import "slick-carousel/slick/slick.css";
import { useNavigate } from "react-router-dom";

export const WraperSlick = () => {

    const navigate = useNavigate()
    const id = useId()
    const refSlick = useRef<Slider>(null)

    var settings = {
        arrows: false,
        initialSlide: 0,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return <div className="slick_cust">
        <button className="slick_cust__close" onClick={() => navigate(-1)}>
            <CloseSlick />
        </button>
        <div className="slick_cust__num">1/8</div>
        <Slider {...settings} ref={refSlick}>
            {
                [1, 2, 3].map((e, i) => <div className="slick_cust__slide" key={id}>
                    <h3 style={{fontSize:"300px"}}>{i}</h3>
                </div>)
            }
        </Slider>
        <button className="slick_cust__prev" onClick={() => refSlick?.current?.slickPrev()}>
            <PrevSlick />
        </button>
        <button className="slick_cust__next" onClick={() => refSlick?.current?.slickNext()}>
            <NextSlick />
        </button>
    </div>
}

export default WraperSlick