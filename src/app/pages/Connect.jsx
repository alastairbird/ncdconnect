import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button.jsx';
import { ConnectPost } from '../components/ConnectPost.jsx';
const styles = require('../../sass/components/connect.scss');
import classNames from 'classnames';

interface ConnectProps {

}

interface ConnectState {
  
}

export class Connect extends React.Component<ConnectProps, ConnectState> {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="contentWrapper__base">
        <div className={styles.headerWrapper}>
          <h1>Connect</h1>
        </div>
        <div className={styles.toolbar}>
          <div className={styles.toolbarFilters}>
            <button className={classNames(styles.filter, styles.selectedFilter)}>Individuals</button>
          </div>
          <div className={styles.order}>
            <span>Order by</span>
            <select className={styles.something}>
              <option>Most recent</option>
              <option>Most views</option>
              <option>Most something</option>
            </select>
          </div>
        </div>
        <div className={styles.filters}>
        </div>
        <div className={styles.posts}>
         <ConnectPost
          preview="https://i.imgur.com/ROgoVps.jpg"
          title="Joseph Science"
          date="4 days ago"
          snippet="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat..."
          tags="Asthma, 2018"
          author="Jean Grey"
          authorProfile="https://i.imgur.com/kYZZU68.jpg"
         />
         <ConnectPost
          preview="https://i.imgur.com/ROgoVps.jpg"
          title="Joseph Science"
          date="4 days ago"
          snippet="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat..."
          tags="Asthma, 2018"
          author="Jean Grey"
          authorProfile="https://i.imgur.com/kYZZU68.jpg"
         />
         <ConnectPost
          preview="https://i.imgur.com/ROgoVps.jpg"
          title="Joseph Science"
          date="4 days ago"
          snippet="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat..."
          tags="Asthma, 2018"
          author="Jean Grey"
          authorProfile="https://i.imgur.com/kYZZU68.jpg"
         />
        </div>
       {/* <div className={styles.postLoader}>
          <strong>Load more...</strong>
        </div>*/}
      </div>
    );
  }

}
