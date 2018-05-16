import React from 'react'
import { render } from 'react-dom'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom'

const Home = () => (
  <h2>Home</h2>
)

const Work = () => (
  <h2>Work</h2>
)

const App = () => (
  <div>
    <h1>Hello from React!</h1>
    <Router>
      <div>
        <Link to="/">Home</Link>
        <br />
        <Link to="/work">Work</Link>
        <Switch>
          <Route path="/work" component={Work} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  </div>
)

render(
  <App />,
  document.getElementById('app')
)

