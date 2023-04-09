import { LeftLine } from "../../svg/leftLine";
import { RightChevron } from "../../svg/rightChevron";
import { useNavigate } from "react-router-dom";

export const MediaNavTitle = ({ label, title }: { label: string, title: string }) => {
    const navigate = useNavigate()
    const exit = () => navigate(-1)
    return <>
        <h4 className="title__links" onClick={exit}>
            <div><LeftLine /></div>
            back to {title}
        </h4>
        <div className="media__list-subtitle">
            <h5>{title}</h5>
            <RightChevron />
            <h5>{label}</h5>
        </div>
    </>
}