/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <body>
       
        <header className='narbar'>
            <div className='logo'>
              <h1>logo</h1>
            </div>
            <ul className='left'>
              <li><a href='#'>home</a></li>
              <li><a href='#'>shop</a></li>
              <li><a href='#'>about</a></li>
            </ul>
            <ol>
              <li><a href='#'>&#128682; login</a></li>
              <li><a href='#'>about</a></li>
            </ol>
        </header>

        <section className='sec'>
            <nav className='text'>
              <h1>ขายขนมปัง</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, <br /> cum provident. Ut, molestiae ab dignissimos incidunt nisi <br /> repellendus quam excepturi omnis tenetur culpa doloremque maxime quis. Laudantium rem quos fugit!</p>
              <button><a href='#'>shop</a></button>
            </nav>
            <div>
              <img src="data:image/jpeg;base64,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" alt="" />
            </div>
        </section>

    </body>
  )
}

export default App
