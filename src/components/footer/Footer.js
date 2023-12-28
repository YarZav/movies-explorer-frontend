import './Footer.css';

import Content from "../Content/Content";

function Footer() {
    function bootcampHandler() {
        const url = 'https://practicum.yandex.ru/';
        window.open(url, '_blank');
    }

    function gitHubHandler() {
        const url = 'https://github.com';
        window.open(url, '_blank');
    }

    return (
        <Content type='footer'>
            <footer className='footer'>
                <p className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
                <div className='footer__line'></div>
                <div className='footer__description'>
                    <p className='footer__copyright'>&copy; 2023</p>
                    <div className='footer__links'>
                        <button className='footer__button highlight' onClick={bootcampHandler}>Яндекс.Практикум</button>
                        <button className='footer__button highlight' onClick={gitHubHandler}>Github</button>
                    </div>
                </div>
            </footer>
        </Content>
    )
}

export default Footer;