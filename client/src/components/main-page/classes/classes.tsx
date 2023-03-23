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
            <div className="classes__area-a1">
                <div>
                    <h4 className="title__links">Coaching Experience</h4>
                    <HeaderList textList={textList} />
                </div>
                <div className="classes__area-a1_p1 about__born-image"></div>
                <div className="classes__area-a1_p2 about__born-image"></div>
            </div>
            <div className="classes__area-a2">
                <div className="classes__area-a1_p1 about__born-image"></div>
                <div></div>
                <div className="classes__area-a2_p2 about__born-image"></div>
                <div className="classes__area-a2_p3 about__born-image"></div>
                <div className="classes__area-a2_p4 about__born-image"></div>
            </div>
            <div className="classes__area-a3">
                <div className="classes__area-a3_p1 about__born-image"></div>
                <div></div>
                <div className="classes__area-a3_p2 about__born-image"></div>
                <div className="classes__area-a3_p3 about__born-image"></div>
                <div></div>
            </div>
            <div className="classes__area-a4">
                <div className="classes__area-a4_p1 about__born-image"></div>
                <div></div>
            </div>
        </div>
    </div>
}

export default Classes


