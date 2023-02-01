/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { AuthContext } from "./authContext";

export const BienContext = createContext();

export function BienContextProvider({ children }) {
  const { userToken } = useContext(AuthContext);
  const { id } = useParams();
  const [bien, setBien] = useState();
  const [allBien, setAllBien] = useState();

  useEffect(() => {
    const postBien = async () => {
      try {
        const response = await axios.post(`http://localhost:8001/bien`, {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        });
        setBien(response.data);
      } catch (error) {
        console.error(error.message);
      }
    };
    postBien();
  }, [id]);

  useEffect(() => {
    const getBien = async () => {
      try {
        const response = await axios.get(`http://localhost:8001/bien`, {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        });
        setAllBien(response.data);
      } catch (error) {
        console.error(error.message);
      }
    };
    getBien();
  }, [id]);

  return (
    <BienContext.Provider
      value={{
        bien,
        setBien,
        setAllBien,
        allBien,
      }}
    >
      {children}
    </BienContext.Provider>
  );
}
