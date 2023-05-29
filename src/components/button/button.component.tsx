import "./button.styles.scss";

type ButtonType = "google" | "inverted";

const BUTTON_TYPE_CLASSES: Record<ButtonType, string> = {
  google: "google-sign-in",
  inverted: "inverted",
};
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType?: ButtonType;
}
const Button = ({ children, buttonType, ...otherProps }: ButtonProps) => {
  return (
    <button
      className={`button-container ${
        buttonType ? BUTTON_TYPE_CLASSES[buttonType] : ""
      }`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
