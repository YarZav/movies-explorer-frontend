import React from 'react';

function About() {
    const technologies = ['HTML', 'CSS', 'JS', 'React', 'Git', 'Express.js', 'mongoDB'];

    return (
        <div className='about'>
            <div className='about__container'>
                <div className='about__header'>
                    <p className='about__description'>Технологии</p>
                    <div className='about__line'></div> 
                </div>
                <div className='about__info'>
                    <div className='about__text'>
                        <h2 className='about__title'>7 технологий</h2>
                        <p className='about__subtitle'>На курсе веб-разработки мы освоили технологии, которые применили<br />в дипломном проекте.</p>
                    </div>
                    <div className='about__technologies'>
                        {
                            technologies.map((technology) => {
                                return (<div className='about__technology'>{technology}</div>)
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
        // <div className='about'>
        //     <div className='about__container'>
        //             <div className='about__header'>
        //                 {/* <p className='about__description'>Технологии</p>
        //                 <div className='about__line'></div> */}
        //             </div>
        //             <div className='about__info'>
        //                 {/* <div className='about__text'>
        //                     <h2 className='about__title'>7 технологий</h2>
        //                     <p className='about__subtitle'>На курсе веб-разработки мы освоили технологии, которые применили<br />в дипломном проекте.</p>
        //                 </div>
        //                 <div className='about__technologies'>
        //                     {
        //                         technologies.map((technology) => {
        //                             return (<div className='about__technology'>{technology}</div>)
        //                         })
        //                     }
        //                 </div> */}
        //             </div>
        //     </div>
        // </div>
    )
}

export default About;