import { HeaderList } from "../header/headerList"

const textList = [
    "Coach in Raw Art Summer School, Kiev, Ukraine in 2021.",
    "Coach in Flash Pole Dance Studio in Kiev, Ukraine in 2020",
    "Coach in Shari Pole Dance Studio in Kiev, Ukraine in 2018.",
    "Did private & group classes in USA, Ukraine.",
    "Inshi. New circus in Kiev, Ukraine in 2021.",
]



const Classes = () => {
    return <div className="classes" id="Classes">
        <h4 className="title__links">Classes</h4>
        <div className="classes__area">
            <div className="classes__area-list">
                <h4 className="title__links">Coaching Experience</h4>
                <HeaderList textList={textList} />
            </div>
            <div className="classes__area_p1 about__born-image"></div>
            <div className="classes__area_p2 about__born-image"></div>
            <div className="classes__area_p3 about__born-image"></div>
            <div className="classes__area_p4 about__born-image"></div>
            <div className="classes__area_p5 about__born-image"></div>
            <div className="classes__area_p6 about__born-image"></div>
            <div className="classes__area_p7 about__born-image"></div>
            <div className="classes__area_p8 about__born-image"></div>
            <div className="classes__area_p9 about__born-image"></div>
            <div className="classes__area_p10 about__born-image"></div>
            <div className="classes__area_empty"></div>
        </div>
    </div>
}

export default Classes


