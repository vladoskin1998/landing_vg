import { Header } from "./header/header"
import { About } from "./about/about"
import { Photo } from "./media/photo"
import { Video } from "./media/video"
import { Festival } from "./festival/festival"
import { Classes } from "./classes/classes"
export const Main = () => {
    return (
        <div className="main content">
            <Header />
            <About />
            <Photo />
            <Video />
            <Festival />
            <Classes />
        </div>
    )
}
