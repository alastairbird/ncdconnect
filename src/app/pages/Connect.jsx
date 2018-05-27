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
          <Button>Add post <i className="icon-plus__base"></i></Button>
        </div>
        <div className={styles.toolbar}>
          <div className={styles.toolbarFilters}>
            <button className={classNames(styles.filter, styles.selectedFilter)}>All</button>
            <button className={classNames(styles.filter)}>Individuals</button>
            <button className={classNames(styles.filter)}>Topics</button>
            <button className={classNames(styles.filter)}>Organisations</button>
            <button className={classNames(styles.filter)}>Countries</button>
            <button className={classNames(styles.filter)}>Course/programme</button>
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
          preview="https://i.imgur.com/M7kVtUt.jpg"
          title="Affects of sugar"
          date="2h ago"
          snippet="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat..."
          tags="Diabetes, Sugar, Research"
          author="James Howlett"
          authorProfile="https://i.imgur.com/aQ6jlt3.jpg"
         />
         <ConnectPost
          preview="https://i.imgur.com/ROgoVps.jpg"
          title="Asthma in 2018"
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
          preview="https://i.imgur.com/xme4Vxc.jpg"
          title="Your heart and you"
          date="Last Week"
          snippet="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat..."
          tags="Cardiovasulcar, Stroke"
          author="Scott Summers"
          authorProfile="https://i.imgur.com/rRIgJfO.jpg"
         />
         <ConnectPost
          preview="https://i.imgur.com/M7kVtUt.jpg"
          title="Affects of sugar"
          date="2 weeks ago"
          snippet="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat..."
          tags="Diabetes, Sugar, Research"
          author="James Howlett"
          authorProfile="https://i.imgur.com/aQ6jlt3.jpg"
         />
         <ConnectPost
          preview="https://i.imgur.com/ROgoVps.jpg"
          title="Asthma in 2018"
          date="3 weeks ago"
          snippet="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat..."
          tags="Asthma, 2018"
          author="Jean Grey"
          authorProfile="https://i.imgur.com/kYZZU68.jpg"
         />
         <ConnectPost
          preview="https://i.imgur.com/xme4Vxc.jpg"
          title="Your heart and you"
          date="2 months ago"
          snippet="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat..."
          tags="Cardiovasulcar, Stroke"
          author="Scott Summers"
          authorProfile="https://i.imgur.com/rRIgJfO.jpg"
         />
        </div>
        <div className={styles.postLoader}>
          <strong>Load more...</strong>
        </div>
      </div>
    );
  }

}
