import React from 'react';
import { Button } from './Button.jsx';
const styles = require('../../sass/components/hero.scss');
const calSrc = require('../../assets/calendar.svg')
const chatSrc = require('../../assets/chat.svg')
const newsSrc = require('../../assets/newspaper.svg')




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
    			<em>A place for non communicable disease researchers to connect under a united cause of making the world a better place to live</em>
		    </p>
		    <p>
		    	<Button>
		    		Sign up today
		    	</Button>
		    </p>
        </div>

        <ul className={styles.ctaPanel}>
        	<li className={styles.ctaBlock}>
        		<img className={styles.ctaIcon} src={chatSrc} alt="" />
        		<h2 className={styles.subHeadOne}>Connect</h2>
        		<p>
        			Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore.
        		</p>
        	</li>
        	<li className={styles.ctaBlock}>
        		<img className={styles.ctaIcon} src={newsSrc} alt="" />
        		<h2 className={styles.subHeadTwo}>Opportunities</h2>
        		<p>
        			Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore.
        		</p>
        	</li>
        	<li className={styles.ctaBlock}>
        		<img className={styles.ctaIcon} src={calSrc} alt="" />
        		<h2 className={styles.subHeadThree}>Events</h2>
        		<p>
        			Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore.
        		</p>
        	</li>
        </ul>
      </div>
    );
  }

}

