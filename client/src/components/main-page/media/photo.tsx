import { WraperMedia } from "./wraperMedia"

const arr = [
    { src: "string", label: "Raw Art", folderId: "1" },
    { src: "string", label: "Inshi. New circus", folderId: "2" },
    { src: "string", label: "Festival Mondial du Cirque de Demain", folderId: "3" },
    { src: "string", label: "Flic Flac The Modern Art of Circus", folderId: "4" },

]

const Photo = () => {
    return <div id="Photo"><WraperMedia arr={arr} link={"photo-list"}/></div>
}

export default Photo