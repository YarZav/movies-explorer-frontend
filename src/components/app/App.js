import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from '../Main/Main'
import Auth from '../Auth/Auth';
import Page from '../Page/Page';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/signup" element={<Auth type='signup' />} />
          <Route path="/signin" element={<Auth type='signin' />} />
          <Route path="/profile" element={<Page />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
