/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../Context/authContext";
import { BienContext } from "../Context/bienContext";
import Delete from "./Delete";
import Header from "./Header";

const profile = {
  firstName: "Ricardo Cooper",
  email: "ricardo.cooper@example.com",
  avatar:
    "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  backgroundImage:
    "https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  fields: [
    ["Phone", "(555) 123-4567"],
    ["Email", "ricardocooper@example.com"],
    ["Title", "Senior Front-End Developer"],
    ["Team", "Product Development"],
    ["Location", "San Francisco"],
    ["Sits", "Oasis, 4th floor"],
    ["Salary", "$145,000"],
    ["Birthday", "June 8, 1990"],
  ],
};

export default function PageProfil() {
  const { logout, userData, userToken } = useContext(AuthContext);
  const { allBien } = useContext(BienContext);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const { id } = useParams();
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8001/user/${userData}`,
          {
            headers: {
              Authorization: `Bearer ${userToken}`,
            },
          }
        );
        setUserInfo(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchUser();
  }, [id]);

  return isLoading ? (
    <p>Chargement en cours </p>
  ) : (
    <>
      <Header />
      <div>
        <div>
          <div>
            <img
              className="h-32 w-full object-cover lg:h-48"
              src={profile.backgroundImage}
              alt=""
            />
          </div>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
              <div className="flex">
                <img
                  className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
                  src={profile.avatar}
                  alt=""
                />
              </div>
              <div className="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                <div className="sm:hidden md:block mt-6 min-w-0 flex-1">
                  <h1 className="text-2xl font-bold text-gray-900 truncate">
                    {userInfo.firstName}
                  </h1>
                </div>
                <div className="sm:hidden md:block mt-6 min-w-0 flex-1">
                  <h1 className="text-2xl font-bold text-gray-900 truncate">
                    {userInfo.lastName}
                  </h1>
                </div>
                <div className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
                  <Link to={`/modificationprofil/${userInfo.id}`}>
                    <button
                      type="button"
                      className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                    >
                      <span>Modifier mon profil</span>
                    </button>
                  </Link>
                  <Link to="/ajoutbien">
                    <button
                      type="button"
                      className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                    >
                      <span>Ajoutez un bien</span>
                    </button>
                  </Link>
                  <button
                    type="button"
                    className="header-button"
                    onClick={() => {
                      navigate("/");
                      logout();
                    }}
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
            <div className="hidden sm:block md:hidden mt-6 min-w-0 flex-1">
              <h1 className="text-2xl font-bold text-gray-900 truncate">
                {userInfo.firstName}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="infoPerso">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Informations personnelles
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Vous pouvez modifier vos informations à tout moment
            </p>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
            <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">Nom</dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {userInfo.firstName} {userInfo.lastName}
                </dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">
                  Adresse postale
                </dt>
                <dd className="mt-1 text-sm text-gray-900">
                  <span>{userInfo.adress}</span>
                  <br />
                  <span>{userInfo.postalCode}</span>
                  <br />
                  <span>{userInfo.city}</span>
                </dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">Email</dt>
                <dd className="mt-1 text-sm text-gray-900">{userInfo.email}</dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="text-sm font-medium text-gray-500">
                  Bien immobilier
                </dt>
                <dd className="mt-1 text-sm text-gray-900">
                  <ul
                    role="list"
                    className="border border-gray-200 rounded-md divide-y divide-gray-200 "
                  >
                    {allBien &&
                      allBien
                        .filter((idUserBien) => userData == idUserBien.idUser)
                        .map((bienUser) => (
                          <li className="pl-3 pr-4 py-3 grid grid-cols-3 gap-4 items-center justify-between text-sm ">
                            <Link to={`/biendetails/${bienUser.id}`}>
                              <img
                                className="max-w-[20em]"
                                src="https://res.cloudinary.com/dhudn6li6/image/upload/v1675287232/CheckPoint4/HOME-MAISON-EN-A_bet1a3.jpg"
                                alt=""
                              />
                            </Link>
                            <div>
                              <h2 className="text-[1.4em] mb-4 color-black font-[600]">
                                Titre
                              </h2>
                              <p>{bienUser.titleBien}</p>
                            </div>
                            <div>
                              <h2 className="text-[1.4em] mb-4 color-black font-[600]">
                                Vente/Location
                              </h2>
                              <p>{bienUser.venteLocation}</p>
                            </div>{" "}
                            <div>
                              <h2 className="text-[1.4em] mb-4 color-black font-[600]">
                                Type
                              </h2>
                              <p>{bienUser.type}</p>
                            </div>
                            <div>
                              <h2 className="text-[1.4em] mb-4 color-black font-[600]">
                                Prix
                              </h2>
                              <p>{bienUser.prix} €</p>
                            </div>
                            <div>
                              <h2 className="text-[1.4em] mb-4 color-black font-[600]">
                                Surface
                              </h2>
                              <p>{bienUser.surface} m2</p>
                            </div>
                            <div>
                              <h2 className="text-[1.4em] mb-4 color-black font-[600]">
                                Pièce
                              </h2>
                              <p>{bienUser.piece}</p>
                            </div>
                            <div>
                              <h2 className="text-[1.4em] mb-4 color-black font-[600]">
                                Exterieur
                              </h2>
                              <p>{bienUser.exterieur}</p>
                            </div>
                            <div>
                              <h2 className="text-[1.4em] mb-4 color-black font-[600]">
                                Ville
                              </h2>
                              <p>{bienUser.ville}</p>
                            </div>
                            <div>
                              <h2 className="text-[1.4em] mb-4 color-black font-[600]">
                                Description
                              </h2>
                              <p>{bienUser.description}</p>
                            </div>
                            <Delete />
                          </li>
                        ))}
                  </ul>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </>
  );
}
