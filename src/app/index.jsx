import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Header } from './Header.jsx';
import { Footer } from './Footer.jsx';
import { Home } from './pages/Home.jsx';
import { OtherPage } from './pages/OtherPage.jsx';

require('../sass/base/base.scss')

const Main = () => (
  <section>
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