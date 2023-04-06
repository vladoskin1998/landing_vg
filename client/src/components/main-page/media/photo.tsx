import { useEffect, useState } from "react"
import { $api } from "../../../api/api"
import { WraperMedia } from "./wraperMedia"
import { MediaEnumFile, BDFoledrsList } from "../../../types/types-main"

const arr = [
    { src: "string", label: "Raw Art", folderId: "1" },
    { src: "string", label: "Inshi. New circus", folderId: "2" },
    { src: "string", label: "Festival Mondial du Cirque de Demain", folderId: "3" },
    { src: "string", label: "Flic Flac The Modern Art of Circus", folderId: "4" },
]


const Photo = () => {

    const [image, setImage] = useState([])

    useEffect(() => {
        $api.post('media/get-folders', { tag: MediaEnumFile.PHOTO })
            .then(res => {
                setImage(
                    res.data.map((it: BDFoledrsList) => ({ src: it?.filenames[0], label: it?.title, folderId: it?.title }))
                )
                console.log(res.data);

            })
        console.log('media/get-folders');

    }, [])

    return <div id="Photo"><WraperMedia arr={image} link={"photo-list"} /></div>
}

export default Photo