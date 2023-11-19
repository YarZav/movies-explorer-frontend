import TechsTag from './TechsTag';

function TechsTags() {
    const technologies = ['HTML', 'CSS', 'JS', 'React', 'Git', 'Express.js', 'mongoDB'];

    return (
        <div className='techs__tags'>
            { technologies.map(technology => { return <TechsTag tag={technology} /> }) }
        </div>
    )
}

export default TechsTags;