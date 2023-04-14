import { Insta, FB, TikTok } from '../../../svg/massenger'
import { RotLine } from '../../../svg/rotLine'
import '../../../style/main-page/footer.scss';

export const Footer = () => {
    return <div className="footer" id="Contacts">
        <h4 className="title__links">contacts</h4>
        <h4 className="title__links footer__vg">Join Veronika today</h4>
        <h5 className="footer__vg-subtitle">Getting more done together</h5>
        <div className="footer__massenger">
            <div>
                <h5 className="footer__massenger-title">Phone Number</h5>
                <h6 className="footer__massenger-subtitle">+1 7028495699</h6>
            </div>
            <div>
                <h5 className="footer__massenger-title">Email</h5>
                <h6 className="footer__massenger-subtitle">veronika.aerial.pole@gmail.com</h6>
            </div>
            <div>
                <h5 className="footer__massenger-title">Follow</h5>
                <div className="footer__massenger-svg_massenger">
                    <a href=" https://instagram.com/veronika.goroshkova?igshid=YmMyMTA2M2Y=" target="_blank">
                        <Insta />
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100014832395332&mibextid=LQQJ4d" target="_blank">
                        <FB />
                    </a>
                    <a href="https://www.tiktok.com/@nika.aerial.pole?_t=8aFCg3X0ko1&_r=1" target="_blank">
                        <TikTok />
                    </a>
                </div>
            </div>
            <a href="https://instagram.com/ruslan_ray_?igshid=ZjE2NGZiNDQ=" target="_blank">
                <div className="footer__massenger-dev">
                    <button className="footer__massenger-subtitle"> website
                        <span className="footer__massenger-title footer__massenger-svg_line">
                            {" development "} <RotLine />
                        </span>
                    </button>
                </div>
            </a>
        </div>
    </div>
}