import './AboutProjectTimeBlock.css';

function AboutProjectTimeBlock(props) {
    return (
        <div>
            <div className={`about-project__timeblock about-project__timeblock_${props.type}`}>
                <p className={`about-project__timeblock__title about-project__timeblock__title_${props.type}`}>{props.time}</p>
            </div>
            <p className='about-project__timeblock__subtitle'>{props.text}</p>
        </div>
    )
}

export default AboutProjectTimeBlock;