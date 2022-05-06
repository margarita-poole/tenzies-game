import { useState } from 'react'
import './App.css'
import Die from './component/Die'
import { nanoid } from 'nanoid'

function App() {
  const generateNewDie = () => {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    }
  }

  const allNewDice = () => {
    const newDice = []
    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDie())
    }
    return newDice
  }
  const [dice, setDice] = useState(allNewDice())

  const diceElements = dice.map((die) => (
    <Die
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      holdDice={() => {
        holdDice(die.id)
      }}
    />
  ))

  const rollDice = (isHeld) => {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.isHeld ? die : generateNewDie()
      })
    )
  }

  const holdDice = (id) => {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die
      })
    )
  }

  const [tenzies, setTenzies] = useState(false)



  return (
    <main>
      <h1 className='title'>Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className='diceContainer'>{diceElements}</div>
      <button type='button' onClick={rollDice} className='rollButton'>
        Roll
      </button>
    </main>
  )
}

export default App
