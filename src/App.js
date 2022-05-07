import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import './App.css'
import Die from './component/Die'
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'
import RollTracker from './component/RollTracker'

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
  const [rollCount, setRollCount] = useState(0)
  const [tenzies, setTenzies] = useState(false)

  useEffect(() => {
    const allHeld = dice.every((die) => die.isHeld)
    const firstValue = dice[0].value
    const allSameValue = dice.every((die) => die.value === firstValue)
    if (allHeld && allSameValue) {
      setTenzies(true && <Confetti />)
      console.log('You Won!')
    }
  }, [dice])

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
    if (!tenzies) {
      setDice((oldDice) =>
        oldDice.map((die) => {
          return die.isHeld ? die : generateNewDie()
        })
      )
      setRollCount(rollCount + 1)
    } else {
      setTenzies(false)
      setDice(allNewDice())
      setRollCount(0)
    }
  }

  console.log('rollCount', rollCount)

  const holdDice = (id) => {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die
      })
    )
  }

  return (
    <main>
      {tenzies &&
        ReactDOM.createPortal(
          <Confetti style={{ zIndex: 0 }} />,
          document.body
        )}
      <h1 className='title'>Tenzies</h1>
      <p className='instructions'>
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className='diceContainer'>{diceElements}</div>
      <button type='button' onClick={rollDice} className='rollButton'>
        {tenzies ? 'New Game' : 'Roll'}
      </button>
      {tenzies && <RollTracker rollCount={rollCount} />}
    </main>
  )
}

export default App
