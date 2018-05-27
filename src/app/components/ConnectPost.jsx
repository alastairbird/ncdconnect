import React from 'react';
import { Link } from 'react-router-dom'

const styles = require('../../sass/components/connect-post.scss')

interface ConnectPostProps {
  preview: string,
  title: string,
  date: string,
  snippet: string,
  tags: string,
  author: string,
  authorProfile?: string
}

interface ConnectPostState {

}

export class ConnectPost extends React.Component<ConnectPostProps,ConnectPostState> {

  constructor(props) {
    super(props);
  }

  render() {
    return (
       <div className={styles.row}>
        <div className={styles.rowPreview}>
          <img src={this.props.preview} width="240" height="240" />
          <div className={styles.authorStrip}>
            <img src={this.props.authorProfile} height="41" width="41"/>
            <span>{this.props.author}</span>
          </div>
        </div>
        <div className={styles.rowContent}>
          <div className={styles.rowText}>
            <em className={styles.date}>{this.props.date}</em>
            <h2>{this.props.title}</h2>
            <p>
              {this.props.snippet}
            </p>
          </div>
          <div className={styles.rowEnd}>
            <label>
              Tags: {this.props.tags}
            </label>
            <a href="#">View post</a>
          </div>
        </div>
      </div>
    );
  }

}

