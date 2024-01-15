import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './component/Home.jsx';
import Layout from './component/Layout.jsx';
import Shop from './component/Shop.jsx';
import Login from './component/Login.jsx';
import About from './component/About.jsx';
import NotFound from './component/NotFound.jsx';
import Register from './component/register.jsx';

import './App.css';

function App() {

  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/login' element={<Login />} />
          <Route path='/about' element={<About />} />
          <Route path='/register' element={<Register />} />
          <Route path='_' element={<NotFound />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
