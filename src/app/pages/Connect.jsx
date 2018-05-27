import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button.jsx';
const styles = require('../../sass/components/connect.scss');
import classNames from 'classnames';

export class Connect extends React.Component {

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
            <label className={classNames(styles.filter, styles.selectedFilter)}>All</label>
            <label className={classNames(styles.filter)}>Individuals</label>
            <label className={classNames(styles.filter)}>Topics</label>
            <label className={classNames(styles.filter)}>Organisations</label>
            <label className={classNames(styles.filter)}>Countries</label>
            <label className={classNames(styles.filter)}>Course/programme</label>
          </div>
          <div className={styles.filters}>
          </div>
        </div>
        <div className={styles.posts}>
          <div className={styles.row}>
            <div className={styles.rowPreview}>
              <img src="http://via.placeholder.com/240x240" />
            </div>
            <div className={styles.rowContent}>
              <div className={styles.rowText}>
                <em className={styles.date}>2h ago</em>
                <h2>My first post</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat...
                </p>
              </div>
              <div className={styles.rowEnd}>
                <label>
                  Tags: Diabetes, Sugar, Research
                </label>
                <a href="#">View post</a>
              </div>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.rowPreview}>
              <img src="http://via.placeholder.com/240x240" />
            </div>
            <div className={styles.rowContent}>
              <div className={styles.rowText}>
                <em className={styles.date}>2h ago</em>
                <h2>My first post</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat...
                </p>
              </div>
              <div className={styles.rowEnd}>
                <label>
                  Tags: Diabetes, Sugar, Research
                </label>
                <a href="#">View post</a>
              </div>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.rowPreview}>
              <img src="http://via.placeholder.com/240x240" />
            </div>
            <div className={styles.rowContent}>
              <div className={styles.rowText}>
                <em className={styles.date}>2h ago</em>
                <h2>My first post</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat...
                </p>
              </div>
              <div className={styles.rowEnd}>
                <label>
                  Tags: Diabetes, Sugar, Research
                </label>
                <a href="#">View post</a>
              </div>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.rowPreview}>
              <img src="http://via.placeholder.com/240x240" />
            </div>
            <div className={styles.rowContent}>
              <div className={styles.rowText}>
                <em className={styles.date}>2h ago</em>
                <h2>My first post</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat...
                </p>
              </div>
              <div className={styles.rowEnd}>
                <label>
                  Tags: Diabetes, Sugar, Research
                </label>
                <a href="#">View post</a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.postLoader}>
          <strong>Load more...</strong>
        </div>
      </div>
    );
  }

}
