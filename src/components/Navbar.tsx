"use client";

import { Rochester } from "next/font/google";
import { FaRegCircleQuestion } from "react-icons/fa6";
import Modal from "@/components/Modal/Modal";
import { useState } from "react";
import HowToPlayScreen from "./Modal/HowToPlayScreen";
import Image from "next/image";

const rochester = Rochester({
    weight: "400",
    subsets: ["latin"],
});

const Navbar = () => {
    const [showQuestionModal, setShowQuestionModal] = useState(false);


    return (
        <>
            {showQuestionModal && <Modal>
                <HowToPlayScreen setShowModal={setShowQuestionModal} />
            </Modal>}
            <nav className="flex items-center justify-between flex-wrap p-2">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <Image src="/logo.png" width={48} height={48} className="h-12 w-12 m-0 mr-1" alt="Logo" />
                    <span className={`${rochester.className} font-semibold tracking-tight text-black text-xl`}>KayaButterNews</span>
                </div>
                {/* <div className="block lg:hidden">
                    <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                    </button>
                </div> */}
                {/* <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="text-sm lg:flex-grow"> */}
                        {/* <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                            Docs
                        </a>
                        <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                            Examples
                        </a>
                        <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                            Blog
                        </a> */}
                    {/* </div> */}
                    <div>
                        <button
                            onClick={() => setShowQuestionModal(true)}
                            className="mr-4 text-black h-8 w-8 inline-block leading-none mt-4 lg:mt-0"
                            aria-label="Question icon"
                        >
                            <FaRegCircleQuestion />
                        </button>
                    </div>
                {/* </div> */}
            </nav>
        </>
    )
}

export default Navbar;