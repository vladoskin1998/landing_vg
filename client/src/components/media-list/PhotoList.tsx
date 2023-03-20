import { WraperList } from "./WraperList";

const arr = [
    { src: "string", photoId: "1" },
    { src: "string", photoId: "2" },
    { src: "string", photoId: "3" },
    { src: "string", photoId: "4" },
]

export const PhotoList = () => {
    return <WraperList arr={arr} />
}



