/* eslint-disable react/prop-types */
import React, { createContext, useCallback, useMemo, useState } from "react";
import Cookies from "js-cookie";

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [userToken, setUserToken] = useState(Cookies.get("userToken") || null);
  const [userData, setUserData] = useState(Cookies.get("id") || "");
  const [userEmail, setUserEmail] = useState(Cookies.get("email") || "");

  const setUser = useCallback((data) => {
    if (data.token) {
      Cookies.set("userToken", data.token, {
        expires: 1 / 24,
      });
    }
    setUserToken(data.token);
    setUserData(data.user.id);
    setUserEmail(data.user.email);

    Cookies.set("id", data.user.id);
    Cookies.set("email", data.user.email);
  }, []);
  const removeCookies = () => {
    Cookies.remove("userToken");
    Cookies.remove("id");
    Cookies.remove("email");
  };
  const logout = () => {
    setUserData();
    removeCookies();
    setUserToken(null);
    setUserEmail(null);
    setUser(null);
  };

  const value = useMemo(
    () => ({
      userToken,
      logout,
      setUser,
      setUserToken,
      userData,
      setUserData,
      userEmail,
      setUserEmail,
    }),
    [
      userToken,
      logout,
      setUserToken,
      setUser,
      userData,
      setUserData,
      userEmail,
      setUserEmail,
    ]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
