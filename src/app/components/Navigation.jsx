import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
const calSrc = require('../../assets/calendar-white.svg')
const chatSrc = require('../../assets/chat-white.svg')
const newsSrc = require('../../assets/newspaper-white.svg')
const mapSrc = require('../../assets/planet-earth.svg')

const styles = require('../../sass/components/navigation.scss')

interface NavigationProps extends React.Component {
  navigationOpen: boolean;
}

interface NavigationState extends React.Component {

}

export class Navigation extends React.Component<NavigationProps, NavigationState> {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className={classNames(styles.nav, this.props.navigationOpen ? styles.navOpen : null)}>
        <div className={styles.topLinks}>
          <Link className={styles.link} onClick={this.toggleNavigation} to='/Login'><i className="icon-user__base"></i>Register / Login</Link>
        </div>
        <div className={styles.navWrapper}>
          <Link className={styles.link} onClick={this.toggleNavigation} to='/Connect'>
            <img className={styles.ctaIcon} src={chatSrc} alt="" />Connect
          </Link>
          <Link className={styles.link} onClick={this.toggleNavigation} to='/Opportunities'>
            <img className={styles.ctaIcon} src={newsSrc} alt="" />Opportunities
          </Link>
          <Link className={styles.link} onClick={this.toggleNavigation} to='/Events'>
            <img className={styles.ctaIcon} src={calSrc} alt="" />Events
          </Link>
          <Link className={styles.link} onClick={this.toggleNavigation} to='/WorldMap'>
            <img className={styles.ctaIcon} src={mapSrc} alt="" />Map
          </Link>
          <div className={styles.botlinks}>
            <Link className={styles.link} onClick={this.toggleNavigation} to='/'>Home</Link>
            <Link className={styles.link} onClick={this.toggleNavigation} to='/About'>About</Link>
            <Link className={styles.link} onClick={this.toggleNavigation} to='/Contact'>Contact</Link>
          </div>
        </div>
      </nav>
    );
  }

}