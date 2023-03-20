import { Header } from "./header/header"
import { About } from "./about/about"
import { Photo } from "./media/photo"
import { Video } from "./media/video"
export const Main = () => {
    return (
        <div className="main content">
            <Header />
            <About />
            <Photo />
            <Video />
        </div>
    )
}
