import { useState } from 'react'
import './App.css'
import Home from '../src/paginasPrincipais/home/index';

function App() {
  const [count, contador] = useState(0)

  return (
    <div className="App">

      <Home /> 
                                    {/* Chamar as const principais */}
    </div>
  )
}

export default App
