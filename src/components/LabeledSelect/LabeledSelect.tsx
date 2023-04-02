import React, { FC, SelectHTMLAttributes } from 'react';
import { RegisterOptions, UseFormRegister } from 'react-hook-form';
import styles from '../Form/form.module.css';
import { FormFieldsType, validateFields } from '../Form/Form';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  register: UseFormRegister<validateFields>;
  name: FormFieldsType;
  label: string;
  options: { value: string; label: string }[];
  rules?: RegisterOptions;
  errors?: string;
}

const LabeledSelect: FC<SelectProps> = ({
  register,
  name,
  label,
  options,
  rules,
  errors,
  ...rest
}) => {
  return (
    <>
      {label && <label htmlFor={rest?.id}>{label}</label>}
      <select {...(register && register(name, rules))} {...rest}>
        {options.map((option, i) => (
          <option value={option.value} key={`select_${option.value}_${i}`}>
            {option.label}
          </option>
        ))}
      </select>
      {errors && <span className={styles.error__message}>{errors}</span>}
    </>
  );
};

export default LabeledSelect;
