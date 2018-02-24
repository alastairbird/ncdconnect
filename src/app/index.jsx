import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Header } from './components/Header.jsx';
import { Footer } from './components/Footer.jsx';
import { Home } from './pages/Home.jsx';
import { Connect } from './pages/Connect.jsx';
import { Opportunities } from './pages/Opportunities.jsx';
import { Events } from './pages/Events.jsx';
import { About } from './pages/About.jsx';
import { Contact } from './pages/Contact.jsx';
import { Login } from './pages/Login.jsx';
import { Privacy } from './pages/Privacy.jsx';
import { Terms } from './pages/Terms.jsx';
import { Sitemap } from './pages/Sitemap.jsx';


const styles = require('../sass/components/main.scss')
require('../sass/base/base.scss')

const Main = () => (
  <section className={styles.main}>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/Connect' component={Connect}/>
      <Route path='/Opportunities' component={Opportunities}/>
      <Route path='/Events' component={Events}/>
      <Route path='/About' component={About}/>
      <Route path='/Contact' component={Contact}/>
      <Route path='/Login' component={Login}/>
      <Route path='/Privacy' component={Privacy}/>
      <Route path='/Terms' component={Terms}/>
      <Route path='/Sitemap' component={Sitemap}/>
    </Switch>
  </section>
)

class App extends React.Component {
  render () {
    return (
      <div>
      	<Header/>
        <Main/>
        <Footer/>
      </div>
    );
  }
}

render((<Router>
          <App/>
        </Router>), document.getElementById('app'))