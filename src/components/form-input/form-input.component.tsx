import React, { ReactNode, InputHTMLAttributes } from "react";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: ReactNode;
}

const FormInput: React.FC<FormInputProps> = ({ label, ...otherProps }) => {
  return (
    <>
      <label>{label}</label>
      <input {...otherProps} />
    </>
  );
};

export default FormInput;
