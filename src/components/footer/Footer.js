import Content from "../common/content/Content";
import FooterDescription from "./FooterDescription";

function Footer() {
    return (
        <Content type='footer'>
            <footer className='footer'>
                <p className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
                <div className='footer__line'></div>
                <FooterDescription />
            </footer>
        </Content>
    )
}

export default Footer;