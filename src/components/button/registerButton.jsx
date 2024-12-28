import React from "react";

function RegisterButton({ text }) {
  return (
    <div className="">
      <a
        href="https://forms.gle/FwC3FKdqZ4ezyVCK9"
        target="_blank"
        rel="noreferrer"
        className="rounded-md bg-indigo-600 px-3.5 py-2.5 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        {text}
      </a>
    </div>
  );
}

export default RegisterButton;
