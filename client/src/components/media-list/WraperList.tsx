import { ReactElement } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { LeftLine } from "../../svg/leftLine";
import { randList } from "../main-page/media/randList";
import { useLocation } from 'react-router-dom';
import { RightChevron } from "../../svg/rightChevron";

const title = (key: string): { title: string, buttonTitle: ReactElement | string } => {
    switch (key) {
        case "photo-list":
            return { title: " photo", buttonTitle: <>open full <br /> size</> }
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

    let { id } = useParams();
    const navigate = useNavigate()
    const location = useLocation();
    const path = title(location.pathname.split('/')[1]); 
  
    return <div className="media__list content">
        <div className="photo">
            <h4 className="title__links" onClick={() => navigate(-1)}>
                <div><LeftLine /></div>
                back to { path.title}
            </h4>
            <div className="media__list-subtitle">
                <h5>{ path.title}</h5>
                <RightChevron />
                <h5>{ id }</h5>
            </div>
            <div className="photo__list">
                {randList(arr).map((arrItem: T[], index: number) => (
                    <div
                        className={`photo__itemline-${arrItem.length}-${index % 2 === 0 ? "p" : "n"
                            } photo__itemline`}
                    >
                        {arrItem.map((item) => (
                            <div style={{ backgroundImage: item.src }} className="photo__item" onClick={() => { }}>
                                <div className="photo__item-bg">
                                    <button className="photo__item-bg_but"> {path.buttonTitle}</button>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    </div >
}