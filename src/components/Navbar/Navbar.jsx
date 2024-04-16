import React from "react";
import Logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";


const Menu = [
    {
        id: 1,
        name: "Home",
        link: "/#"
    },
    {
        id: 2,
        name: "Melhor Avaliados",
        link: "/#services"
    },
    {
        id: 3,
        name: "Moda Infantil",
        link: "/#"
    },
    {
        id: 4,
        name: "Moda Masculina",
        link: ".#services"
    },
    {
        id: 5,
        name: "Moda Feminina",
        link: "/#"
    }
]
const DropdownLinks = [
    {
        id: 6,
        name: "Mais Procurados",
        link: "#"
    },
    {
        id: 7,
        name: "Mais Vendidos",
        link: "#"
    },
    {
        id: 8,
        name: "Melhor avaliados",
        link: "#"
    }
]

const Navbar = ({ handlerOrderPopup }) => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* upper Navbar */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={Logo} alt="Logo" className="w-10 uppercase" />
              Shopsy
            </a>
          </div>
          {/* barra de pesquisa */}
          <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder=" O que você busca"
                className="w-[200px] sm:w-[200px] group-hover:w-[250px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1
                focus:border-primary
                dark:border-gray-500
                dark:bg-gray-800"
              />
              {/* Aqui abaixo usei React icons instalando com npm i react-icons e importando acima*/}
              <IoMdSearch className="text-gray-500 group-hover:text-primary  absolute top-1/2 -translate-y-1/2 right-3" />
            </div>
            {/* botão de pedidos */}
            <button
              onClick={() => handlerOrderPopup()}
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-300 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-300">
                Pedido
              </span>
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>
            {/* Darkmode Botão */}
            <div>
                <DarkMode />
            </div>
          </div>
        </div>
      </div>
      {/* lower Navbar */}
      <div data-aos="zoom-in" className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4">
            {
                Menu.map((data) => (
                    <li key={data.id}>
                        <a href={data.link}
                        className="inline-block px-4 hover:text-primary duration-200"
                        >{data.name}</a>
                    </li>
                ))
            }
            {/* Menu com a barra de opções */}
            <li className="group relative cursor-pointer">
                <a href="#"
                className="flex items-center gap-[2px] py-2">
                    Mais Procurados
                    <span>
                        <FaCaretDown 
                        className="transition-all
                        duration-200
                        group-hover:rotate-180"
                        />
                    </span>
                </a>
                <div className="absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-white p-2 text-black shadow-md">
                    <ul>
                        {DropdownLinks.map((data) => (
                            <li key={data.id}>
                                <a href={data.link}
                                className="inline-block w-full rounded-md p-2 hover:bg-primary/20 "
                                >{data.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
