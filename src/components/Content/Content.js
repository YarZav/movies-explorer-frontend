import './Content.css';

function Content(props) {
    return (
        <section className={`content__${props.type}`}>
            <div className='content'>
                <div className='content__container'>
                    {props.children}
                </div>
            </div>
        </section>
    )
}

export default Content;