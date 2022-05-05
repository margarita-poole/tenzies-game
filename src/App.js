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

  const getNewDice = () => {
   setDice(allNewDice())
   console.log('did it')
  }

  return (
    <main>
      <div className='diceContainer'>{diceElements}</div>
      <button 
      type='button' 
      onClick={getNewDice}
      className='rollButton'>
        Roll
      </button>
    </main>
  )
}

export default App
