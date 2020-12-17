import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CardSelect from './pages/CardSelect'
import MainPage from './pages/MainPage'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <MainPage />
        </Route>

        <Route path='/cards'>
          <CardSelect />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
