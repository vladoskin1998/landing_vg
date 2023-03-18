import { Menu } from "./menu"
import { Logo } from "../../svg/logo"
import { HeaderList } from "./headerList"

const textList = [
    "Participant in [Raw Art], a post-circus project created by a Ukrainian",
    "Performing Artist in Mad Apple by Cirque Du Soleil in Las Vegas.",
    "Participant Festival Mondial du Cirque de Demain in Paris in 2020.",
    "La Merce-Mac Festival in Barcelona, Spain in 2020.",
    "Inshi. New circus in Kiev, Ukraine in 2021.",
    "Flic Flac-The Modern Art of Circus in Dortmund, Germany in 2021-2022.",
    "TV show “SuperIntuition” in Kiev, Ukraine",
]

export const Header = () => {
    return (
        <div className="header">
            <div className="header-bg1 header-helper "></div>
            <div className="header-bg2 header-helper "></div>
            <div className="logo">
                <Logo />
            </div>
            <div className="animation"></div>
            <Menu />
            <h5 className="header__undertitle">Aerial Pole Artist</h5>
            <h3 className="header__title">Veronika</h3>
            <h3 className="header__subtitle">Goroshkova</h3>
            <HeaderList textList={textList}/>
            <div className="header__photo"></div>
            <button className="header__button">Contact <div >me</div></button>

        </div>
    )
}
