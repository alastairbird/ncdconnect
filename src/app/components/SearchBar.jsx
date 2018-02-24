import React from 'react';
import classNames from 'classnames';
import { Button } from './Button.jsx';

const styles = require('../../sass/components/search-bar.scss')

interface SearchBarProps extends React.Component {
  searchBarOpen: boolean;
}

interface SearchBarState extends React.Component {

}

export class SearchBar extends React.Component<SearchBarProps, SearchBarState> {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={classNames(styles.searchBar, this.props.searchBarOpen ? styles.searchBarOpen : null)}>
        
        <a className={styles.closeLink} onClick={this.props.closeSearchBar}><i className="icon-cross__base"></i></a>

        <input type="text" placeholder="Search..."/>
        <Button>
          <i className="icon-magnifying-glass__base"></i>
        </Button>
      </div>
    );
  }

}