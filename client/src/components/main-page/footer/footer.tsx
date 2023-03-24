import { Insta, FB, TikTok } from '../../../svg/massenger'
import { RotLine } from '../../../svg/rotLine'


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
                <div className="footer__massenger-svg_massenger"><Insta /><FB /><TikTok /></div>
            </div>
            <div className="footer__massenger-dev">
                <button className="footer__massenger-subtitle"> website  
                <span className="footer__massenger-title footer__massenger-svg_line">
                    {" development "} <RotLine />
                </span> 
                </button>
            </div>
        </div>
    </div>
}