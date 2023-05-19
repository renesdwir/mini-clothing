import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
  };
  return (
    <>
      <h1>sign in</h1>
      <button onClick={logGoogleUser}>sign in with google popup</button>
    </>
  );
};
export default SignIn;
