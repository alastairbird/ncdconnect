import React from 'react';

const styles = require('../../sass/components/buttons.scss')

export class Button extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button className={styles.button}>
        {this.props.children}
      </button>
    );
  }

}

