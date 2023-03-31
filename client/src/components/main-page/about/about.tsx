import { HeaderList } from "../header/headerList"
import { AboutVideo } from "./about-video"
import { ABOUT_TEXT as textList} from "../../../utils/const"

const About = () => {

    return (
        <div className="about about__born-image" id="About">
            <h4 className="title__links">About</h4>
            <div className="about__vg">
                <AboutVideo />
                <div className="about__vg-title">
                    <h3>Veronika</h3>
                    <h3>Goroshkova</h3>
                </div>
            </div>
            <div className="about__born">
                <div className="about__born-1 about__born-image"></div>
                <div className="about__born-2 about__born-image"></div>
                <div className="about__born-3 about__born-image"></div>
                <div className="about__vg-title">  
                    <h3>Veronika Goroshkova</h3>
                </div>
                <div className="about__born-4 about__born-image">
                    <div className="about__born-4_main">
                        <h4>05.05.1999</h4>
                        <h4>Born in Mariupol, Ukraine</h4>
                        <h4>
                            Professional circus artist specialised in Aerial
                            pole
                        </h4>
                    </div>
                    <div className="about__born-4_submain">
                        <p>
                            Veronika started training in 2015. A graduate of
                            Kiev Municipal Academy of Variety and Circus Arts.
                        </p>
                        <p>
                            Veronika Goroshkova was selected to perform on the
                            prestigious Festival Mondial du Cirque de Demain in
                            Paris in 2020.
                        </p>
                        <p>
                            Currently Performing in Mad Apple by Cirque Du
                            Soleil in Las Vegas.
                        </p>
                    </div>
                </div>
            </div>
            <div className="about__expirience">
                <div className="about__expirience-1 about__born-image">
                    <h4 className="title__links">Experience</h4>
                    <HeaderList textList={textList} />
                </div>
                <div className="about__expirience-2 about__born-image"></div>
                <div className="about__expirience-3 about__born-image"></div>
                <div className="about__expirience-4 about__born-image"></div>
            </div>
        </div>
    )
}


export default About