import React, { BaseSyntheticEvent, useCallback, useEffect, useState } from 'react';
import styles from './form.module.css';
import { ReactComponent as UploadIco } from '../../assets/images/upload-icon.svg';
import List from '../List/List';
import { v4 as uuidv4 } from 'uuid';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ItemType } from '../App/App';
import LabeledInput from '../LabeledInput/LabeledInput';
import FieldSet from '../FieldSet/FieldSet';
import LabeledTextArea from '../LabeledTextArae/LabeledTextArea';
import LabeledSelect from '../LabeledSelect/LabeledSelect';

export interface validateFields {
  title: string;
  description: string;
  image: Array<Blob>;
  published: string;
  status: string;
  delivery: string;
  terms: boolean;
}

export type FormFieldsType =
  | 'title'
  | 'description'
  | 'image'
  | 'published'
  | 'status'
  | 'delivery'
  | 'terms';

const Form = () => {
  const {
    register,
    handleSubmit,
    clearErrors,
    setError,
    reset,
    resetField,
    //   watch,
    formState: { errors },
  } = useForm<validateFields>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });

  const [fileName, setFileName] = useState<string>('');
  const [items, setItems] = useState<ItemType[]>([]);
  // const watchFileField = watch('image');

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
      resetField('image');
      setError('image', {
        type: 'custom',
        message: 'Wrong type of the file',
      });
      return;
    }
    clearErrors('image');
    setFileName(files[0].name);
  };

  const validateDate = ({ target }: BaseSyntheticEvent) => {
    const { value } = target;
    if (new Date(value).getTime() <= new Date().getTime()) {
      setError('published', {
        type: 'custom',
        message: 'Published date can not be later than today',
      });
    }
  };

  const resetForm = useCallback(() => {
    clearErrors();
    setFileName('');
    reset();
  }, [clearErrors, reset]);

  // useEffect(() => {
  //   const subscription = watch((value, { name, type }) => console.log(value, name, type));
  //   return () => subscription.unsubscribe();
  // }, [watch]);

  useEffect(() => {
    if (items.length) {
      alert('Add new item!');
      resetForm();
    }
  }, [items, resetForm]);

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <FieldSet errors={errors.title?.message}>
          <LabeledInput
            label="Item Title"
            type="text"
            placeholder="Item title"
            name="title"
            register={register}
            errors={errors.title?.message}
            rules={{
              required: 'This field is required',
              minLength: { value: 4, message: 'title length should be > 3' },
            }}
          />
        </FieldSet>
        <FieldSet errors={errors.description?.message}>
          <LabeledTextArea
            register={register}
            name={'description'}
            label={'Item description'}
            cols={4}
            placeholder="Item description"
            errors={errors.description?.message}
            rules={{
              required: 'This field is required',
              minLength: { value: 21, message: 'title length should be > 20' },
            }}
          />
        </FieldSet>
        <FieldSet errors={errors.image?.message}>
          <label htmlFor="file" className={styles.upload}>
            {fileName ? fileName : 'Upload image...'}
            <UploadIco className={styles.upload__ico} />
          </label>
          <LabeledInput
            type="file"
            name="image"
            id="file"
            accept="image/*"
            register={register}
            rules={{
              onChange: changeFile,
              required: 'This field is required',
            }}
            errors={errors.image?.message}
          />
        </FieldSet>
        <FieldSet errors={errors.status?.message}>
          <LabeledSelect
            label="Status"
            defaultValue=""
            errors={errors.status?.message}
            name="status"
            register={register}
            rules={{
              required: 'This field is required',
            }}
            options={[
              { value: '', label: '--Select status--' },
              { value: 'in stock', label: 'In stock' },
              { value: 'waiting', label: 'Temporarily Out Of Stock' },
            ]}
          />
        </FieldSet>
        <FieldSet>
          <label htmlFor="radio">Delivery:</label>
          <div className={styles.radio__container} id="radio">
            <LabeledInput
              label="No"
              type="radio"
              id="radio1"
              placeholder="Item title"
              name="delivery"
              defaultValue="No"
              register={register}
              errors={errors.delivery?.message}
              rules={{
                required: 'This field is required',
              }}
            />
            <LabeledInput
              label="Yes"
              type="radio"
              id="radio2"
              placeholder="Item title"
              name="delivery"
              defaultValue="No"
              register={register}
              errors={errors.delivery?.message}
              rules={{
                required: true,
              }}
            />
          </div>
          {errors.delivery?.type === 'required' && (
            <span className={styles.error__message}>This field is required.</span>
          )}
        </FieldSet>
        <FieldSet errors={errors.published?.message}>
          <LabeledInput
            type="date"
            id="publish"
            name="published"
            label="Published"
            register={register}
            errors={errors.published?.message}
            rules={{
              required: 'This field is required',
              valueAsDate: true,
              onChange: validateDate,
            }}
          />
        </FieldSet>
        <FieldSet errors={errors.terms}>
          <label htmlFor="terms" className={styles.agreement__text}>
            I agree to the terms
          </label>
          <span className={styles.agreement__checkbox__wrapper}>
            <LabeledInput
              type="checkbox"
              id="terms"
              errors={errors.terms?.message}
              register={register}
              name="terms"
              rules={{
                required: true,
              }}
            />
          </span>
          {errors.terms?.type === 'required' && (
            <span className={styles.error__message}>terms should be agreed.</span>
          )}
        </FieldSet>
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
