/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Header from "@components/Header";
import { Link } from "react-router-dom";

const perks = [
  {
    name: "",
    imageUrl:
      "https://res.cloudinary.com/dhudn6li6/image/upload/v1675415501/CheckPoint4/5a37e212d904a8.5091170115136117948889_t4lhli.png",
    description: "Partenaire Apple",
  },
  {
    name: "",
    imageUrl:
      "https://res.cloudinary.com/dhudn6li6/image/upload/v1675415920/CheckPoint4/kisspng-edison-tax-group-llc-paypal-computer-icons-paymen-paypal-5aca6260e32f32.3873392815232128969306_ods8dd.png",
    description: "Paiement sécurisé",
  },
  {
    name: "",
    imageUrl:
      "https://res.cloudinary.com/dhudn6li6/image/upload/v1675416060/CheckPoint4/kisspng-d3-js-react-javascript-mean-document-object-model-react-d3-library-5b84961a0d8373.8412059715354158340554_z58b9s.png",
    description: "React",
  },
  {
    name: "",
    imageUrl:
      "https://res.cloudinary.com/dhudn6li6/image/upload/v1675416509/CheckPoint4/napoleon-bonaparte-revolutionaries-1-oz-silver-coin-1000-togrog-mongolia-2021_nwwz3o.png",
    description: "Mon nom d'entreprise",
  },
];

export default function HomePage() {
  return (
    <main>
      <Header />
      {/* Hero section */}
      <div className="relative">
        {/* Background image and overlap */}
        <div
          aria-hidden="true"
          className="hidden absolute inset-0 sm:flex sm:flex-col"
        >
          <div className="flex-1 relative w-full bg-gray-800">
            <div className="absolute inset-0 overflow-hidden">
              <img
                src="https://res.cloudinary.com/dhudn6li6/image/upload/v1675256800/CheckPoint4/combien-coute-maison-campagne_brn15a.jpg"
                alt=""
                className="w-full h-full object-center object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gray-900 opacity-50" />
          </div>
          <div className="w-full bg-white h-32 md:h-40 lg:h-48" />
        </div>

        <div className="relative max-w-3xl mx-auto pb-96 px-4 text-center sm:pb-0 sm:px-6 lg:px-8">
          {/* Background image and overlap */}
          <div
            aria-hidden="true"
            className="absolute inset-0 flex flex-col sm:hidden"
          >
            <div className="flex-1 relative w-full bg-gray-800">
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src="https://res.cloudinary.com/dhudn6li6/image/upload/v1675256800/CheckPoint4/combien-coute-maison-campagne_brn15a.jpg"
                  alt=""
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gray-900 opacity-50" />
            </div>
            <div className="w-full bg-white h-48" />
          </div>
          <div className="relative py-32">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              Trouvez votre bonheur immobilier
            </h1>
          </div>
        </div>

        <section
          aria-labelledby="collection-heading"
          className="-mt-96 relative sm:mt-0"
        >
          <h2 id="collection-heading" className="sr-only">
            Menu
          </h2>
          <div className="max-w-md mx-auto grid grid-cols-1 gap-y-6 px-4 sm:max-w-7xl sm:px-6 sm:grid-cols-3 sm:gap-y-0 sm:gap-x-6 lg:px-8 lg:gap-x-8 mt-[8em]">
            <div
              key="Achetez Louez"
              className="group relative h-96 bg-white rounded-lg shadow-xl sm:h-auto sm:aspect-w-4 sm:aspect-h-5"
            >
              <div>
                <div
                  aria-hidden="true"
                  className="absolute inset-0 rounded-lg overflow-hidden"
                >
                  <div className="absolute inset-0 overflow-hidden group-hover:opacity-75">
                    <img
                      src="https://res.cloudinary.com/dhudn6li6/image/upload/v1675263655/CheckPoint4/20220110_161429_1-but-ressources-rp-salonamb_dyqgak.jpg"
                      alt=""
                      className="w-full h-full object-center object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50" />
                </div>
                <div className="absolute inset-0 rounded-lg p-6 flex items-end bg-gradient-to-t from-black opacity-70">
                  <Link to="/searchbien">
                    {" "}
                    <div>
                      <h3 className="mt-1 font-semibold text-white ">
                        <span className="absolute inset-0" />
                        Achetez / Louez
                      </h3>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div
              key="Vendez Louez"
              className="group relative h-96 bg-white rounded-lg shadow-xl sm:h-auto sm:aspect-w-4 sm:aspect-h-5"
            >
              <div>
                <div
                  aria-hidden="true"
                  className="absolute inset-0 rounded-lg overflow-hidden"
                >
                  <div className="absolute inset-0 overflow-hidden group-hover:opacity-75">
                    <img
                      src="https://res.cloudinary.com/dhudn6li6/image/upload/v1675265728/CheckPoint4/couv-5_owgtum.jpg"
                      alt=""
                      className="w-full h-full object-center object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50" />
                </div>
                <div className="absolute inset-0 rounded-lg p-6 flex items-end bg-gradient-to-t from-black opacity-70">
                  <Link to="/ajoutbien">
                    {" "}
                    <div>
                      <h3 className="mt-1 font-semibold text-white ">
                        <span className="absolute inset-0" />
                        Vendez / Louez
                      </h3>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div
              key="Contactez nous"
              className="group relative h-96 bg-white rounded-lg shadow-xl sm:h-auto sm:aspect-w-4 sm:aspect-h-5"
            >
              <div>
                <div
                  aria-hidden="true"
                  className="absolute inset-0 rounded-lg overflow-hidden"
                >
                  <div className="absolute inset-0 overflow-hidden group-hover:opacity-75">
                    <img
                      src="https://res.cloudinary.com/dhudn6li6/image/upload/v1675291815/CheckPoint4/KINNA-BUREAU-CHENE-KINNA-26387505-A-2_tqc7ed.avif"
                      alt=""
                      className="w-full h-full object-center object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50" />
                </div>
                <div className="absolute inset-0 rounded-lg p-6 flex items-end bg-gradient-to-t from-black opacity-70">
                  <Link to="/contact">
                    {" "}
                    <div>
                      <h3 className="mt-1 font-semibold text-white ">
                        <span className="absolute inset-0" />
                        Contactez-nous
                      </h3>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section
        aria-labelledby="perks-heading"
        className="bg-gray-50 border-t border-gray-200"
      >
        <h2 id="perks-heading" className="sr-only">
          Our perks
        </h2>

        <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 sm:py-32 lg:px-8">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-0">
            {perks.map((perk) => (
              <div
                key={perk.name}
                className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
              >
                <div className="md:flex-shrink-0">
                  <div className="flow-root">
                    <img
                      className="-my-1 h-24 w-auto mx-auto"
                      src={perk.imageUrl}
                      alt=""
                    />
                  </div>
                </div>
                <div className="mt-6 md:mt-0 md:ml-4 lg:mt-6 lg:ml-0">
                  <h3 className="text-sm font-semibold tracking-wide uppercase text-gray-900">
                    {perk.name}
                  </h3>
                  <p className="mt-3 text-sm text-gray-500">
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
