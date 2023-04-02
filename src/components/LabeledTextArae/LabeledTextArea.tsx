import React, { FC, TextareaHTMLAttributes } from 'react';
import { RegisterOptions, UseFormRegister } from 'react-hook-form';
import styles from '../Form/form.module.css';
import { FormFieldsType, validateFields } from '../Form/Form';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  register: UseFormRegister<validateFields>;
  name: FormFieldsType;
  label: string;
  rules?: RegisterOptions;
  errors?: string;
}

const LabeledTextArea: FC<TextAreaProps> = ({ register, name, label, rules, errors, ...rest }) => {
  return (
    <>
      {label && <label htmlFor={rest?.id}>{label}</label>}
      <textarea {...(register && register(name, rules))} {...rest} />
      {errors && <span className={styles.error__message}>{errors}</span>}
    </>
  );
};

export default LabeledTextArea;
