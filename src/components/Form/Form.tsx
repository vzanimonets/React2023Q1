import React, { ChangeEvent, createRef, FormEvent } from 'react';
import styles from './form.module.css';
import { ReactComponent as UploadIco } from '../../assets/images/upload-icon.svg';
import List from '../List/List';

/*
TODO: add validation
 */
class Form extends React.Component {
  state = {
    items: [],
    titleValid: false,
    formErrors: { title: '', description: '', image: '' },
    formValid: false,
  };
  private titleRef = createRef<HTMLInputElement>();
  private descriptionRef = createRef<HTMLTextAreaElement>();
  private imgRef = createRef<HTMLInputElement>();
  private statusRef = createRef<HTMLSelectElement>();
  private radio1Ref = createRef<HTMLInputElement>();
  private radio2Ref = createRef<HTMLInputElement>();
  private publishedRef = createRef<HTMLInputElement>();

  handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const title = this.titleRef.current?.value;
    const description = this.descriptionRef.current?.value;
    const image =
      this.imgRef.current?.files?.length && URL.createObjectURL(this.imgRef.current.files[0]);
    const status = this.statusRef.current?.value;
    const radio = this.radio1Ref.current?.checked
      ? this.radio1Ref.current?.value
      : this.radio2Ref.current?.value;

    const published = this.publishedRef.current?.value;
    this.validate({ title: title, text: description, image: image });
    const item = {
      title: title,
      text: description,
      image: image,
      status: status,
      radio: radio,
      published: published,
    };
    this.setState({ items: [...this.state.items, item] });
  };
  uploadImage = (e: ChangeEvent<HTMLInputElement>) => {};

  errorClass(error: string) {
    return error.length === 0 ? '' : styles.hasError;
  }

  validate(fields: object) {
    const fieldValidationErrors = this.state.formErrors;
    let titleValid = this.state.titleValid;
    for (const [key, value] of Object.entries(fields)) {
      //console.log(`${key}: ${value}`);
      //debugger;
      switch (key) {
        case 'title':
          titleValid = value.length > 3;
          fieldValidationErrors.title = titleValid ? '' : 'title length should be > 3';
          break;
        case 'description':
          break;
        case 'image':
          break;
      }
    }
    this.setState(
      { ...this.state, formErrors: fieldValidationErrors, titleValid: titleValid },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({ formValid: this.state.titleValid });
  }
  render() {
    const { items } = this.state;
    return (
      <>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <div className={styles.form__row}>
            <label htmlFor="itemTitle">Item Title</label>
            <input
              type="text"
              id="itemTitle"
              name="itemTitle"
              placeholder="Item title"
              defaultValue=""
              className={this.errorClass(this.state.formErrors.title)}
              ref={this.titleRef}
            />
            {this.state.formErrors.title ? (
              <span className={styles.error__message}>{this.state.formErrors.title}</span>
            ) : (
              ''
            )}
          </div>
          <div className={styles.form__row}>
            <label htmlFor="description">Item description</label>
            <textarea
              name="description"
              id="textArea"
              cols={4}
              placeholder="Item description"
              ref={this.descriptionRef}
            />
          </div>
          <div className={styles.form__row}>
            <label htmlFor="file" className={styles.upload}>
              Upload image
              <UploadIco className={styles.upload__ico} />
            </label>
            <input
              type="file"
              id="file"
              accept="image/*"
              onChange={this.uploadImage}
              ref={this.imgRef}
            />
          </div>
          <div className={styles.form__row}>
            <label htmlFor="selectBox">Status</label>
            <select name="selectBox" id="selectBox" defaultValue="waiting" ref={this.statusRef}>
              <option value="in">In stock</option>
              <option value="waiting">Temporarily Out Of Stock</option>
            </select>
          </div>
          <div className={styles.form__row}>
            <label htmlFor="radio">Delivery:</label>
            <div className={styles.radio__container} id="radio">
              <label htmlFor="radio1">Yes</label>
              <input
                type="radio"
                name="delivery"
                id="radio1"
                defaultValue="Yes"
                defaultChecked
                ref={this.radio1Ref}
              />
              <label htmlFor="radio2">No</label>
              <input
                type="radio"
                name="delivery"
                id="radio2"
                defaultValue="No"
                ref={this.radio2Ref}
              />
            </div>
          </div>
          <div className={styles.form__row}>
            <label htmlFor="publish">Published:</label>
            <input
              type="date"
              id="publish"
              ref={this.publishedRef}
              defaultValue={new Date().toISOString().slice(0, 10)}
            />
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
        <List data={items} />
      </>
    );
  }
}

export default Form;
