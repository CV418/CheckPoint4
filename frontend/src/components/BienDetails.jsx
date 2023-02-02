/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-redundant-roles */
import { useContext, useEffect, useState } from "react";

import axios from "axios";
import { useParams } from "react-router-dom";
import { AuthContext } from "../Context/authContext";

export default function BienDetails() {
  const { userToken } = useContext(AuthContext);
  const { id } = useParams();
  const [bienId, setBienId] = useState();
  const [isLoading, setIsLoading] = useState(true);

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
            setBienId(res.data);
            setIsLoading(false);
          });
      } catch (error) {
        console.error(error.message);
      }
    };
    getBienId();
  }, [id]);

  return isLoading ? (
    <p>Chargement </p>
  ) : (
    <div className="bg-white min-w-[80vh]">
      <main className="pt-10 sm:pt-16">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="max-w-2xl mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            <li key="ok">
              <div className="flex items-center">
                <svg
                  width={16}
                  height={20}
                  viewBox="0 0 16 20"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="w-4 h-5 text-gray-300"
                >
                  <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                </svg>
              </div>
            </li>
          </ol>
        </nav>

        {/* Image gallery */}
        <div className="mt-6 min-w-[100%] mx-auto sm:px-6 lg:max-w-7xl lg:grid lg:grid-cols-3 lg:gap-x-8 lg:px-8 md:grid md:grid-cols-2 md:gap-x-3 md:px-8 sm:grid sm:grid-cols-2 sm:gap-x-3 sm:px-8">
          <div className=" aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
            <img
              src="https://res.cloudinary.com/dhudn6li6/image/upload/v1675291815/CheckPoint4/KINNA-BUREAU-CHENE-KINNA-26387505-A-2_tqc7ed.avif"
              alt=""
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
              <img
                src="https://res.cloudinary.com/dhudn6li6/image/upload/v1675266348/CheckPoint4/Maisons-du-Monde-de%CC%81co-nature-zen08_pgl71z.jpg"
                alt=""
                className="w-full h-full object-center object-cover"
              />
            </div>
            <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
              <img
                src="https://res.cloudinary.com/dhudn6li6/image/upload/v1675287024/CheckPoint4/modele-de-maison-contemporaine_jx4ygg.jpg"
                alt=""
                className="w-full h-full object-center object-cover"
              />
            </div>
          </div>
          <div className="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4">
            <img
              src="https://res.cloudinary.com/dhudn6li6/image/upload/v1675263655/CheckPoint4/20220110_161429_1-but-ressources-rp-salonamb_dyqgak.jpg"
              alt=""
              className="w-full h-full object-center object-cover"
            />
          </div>
        </div>

        {/* Product info */}
        <div className="max-w-2xl mx-auto pt-10 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:px-8 lg:grid lg:grid-cols-2 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
              {bienId.titleBien}
            </h1>
            <h3 className="text-2xl font-bold tracking-tight text-gray-600 sm:text-2xl mb-7 italic">
              {bienId.venteLocation}
            </h3>
          </div>

          <div className="mt-4 lg:mt-0 lg:row-span-3">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl text-gray-900">{bienId.prix} €</p>
          </div>

          <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            {/* Description and details */}
            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

              <div className="mt-4">
                <ul role="list" className="pl-4 list-disc text-sm space-y-2">
                  <li key={bienId.id} className="text-gray-400">
                    <span className="text-gray-600">{bienId.type}</span>
                  </li>
                  <li key={bienId.id} className="text-gray-400">
                    <span className="text-gray-600">{bienId.piece} pièces</span>
                  </li>
                  <li key={bienId.id} className="text-gray-400">
                    <span className="text-gray-600">{bienId.surface} m2</span>
                  </li>
                  <li key={bienId.id} className="text-gray-400">
                    <span className="text-gray-600">{bienId.exterieur}</span>
                  </li>
                  <li key={bienId.id} className="text-gray-400">
                    <span className="text-gray-600">{bienId.ville}</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-[2em]">
              <h3 className="text-sm font-medium text-gray-900  mb-3">
                Description
              </h3>

              <div className="space-y-6">
                <p className=" text-gray-600 text-sm">{bienId.description}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
