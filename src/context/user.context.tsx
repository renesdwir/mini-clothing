import { ReactNode, createContext, useState, useEffect } from "react";
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "../utils/firebase/firebase.utils";

interface UserContextType {
  currentUser: any;
  setCurrentUser: React.Dispatch<React.SetStateAction<any>>;
}
interface UserProviderProps {
  children: ReactNode;
}
export const UserContext = createContext<UserContextType>({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }: UserProviderProps) => {
  const [currentUser, setCurrentUser] = useState<any>(null);
  const value = {
    currentUser,
    setCurrentUser,
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
