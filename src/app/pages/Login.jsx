import React from 'react';

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
