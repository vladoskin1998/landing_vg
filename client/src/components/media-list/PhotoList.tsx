import { ReactElement } from "react";
import { WraperList } from "./wraperList";

const arr = [
    { src: "string", photoId: "1" },
    { src: "string", photoId: "2" },
    { src: "string", photoId: "3" },
    { src: "string", photoId: "4" },
]

export const PhotoList = ():ReactElement => {
    return <WraperList arr={arr} />
}



export default PhotoList