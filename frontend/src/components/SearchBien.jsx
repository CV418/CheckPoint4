import { Fragment, useContext, useState } from "react";
import { Dialog, Disclosure, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { ChevronDownIcon, PlusSmIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import { BienContext } from "../Context/bienContext";
import Header from "./Header";

const filters = [
  {
    id: "Pièce",
    name: "Pièce",
    options: [
      { value: "1-2", label: "1-2" },
      { value: "2-3", label: "2-3" },
      { value: "3-4", label: "3-4" },
      { value: "4-5", label: "4-5" },
      { value: "5+", label: "5+" },
    ],
  },
  {
    id: "Type",
    name: "Type",
    options: [
      { value: "Maison", label: "Maison" },
      { value: "Appartement", label: "Appartement" },
    ],
  },
  {
    id: "Vente / Location",
    name: "Vente / Location",
    options: [
      { value: "Vente", label: "Vente" },
      { value: "Location", label: "Location" },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function SearchBien() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const { allBien } = useContext(BienContext);

  return (
    <div className="bg-white">
      <Header />
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 flex z-40 lg:hidden"
            onClose={setMobileFiltersOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="ml-auto relative max-w-xs w-full h-full bg-white shadow-xl py-4 pb-6 flex flex-col overflow-y-auto">
                <div className="px-4 flex items-center justify-between">
                  <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                  <button
                    type="button"
                    className="-mr-2 w-10 h-10 p-2 flex items-center justify-center text-gray-400 hover:text-gray-500"
                    onClick={() => setMobileFiltersOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Filters */}
                <form className="mt-4">
                  {filters.map((section) => (
                    <Disclosure
                      as="div"
                      key={section.name}
                      className="border-t border-gray-200 pt-4 pb-4"
                    >
                      {({ open }) => (
                        <fieldset>
                          <legend className="w-full px-2">
                            <Disclosure.Button className="w-full p-2 flex items-center justify-between text-gray-400 hover:text-gray-500">
                              <span className="text-sm font-medium text-gray-900">
                                {section.name}
                              </span>
                              <span className="ml-6 h-7 flex items-center">
                                <ChevronDownIcon
                                  className={classNames(
                                    open ? "-rotate-180" : "rotate-0",
                                    "h-5 w-5 transform"
                                  )}
                                  aria-hidden="true"
                                />
                              </span>
                            </Disclosure.Button>
                          </legend>
                          <Disclosure.Panel className="pt-4 pb-2 px-4">
                            <div className="space-y-6">
                              {section.options.map((option, optionIdx) => (
                                <div
                                  key={option.value}
                                  className="flex items-center"
                                >
                                  <input
                                    id={`${section.id}-${optionIdx}-mobile`}
                                    name={`${section.id}[]`}
                                    defaultValue={option.value}
                                    type="checkbox"
                                    className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                  />
                                  <label
                                    htmlFor={`${section.id}-${optionIdx}-mobile`}
                                    className="ml-3 text-sm text-gray-500"
                                  >
                                    {option.label}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </Disclosure.Panel>
                        </fieldset>
                      )}
                    </Disclosure>
                  ))}
                </form>
              </div>
            </Transition.Child>
          </Dialog>
        </Transition.Root>

        <main className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="border-b border-gray-200 pb-10 mt-[-4em]">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
              Biens disponibles
            </h1>
            <p className="mt-4 text-base text-gray-500">
              Naviguez à travers les maisons et vivez enfin votre rêve.
            </p>
          </div>

          <div className="pt-[2em] lg:grid lg:grid-cols-2 lg:gap-x-1 xl:grid-cols-2 lg:space-x-[-20em]">
            <aside className="w-2">
              <h2 className="sr-only">Filtres</h2>

              <button
                type="button"
                className="inline-flex items-center lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="text-sm font-medium text-gray-700">
                  Filtres
                </span>
                <PlusSmIcon
                  className="flex-shrink-0 ml-1 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </button>

              <div className="hidden lg:block w-[15em]">
                <form className="divide-y divide-gray-200 space-y-10">
                  {filters.map((section, sectionIdx) => (
                    <div
                      key={section.name}
                      className={sectionIdx === 0 ? null : "pt-10"}
                    >
                      <fieldset>
                        <legend className="block text-sm font-medium text-gray-900">
                          {section.name}
                        </legend>
                        <div className="pt-6 space-y-3">
                          {section.options.map((option, optionIdx) => (
                            <div
                              key={option.value}
                              className="flex items-center"
                            >
                              <input
                                id={`${section.id}-${optionIdx}`}
                                name={`${section.id}[]`}
                                defaultValue={option.value}
                                type="checkbox"
                                className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                              />
                              <label
                                htmlFor={`${section.id}-${optionIdx}`}
                                className="ml-3 text-sm text-gray-600"
                              >
                                {option.label}
                              </label>
                            </div>
                          ))}
                        </div>
                      </fieldset>
                    </div>
                  ))}
                </form>
              </div>
            </aside>

            {/* Product grid */}
            <div className="bg-white">
              <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className=" grid grid-cols-2 gap-x-2 gap-y-10 sm:gap-x-4 md:grid-cols-2 md:gap-y-0 lg:gap-x-2 mt-[-5em]">
                  {allBien &&
                    allBien.map((product) => (
                      <div className="group relative mb-6">
                        <Link to={`/biendetails/${product.id}`}>
                          <div
                            key={product.id}
                            className="z-99 w-full h-56 bg-gray-200 rounded-md overflow-hidden group-hover:opacity-75 lg:h-72 xl:h-80"
                          >
                            <img
                              src="https://res.cloudinary.com/dhudn6li6/image/upload/v1675287024/CheckPoint4/modele-de-maison-contemporaine_jx4ygg.jpg"
                              alt="ok"
                              className="w-full h-full object-center object-cover"
                            />
                          </div>
                        </Link>
                        <h3 className="mt-4 text-sm text-gray-700">
                          <span className="absolute inset-0" />
                          {product.titleBien}
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                          {product.type}
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          {product.prix}
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          {product.piece} pièces
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          {product.venteLocation}
                        </p>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
