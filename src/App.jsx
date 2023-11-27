import Hero from "./components/Hero";
import card1 from "./visuals/card1.svg";
import card2 from "./visuals/card2.svg";
import card3 from "./visuals/card3.svg";
import card4 from "./visuals/card4.svg";
import h from "./visuals/title-icon.png";
import team from "./visuals/team-member.svg";
import logo from "./visuals/virtex-logo.svg";
import team2 from "./visuals/team-member2.svg";

function App() {
  return (
    <>
      <Hero />
      <div className="md:py-24 py-14 md:px-20 px-5 flex">
        <div className="max-w-7xl m-auto">
          <h1 className="flex gap-3 text-white items-center font-semibold text-lg mb-10">
            <img className="h-7" src={h} alt="" /> Company functionalities
          </h1>
          <div className=" flex justify-between  gap-8 overflow-x-auto">
            <img src={card1} alt="" />
            <img src={card2} alt="" />
            <img src={card3} alt="" />
            <img src={card4} alt="" />
          </div>
        </div>
      </div>
      <div className="md:pb-24 pb-14 md:px-20 px-5 flex">
        <div className="max-w-7xl m-auto w-full">
          <h1 className="flex gap-3 text-white items-center font-semibold text-lg mb-10">
            <img className="h-7" src={h} alt="" /> Team Leaders
          </h1>
          <div className=" flex gap-8 gap-8 overflow-x-auto">
            <img src={team} alt="" />
            <img src={team2} alt="" />
          </div>
        </div>
      </div>
      <section class="md:pb-24 pb-14 md:px-20 px-5 pt-10 rounded-lg text-white">
        <h1 className="flex gap-3 text-white items-center font-semibold text-lg mb-10">
          <img className="h-7" src={h} alt="" /> Foire Aux Questions
        </h1>
        <div class="w-3/4 m-auto">
          <details class="border border-[#3f37ae] rounded pt-2 pb-3 px-3 relative open:shadow-lg mb-3 justify-center bg-none open:bg-[#05013C] duration-300">
            <summary class="list-none font-semibold relative text-sm cursor-pointer pr-7">
              Qu'est-ce que VIRTEX
              <div class="absolute top-0 right-0 bg-[#05013C] rounded-full px-1 py-0.5 cursor-pointer visible open:invisible">
                <svg
                  class="h-5 w-4 text-pink-700"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="{1.5}"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </div>
            </summary>
            <p class="text-gray-300 text-sm pt-3">
              VIRTEX est une plateforme de pointe proposant des environnements
              de metaverse immersifs spécialement conçus pour l'éducation et les
              réunions professionnelles. Elle offre une expérience virtuelle
              unique pour des cours interactifs en ligne et des réunions
              d'entreprise.
            </p>
          </details>
          <details class="border border-[#3f37ae] rounded py-5 px-3 relative open:shadow-lg mb-3 bg-none open:bg-[#1e1b4b] duration-300">
            <summary class="list-none font-semibold relative text-sm cursor-pointer pr-7">
              Comment VIRTEX bénéficie-t-il aux utilisateurs ?
              <div class="absolute top-0 right-0 bg-[#05013C] rounded-full px-1 py-0.5 cursor-pointer visible open:invisible">
                <svg
                  class="h-5 w-4 text-pink-700"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="{1.5}"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </div>
            </summary>
            <p class="text-gray-300 text-sm pt-3">
              VIRTEX élimine les barrières géographiques, permettant aux
              personnes du monde entier de se connecter virtuellement. Il
              améliore l'engagement des apprenants et des professionnels,
              économise du temps et des coûts liés aux déplacements, et fournit
              des outils de suivi et d'analyse de l'engagement des participants.
            </p>
          </details>
          <details class="border border-[#3f37ae] rounded py-5 px-3 relative open:shadow-lg mb-3 bg-none open:bg-[#05013C] duration-300">
            <summary class="list-none font-semibold relative text-sm cursor-pointer pr-7">
              Pourquoi choisir VIRTEX pour l'éducation et les réunions ?
              <div class="absolute top-0 right-0 bg-[#05013C] rounded-full px-1 py-0.5 cursor-pointer visible open:invisible">
                <svg
                  class="h-5 w-4 text-pink-700"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="{1.5}"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </div>
            </summary>
            <p class="text-gray-300 text-sm pt-3">
              VIRTEX est un pionnier dans la tendance du metaverse, offrant des
              solutions avant-gardistes. Il répond à la demande croissante
              d'éducation à distance, capitalise sur les économies de temps et
              de coûts, et crée des expériences immersives absentes des
              plates-formes en ligne traditionnelles.
            </p>
          </details>
          <details class="border border-[#3f37ae] rounded py-5 px-3 relative open:shadow-lg mb-3 bg-none open:bg-[#05013C] duration-300">
            <summary class="list-none font-semibold relative text-sm cursor-pointer pr-7">
              VIRTEX contribue-t-il à la durabilité ?
              <div class="absolute top-0 right-0 bg-[#05013C] rounded-full px-1 py-0.5 cursor-pointer visible open:invisible">
                <svg
                  class="h-5 w-4 text-pink-700"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="{1.5}"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </div>
            </summary>
            <p class="text-gray-300 text-sm pt-3">
              En réduisant les déplacements physiques, VIRTEX favorise la
              durabilité environnementale en diminuant les émissions de carbone.
              La plateforme s'aligne sur des pratiques respectueuses de
              l'environnement, en faisant un choix responsable pour les réunions
              et les cours virtuels.
            </p>
          </details>
          <details class="border border-[#3f37ae] rounded py-5 px-3 relative open:shadow-lg mb-3 bg-none open:bg-[#05013C] duration-300">
            <summary class="list-none font-semibold relative text-sm cursor-pointer pr-7">
              Comment VIRTEX garantit-il la sécurité et la confidentialité ?
              <div class="absolute top-0 right-0 bg-[#05013C] rounded-full px-1 py-0.5 cursor-pointer visible open:invisible">
                <svg
                  class="h-5 w-4 text-pink-700"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="{1.5}"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </div>
            </summary>
            <p class=" pt-3">
              VIRTEX accorde une priorité absolue à la sécurité des données et
              des utilisateurs. Les partenariats avec des fournisseurs de
              services de cybersécurité de premier plan assurent une protection
              efficace contre les cybermenaces, garantissant la confidentialité
              des informations sensibles.
            </p>
          </details>
        </div>
      </section>

      <footer class="rounded-lg shadow dark:bg-[#27244f] m-4">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div class="sm:flex sm:items-center sm:justify-between">
            <a
              href="https://flowbite.com/"
              class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <img className="h-6" src={logo} class="h-8" alt="Flowbite Logo" />
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a href="#" class="hover:underline me-4 md:me-6">
                  About
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline me-4 md:me-6">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline me-4 md:me-6">
                  Licensing
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="https://flowbite.com/" class="hover:underline">
              VIRTEX™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
}

export default App;
