import './PageNotFound.css';

import { useNavigate } from 'react-router-dom';

function PageNotFound() {
    const navigate = useNavigate();

    function backHandler() {
        navigate(-1);
    }

    return(
        <div className='page-not-found'>
            <div className='page-not-found__container'>
                <h1 className='page-not-found__title'>404</h1>
                <h1 className='page-not-found__description'>Страница не найдена</h1>
            </div>
            <button className='page-not-found__back highlight' onClick={backHandler}>Назад</button>
        </div>
    )
}

export default PageNotFound;