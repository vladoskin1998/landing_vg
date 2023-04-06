import { $api } from "../../../api/api"
import { WraperMedia } from "./wraperMedia"
import { MediaEnumFile, BDFoledrsList } from "../../../types/types-main"
import { useEffect, useState } from "react"

const arr = [
    { src: "string", label: "Raw Art", folderId: "1" },
    { src: "string", label: "Inshi. New circus", folderId: "2" },
    { src: "string", label: "Festival Mondial du Cirque de Demain", folderId: "3" },
    { src: "string", label: "Flic Flac The Modern Art of Circus", folderId: "4" },
]

const Video = () => {
    const [video, setVideo] = useState([])

    useEffect(() => {
        $api.post('media/get-folders', { tag: MediaEnumFile.VIDEO })
            .then(res => {
                setVideo(
                    res.data.map((it: BDFoledrsList) => ({ src: it?.filenames[0], label: it?.title, folderId: it?.title }))
                )
                console.log(res.data);

            })
        console.log('media/get-folders');

    }, [])

   return <WraperMedia arr={video} link={"video-list"} />
    //return <></>
}

export default Video
