import React from 'react';
import { Link } from 'react-router-dom'

const styles = require('../../sass/components/header.scss')
const logoSrc = require('../../assets/ncdc-logo.svg')

export class Header extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {
    return (
      <header className={styles.header}>
        <div className={styles.menuSearchWrapper}>
          <a className={styles.menuButt}><i className="icon-menu__base"></i></a>
          <a className={styles.menuButt}><i className="icon-magnifying-glass__base"></i></a>
        </div>

        <img className={styles.logo} src={logoSrc} alt="NCD Connect logo" width="180" height="103" />

        <div className={styles.menuProfileWrapper}>
          <a className={styles.menuButt}><i className="icon-user__base"></i></a>
        </div>
      </header>
    );
  }

}

