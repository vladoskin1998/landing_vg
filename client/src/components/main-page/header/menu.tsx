import { useId } from "react"
import { Link, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { useRef } from "react"
const menuList = [
    "Home",
    "About",
    "Photo",
    "Video",
    "Festival & TV",
    "Classes",
    "Collaboration",
    "Contacts",
]

export const Menu = () => {
    const id = useId()
    const scrollerRef = useRef(scroller)
    const options = {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart"
    }
    const scrollTo = (link: string) => scrollerRef?.current.scrollTo(link, options)

    return (
        <div className="menu">
            <div className="menu__list">
                {menuList.map((i) => (
                    <div className="menu__list-item" key={id} onClick={() => scrollTo(i)}>
                        {i}
                    </div>
                ))}
            </div>
        </div>
    )
}
