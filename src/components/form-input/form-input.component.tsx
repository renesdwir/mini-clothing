import React, { ReactNode, InputHTMLAttributes } from "react";
import "./form-input.styles.scss";
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
      <input className="form-input" {...otherProps} />
      {label && (
        <label className={`${hasValue ? "shrink" : ""} form-input-label`}>
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
