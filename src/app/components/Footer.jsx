import React from 'react';
import { Link } from 'react-router-dom'

const styles = require('../../sass/components/footer.scss')

export class Footer extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer className={styles.footer}>
        <small>
         NCDC \\ 2018
         <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/OtherPage'>OtherPage</Link></li>
          </ul>
        </small>
      </footer>
    );
  }

}

