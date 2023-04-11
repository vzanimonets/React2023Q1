import { FC, FieldsetHTMLAttributes, ReactNode } from 'react';
import styles from '../Form/form.module.css';
import React from 'react';

interface FieldsetProps extends FieldsetHTMLAttributes<HTMLFieldSetElement> {
  errors?: string;
  children: ReactNode;
}

const FieldSet: FC<FieldsetProps> = ({ errors, children, ...rest }) => {
  return (
    <fieldset data-testid={'form-error'} className={errors ? styles.hasError : ''} {...rest}>
      {children}
    </fieldset>
  );
};

export default FieldSet;
