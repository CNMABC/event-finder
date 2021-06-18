import React, { useEffect, useState } from 'react'
import CardComp from './CardComp'
import axios from 'axios'


const Favourites = () => {

  const [getEvents, setEvents] = useState([])



  const getItem = () => {
    const item = localStorage.getItem('EventID')
    return JSON.parse(item)
  }

  useEffect(() => {
    console.log(getItem())
    const getData = async () => {
      const apiKey = 'gCK1UZiAtKeL5bTCeol9GN91BXQYtQFa'
      const { data } = await axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&countryCode=GB&apikey=${apiKey}`)
      const apiArray = data._embedded.events
      const comparison = apiArray.filter(ite => getItem().includes(ite.id))
      // setEvents(apiArray.filter(ite => idsFromLocalStorage.includes(ite.id)))
      setEvents(comparison)
    }
    getData()
  }, [])

  console.log(getEvents)


  return (
    <>
      <div className="wrapper">
        <h1 className="titleFavourite">Your favourites</h1>
      </div>
      <div className="container">
        <div className="scroll">
          <div className="row flex-row flex-nowrap">
            {getEvents.map(ite =>
              <CardComp
                key={ite.id}
                name={ite.name}
                id={ite.id}
                image={ite.images[2].url}
                // showModal={showModal}
                venue={ite._embedded.venues[0].name}
                date={ite.dates.start.localDate}
                // localStorageItem={localStorageItem}
                // setLocalStorageItem={setLocalStorageItem}
              />
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Favourites


// move favourite to futher up - DONE 

//  if e.target.id is <1 - return ErrorMessage()
// create ErrorMessage() function
// if e.target >  1 - return e.target id 
