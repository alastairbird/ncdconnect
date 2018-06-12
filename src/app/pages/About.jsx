import React from 'react';
import { Link } from 'react-router-dom';

export class About extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="contentWrapper__base">
        <h1>About</h1>
        <ul>
          <li>Connect research students working in the NCD space</li>
          <li>Document often siloed NCD research</li>
          <li>Foster collaborations and multi-institution/multi-sectoral projects</li>
          <li>Increase funding opportunities and exposure to prospective employees</li>
          <li>Increase research reach</li>
        </ul>
      </div>
    );
  }

}
