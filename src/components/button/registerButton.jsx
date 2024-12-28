import React from "react";

function RegisterButton({ text }) {
  return (
    <div className="">
      <a
        href="https://forms.gle/FwC3FKdqZ4ezyVCK9"
        target="_blank"
        rel="noreferrer"
        className="px-8 py-2 rounded-md bg-blue-500 text-white transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-blue-500"
      >
        {text}
      </a>
    </div>
  );
}

export default RegisterButton;
