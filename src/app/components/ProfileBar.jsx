import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const styles = require('../../sass/components/profile-bar.scss')

interface ProfileBarProps extends React.Component {
  ProfileBarOpen: boolean;
}

interface ProfileBarState extends React.Component {

}

export class ProfileBar extends React.Component<ProfileBarProps, ProfileBarState> {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={classNames(styles.profileBar, this.props.profileBarOpen ? styles.profileBarOpen : null)}>
        <Link onClick={this.toggleNavigation} to='/'>Register</Link>
        <Link onClick={this.toggleNavigation} to='/'>Logout</Link>
      </div>
    );
  }

}