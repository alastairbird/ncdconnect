import React from 'react';
import { Link } from 'react-router-dom';
const styles = require('../../sass/components/discover.scss');

export class Discover extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="contentWrapper__base">
        <h1>Discover</h1>
        <div >
         <p>Individuals</p>
         <p>Topics</p>
         <p>Organisations</p>
         <p>Countries</p>
         <p>Courses/programmes</p>
        </div>
      </div>
    );
  }

}
