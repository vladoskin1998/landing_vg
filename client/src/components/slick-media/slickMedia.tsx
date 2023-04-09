import "slick-carousel/slick/slick.css";
import { useRef, useMemo, useState } from "react";
import Slider from "react-slick";
import { WraperSlick } from "./wraperSlick";
import { useLocation, useParams } from "react-router-dom";
import { useContext } from "react"
import { AppContext } from "../../context/context"
import { wraperMediaListSlick } from "../../utils/componentParams";
import { MediaEnumFile } from "../../types/types-main"
import { HREF } from "../../utils/const";

export const SlickMedia = () => {

    const [currentSlide, setCurrentSlide] = useState(0);
    const location = useLocation();
    const refSlick = useRef<Slider>(null)
    const { current, setId } = useParams()
    const mediaTypeUrl = wraperMediaListSlick(location.pathname.split('/')[3]);

    console.log(location.pathname.split('/')[3], setId);

    const { video, image } = useContext(AppContext)


    const arr = useMemo(() => (mediaTypeUrl.tag === MediaEnumFile.PHOTO ? image : video)
        .find(it => setId === it?.folderId)?.src || [], [video, image]);

    console.log("arr-SlickMedia--->", arr);

    var settings = {
        arrows: false,
        initialSlide: Number(current) || 0,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        afterChange: (current: number) => {
            setCurrentSlide(current);
        },
    };

    console.log(currentSlide + 1, arr.length);

    return <WraperSlick refSlick={refSlick} stat={`${currentSlide + 1 + '/' + arr.length}`}>
        <Slider {...settings} ref={refSlick}>
            {
                arr.map((item, index) => <div className="slick_cust__slide" key={index + "slick_cust__slid"}>
                    {mediaTypeUrl.tag === MediaEnumFile.VIDEO
                        ? <video controls={false} className="slick_cust__slide-video">
                            <source src={`${HREF}static/${item}`} type="video/mp4" />
                        </video>
                        : <div style={{ backgroundImage: `url(${HREF}static/${item})` }} className="slick_cust__slide-photo about__born-image"></div>
                    }
                </div>)
            }
        </Slider>
    </WraperSlick>


}

export default SlickMedia