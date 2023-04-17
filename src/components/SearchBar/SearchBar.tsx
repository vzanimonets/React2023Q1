import React, { FC, FormEvent, useEffect, useRef } from 'react';
import styles from './search.module.css';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setValue } from '../../redux/search-slice';

type SearchBarPropType = {
  onSubmit: (query: string | undefined) => void;
};
const SearchBar: FC<SearchBarPropType> = ({ onSubmit }) => {
  const initValue = useAppSelector((state) => state.search.value);
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(setValue(inputRef.current?.value));
    onSubmit(inputRef.current?.value);
  };

  useEffect(() => {
    onSubmit(inputRef?.current?.value);
  }, [onSubmit]);

  return (
    <div className={styles.searchBox}>
      <form onSubmit={handleSubmit}>
        <div className={styles.search__input}>
          <button type="submit"></button>
          <input defaultValue={initValue} type="search" placeholder="Search..." ref={inputRef} />
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
