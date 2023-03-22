import React from 'react';
import styles from './form.module.css';
import { ReactComponent as UploadIco } from '../../assets/images/upload-icon.svg';

class Form extends React.PureComponent {
  onSubmit = () => {};

  render() {
    return (
      <>
        <form className={styles.form} onSubmit={this.onSubmit}>
          <div className={styles.form__row}>
            <label htmlFor="itemTitle">Item Title</label>
            <input
              type="text"
              id="itemTitle"
              name="itemTitle"
              placeholder="Item title"
              defaultValue=""
            />
          </div>
          <div className={styles.form__row}>
            <label htmlFor="description">Item description</label>
            <textarea
              name="description"
              id="textArea"
              cols="3"
              placeholder="Item description"
              style={{ resize: 'none' }}
            />
          </div>
          <div className={styles.form__row}>
            <label htmlFor="file" className={styles.upload}>
              Upload image
              <UploadIco className={styles.upload__ico} />
            </label>
            <input type="file" id="file" accept="image/*" />
          </div>
          <div className={styles.form__row}>
            <label htmlFor="selectBox">Status</label>
            <select name="selectBox" id="selectBox" defaultValue="out">
              <option value="in">In stock</option>
              <option value="out">Temporarily Out Of Stock</option>
            </select>
          </div>
          <div className={styles.form__row}>
            <p>Radio</p>
            <div className={styles.radio__container}>
              <label>
                <input type="radio" name="color" defaultValue="Red" defaultChecked />
                Red
              </label>
              <label>
                <input type="radio" name="color" defaultValue="blue" />
                Blue
              </label>
            </div>
          </div>
          <div className={styles.form__row}>
            <button className={styles.btn} type="submit">
              Send
            </button>
            <button className={styles.btn} type="reset">
              Reset
            </button>
          </div>
        </form>
      </>
    );
  }
}

export default Form;
