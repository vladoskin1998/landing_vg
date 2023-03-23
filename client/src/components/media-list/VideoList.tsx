import { WraperList } from "./WraperList";

const arr = [
    { src: "string", photoId: "1" },
    { src: "string", photoId: "2" },
    { src: "string", photoId: "3" },
    { src: "string", photoId: "4" },
]

export const VideoList = () => {
    return <WraperList arr={arr} />
}

export default VideoList