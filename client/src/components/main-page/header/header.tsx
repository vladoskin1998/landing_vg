import { Menu } from "./menu"
import { Logo } from "../../../svg/logo"
import { HeaderList } from "./headerList"
import { SlickHeader } from "./slickHeader"
import { useContext, useState } from "react"
import { AppContext } from "../../../context/context"
import { AboutVideo } from "../about/about-video"
import { Burger } from '../../../svg/burger'
import { MenuBurger } from "./menuBurger"
import { HeaderButton } from "./headerButton"
import { HEADER_TEXT as textList } from "../../../utils/const"

const Header = ({ scrollToBottom }: { scrollToBottom: () => void }) => {

    const { device } = useContext(AppContext)
    const [open, setOpen] = useState(false)

    console.log(open);


    console.log("device------>", device);
    return (
        <div className="header">
            <div className="header-bg1 header-helper "></div>
            <div className="header-bg2 header-helper "></div>
            <div className="logo">
                <Logo />
            </div>
            <div className="animation" />
            {
                device === "pc"
                    ? <Menu />
                    : <MenuBurger close={() => setOpen(false)} open={open}>
                        <Menu />
                    </MenuBurger>
            }
            <h5 className="header__undertitle header__padding">Aerial Pole Artist</h5>
            <h3 className="header__title header__padding">Veronika</h3>
            <h3 className="header__subtitle header__padding">Goroshkova</h3>
            {
                device === "pc"
                    ? <>
                        <HeaderList textList={textList} />
                        <div className="header__photo" />
                        <HeaderButton scrollToBottom={scrollToBottom} />
                    </>
                    :
                    <>
                        <SlickHeader>
                            <HeaderList textList={textList} />
                        </SlickHeader >
                        <AboutVideo />
                        <div className="header__button-wrap">
                            <HeaderButton scrollToBottom={scrollToBottom} />
                        </div>
                    </>
            }

            <button className="header__burger" onClick={() => setOpen(true)}>
                <Logo />
                <Burger />
            </button>
        </div>
    )
}

export default Header