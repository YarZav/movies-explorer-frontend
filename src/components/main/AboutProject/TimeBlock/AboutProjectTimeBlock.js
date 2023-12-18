import './AboutProjectTimeBlock.css';

function AboutProjectTimeBlock(props) {
    return (
        <div>
            <div className={`about-project-time-block about-project-time-block__${props.type}`}>
                <p className={`about-project-time-block__title about-project-time-block__title-${props.type}`}>{props.time}</p>
            </div>
            <p className='about-project-time-block__subtitle'>{props.text}</p>
        </div>
    )
}

export default AboutProjectTimeBlock;