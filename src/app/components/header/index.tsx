import Link from "next/link";
import {
    Car,
    Engine,
    Gear,
    PhoneTransfer,
} from "@phosphor-icons/react/dist/ssr";
import { GiTowTruck } from "react-icons/gi";
import { getSession, logout, login } from "@/services/sessions";
export const HeaderComponent = async () => {
    const session = await getSession();

    // console.log(session.id);

    return (
        <header className="flex shadow-md py-4 px-4 sm:px-10 bg-white font-[sans-serif] min-h-[70px] tracking-wide relative z-50">
            <div className="container mx-auto flex flex-wrap items-center justify-between gap-5 w-full">
                <Link
                    href="/"
                    className="text-gray-700 text-base lg:text-2xl font-extrabold hover:text-gray-900"
                >
                    Floripa Comercial
                </Link>

                <div
                    id="collapseMenu"
                    className="max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50"
                >
                    <button
                        id="toggleClose"
                        className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 fill-black"
                            viewBox="0 0 320.591 320.591"
                        >
                            <path
                                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                                data-original="#000000"
                            ></path>
                            <path
                                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                                data-original="#000000"
                            ></path>
                        </svg>
                    </button>

                    <ul className="lg:flex items-center gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
                        <Link
                            href={"/mechanics"}
                            className="
                                text-gray-800
                                text-sm px-2
                                font-semibold
                                hover:bg-[#1f2937]
                                hover:text-white
                                py-2
                                rounded
                            "
                        >
                            <div className="flex gap-1">
                                <Engine size={20} />
                                Mecânicos
                            </div>
                        </Link>
                        <Link
                            href={"/workshops"}
                            className="
                            text-gray-800
                            text-sm px-2
                            font-semibold
                            hover:bg-[#1f2937]
                            hover:text-white
                            py-2
                            rounded
                            "
                        >
                            <div className="flex gap-1">
                                <Car size={20} />
                                Oficinas
                            </div>
                        </Link>
                        <Link
                            href={"/store"}
                            className="
                            text-gray-800
                            text-sm px-2
                            font-semibold
                            hover:bg-[#1f2937]
                            hover:text-white
                            py-2
                            rounded
                            "
                        >
                            <div className="flex gap-1">
                                <Gear size={20} />
                                Auto peças
                            </div>
                        </Link>
                        <Link
                            href={"/winches"}
                            className="
                            text-gray-800
                            text-sm px-2
                            font-semibold
                            hover:bg-[#1f2937]
                            hover:text-white
                            py-2
                            rounded
                            "
                        >
                            <div className="flex gap-1">
                                <GiTowTruck size={20} />
                                Guinchos
                            </div>
                        </Link>
                        <Link
                            href={"/contact"}
                            className="
                            text-gray-800
                            text-sm px-2
                            font-semibold
                            hover:bg-[#1f2937]
                            hover:text-white
                            py-2
                            rounded
                            "
                        >
                            <div className="flex gap-1">
                                <PhoneTransfer size={20} />
                                Contato
                            </div>
                        </Link>
                    </ul>
                </div>

                {session && (
                    <div className="flex max-lg:ml-auto space-x-1">
                        <Link
                            href={"/dashboard"}
                            className="px-4 py-2 text-sm rounded-l-full font-bold text-white border-2 border-gray-800 bg-gray-800 transition-all ease-in-out duration-300 hover:bg-transparent hover:text-gray-800"
                        >
                            Painel
                        </Link>
                        <form
                            action={async () => {
                                "use server";
                                await logout();
                            }}
                        >
                            <button
                                type="submit"
                                className="cursor-pointer px-4 py-2 text-sm rounded-r-full font-bold text-white border-2 border-gray-800 bg-gray-800 transition-all ease-in-out duration-300 hover:bg-transparent hover:text-gray-800"
                            >
                                Logout
                            </button>
                        </form>

                        <span id="toggleOpen" className="lg:hidden">
                            <svg
                                className="w-7 h-7"
                                fill="#000"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </span>
                    </div>
                )}

                {!session && (
                    <div className="flex max-lg:ml-auto space-x-1">
                        <form
                            action={async () => {
                                "use server";
                                login();
                            }}
                        >
                            <button
                                type="submit"
                                className="cursor-pointer px-4 py-2 text-sm rounded-l-full font-bold text-white border-2 border-gray-800 bg-gray-800 transition-all ease-in-out duration-300 hover:bg-transparent hover:text-gray-800"
                            >
                                Entrar
                            </button>
                        </form>
                        <span className="cursor-pointer px-4 py-2 text-sm rounded-r-full font-bold text-white border-2 border-gray-800 bg-gray-800 transition-all ease-in-out duration-300 hover:bg-transparent hover:text-gray-800">
                            Criar conta
                        </span>

                        <span id="toggleOpen" className="lg:hidden">
                            <svg
                                className="w-7 h-7"
                                fill="#000"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </span>
                    </div>
                )}
            </div>
        </header>
    );
};
