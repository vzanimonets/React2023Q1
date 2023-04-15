import React, { FC, InputHTMLAttributes } from 'react';
import { RegisterOptions, UseFormRegister } from 'react-hook-form';
import styles from '../Form/form.module.css';
import { FormFieldsType, validateFields } from '../Form/Form';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  register?: UseFormRegister<validateFields>;
  name: FormFieldsType;
  label?: string;
  rules?: RegisterOptions;
  errors?: string;
}

const LabeledInput: FC<InputProps> = ({ register, name, label, rules, errors, ...rest }) => {
  return (
    <>
      {label && <label htmlFor={rest?.id}>{label}</label>}
      <input {...(register && register(name, rules))} {...rest} />
      {errors && (
        <span className={styles.error__message} data-testid="test-label-error">
          {errors}
        </span>
      )}
    </>
  );
};

export default LabeledInput;
