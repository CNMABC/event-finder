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
      <div className="wrapper">

        {getSingleShow.map(ite =>
          <Modal id="modal-wrapper" show={show} onHide={handleClose} key={ite.id}>
            <Modal.Body>
              <Modal.Title className="modal-title">{ite.name}</Modal.Title>
              <div className="container">
                <div className="row">
                  <div className="col">
                    <p>{ite.pleaseNote}</p>
                  </div>
                  <div className="col">
                    Column
                  </div>
                  <div className="col">
                    <img id="img-modal" src={ite.images[3].url} alt={ite.name} />
                  </div>
                  <div className="row">
                    <div className="col">
                      <p>{ite.ticketLimite}</p>
                    </div>
                  </div>
                </div>
              </div>



            </Modal.Body>
            {/* <Modal.Footer>
            </Modal.Footer> */}
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
