import React from 'react';
import { Link } from 'react-router-dom'

const styles = require('../../sass/components/header.scss')
const logoSrc = require('../../assets/replace-with-svg.jpg')

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

        <img className={styles.logo} src={logoSrc} alt="NCD Connect logo" />

        <div className={styles.menuProfileWrapper}>
          <a className={styles.menuButt}><i className="icon-user__base"></i></a>
        </div>
      </header>
    );
  }

}

