import { useState, useEffect, createContext, useContext } from "react";
import netlifyIdentity from "netlify-identity-widget";

const AuthContext = createContext({
  user: null,
  login: () => {},
  logout: () => {},
  authReady: false,
});

export const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);
  const [authReady, setAuthReady] = useState(false);

  useEffect(() => {
    // connect to netlify identity
    netlifyIdentity.init();
    // when user logs in
    netlifyIdentity.on("login", (auth) => {
      setAuth(auth);
      // close the  modal
      netlifyIdentity.close();
    });

    // when user logs out
    netlifyIdentity.on("init", (user) => {
      setAuth(user);
      setAuthReady(true);
    });

    // when user logs out
    netlifyIdentity.on("logout", () => {
      setAuth(null);
    });

    // clean up

    return () => {
      netlifyIdentity.off("login");
      netlifyIdentity.off("logout");
    };
  }, []);

  const login = () => {
    netlifyIdentity.open();
  };
  const logout = () => {
    netlifyIdentity.logout();
  };

  const userInfo = { auth, login, logout, authReady };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
