import { createContext } from "react";
import { getAuth } from "firebase/auth";
import { app } from "./firebase";

const FireContext = createContext();

const auth = getAuth(app);
const user = auth.currentUser;

export function FireProvider({ children }) {
  return <FireContext.Provider value={{ user }}>{children}</FireContext.Provider>;
}

export default createContext;
