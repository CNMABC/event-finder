import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navigation from './component/Navigation'
import Home from './component/Home'
import Favourites from './component/Favourites'
import FooterPage from './component/FooterPage'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        

        <Switch>

          <Route path="/favourites">
            <Favourites />
          </Route>

          <Route path="/" >
            <Home />
          </Route>

        </Switch>

        <FooterPage />
      </BrowserRouter>
      
    </>
  )
}

export default App

