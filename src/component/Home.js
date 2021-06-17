import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Home = () => {
  const [getEvents, setEvents] = useState([])

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
    <>
      <div className="wrapper">
        <div className="container-fluid">
          <div className="row flex-row flex-wrap">
            {getEvents.map(ite =>
              <div className="col-3" key={ite.id}>
                <div className="card">
                  <img className="card-img-top" src={ite.images[2].url} alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">{ite.name}</h5>
                    <p className="card-text">{ite.dates.start.localDate}</p>
                    <p className="card-text">{ite._embedded.venues[0].name}</p>
                  </div>
                  <div className="card-footer">
                    <a className="btn btn-danger"><i className="far fa-heart"></i></a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
