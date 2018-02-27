import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
const calSrc = require('../../assets/calendar.svg')
const chatSrc = require('../../assets/chat.svg')
const newsSrc = require('../../assets/newspaper.svg')

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
        <Link className={classNames(styles.link, styles.linkConnect)} onClick={this.toggleNavigation} to='/Connect'>
          <img className={styles.ctaIcon} src={chatSrc} alt="" />Connect
          </Link>
        <Link className={classNames(styles.link, styles.linkNews)} onClick={this.toggleNavigation} to='/Opportunities'>
          <img className={styles.ctaIcon} src={newsSrc} alt="" />Opportunities
          </Link>
        <Link className={classNames(styles.link, styles.linkCal)} onClick={this.toggleNavigation} to='/Events'>
          <img className={styles.ctaIcon} src={calSrc} alt="" />Events
          </Link>
        <div className={styles.botlinks}>
          <Link className={styles.link} onClick={this.toggleNavigation} to='/Login'>Login</Link>
          <Link className={styles.link} onClick={this.toggleNavigation} to='/About'>About</Link>
          <Link className={styles.link} onClick={this.toggleNavigation} to='/Contact'>Contact</Link>
        </div>
      </nav>
    );
  }

}