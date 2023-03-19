import React, { createRef } from 'react';
import styles from './search.module.css';

class SearchBar extends React.PureComponent {
  state = {
    initValue: localStorage.getItem('searchVal'),
  };
  private inputRef = createRef<HTMLInputElement>();

  saveToStorage = () => {
    const value = JSON.stringify(this.inputRef.current?.value);
    localStorage.setItem('searchVal', value);
  };

  componentWillUnmount = () => {
    this.saveToStorage();
  };

  render() {
    return (
      <div className={styles.searchBox}>
        <form action="/home" onSubmit={this.saveToStorage}>
          <div className={styles.search__input}>
            <button type="submit"></button>
            <input
              defaultValue={this.state.initValue ? JSON.parse(this.state.initValue) : ''}
              type="search"
              placeholder="Search..."
              ref={this.inputRef}
            />
          </div>
          <div className={styles.radio}>
            <input type="radio" id="searchChoice1" name="search" value="site" defaultChecked />
            <label htmlFor="searchChoice1">Search in domain.com</label>
            <input type="radio" id="searchChoice2" name="search" value="web" />
            <label htmlFor="searchChoice2">Search in web</label>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
