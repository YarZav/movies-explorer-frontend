import './Footer.css';

import Content from "../Content/Content";
import Button from "../Button/Button";

function Footer() {
    function onWorkshopClick() {
        const URL = 'https://practicum.yandex.ru/';
        window.open(URL, '_blank');
    }

    function onGitHubClick() {
        const URL = 'https://github.com';
        window.open(URL, '_blank');
    }

    return (
        <Content type='footer'>
            <footer className='footer'>
                <p className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
                <div className='footer__line'></div>
                <div className='footer__description'>
                    <p className='footer__copyright'>&copy; 2023</p>
                    <div className='footer__links'>
                        <Button text='Яндекс.Практикум' onClick={onWorkshopClick}/>
                        <Button text='Github' onClick={onGitHubClick}/>
                    </div>
                </div>
            </footer>
        </Content>
    )
}

export default Footer;