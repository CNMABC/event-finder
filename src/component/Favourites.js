import React from 'react'

const Favourites = () => {

  const [displayFavourites, setDisplayFavourites] = useState('')
  const [hasError, setHasError] = useState(false)

  console.log(setDisplayFavourites)
  console.log(setHasError)




  return (
    <div className="wrapper">
      <h1>Your favourites</h1>
    </div>
  )
}

export default Favourites


// move favourite to futher up - DONE 

//  if e.target.id is <1 - return ErrorMessage()
// create ErrorMessage() function
// if e.target >  1 - return e.target id 
