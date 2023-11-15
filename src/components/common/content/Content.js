function Content(props) {
    return (
        <div className={`${props.backgroundColor}`}>
            <div className='content'>
                <div className='content__container'>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Content;