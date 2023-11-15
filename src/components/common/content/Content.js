function Content(props) {
    return (
        <div className={`content_${props.type}`}>
            <div className='content'>
                <div className='content__container'>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Content;