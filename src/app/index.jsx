import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Header } from './components/Header.jsx';
import { Footer } from './components/Footer.jsx';
import { Home } from './pages/Home.jsx';
import { OtherPage } from './pages/OtherPage.jsx';

const styles = require('../sass/components/main.scss')
require('../sass/base/base.scss')

const Main = () => (
  <section className={styles.main}>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/OtherPage' component={OtherPage}/>
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