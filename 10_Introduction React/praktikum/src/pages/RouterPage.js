import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './Home'
import Contact_us from './Contact_us'

export default function RouterPage() {
  return (
    <div>
        <Router>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/contact_us' component={Contact_us} />
            </Switch>
        </Router>
    </div>
  )
}
