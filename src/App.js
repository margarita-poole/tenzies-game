import { useState } from 'react'
import './App.css'
import Die from './component/Die'

function App() {
  
  const allNewDice = () => {
    const newDice = []
    for (let i = 0; i < 10; i++) {
      newDice.push(Math.ceil(Math.random() * 6))
    }
    return newDice
  }
  const [dice, setDice] = useState(allNewDice())

  const diceElements = dice.map((die) => <Die value={die} />)

  return (
    <main>
      <div className='diceContainer'>{diceElements}</div>
    </main>
  )
}

export default App
