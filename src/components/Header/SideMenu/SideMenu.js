import './SideMenu.css';

import { useLocation, useNavigate } from 'react-router-dom'

import SideMenuTab from './Tab/SideMenuTab';
import HeaderProfile from '../Profile/HeaderProfile';

import cross from '../../../images/cross.svg'

function SideMenu(props) {
    const location = useLocation();
    const navigate = useNavigate();

    function mainHandler() {
        closeHandler();
        navigate('/');
    }

    function moviesHandler() { 
        closeHandler();
        navigate('/movies');
    }

    function savedMoviesHandler() {
        closeHandler();
        navigate('/saved-movies');
    }

    function profileHandler() {
        closeHandler();
        navigate('/profile');
    }

    function closeHandler() {
        props.onClose();
    }

    return (
        <div className='side-menu'>
            <div className='side-menu__container'>
                <button className='side-menu__cross-button highlight' onClick={closeHandler}>
                    <img className='side-menu__cross-image' src={cross} alt='Cross' />
                </button>
                <div className='side-manu__tabs'>
                    <SideMenuTab 
                        text='Главная' 
                        selected={location.pathname === '/' ? 'selected' : 'deselected'}
                        onClick={mainHandler}
                    />
                    <SideMenuTab 
                        text='Фильмы' 
                        selected={location.pathname === '/movies' ? 'selected' : 'deselected'} 
                        onClick={moviesHandler} 
                    />
                    <SideMenuTab 
                        text='Сохранённые фильмы' 
                        selected={location.pathname === '/saved-movies' ? 'selected' : 'deselected'} 
                        onClick={savedMoviesHandler}
                    />
                </div>
                <div className='side-manu__profile'>
                    <HeaderProfile onClick={profileHandler} />
                </div>
            </div>
        </div>
    )
}

export default SideMenu;