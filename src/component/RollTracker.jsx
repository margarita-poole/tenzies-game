const RollTracker = ({ rollCount }) => {
  return (
    <div className='rollTracker'>
      <p className='congrats'>Congratulations!!!</p>
      <p>
        You've completed Tenzies in 
        <span className='count'>{rollCount}</span>
        rolls!
      </p>
    </div>
  )
}

export default RollTracker
