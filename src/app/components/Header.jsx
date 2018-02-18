import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Button } from './Button.jsx';

const styles = require('../../sass/components/header.scss');
const logoSrc = require('../../assets/ncdc-logo.svg');

interface HeaderProps extends React.Component {

}

interface HeaderState extends React.Component {
  navigationOpen: boolean;
  searchBarOpen: boolean;
  profileBarOpen: boolean;
}

export class Header extends React.Component<HeaderProps, HeaderState> {

  constructor(props) {
    super(props);
    this.state = {
      navigationOpen: false,
      searchBarOpen: false,
      profileBarOpen: false
    }
  }

  toggleNavigation = () => {
    this.setState({
      navigationOpen: !this.state.navigationOpen,
      searchBarOpen: false,
      profileBarOpen: false
    })
  }

  toggleSearchBar = () => {
    this.setState({
      navigationOpen: false,
      searchBarOpen: !this.state.searchBarOpen,
      profileBarOpen: false
    })
  }

  toggleProfileBar = () => {
    this.setState({
      navigationOpen: false,
      searchBarOpen: false,
      profileBarOpen: !this.state.profileBarOpen
    })
  }

  render() {
    return (
      <header className={styles.header}>

        {/*Profile bar*/}
        <div className={classNames(styles.profileBar, this.state.profileBarOpen ? styles.profileBarOpen : null)}>
          <Link onClick={this.toggleNavigation} to='/'>Register</Link>
          <Link onClick={this.toggleNavigation} to='/'>Logout</Link>
        </div>
        
        {/*Search bar*/}
        <div className={classNames(styles.searchBar, this.state.searchBarOpen ? styles.searchBarOpen : null)}>
          <input type="text" placeholder="Search..."/>
          <Button>
            Search
          </Button>
        </div>

        <div className={styles.headerWrapper}>
          {/*Toggles*/}
          <div className={styles.menuSearchWrapper}>
            {!this.state.navigationOpen &&
              <a onClick={this.toggleNavigation} className={styles.menuButt}><i className="icon-menu__base"></i></a>
            }
            {this.state.navigationOpen &&
              <a onClick={this.toggleNavigation} className={classNames(styles.menuButt, styles.menuButtOpen)}><i className="icon-cross__base"></i></a>
            }
            <a onClick={this.toggleSearchBar} className={classNames(styles.menuButt, this.state.searchBarOpen ? styles.menuButtOpen : null)}><i className="icon-magnifying-glass__base"></i></a>
          </div>

          {/*Logo*/}
          <img className={styles.logo} src={logoSrc} alt="NCD Connect logo" width="180" height="103" />

          {/*Profile toggle*/}
          <div className={styles.menuProfileWrapper}>
            <a onClick={this.toggleProfileBar} className={classNames(styles.menuButt, this.state.profileBarOpen ? styles.menuButtOpen : null)}><i className="icon-user__base"></i></a>
          </div>
        </div>
       

        {/*Navigation*/}
        <ul className={classNames(styles.nav, this.state.navigationOpen ? styles.navOpen : null)}>
          <li><Link onClick={this.toggleNavigation} to='/'>Home</Link></li>
          <li><Link onClick={this.toggleNavigation} to='/Connect'>Connect</Link></li>
          <li><Link onClick={this.toggleNavigation} to='/Opportunities'>Opportunities</Link></li>
          <li><Link onClick={this.toggleNavigation} to='/Events'>Events</Link></li>
          <li><Link onClick={this.toggleNavigation} to='/About'>About</Link></li>
          <li><Link onClick={this.toggleNavigation} to='/Contact'>Contact</Link></li>
        </ul>
      </header>
    );
  }

}

