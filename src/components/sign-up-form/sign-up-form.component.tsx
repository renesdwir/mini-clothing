import { useState } from "react";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  return (
    <div>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={() => {}}>
        <label>Display Name</label>
        <input type="text" name="Display-Name" required />

        <label>Email</label>
        <input type="email" name="Email" required />

        <label>Password</label>
        <input type="password" name="Password" required />

        <label>Confirm password</label>
        <input type="password" name="Confirm-Password" required />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
