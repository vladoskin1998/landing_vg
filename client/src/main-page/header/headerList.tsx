import { useId } from "react"
export const HeaderList = ({ textList }: { textList: string[] }) => {
    const id = useId()
    return (
        <ul className="header__list">
            {textList.map((i) => (
                <li style={{ listStyleType: "disc" }} key={id}>
                    {i}
                </li>
            ))}
        </ul>
    )
}
