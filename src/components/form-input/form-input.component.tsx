import React, { ReactNode, InputHTMLAttributes } from "react";
import "./form-input.styles.scss";
interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: ReactNode;
}

const FormInput: React.FC<FormInputProps> = ({ label, ...otherProps }) => {
  const hasValue =
    typeof otherProps.value === "string" && otherProps.value.length > 0;

  return (
    <div className="group">
      <input
        className={`form-input ${hasValue ? "bckcolor" : ""}`}
        {...otherProps}
      />
      {label && (
        <label className={`${hasValue ? "shrink" : ""} form-input-label`}>
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
