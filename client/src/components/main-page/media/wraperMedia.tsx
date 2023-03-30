import { randList } from "./randList"
import { useNavigate } from "react-router-dom"
import { MediaDataType } from "../../../types/types-main"
import { useContext } from "react"
import { AppContext } from "../../../context/context"

const makeTitle = (link: string): string => {
    switch (link) {
        case "photo-list":
            return "photo"
        case "video-list":
            return "video"
        default:
            return 'not found'
    }
}

export const WraperMedia = <T extends MediaDataType,>({
    arr,
    link,
}: {
    arr: T[];
    link: string;
}) => {

    const navigate = useNavigate()
    const title = makeTitle(link)
    const { device } = useContext(AppContext)

    return <div className={`media ${title}`} id={title[0].toUpperCase() + title.slice(1)}>
        <h4 className="title__links">{title}</h4>
        <div className="media__list">
            {randList(arr, device).map((arrItem: T[], index: number) => (
                <div
                    className={`media__itemline-${arrItem.length}-${index % 2 === 0 ? "p" : "n"
                        } media__itemline`}
                >
                    {arrItem.map((item) => (
                        <div style={{ backgroundImage: item.src }} className="media__item"
                            onClick={() => navigate(`/${link}/${item.setId}`)}>
                            <h5 className="media__item-text">{item.label}</h5>
                            <div className="media__item-bg">
                                <button className="media__item-bg_but">view <br />all</button>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    </div>
}
