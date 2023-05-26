import React, { ReactNode, InputHTMLAttributes } from "react";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: ReactNode;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  value,
  ...otherProps
}) => {
  const hasValue = typeof value === "string" && value.length > 0;

  return (
    <div className="group">
      {label && (
        <label className={`${hasValue ? "shrink" : ""} form-input-label`}>
          {label}
        </label>
      )}
      <input className="form-input" {...otherProps} />
    </div>
  );
};

export default FormInput;
