import React from 'react'
import Logo from './logo.svg'
import Joke from './Components/Joke'


function App(){
    return(
        <div>
            <header>
                <nav>
                    <img src={Logo} width='100px'/>
                    <h2>GERARD'S APP</h2>
                    <ul>
                        <li>Menu</li>
                        <li>Contact</li>
                        <li>Home</li>
                        <li>Gallery</li>
                    </ul>
                </nav>
            </header>

            <main>
                <h4>REASONS I LOVE REACT</h4>
                <ol>
                    <li>It is declarative</li>
                    <li>It a hireable skill</li>
                    <li>It maintained by facebook</li>
                    <li>It is composable</li>
                </ol>
            </main>
            {Joke}

            <footer>
                <small>@2023 gerardiornongo copywrite</small>
            </footer>
        </div>
    )
}

export default App 