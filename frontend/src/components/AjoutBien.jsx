/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BienContext } from "../Context/bienContext";
import { AuthContext } from "../Context/authContext";
import Header from "./Header";

export default function AjoutBien() {
  const [error, setError] = useState("");
  const { userData, userToken } = useContext(AuthContext);
  const { refresh, setRefresh } = useContext(BienContext);
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const updatedData = Object.fromEntries(formData);
    axios
      .post(`http://localhost:8001/bien`, {
        updatedData,
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then((response) => {
        setRefresh(!refresh);
        navigate(`/profil/${userData}`);
      })
      .catch(() => {
        setError("Une erreur est survenue");
      });
  };
  return (
    <div>
      <Header />
      <div className="flex items-center justify-center p-12 min-w-full">
        <div className="mx-auto w-full max-w-full bg-white">
          <h1 className="mb-5 block text-2xl font-semibold text-[#07074D]">
            Ajout d'un bien immobilier
          </h1>
          <form
            onSubmit={onSubmit}
            className="py-6 px-9 w-full"
            action="https://formbold.com/s/FORM_ID"
          >
            <div className="hidden">
              <label
                htmlFor="idUser"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                {userData}
              </label>
              <input
                type="text"
                name="idUser"
                id="idUser"
                value={userData}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="title"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Titre
              </label>
              <input
                type="text"
                name="titleBien"
                id="title"
                placeholder="Titre"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="venteLocation"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Vente ou location ?
              </label>
              <input
                type="text"
                name="venteLocation"
                id="venteLocation"
                placeholder="Vente ou Location"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="type"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Type
              </label>
              <input
                type="text"
                name="type"
                id="type"
                placeholder="Maison / Appartement"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="piece"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Pièces
              </label>
              <input
                type="number"
                name="piece"
                id="piece"
                placeholder="Nombre de pièces"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="exterieur"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Extérieur
              </label>
              <input
                type="text"
                name="exterieur"
                id="title"
                placeholder="Balcon / Jardin / Terrasse"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="surface"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Surface m2
              </label>
              <input
                type="number"
                name="surface"
                id="surface"
                placeholder="Surface en m2"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="Prix"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Prix €
              </label>
              <input
                type="number"
                name="prix"
                id="Prix"
                placeholder="Prix"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="title"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Ville
              </label>
              <input
                type="text"
                name="ville"
                id="ville"
                placeholder="Ville"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="description"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Description
              </label>
              <textarea
                type="text"
                name="description"
                id="description"
                placeholder="Description"
                className="w-full  h-[10em] overflow-y-auto rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>

            <div className="mb-6 pt-4">
              <label className="mb-5 block text-xl font-semibold text-[#07074D]">
                Upload File
              </label>

              <div className="mb-8">
                <input type="file" name="file" id="file" className="sr-only" />
                <label
                  htmlFor="file"
                  className="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center"
                >
                  <div>
                    <span className="mb-2 block text-xl font-semibold text-[#07074D]">
                      Drop files here
                    </span>
                    <span className="mb-2 block text-base font-medium text-[#6B7280]">
                      Or
                    </span>
                    <span className="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D]">
                      Browse
                    </span>
                  </div>
                </label>
              </div>
              <button className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                Send File
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
