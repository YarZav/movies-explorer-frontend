import './SectionHeader.css';

function SectionHeader(props) {
    return (
        <div className='section__header'>
            <h2 className='section__title'>{props.text}</h2>
            <div className='section__line'></div> 
        </div>
    )
}

export default SectionHeader;