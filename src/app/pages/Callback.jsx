import React from 'react';

export class Callback extends React.Component {

    componentWillMount() {
        if (/access_token|id_token|error/.test(this.props.location.hash)) {
            this.props.auth.handleAuthentication();
            this.props.history.push('/')
        }
    }

    render() {
        //put some loading thing here
        return (
            <div className="contentWrapper__base"/>
        );
    }

}
