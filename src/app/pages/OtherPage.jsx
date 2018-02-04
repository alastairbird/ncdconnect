import React from 'react';
import { Link } from 'react-router-dom';


export class OtherPage extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>OtherPage</h1>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/OtherPage'>OtherPage</Link></li>
        </ul>
      </div>
    );
  }

}
