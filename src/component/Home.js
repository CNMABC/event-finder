import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import axios from 'axios'

const Home = () => {
  const [getEvents, setEvents] = useState([])
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

  const showModal = e => {
    const userInput = e.target.value
    const getShow = getEvents.filter(ite => ite.id === userInput)
    console.log(getShow)
    setShow(true)

  }


  // console.log(getEvents)



  return (
    <>
      <div className="wrapper">

        <Modal show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, youre reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>

        <div className="container-fluid">
          <div className="row flex-row flex-wrap">
            {getEvents.map(ite =>
              <div className="col-3" key={ite.id}>
                <div className="card">
                  <img onClick={showModal} className="card-img-top" src={ite.images[2].url} alt="Card image cap" id={ite.id}/>
                  <div className="card-body">
                    <h5 className="card-title">{ite.name}</h5>
                    <p className="card-text">{ite.dates.start.localDate}</p>
                    <p className="card-text">{ite._embedded.venues[0].name}</p>
                  </div>
                  <div className="card-footer">
                    <a className="btn btn-danger"><i className="far fa-heart" id={ite.id}></i></a>
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
