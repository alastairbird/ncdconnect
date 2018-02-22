import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

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
      <ul className={classNames(styles.nav, this.props.navigationOpen ? styles.navOpen : null)}>
        <li><Link onClick={this.toggleNavigation} to='/'>Home</Link></li>
        <li><Link onClick={this.toggleNavigation} to='/Connect'>Connect</Link></li>
        <li><Link onClick={this.toggleNavigation} to='/Opportunities'>Opportunities</Link></li>
        <li><Link onClick={this.toggleNavigation} to='/Events'>Events</Link></li>
        <li><Link onClick={this.toggleNavigation} to='/About'>About</Link></li>
        <li><Link onClick={this.toggleNavigation} to='/Contact'>Contact</Link></li>
      </ul>
    );
  }

}