import React from 'react';
import { Button } from './Button.jsx';
import { Link } from 'react-router-dom';

const styles = require('../../sass/components/hero.scss');
const calSrc = require('../../assets/calendar.svg')
const chatSrc = require('../../assets/chat.svg')
const newsSrc = require('../../assets/newspaper.svg')


export class Hero extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {isAuthenticated} = this.props;
    return (
      <div className={styles.hero}>
      	<div className={styles.heroCopy}>
		    <h1>Research together</h1>
		    <p>
    			<em>A place for non communicable disease researchers to connect under a united cause of making the world a better place to live</em>
		    </p>
            {isAuthenticated === false && 
              <p>
                <Link className="button__base" onClick={this.props.toggleNavigation} to='/Login'>
                    Sign up today
                </Link>
              </p>
            }
		   
        </div>

        <ul className={styles.ctaPanel}>
        	<li className={styles.ctaBlock}>
        		<img className={styles.ctaIcon} src={chatSrc} alt="" />
        		<h2 className={styles.subHeadOne}>Connect</h2>
        	</li>
        	<li className={styles.ctaBlock}>
        		<img className={styles.ctaIcon} src={newsSrc} alt="" />
        		<h2 className={styles.subHeadTwo}>Opportunities</h2>
        	</li>
        	<li className={styles.ctaBlock}>
        		<img className={styles.ctaIcon} src={calSrc} alt="" />
        		<h2 className={styles.subHeadThree}>Events</h2>
        	</li>
        </ul>
      </div>
    );
  }

}

