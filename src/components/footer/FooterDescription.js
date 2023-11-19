import Button from "../common/button/Button";
import FooterLinks from "./FooterLinks";

function FooterDescription() {
    return (
        <div className='footer__description'>
            <p className='footer__copyright'>&copy; 2023</p>
            <FooterLinks />
        </div>
    )
}

export default FooterDescription;