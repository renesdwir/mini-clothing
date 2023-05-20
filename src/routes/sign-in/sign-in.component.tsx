import { UserAuthTypes } from "../../types";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user }: { user: UserAuthTypes } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  const logGoogleUserRedirect = async () => {
    const { user }: { user: UserAuthTypes } = await signInWithGoogleRedirect();
  };
  return (
    <>
      <h1>sign in</h1>
      <button onClick={logGoogleUser}>sign in with google popup</button>
      <button onClick={logGoogleUserRedirect}>
        sign in with google redirect
      </button>
    </>
  );
};
export default SignIn;
