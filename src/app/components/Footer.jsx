import React from 'react';
import { Link } from 'react-router-dom'

const styles = require('../../sass/components/footer.scss')
const logoSrc = require('../../assets/ncdc-logo-plain.svg');

export class Footer extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer className={styles.footer}>
        <img className={styles.logo} src={logoSrc} width="" height="" alt="NCD Connect logo" />
        <ul className={styles.nav}>
          <li><Link to='/'>Connect</Link></li>
          <li><Link to='/'>Opportunities</Link></li>
          <li><Link to='/'>Events</Link></li>
          <li><Link to='/'>About</Link></li>
          <li><Link to='/'>Contact</Link></li>
        </ul>
        <small className={styles.botLinks}>
        Terms & Conditions / Sitemap
        </small>
      </footer>
    );
  }

}

