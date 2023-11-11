import React from 'react';

import AboutSection from './AboutSection';

function AboutDescription() {
    return (
        <div className='about__description'>
            <AboutSection 
                title='Дипломный проект включал 5 этапов' 
                subtitle='Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.' 
            />
            <AboutSection 
                title='На выполнение диплома ушло 5 недель'
                subtitle='У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.'
            />
        </div>
    )
}

export default AboutDescription;