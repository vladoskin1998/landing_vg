import { randList } from "./randList"
import { RandReturnFoo, ListMedia, MediaDataType } from "../../types/types-main"

const arr = [
    { src: "string", label: "Raw Art", setId: "" },
    { src: "string", label: "Inshi. New circus", setId: "" },
    { src: "string", label: "Festival Mondial du Cirque de Demain", setId: "" },
    { src: "string", label: "Flic Flac The Modern Art of Circus", setId: "" },

]

export const Photo = () => {
    return <div className="photo">
        <h4 className="title__links">Photo</h4>
        <div className="photo__list">
            {randList(arr).map((arrItem: ListMedia, index) => (
                <div
                    className={`photo__itemline-${arrItem.length}-${index % 2 === 0 ? "p" : "n"
                        } photo__itemline`}
                >
                    {arrItem.map((item) => (
                        <div style={{ backgroundImage: item.src }} className="photo__item">
                            <h5 className="photo__item-text">{item.label}</h5>
                            <div className="photo__item-bg">
                                <button className="photo__item-bg_but">view <br />all</button>
                            </div>
                        </div>

                    ))}
                </div>
            ))}
        </div>
    </div>
}
