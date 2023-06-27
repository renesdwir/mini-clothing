import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "./button.styles";

type ButtonType = "base" | "google" | "inverted";

export const BUTTON_TYPE_CLASSES: Record<ButtonType, string> = {
  base: "base",
  google: "google",
  inverted: "inverted",
};
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType?: ButtonType;
}
const getButton = (buttonType: string = BUTTON_TYPE_CLASSES.base) => {
  const buttonComponents = {
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  };

  return buttonComponents[buttonType as ButtonType];
};

export const Button = ({
  children,
  buttonType,
  ...otherProps
}: ButtonProps) => {
  const CustomButton = getButton(buttonType);
  return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;
