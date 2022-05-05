const Die = ({ value }) => {
  return (
    <div className='dieContainer'>
      <div className=''>
        <div className='dieRow'>
          <div className='die'>{value}</div>
          <div className='die'>{value}</div>
          <div className='die'>{value}</div>
          <div className='die'>{value}</div>
          <div className='die'>{value}</div>
        </div>
        <div className='dieRow'>
          <div className='die'>{value}</div>
          <div className='die'>{value}</div>
          <div className='die'>{value}</div>
          <div className='die'>{value}</div>
          <div className='die'>{value}</div>
        </div>
      </div>
    </div>
  )
}

export default Die
