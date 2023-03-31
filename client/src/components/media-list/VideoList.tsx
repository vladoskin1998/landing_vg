import { WraperList } from "./wraperList";

const arr = [
    { src: "string", videoId: "1" },
    { src: "string", videoId: "2" },
    { src: "string", videoId: "3" },
    { src: "string", videoId: "4" },
]

export const VideoList = () => {
    return <WraperList arr={arr} />
}

export default VideoList