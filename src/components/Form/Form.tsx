import React, { ChangeEvent, createRef, FormEvent } from 'react';
import styles from './form.module.css';
import { ReactComponent as UploadIco } from '../../assets/images/upload-icon.svg';
import List from '../List/List';

interface validateFields {
  title: string | undefined;
  description: string | undefined;
  image: string | number | undefined;
  published: string | undefined;
  terms: boolean | undefined;
}

class Form extends React.Component {
  state = {
    items: [],
    titleValid: false,
    descriptionValid: false,
    imageValid: false,
    publishedValid: false,
    termsValid: false,
    formErrors: { title: '', description: '', image: '', published: '', terms: '' },
    formValid: false,
  };
  private titleRef = createRef<HTMLInputElement>();
  private descriptionRef = createRef<HTMLTextAreaElement>();
  private imgRef = createRef<HTMLInputElement>();
  private statusRef = createRef<HTMLSelectElement>();
  private radio1Ref = createRef<HTMLInputElement>();
  private radio2Ref = createRef<HTMLInputElement>();
  private publishedRef = createRef<HTMLInputElement>();
  private termsRef = createRef<HTMLInputElement>();

  handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    this.validate({
      title: this.titleRef.current?.value,
      description: this.descriptionRef.current?.value,
      image:
        this.imgRef.current?.files?.length && URL.createObjectURL(this.imgRef.current.files[0]),
      published: this.publishedRef.current?.value,
      terms: this.termsRef.current?.checked,
    });
  };

  errorClass(error: string) {
    return error.length === 0 ? '' : styles.hasError;
  }

  validate(fields: validateFields) {
    const fieldValidationErrors = this.state.formErrors;
    let titleValid = this.state.titleValid;
    let descriptionValid = this.state.descriptionValid;
    let imageValid = this.state.imageValid;
    let publishedValid = this.state.publishedValid;
    let termsValid = this.state.termsValid;

    for (const [key, value] of Object.entries(fields)) {
      switch (key) {
        case 'title':
          titleValid = value.length > 3;
          fieldValidationErrors.title = titleValid ? '' : 'title length should be > 3';
          break;
        case 'description':
          descriptionValid = value.length > 20;
          fieldValidationErrors.description = descriptionValid
            ? ''
            : 'description length should be > 20';
          break;
        case 'image':
          imageValid = !!value;
          fieldValidationErrors.image = imageValid ? '' : 'Image  is Required';
          break;
        case 'published':
          publishedValid = new Date(value).getTime() <= Date.now();
          fieldValidationErrors.published = publishedValid
            ? ''
            : 'Published date can not be later than today';
          break;
        case 'terms':
          termsValid = !!value;
          fieldValidationErrors.terms = imageValid ? '' : 'terms should be agreed';
          break;
      }
    }
    this.setState(
      {
        ...this.state,
        formErrors: fieldValidationErrors,
        titleValid: titleValid,
        descriptionValid: descriptionValid,
        imageValid: imageValid,
        publishedValid: publishedValid,
        termsValid: termsValid,
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState(
      {
        formValid:
          this.state.titleValid &&
          this.state.descriptionValid &&
          this.state.imageValid &&
          this.state.publishedValid &&
          this.state.termsValid,
      },
      () => this.state.formValid && this.displayItems()
    );
  }

  displayItems() {
    this.setState({
      items: [
        ...this.state.items,
        {
          title: this.titleRef.current?.value,
          text: this.descriptionRef.current?.value,
          image:
            this.imgRef.current?.files?.length && URL.createObjectURL(this.imgRef.current.files[0]),
          status: this.statusRef.current?.value,
          radio: this.radio1Ref.current?.checked
            ? this.radio1Ref.current?.value
            : this.radio2Ref.current?.value,
          published: this.publishedRef.current?.value,
          terms: this.termsRef.current?.checked,
        },
      ],
    });
  }

  render() {
    return (
      <>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <fieldset className={this.errorClass(this.state.formErrors.title)}>
            <label htmlFor="itemTitle">Item Title</label>
            <input
              type="text"
              id="itemTitle"
              name="itemTitle"
              placeholder="Item title"
              defaultValue=""
              ref={this.titleRef}
            />
            {this.state.formErrors.title ? (
              <span className={styles.error__message}>{this.state.formErrors.title}</span>
            ) : (
              ''
            )}
          </fieldset>
          <fieldset className={this.errorClass(this.state.formErrors.description)}>
            <label htmlFor="description">Item description</label>
            <textarea
              name="description"
              id="textArea"
              cols={4}
              placeholder="Item description"
              ref={this.descriptionRef}
            />
            {this.state.formErrors.description ? (
              <span className={styles.error__message}>{this.state.formErrors.description}</span>
            ) : (
              ''
            )}
          </fieldset>
          <fieldset className={this.errorClass(this.state.formErrors.image)}>
            <label htmlFor="file" className={styles.upload}>
              Upload image
              <UploadIco className={styles.upload__ico} />
            </label>
            <input type="file" id="file" accept="image/*" ref={this.imgRef} />
            {this.state.formErrors.image ? (
              <span className={styles.error__message}>{this.state.formErrors.image}</span>
            ) : (
              ''
            )}
          </fieldset>
          <fieldset>
            <label htmlFor="selectBox">Status</label>
            <select name="selectBox" id="selectBox" defaultValue="waiting" ref={this.statusRef}>
              <option value="in">In stock</option>
              <option value="waiting">Temporarily Out Of Stock</option>
            </select>
          </fieldset>
          <fieldset>
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
          </fieldset>
          <fieldset className={this.errorClass(this.state.formErrors.published)}>
            <label htmlFor="publish">Published:</label>
            <input
              type="date"
              id="publish"
              ref={this.publishedRef}
              defaultValue={new Date().toISOString().slice(0, 10)}
              className={this.errorClass(this.state.formErrors.published)}
            />
            {this.state.formErrors.published ? (
              <span className={styles.error__message}>{this.state.formErrors.published}</span>
            ) : (
              ''
            )}
          </fieldset>
          <fieldset className={this.errorClass(this.state.formErrors.terms)}>
            <label htmlFor="terms" className={styles.agreement__text}>
              I agree to the terms
            </label>
            <span className={styles.agreement__checkbox__wrapper}>
              <input type="checkbox" id="terms" ref={this.termsRef} />
            </span>
            {this.state.formErrors.terms ? (
              <span className={styles.error__message}>{this.state.formErrors.terms}</span>
            ) : (
              ''
            )}
          </fieldset>
          <fieldset>
            <button className={styles.btn} type="submit">
              Send
            </button>
            <button className={styles.btn} type="reset">
              Reset
            </button>
          </fieldset>
        </form>
        <List data={this.state.items} />
      </>
    );
  }
}

export default Form;
