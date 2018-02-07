import React from 'react';
import { Link } from 'react-router-dom'

const styles = require('../../sass/components/header.scss')
const logoSrc = require('../../assets/ncdc-logo.svg')

interface HeaderProps extends React.Component {

}

interface HeaderState extends React.Component {
  navigationOpen: boolean
}

export class Header extends React.Component<HeaderProps, HeaderState> {

  constructor(props) {
    super(props);
    this.state = {navigationOpen: false,}
     this.togglenNavigation = this.togglenNavigation.bind(this);
  }

  // = () => not supported....
  togglenNavigation() {
    this.setState({navigationOpen: !this.state.navigationOpen})
  }

  render() {
    return (
      <header className={styles.header}>
        <div className={styles.menuSearchWrapper}>
          <a onClick={this.togglenNavigation} className={styles.menuButt}><i className="icon-menu__base"></i></a>
          <a className={styles.menuButt}><i className="icon-magnifying-glass__base"></i></a>
        </div>

        <img className={styles.logo} src={logoSrc} alt="NCD Connect logo" width="180" height="103" />

        <div className={styles.menuProfileWrapper}>
          <a className={styles.menuButt}><i className="icon-user__base"></i></a>
        </div>
        {this.state.navigationOpen && 
          <nav>
            <h1>YO</h1>
          </nav>
        }
        
      </header>
    );
  }

}

