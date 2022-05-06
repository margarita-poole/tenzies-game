const Die = (props) => {
  const styles = { backgroundColor: props.isHeld ? '#59E391' : '#FFFFFF' }

  return (
    <div className='dieFace' 
        style={styles} 
        onClick={props.holdDice}>
      <h2 className='dieNum'>{props.value}</h2>
    </div>
  )
}

export default Die
