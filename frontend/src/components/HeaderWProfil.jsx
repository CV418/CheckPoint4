/* eslint-disable jsx-a11y/anchor-is-valid */
import { Disclosure } from "@headlessui/react";
import { Link } from "react-router-dom";

export default function HeaderWProfil() {
  return (
    <Disclosure as="nav" className="bg-white shadow ">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex px-2 lg:px-0">
            <div className="flex-shrink-0 flex items-center">
              <img
                className="block lg:hidden h-8 w-auto"
                src="https://res.cloudinary.com/dhudn6li6/image/upload/v1675327915/CheckPoint4/Capture_d_e%CC%81cran_2023-02-02_a%CC%80_09.18.34_av6879.png"
                alt="Workflow"
              />
              <Link to="/">
                <img
                  className="hidden lg:block h-[4em] w-auto"
                  src="https://res.cloudinary.com/dhudn6li6/image/upload/v1675327915/CheckPoint4/Capture_d_e%CC%81cran_2023-02-02_a%CC%80_09.18.34_av6879.png"
                  alt="Workflow"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Disclosure>
  );
}
