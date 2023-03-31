import React, { BaseSyntheticEvent, useEffect, useRef, useState } from 'react';
import styles from './form.module.css';
import { ReactComponent as UploadIco } from '../../assets/images/upload-icon.svg';
import List from '../List/List';
import { v4 as uuidv4 } from 'uuid';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ItemType } from '../App/App';

interface validateFields {
  title: string;
  description: string;
  image: Array<Blob>;
  published: string;
  status: string;
  delivery: string;
  terms: boolean;
}

const Form = () => {
  const {
    register,
    handleSubmit,
    clearErrors,
    setError,
    formState: { errors },
  } = useForm<validateFields>();

  const [fileName, setFileName] = useState<string>('');
  const [items, setItems] = useState<ItemType[]>([]);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (items.length) {
      alert('Add new item!');
      resetForm();
    }
  }, [items]);

  const onSubmit: SubmitHandler<validateFields> = (data) => {
    const newItem = {
      id: uuidv4(),
      title: data.title,
      description: data.description,
      image: URL.createObjectURL(data.image[0]),
      delivery: data.delivery,
      status: data.status,
    };
    setItems([newItem, ...items]);
  };

  const changeFile = ({ target }: BaseSyntheticEvent) => {
    const { files } = target;
    if (!files[0].type.startsWith('image/')) {
      setError('image', {
        type: 'custom',
        message: 'Wrong type of the file',
      });
      return;
    }
    setFileName(files[0].name);
  };

  const validateDate = ({ target }: BaseSyntheticEvent) => {
    const { value } = target;
    if (new Date(value).getTime() <= Date.now()) {
      setError('published', {
        type: 'custom',
        message: 'Published date can not be later than today',
      });
    }
  };

  const resetForm = () => {
    clearErrors();
    setFileName('');
    formRef.current?.reset();
  };

  return (
    <>
      <form className={styles.form} ref={formRef} onSubmit={handleSubmit(onSubmit)}>
        <fieldset className={errors.title ? styles.hasError : ''}>
          <label htmlFor="itemTitle">Item Title</label>
          <input
            type="text"
            id="itemTitle"
            placeholder="Item title"
            defaultValue=""
            {...register('title', {
              required: 'This field is required',
              minLength: { value: 4, message: 'title length should be > 3' },
            })}
          />
          {errors.title ? (
            <span className={styles.error__message}>{errors.title.message}</span>
          ) : (
            ''
          )}
        </fieldset>
        <fieldset className={errors.description ? styles.hasError : ''}>
          <label htmlFor="description">Item description</label>
          <textarea
            id="textArea"
            cols={4}
            placeholder="Item description"
            {...register('description', {
              required: 'This field is required',
              minLength: { value: 20, message: 'title length should be > 20' },
            })}
          />
          {errors.description ? (
            <span className={styles.error__message}>{errors.description.message}</span>
          ) : (
            ''
          )}
        </fieldset>
        <fieldset className={errors.image ? styles.hasError : ''}>
          <label htmlFor="file" className={styles.upload}>
            {fileName ? fileName : 'Upload image...'}
            <UploadIco className={styles.upload__ico} />
          </label>
          <input
            type="file"
            id="file"
            accept="image/*"
            {...register('image', {
              onChange: changeFile,
              required: 'This field is required',
            })}
          />
          {errors.image && <span className={styles.error__message}>{errors.image.message}</span>}
        </fieldset>
        <fieldset className={errors.status ? styles.hasError : ''}>
          <label htmlFor="selectBox">Status</label>
          <select
            id="selectBox"
            defaultValue=""
            {...register('status', {
              required: 'This field is required',
            })}
          >
            <option value="">--Select status--</option>
            <option value="in stock">In stock</option>
            <option value="waiting">Temporarily Out Of Stock</option>
          </select>
          {errors.status ? (
            <span className={styles.error__message}>{errors.status.message}</span>
          ) : (
            ''
          )}
        </fieldset>
        <fieldset>
          <label htmlFor="radio">Delivery:</label>
          <div className={styles.radio__container} id="radio">
            <label htmlFor="radio1">Yes</label>
            <input
              type="radio"
              id="radio1"
              defaultValue="Yes"
              {...register('delivery', {
                required: true,
              })}
            />
            <label htmlFor="radio2">No</label>
            <input
              type="radio"
              id="radio2"
              defaultValue="No"
              {...register('delivery', {
                required: true,
              })}
            />
            {errors.delivery?.type === 'required' && (
              <span className={styles.error__message}>This field is required.</span>
            )}
          </div>
        </fieldset>
        <fieldset className={''}>
          <label htmlFor="publish">Published:</label>
          <input
            type="date"
            id="publish"
            {...register('published', {
              valueAsDate: true,
              onChange: validateDate,
            })}
            defaultValue={new Date().toISOString().slice(0, 10)}
            className={''}
          />
          {errors.published ? (
            <span className={styles.error__message}>{errors.published.message}</span>
          ) : (
            ''
          )}
        </fieldset>
        <fieldset className={errors.terms ? styles.hasError : ''}>
          <label htmlFor="terms" className={styles.agreement__text}>
            I agree to the terms
          </label>
          <span className={styles.agreement__checkbox__wrapper}>
            <input
              type="checkbox"
              id="terms"
              {...register('terms', {
                required: 'This field is required',
              })}
            />
          </span>
          {errors.terms ? (
            <span className={styles.error__message}>{errors.terms.message}</span>
          ) : (
            ''
          )}
        </fieldset>
        <fieldset>
          <button className={styles.btn} type="submit">
            Send
          </button>
          <button className={styles.btn} type="reset" onClick={resetForm}>
            Reset
          </button>
        </fieldset>
      </form>
      <List data={items} />
    </>
  );
};

export default Form;
