import { WraperMedia } from "./wraperMedia"

const arr = [
    { src: "string", label: "Raw Art", setId: "1" },
    { src: "string", label: "Inshi. New circus", setId: "2" },
    { src: "string", label: "Festival Mondial du Cirque de Demain", setId: "3" },
    { src: "string", label: "Flic Flac The Modern Art of Circus", setId: "4" },

]

const Photo = () => {
    return <div id="Photo"><WraperMedia arr={arr} link={"photo-list"}/></div>
}

export default Photo