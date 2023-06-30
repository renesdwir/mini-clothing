import React, { ReactNode, InputHTMLAttributes } from "react";
import { FormInputLabel, Group, Input } from "./form-input.styles";
interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: ReactNode;
}

const FormInput: React.FC<FormInputProps> = ({ label, ...otherProps }) => {
  const hasValue =
    typeof otherProps.value === "string" && otherProps.value.length > 0;

  return (
    <Group>
      <Input bckColor={hasValue} {...otherProps} />
      {label && <FormInputLabel shrink={hasValue}>{label}</FormInputLabel>}
    </Group>
  );
};

export default FormInput;
