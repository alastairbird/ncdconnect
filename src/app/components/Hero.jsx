import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button.jsx';
const styles = require('../../sass/components/hero.scss');

export class Hero extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.hero}>
      	<div className={styles.heroCopy}>
		    <h1>Research together</h1>
		    <p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
				cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
				proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
		    </p>
		    <p>
		    	<Button>
		    		Sign up today
		    	</Button>
		    </p>
		    <ul>
	          <li><Link to='/'>Home</Link></li>
	          <li><Link to='/OtherPage'>OtherPage</Link></li>
	        </ul>
        </div>
      </div>
    );
  }

}

