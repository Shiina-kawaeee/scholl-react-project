import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './component/Home.jsx';
import Layout from './component/Layout.jsx';

import './App.css';

function App() {

  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
