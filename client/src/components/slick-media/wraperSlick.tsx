import { CloseSlick } from "../../svg/closeSlick";
import { PrevSlick } from "../../svg/prevSlick";
import { NextSlick } from "../../svg/nextSlick";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import { ReactNode } from "react";

export const WraperSlick = ({ refSlick, children,stat }: { stat:string,refSlick: React.RefObject<Slider>, children: ReactNode }) => {
    const navigate = useNavigate()
    return <div className="slick_cust">
        <button className="slick_cust__close" onClick={() => navigate(-1)}>
            <CloseSlick />
        </button>
        <div className="slick_cust__num">{stat}</div>
        {
            children
        }
        <button className="slick_cust__prev" onClick={() => refSlick?.current?.slickPrev()}>
            <PrevSlick />
        </button>
        <button className="slick_cust__next" onClick={() => refSlick?.current?.slickNext()}>
            <NextSlick />
        </button>
    </div>
}