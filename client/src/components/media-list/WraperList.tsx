import { useNavigate, useParams ,useLocation} from "react-router-dom";
import { randList } from "../../utils/randList";
import { Outlet } from "react-router-dom";
import { useContext } from "react"
import { AppContext } from "../../context/context"
import { HREF } from "../../utils/const";
import { MediaEnumFile, MediaTypeFile, MediaTypeListFoo } from "../../types/types-main"
import { MediaNavTitle } from "./mediaNavTitle";


export const WraperList = <T extends { src: string },>({
    arr,
    label,
    mediaTypesFoo
}: {
    arr:T[],
    label: string,
    mediaTypesFoo: MediaTypeListFoo
}) => {

    let { setId } = useParams();
    const navigate = useNavigate()
    const location = useLocation();

    const { device, isAuth } = useContext(AppContext)
    const toSlick = (id: string | number) => navigate(`/${location.pathname.split('/')[1]}/${setId}/${mediaTypesFoo.title}/${id}`)


    return <div className="media__list content">
        <Outlet />
        <div className="media">
            {
                isAuth && <button className="media--add">Add files</button>
            }
            <MediaNavTitle  label={label} title={mediaTypesFoo.title}/>
            <div className="media__list">

                {randList(arr, device).map((arrItem: T[], index: number) => (
                    <div
                        className={`media__itemline-${arrItem.length}-${index % 2 === 0 ? "p" : "n"
                            } media__itemline`}
                    >
                        {arrItem.map((item, id) => (
                            <div
                                style={{ backgroundImage: mediaTypesFoo.tag === MediaEnumFile.VIDEO ? "none" : `url(${HREF}static/${item.src})` }}
                                className="media__item about__born-image"
                            >
                                {
                                    mediaTypesFoo.tag === MediaEnumFile.VIDEO
                                        ? <video controls={false}>
                                            <source src={`${HREF}static/${item.src}`} type="video/mp4" />
                                        </video>
                                        : <></>
                                }
                                <button className="media__item--delete">Delete</button>
                                <div className="media__item-bg" onClick={() => toSlick(id)}>
                                    <button className="media__item-bg_but"> {mediaTypesFoo.buttonTitle}</button>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>

    </div >
}

export default WraperList