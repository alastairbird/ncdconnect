import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Button } from './Button.jsx';
import { SearchBar } from './SearchBar.jsx';
import { Navigation } from './Navigation.jsx';
import { ProfileBar } from './ProfileBar.jsx';

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
        <ProfileBar profileBarOpen={this.state.profileBarOpen}/>
        {/*Search bar*/}
        <SearchBar searchBarOpen={this.state.searchBarOpen}/>

        <div className={styles.headerWrapper}>
        
          {/*Toggles*/}
          <div className={styles.toggleWrappers}>
            {!this.state.navigationOpen && <a onClick={this.toggleNavigation} className={styles.menuButt}><i className="icon-menu__base"></i></a>}
            {this.state.navigationOpen && <a onClick={this.toggleNavigation} className={classNames(styles.menuButt, styles.menuButtOpen)}><i className="icon-cross__base"></i></a>}
            {!this.state.searchBarOpen && <a onClick={this.toggleSearchBar} className={styles.menuButt}><i className="icon-magnifying-glass__base"></i></a>}
            {this.state.searchBarOpen && <a onClick={this.toggleSearchBar} className={classNames(styles.menuButt, styles.menuButtOpen)}><i className="icon-cross__base"></i></a>}
          </div>

          {/*Logo*/}
          <img className={styles.logo} src={logoSrc} alt="NCD Connect logo" width="180" height="103" />

          {/*Profile toggle*/}
          <a onClick={this.toggleProfileBar} className={classNames(styles.menuButt, styles.menuButtProfile, this.state.profileBarOpen ? styles.menuButtOpen : null)}><i className="icon-user__base"></i></a>
        </div>

        {/*Navigation*/}
        <Navigation navigationOpen={this.state.navigationOpen}/>
      </header>
    );
  }

}

