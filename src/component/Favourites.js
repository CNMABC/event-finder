import React, { useState, useEffect } from 'react'
// import axios from 'axios'
import axios from 'axios'


const Favourites = () => {

  const [getEvents, setEvents] = useState([])
  // const [displayFavourites, setDisplayFavourites] = useState('')
  // const [hasError, setHasError] = useState(false)

  // const pullFromLocalStroage = () =>{
  //   localStorage.getItems()
  // }

  // pullFromLocalStroage()
  
  useEffect(() => {
    const getData = async () => {
      const apiKey = 'gCK1UZiAtKeL5bTCeol9GN91BXQYtQFa'
      const { data } = await axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&countryCode=GB&apikey=${apiKey}`)
      setEvents(data._embedded.events)
    }
    getData()
  }, [])

  console.log(getEvents)



  return (
    <div className="wrapper">
      <h1 className="titleFavourite">Your favourites</h1>
    </div>
  )
}

export default Favourites


// move favourite to futher up - DONE 

//  if e.target.id is <1 - return ErrorMessage()
// create ErrorMessage() function
// if e.target >  1 - return e.target id 
