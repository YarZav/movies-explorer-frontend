import AboutProjectColumn from './AboutProjectColumn';

function AboutProjectDescription() {
    return (
        <div className='about-project__description'>
            <AboutProjectColumn 
                title='Дипломный проект включал 5 этапов' 
                subtitle='Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.' 
            />
            <AboutProjectColumn 
                title='На выполнение диплома ушло 5 недель'
                subtitle='У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.'
            />
        </div>
    )
}

export default AboutProjectDescription;