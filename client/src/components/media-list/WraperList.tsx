import { ReactElement, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { LeftLine } from "../../svg/leftLine";
import { randList } from "../main-page/media/randList";
import { useLocation } from 'react-router-dom';
import { RightChevron } from "../../svg/rightChevron";
import { Outlet } from "react-router-dom";

const title = (key: string): { title: string, buttonTitle: ReactElement | string } => {
    switch (key) {
        case "photo-list":
            return { title: "photo", buttonTitle: <>open full <br /> size</> }
        case "video-list":
            return { title: "video", buttonTitle: "play" }
        default:
            return { title: 'not found', buttonTitle: 'not found' }

    }
}

export const WraperList = <T extends { src: string },>({
    arr,
}: {
    arr: T[];
}) => {

    let { setId } = useParams();
    const navigate = useNavigate()
    const location = useLocation();
    const path = title(location.pathname.split('/')[1]);


    const exit = () => {
        navigate(-1)
    }

    const toSlick = (photoId: string | number) => {
        console.log("`/${location.pathname.split('/')[1]}/${setId}/${path.title}/1` -->",`/${location.pathname.split('/')[1]}/${setId}/${path.title}/1`);
        
        navigate(`/${location.pathname.split('/')[1]}/${setId}/${path.title}/1`)
    }

    return <div className="media__list content">
 <Outlet />
        <div className="media">
            <h4 className="title__links" onClick={exit}>
                <div><LeftLine /></div>
                back to {path.title}
            </h4>
            <div className="media__list-subtitle">
                <h5>{path.title}</h5>
                <RightChevron />
                <h5>{setId}</h5>
            </div>
            <div className="media__list">
                {randList(arr).map((arrItem: T[], index: number) => (
                    <div
                        className={`media__itemline-${arrItem.length}-${index % 2 === 0 ? "p" : "n"
                            } media__itemline`}
                    >
                        {arrItem.map((item,id) => (
                            <div style={{ backgroundImage: item.src }} className="media__item" >
                                <div className="media__item-bg" onClick={() => toSlick("someid--->"+ id)}>
                                    <button className="media__item-bg_but"> {path.buttonTitle}</button>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
       
    </div >
}