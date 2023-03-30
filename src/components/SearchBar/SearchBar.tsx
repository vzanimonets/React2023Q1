import React, { FormEvent, useEffect, useRef } from 'react';
import styles from './search.module.css';

const SearchBar = () => {
  const initValue = !!localStorage.getItem('searchVal') ? localStorage.getItem('searchVal') : '';
  const inputRef = useRef<HTMLInputElement>(null);

  const saveToStorage = (e: FormEvent) => {
    e.preventDefault();
  };

  useEffect(() => {
    const valueRef = { current: inputRef.current };
    return () => {
      const value = JSON.stringify(valueRef.current?.value);
      localStorage.setItem('searchVal', value);
    };
  }, []);

  return (
    <div className={styles.searchBox}>
      <form onSubmit={saveToStorage}>
        <div className={styles.search__input}>
          <button type="submit"></button>
          <input
            defaultValue={initValue && JSON.parse(initValue)}
            type="search"
            placeholder="Search..."
            ref={inputRef}
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
};

export default SearchBar;
