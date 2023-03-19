import { Header } from "./header/header"
import { About } from "./about/about"
import { Photo } from "./photo/photo"
export const Main = () => {
    return (
        <div className="main content">
            <Header />
            <About />
            <Photo />
        </div>
    )
}
