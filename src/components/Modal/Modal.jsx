import React from 'react'
import { TiDelete } from "react-icons/ti";
export default function Modal({ show, handleClose, children }) {
  if (!show) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full z-50 flex justify-center items-center bg-black bg-opacity-80">
      <div className="relative bg-black rounded-lg shadow-lg max-w-lg w-full mx-4 p-2">
        <TiDelete className="absolute top-2 right-2 text-2xl text-white z-10 hover:scale-125 transition-all duration-300 cursor-pointer" onClick={handleClose} />
        {children}
      </div>
    </div>
  )
}
