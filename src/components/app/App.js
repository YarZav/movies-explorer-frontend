import './App.css';

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from '../Main/Main';
import Auth from '../Auth/Auth';
import Page from '../Page/Page';
import PageNotFound from '../PageNotFound/PageNotFound';
import ProtectedRoute from '../Routes/ProtectedRoute';
import AuthedRoute from '../Routes/AuthedRoute';
import Preloader from '../Preloader/Preloader';

import UserContext from '../../context/UserContext';

import { authorisedApi } from '../../utils/MainApi';
import { mainLocalStorage } from '../../utils/MainLocalStorage';

function App() {
  const [isLoading, setIsLoading] = React.useState(true);

  const [user, setUser] = React.useState({});

  function userHandler() {
    getInitData();
  }

  // Fetch user data

  function getInitData() {
    if (!mainLocalStorage.getJwt()) {
      return;
    }

    setIsLoading(true);

    authorisedApi.getUsersMe()
    .then((usersMe) => {
      setUser(usersMe.data);
    }) 
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      setIsLoading(false);
    })
  }

  React.useEffect(() => {
    getInitData();
  }, []);

  return (
    <UserContext.Provider value={user}>
      <div className='app'>
        { isLoading && <Preloader /> }
        { !isLoading && <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/signup" element={<AuthedRoute element={Auth} type='signup' onUser={userHandler} />} />
            <Route path="/signin" element={<AuthedRoute element={Auth} type='signin' onUser={userHandler} />} />
            <Route path="/profile" element={<ProtectedRoute element={Page} type='profile' />} />
            <Route path="/movies" element={<ProtectedRoute element={Page} type='movies' />} />
            <Route path="/saved-movies" element={<ProtectedRoute element={Page} type='saved-movies'/>} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter> }
      </div>
    </UserContext.Provider>
  );
}

export default App;
