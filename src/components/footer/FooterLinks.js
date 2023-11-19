import Button from "../common/button/Button";

function FooterLinks() {
    function onWorkshopClick() {
        const URL = 'https://practicum.yandex.ru/';
        window.open(URL, '_blank');
    }

    function onGitHubClick() {
        const URL = 'https://github.com';
        window.open(URL, '_blank');
    }

    return (
        <div className='footer__links'>
            <Button text='Яндекс.Практикум' onClick={onWorkshopClick}/>
            <Button text='Github' onClick={onGitHubClick}/>
        </div>
    )
}

export default FooterLinks;