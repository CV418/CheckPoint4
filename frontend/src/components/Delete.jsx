/* eslint-disable no-unused-vars */
import axios from "axios";
import { useContext, useState } from "react";
import { BienContext } from "../Context/bienContext";
import { AuthContext } from "../Context/authContext";

export default function Delete() {
  const [isLoading, setIsLoading] = useState(true);

  const { userToken } = useContext(AuthContext);
  const { allBien, setAllBien } = useContext(BienContext);

  const idBien = allBien.find((a) => a.id);

  const handleClickDeleteBien = async () => {
    try {
      await axios.delete(`http://localhost:8001/bien/${idBien.id}`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });
    } catch (error) {
      console.error(error.message);
    }
    const response = await axios.get(`http://localhost:8001/bien`, {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });
    setAllBien([...allBien, response.data]);
    setIsLoading(false);
  };

  return (
    <div>
      <button
        className="header-button ml-[25em] bg-red-400 text-gray-100 inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
        type="button"
        onClick={() => handleClickDeleteBien(idBien.id)}
      >
        DELETE
      </button>
    </div>
  );
}
