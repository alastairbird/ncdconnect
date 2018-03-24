import React from 'react';
const styles = require('../../sass/components/login.scss');

export class Login extends React.Component {

  componentWillMount() {
      this.props.auth.login()
  }

  render() {
    //put some loading thing here
    return (
        <div className="contentWrapper__base"/>
    );
  }

}
