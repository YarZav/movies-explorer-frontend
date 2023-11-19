function Section(props) {
    return (
        <div className={`section section_${props.type}`}>
            <div className={`setcion__container section__container_${props.type}`}>
                {props.children}
            </div>
        </div>
    )
}

export default Section;