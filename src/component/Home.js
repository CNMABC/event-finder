import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal'
// import Button from 'react-bootstrap/Button'
import CardComp from './CardComp'
import axios from 'axios'

const Home = () => {
  const [getEvents, setEvents] = useState([])
  const [modalID, setModalID] = useState('')
  const [getSingleShow, setSingleShow] = useState([])
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)

  useEffect(() => {
    const getData = async () => {
      const apiKey = 'gCK1UZiAtKeL5bTCeol9GN91BXQYtQFa'
      const { data } = await axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&countryCode=GB&apikey=${apiKey}`)
      setEvents(data._embedded.events)
    }
    getData()
  }, [])

  useEffect(() => {
    const getData = async () => {
      const apiKey = 'gCK1UZiAtKeL5bTCeol9GN91BXQYtQFa'
      const { data } = await axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&countryCode=GB&apikey=${apiKey}`)
      const filteredData = data._embedded.events.filter(ite => ite.id === modalID)
      setSingleShow(filteredData)
    }
    getData()
  }, [modalID])



  const showModal = e => {
    setModalID(e.target.id)
    setShow(true)
  }

  console.log(getSingleShow)

  return (
    <>
      <h1 className="DiscoverHeading">Discover a new event</h1>
      <div className="wrapper">

        {getSingleShow.map(ite =>
          <Modal id="modal-wrapper" show={show} onHide={handleClose} key={ite.id}>
            <Modal.Body>
              <Modal.Title className="modal-title">{ite.name}</Modal.Title>
              <div className="container">
                <div className="card-modal">
                  <img className="card-img-top" src={ite.images[2].url} alt="Card image cap" />
                  <p className="card-text-image">{ite._embedded.venues[0].name}</p>
                  <p className="card-text-date">{ite.classifications[0].genre.name}</p>
                  <div className="card-body">
                    <p className="card-location"><strong>{ite._embedded.venues[0].city.name}</strong></p>
                    <p className="card-status"><strong>{ite.dates.status.code}</strong></p>
                    <p className="card-text">{ite.ticketLimite}</p>
                    <p className="card-text">{ite._embedded.venues[0].boxOfficeInfo.willCallDetail}</p>
                    <p className="card-text">{ite._embedded.venues[0].generalInfo.generalRule}</p>
                  </div>
                </div>
              </div>



            </Modal.Body>
            <Modal.Footer>
              <a href={ite.url} rel="noreferrer " target="_blank"><i className="fas fa-ticket-alt"></i></a>

            </Modal.Footer>
          </Modal>
        )}

        <div className="container">
          <div className="row flex-row flex-wrap">
            {getEvents.map(ite =>
              <CardComp
                key={ite.id}
                name={ite.name}
                id={ite.id}
                image={ite.images[2].url}
                showModal={showModal}
                venue={ite._embedded.venues[0].name}
                date={ite.dates.start.localDate}
              />
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Home


// Title = {ite.name}
// Image = {ite.images[3].url}
// Location
// Genre = {classifications[0].genre.name}
// Date
// Ticket Info = {ite.ticketLimite}
// Promoters = {promoters[0].name}
// Price Range = {priceRanges[0].currency}
// Price Range = {priceRanges[0].min}
// Price Range = {priceRanges[0].max}
