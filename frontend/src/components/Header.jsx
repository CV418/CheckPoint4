/* eslint-disable jsx-a11y/anchor-is-valid */
import { useContext, useEffect, useState } from "react";
import { Disclosure, Menu } from "@headlessui/react";
import { Link } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../Context/authContext";

export default function Header() {
  const { userData, userToken } = useContext(AuthContext);
  const [api, setApi] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await axios.get(`http://localhost:8001/api/login`, {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        });
        setApi(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchApi();
  }, []);

  return isLoading ? (
    <p>En cours de chargement </p>
  ) : (
    <Disclosure as="nav" className="bg-white shadow ">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex px-2 lg:px-0">
            <div className="flex-shrink-0 flex items-center">
              <img
                className="block lg:hidden h-11 w-auto"
                src="https://res.cloudinary.com/dhudn6li6/image/upload/v1675327915/CheckPoint4/Capture_d_e%CC%81cran_2023-02-02_a%CC%80_09.18.34_av6879.png"
                alt="Workflow"
              />
              <Link to="/login">
                <img
                  className="hidden lg:block h-[4em] w-auto"
                  src="https://res.cloudinary.com/dhudn6li6/image/upload/v1675327915/CheckPoint4/Capture_d_e%CC%81cran_2023-02-02_a%CC%80_09.18.34_av6879.png"
                  alt="Workflow"
                />
              </Link>
            </div>
          </div>

          <div className="ml-4 flex items-center">
            <h1 className="mr-5 text-gray-500">
              {" "}
              Température : {api.hourly.temperature_2m[0]} °C{" "}
            </h1>
            {/* Profile dropdown */}
            <Menu as="div" className="ml-4 relative flex-shrink-0">
              <Link to={`/profil/${userData}`}>
                <div>
                  <Menu.Button className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </Menu.Button>
                </div>
              </Link>
            </Menu>
          </div>
        </div>
      </div>
    </Disclosure>
  );
}
