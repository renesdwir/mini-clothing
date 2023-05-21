import { UserAuthTypes } from "../../types";
import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";
import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

const SignIn = () => {
  useEffect(async () => {
    const response = await getRedirectResult(auth);
    if (response) {
      const userDocRef = await createUserDocumentFromAuth(response.user);
    }
  }, []);
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
