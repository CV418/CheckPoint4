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
  const [allBienId, setAllBienId] = useState();
  const [refresh, setRefresh] = useState(false);

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
  }, [refresh]);

  useEffect(() => {
    const getBien = () => {
      try {
        axios
          .get(`http://localhost:8001/allBien`, {
            headers: {
              Authorization: `Bearer ${userToken}`,
            },
          })
          .then((res) => {
            setAllBien(res.data);
          });
      } catch (error) {
        console.error(error.message);
      }
    };
    getBien();
  }, [refresh]);

  useEffect(() => {
    const getBienId = () => {
      try {
        axios
          .get(`http://localhost:8001/bien/${id}`, {
            headers: {
              Authorization: `Bearer ${userToken}`,
            },
          })
          .then((res) => {
            setAllBienId(res.data);
          });
      } catch (error) {
        console.error(error.message);
      }
    };
    getBienId();
  }, [id]);

  return (
    <BienContext.Provider
      value={{
        bien,
        setBien,
        setAllBien,
        allBien,
        allBienId,
        setAllBienId,
        setRefresh,
        refresh,
      }}
    >
      {children}
    </BienContext.Provider>
  );
}
