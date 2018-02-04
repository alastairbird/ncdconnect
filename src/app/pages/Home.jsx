import React from 'react';
const test = require('../../assets/test.svg');
import { Link } from 'react-router-dom';
import { Hero } from '../components/Hero.jsx';


export class Home extends React.Component {
  render () {
    return (
      <div>
        <h1>NCD Connect</h1>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/OtherPage'>OtherPage</Link></li>
        </ul>
        <Hero/>
      </div>
    );
  }
}
