import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from '../main/Main'
import Auth from '../auth/Auth';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/signup" element={<Auth />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
