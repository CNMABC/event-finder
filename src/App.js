import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navigation from './component/Navigation'
import Home from './component/Home'
import Favourites from './component/Favourites'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navigation />

        <Switch>

          <Route>
            <Favourites path= "/favourites"/>
          </Route>

          <Route>
            <Home path="/" />
          </Route>

        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App

