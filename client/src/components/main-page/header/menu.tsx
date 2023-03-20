import { useId } from "react"

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
    return (
        <div className="menu">
            <div className="menu__list">
                {menuList.map((i) => (
                    <div className="menu__list-item" key={id}>
                        {i}
                    </div>
                ))}
            </div>
        </div>
    )
}
