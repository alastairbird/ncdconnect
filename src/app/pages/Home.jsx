import React from 'react';
const test = require('../../assets/test.svg');
import { Hero } from '../components/Hero.jsx';


export class Home extends React.Component {
  render () {
    const {isAuthenticated} = this.props;
    return (
      <div>
        <Hero auth={isAuthenticated}/>
      </div>
    );
  }
}
