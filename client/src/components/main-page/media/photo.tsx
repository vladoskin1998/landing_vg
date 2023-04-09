import { useContext } from "react"
import { WraperMedia } from "./wraperMedia"
import { AppContext } from "../../../context/context"

const Photo = () => {
    const { image } = useContext(AppContext)
    return <WraperMedia arr={image} link={"photo-list"} />
}

export default Photo