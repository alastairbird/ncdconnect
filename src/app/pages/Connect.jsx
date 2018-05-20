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
              <img src="http://via.placeholder.com/200x200" />
            </div>
            <div className={styles.rowContent}>
              <h2>My first post</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis...
              </p>
              <Button className={styles.rowButton}>
                Read more <i className="icon-chevron-right__base"></i>
              </Button>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.rowPreview}>
              <img src="http://via.placeholder.com/200x200" />
            </div>
            <div className={styles.rowContent}>
              <h2>My Second post</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis...
              </p>
              <Button className={styles.rowButton}>
                Read more <i className="icon-chevron-right__base"></i>
              </Button>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.rowPreview}>
              <img src="http://via.placeholder.com/200x200" />
            </div>
            <div className={styles.rowContent}>
              <h2>My Third post</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis...
              </p>
              <Button className={styles.rowButton}>
                Read more <i className="icon-chevron-right__base"></i>
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
