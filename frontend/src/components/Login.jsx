/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/authContext";
import Header from "./Header";

export default function Login() {
  const { setUser } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [hashedPassword, setHashedPassword] = useState("");
  const [err, setErr] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (err) {
      console.error(err);
    }
  }, [err]);

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const user = {
        email,
        hashedPassword,
      };

      const response = await axios.post(`http://localhost:8001/login`, user);
      if (response.data) {
        setErr("");
        setUser(response.data);
        if (response.data) {
          navigate("/login");
        } else {
          return err;
        }
      }
    } catch (error) {
      console.error(error.message);
      if (error.response.status === 401) {
        setErr("Wrong password or email address");
      }
    }
  };

  return (
    <div className="min-h-full flex">
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div>
            <img
              className="h-[7em] w-auto"
              src="https://res.cloudinary.com/dhudn6li6/image/upload/v1675327915/CheckPoint4/Capture_d_e%CC%81cran_2023-02-02_a%CC%80_09.18.34_av6879.png"
              alt="Workflow"
            />
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
              Vous avez un compte ?
            </h2>
            <div className="mt-6">
              <form
                action="#"
                method="POST"
                className="space-y-6"
                onSubmit={handleSubmit}
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    {" "}
                    Email address{" "}
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      onChange={(event) => {
                        setEmail(event.target.value);
                      }}
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    {" "}
                    Password{" "}
                  </label>
                  <div className="mt-1">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      onChange={(event) => {
                        setHashedPassword(event.target.value);
                      }}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="remember-me"
                      className="ml-2 block text-sm text-gray-900"
                    >
                      {" "}
                      Remember me{" "}
                    </label>
                  </div>

                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      {" "}
                      Forgot your password?{" "}
                    </a>
                  </div>
                </div>

                <div className="pb-[10em]">
                  <p>{err}</p>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Sign in
                  </button>
                  <Link to="/register">
                    <div className="mt-4 text-[0.8em] flex justify-end underline cursor-pointer">
                      <h3>Vous n'avez pas de compte ?</h3>
                    </div>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block relative w-0 flex-1">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="https://res.cloudinary.com/dhudn6li6/image/upload/v1675263768/CheckPoint4/maison-d-architecte-sideview_aqitxt.jpg"
          alt=""
        />
      </div>
    </div>
  );
}
