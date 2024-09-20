import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Timer from './assets/Components/Timer'
import PasswordStrengthCheck from './assets/Components/PasswordStrengthCheck'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PasswordStrengthCheck/>
        
    </>
  )
}

export default App
