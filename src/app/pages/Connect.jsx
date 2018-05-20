import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button.jsx';
const styles = require('../../sass/components/connect.scss');

export class Connect extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="contentWrapper__base">
        <h1>Connect</h1>
        <div className={styles.toolbar}>
          <div className={styles.toolbarFilters}>

          </div>
        </div>
        <div className={styles.posts}>
          <div className={styles.row}>
            <div className={styles.rowPreview}>
              <img src="http://via.placeholder.com/100x100" />
            </div>
            <div className={styles.rowContent}>
              <div className={styles.rowText}>
                <h3>My first post</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
              <div className={styles.rowTags}>
                <label>
                  Tags: Diabetes
                </label>
              </div>
              <div className={styles.rowAction}>
                <a href="#">View post</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
