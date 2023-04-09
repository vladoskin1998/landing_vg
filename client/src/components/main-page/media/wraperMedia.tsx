import { randList } from "../../../utils/randList"
import { useNavigate } from "react-router-dom"
import { MediaDataType, MediaEnumFile } from "../../../types/types-main"
import { useContext, useState } from "react"
import { AppContext } from "../../../context/context"
import { AddNew } from "../../admin/add"
import { HREF } from "../../../utils/const"
import { WraperButton } from "./wraperButton"
import { wraperMediaListParams } from "../../../utils/componentParams"
import { $api } from "../../../api/api"
// const wraperMediaParams = (link: string) => {
//     switch (link) {
//         case "photo-list":
//             return { title: "photo", tag: MediaEnumFile.PHOTO }
//         case "video-list":
//             return { title: "video", tag: MediaEnumFile.VIDEO }
//         default:
//             return { title: "photo", tag: MediaEnumFile.PHOTO }
//     }
// }

export const WraperMedia = <T extends MediaDataType,>({
    arr,
    link,
}: {
    arr: T[];
    link: string;
}) => {

    const navigate = useNavigate()
    const mediaType = wraperMediaListParams(link)
    const { device, isAuth } = useContext(AppContext)
    const [opesAdd, setOpenAdd] = useState(false)
    const slideId = mediaType.title[0].toUpperCase() + mediaType.title.slice(1)
    
    const deleteFolder = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>,id:string | number) => {
        e.stopPropagation()
        $api.post('media/delete-folder', { id })
            .then(res => {
                console.log(res.data);
            })
    }

    return <div className={`media ${mediaType.title}`} id={slideId}>
        {
            isAuth
            && <>
                <button className="media--add" onClick={() => setOpenAdd(true)}>Add Collection</button>
                {opesAdd && <AddNew close={() => setOpenAdd(false)}
                    link={`folder-${mediaType.title}`}
                />}
            </>

        }
        <h4 className="title__links">{mediaType.title}</h4>
        <div className="media__list">
            {!arr.length || randList(arr, device).map((arrItem: T[], index: number) => (
                <div className={`media__itemline-${arrItem.length}-${index % 2 === 0 ? "p" : "n"} media__itemline`} key={'wraper-media' + index}>
                    {arrItem.map((item) => (
                        <div style={{ backgroundImage: mediaType.tag === MediaEnumFile.VIDEO ? "none" : `url(${HREF}static/${item.src[0]})` }} className="media__item about__born-image"
                            onClick={() => navigate(`/${link}/${item?.folderId}`)}>
                            {
                                isAuth && <button className="media__item--delete" onClick={(e) => deleteFolder(e,item?.folderId)}>Delete</button>
                            }
                            {
                                mediaType.tag === MediaEnumFile.VIDEO
                                    ? <video controls={false}>
                                        <source src={`${HREF}static/${item.src[0]}`} type="video/mp4" />
                                    </video>
                                    : <></>
                            }
                            <WraperButton label={item?.label} text={<>view <br />all</>} />
                        </div>
                    ))}
                </div>
            ))}
        </div>
    </div>
}
