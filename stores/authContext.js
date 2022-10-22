import { createContext, useEffect } from "react";
import {fetchProfile} from "../components/layout-authenticated";

// creating global context for the app
const AuthContext = createContext({
  user: null,
  login: () => {},
  logout: () => {},
  authReady: false,
});

// AuthContext needs provider
// provider wraps the entire application
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null); // assume user is initially not logged in

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user: null
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

