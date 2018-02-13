import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const styles = require('../../sass/components/header.scss');
const logoSrc = require('../../assets/ncdc-logo.svg');

interface HeaderProps extends React.Component {

}

interface HeaderState extends React.Component {
  navigationOpen: boolean
}

export class Header extends React.Component<HeaderProps, HeaderState> {

  constructor(props) {
    super(props);
    this.state = {navigationOpen: false}
  }

  togglenNavigation = () => {
    this.setState({navigationOpen: !this.state.navigationOpen})
  }

  render() {
    return (
      <header className={styles.header}>
        <div className={styles.menuSearchWrapper}>
          {!this.state.navigationOpen &&
            <a onClick={this.togglenNavigation} className={styles.menuButt}><i className="icon-menu__base"></i></a>
          }
          {this.state.navigationOpen &&
            <a onClick={this.togglenNavigation} className={classNames(styles.menuButt, styles.menuButtOpen)}><i className="icon-cross__base"></i></a>
          }

          <a className={styles.menuButt}><i className="icon-magnifying-glass__base"></i></a>
        </div>

        <img className={styles.logo} src={logoSrc} alt="NCD Connect logo" width="180" height="103" />

        <div className={styles.menuProfileWrapper}>
          <a className={styles.menuButt}><i className="icon-user__base"></i></a>
        </div>
        <ul className={classNames(styles.nav, this.state.navigationOpen ? styles.navOpen : null)}>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/Connect'>Connect</Link></li>
          <li><Link to='/Opportunities'>Opportunities</Link></li>
          <li><Link to='/Events'>Events</Link></li>
          <li><Link to='/About'>About</Link></li>
          <li><Link to='/Contact'>Contact</Link></li>
        </ul>
      </header>
    );
  }

}

