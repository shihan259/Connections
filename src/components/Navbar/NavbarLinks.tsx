import { useState } from "react";
import { FaRegCircleQuestion } from "react-icons/fa6";
import HowToPlayScreen from "../Modal/HowToPlayScreen";
import Modal from "../Modal/Modal";
import PastPuzzlesScreen from "../Modal/PastPuzzlesScreen";

const NavbarLinks = () => {
  const [showQuestionModal, setShowQuestionModal] = useState(false);
  const [showPastPuzzlesModal, setShowPastPuzzlesModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {showQuestionModal && (
        <Modal>
          <HowToPlayScreen setShowModal={setShowQuestionModal} />
        </Modal>
      )}
      {showPastPuzzlesModal && (
        <Modal>
          <PastPuzzlesScreen setShowModal={setShowPastPuzzlesModal} />
        </Modal>
      )}
      {/* Hamburger */}
      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
        >
          <svg
            className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
          <svg
            className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
        </button>
      </div>
      {/* Navigation Links */}
      <div
        className={`ml-auto w-full block justify-end flex-grow lg:flex lg:items-center lg:w-auto ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="text-sm lg:flex-grow">
          <a
            href="#"
            onClick={() => setShowPastPuzzlesModal(true)}
            className="font-bold block mt-4 z-10 lg:inline-block lg:mt-0 mr-4 center hover-underline-animation"
          >
            Past Konnections
          </a>
          <a
            href="#"
            onClick={() => setShowQuestionModal(true)}
            className="lg:hidden font-bold block z-10 mt-4 lg:inline-block lg:mt-0 mr-4 center hover-underline-animation"
          >
            How to Play?
          </a>
        </div>
        {/* How to play button */}
        <button
          onClick={() => setShowQuestionModal(true)}
          className="lg:mt-0 hidden lg:block leading-none"
          aria-label="Question icon"
        >
          <FaRegCircleQuestion />
        </button>
      </div>
    </>
  );
};

export default NavbarLinks;