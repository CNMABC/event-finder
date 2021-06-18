import React, { useState } from 'react'

const CardComp = ( { image, id, name, venue, date, showModal, localStorageItem, setLocalStorageItem } ) => {
  const [heart, setHeart] = useState(false)

  const saveEventIDToLocalStorage = e => {
    setHeart(true)
    const newLocalStorageItems = [...localStorageItem, e.target.id]
    console.log('new', newLocalStorageItems)
    setLocalStorageItem(newLocalStorageItems)
    localStorage.setItem('EventID', JSON.stringify(newLocalStorageItems))
    getItem()
  }

  const getItem = () => {
    const item = localStorage.getItem('EventID')
    console.log('ITEM', JSON.parse(item))
  }



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
          <i onClick={saveEventIDToLocalStorage} className={ !heart ? 'far fa-heart' : 'fas fa-heart' } id={id}></i>
        </div>
      </div>
    </div>
  )
}

export default CardComp

// far fa-heart
