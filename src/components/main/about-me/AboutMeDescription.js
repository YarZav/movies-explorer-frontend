import Button from "../../common/button/Button";

function AboutMeDescription() {
    function onGithubClick() {
        const URL = 'https://github.com/YarZav';
        window.open(URL, '_blank');
    }

    return (
        <div>
            <h1 className='about-me__title'>Ярослав</h1>
            <h2 className='about-me__subtitle'>Фронтенд-разработчик, 30 лет</h2>
            <p className='about-me__description'>Я прошёл путь от стажёра iOS разработчика до комьюнити-лида. Сейчас решил освоить новый язык программирования.</p>
            <Button type='github' text='GitHub' onClick={onGithubClick}/>
        </div>
    )
}

export default AboutMeDescription;