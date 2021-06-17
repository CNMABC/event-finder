import React, { useState } from 'react'

const CardComp = ( { image, id, name, venue, date, showModal } ) => {
  const [localStorageItem, setLocalStorageItem] = useState([])

  // eslint-disable-next-line prefer-const

  const saveEventIDToLocalStorage = e => {
    const eventID = e.target.id
    setLocalStorageItem([...localStorageItem, eventID])
    // localStorage.setItem('eventID', JSON.stringify(items))
    // localStorage.setItem('eventID', eventID)
  }

  console.log(localStorageItem)



  return (
    <div className="col-3" key={id}>
      <div className="card">
        <img onClick={showModal} className="card-img-top" src={image} alt="Card image cap" id={id} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{date}</p>
          <p className="card-text">{venue}</p>
        </div>
        <div className="card-footer">
          <i onClick={saveEventIDToLocalStorage} className="far fa-heart" id={id}></i>
        </div>
      </div>
    </div>
  )
}

export default CardComp
