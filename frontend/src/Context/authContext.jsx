/* eslint-disable react/prop-types */
import React, { createContext, useCallback, useMemo, useState } from "react";
import Cookies from "js-cookie";

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [userToken, setUserToken] = useState(Cookies.get("userToken") || null);
  const [userData, setUserData] = useState(Cookies.get("id") || "");

  const setUser = useCallback((data) => {
    if (data.token) {
      Cookies.set("userToken", data.token, {
        expires: 1 / 24,
      });
    }
    setUserToken(data.token);
    setUserData(data.user.id);

    Cookies.set("id", data.user.id);
  }, []);
  const removeCookies = () => {
    Cookies.remove("userToken");
    Cookies.remove("id");
  };
  const logout = () => {
    setUserData();
    removeCookies();
    setUserToken(null);
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
    }),
    [userToken, logout, setUserToken, setUser, userData, setUserData]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
