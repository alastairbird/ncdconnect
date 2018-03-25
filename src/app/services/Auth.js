import auth0 from 'auth0-js';
import jwt_decode from 'jwt-decode';


export default class Auth {
    auth0 = new auth0.WebAuth({
        domain: 'ncdconnect.eu.auth0.com',
        clientID: '4Q6K_ubQcboLfgw7iueIeZG2CsTcriWO',
        audience: 'https://ncdconnect.eu.auth0.com/userinfo',
        responseType: 'token id_token',
        scope: 'openid'
    });

    constructor() {
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.handleAuthentication = this.handleAuthentication.bind(this);
    }

    login() {
        this.auth0.authorize({
            redirectUri: `${window.location.origin}/callback`
        });
    }

    handleAuthentication() {
        this.auth0.parseHash((err, authResult) => {
            if (authResult && authResult.accessToken && authResult.idToken) {
                this.setSession(authResult);
            } else if (err) {
                console.log(err);
            }
        });
    }

    setSession(authResult) {
        // Set the time that the Access Token will expire at
        const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
    }

    logout() {
        // Clear Access Token and ID Token from local storage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
    }

    get isAuthenticated() {
        // Check whether the current time is past the
        // Access Token's expiry time
        const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return new Date().getTime() < expiresAt;
    }

    get userId() {
        const idToken = jwt_decode(localStorage.getItem('id_token'));
        return idToken.sub;
    }
}