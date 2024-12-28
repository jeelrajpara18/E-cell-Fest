import React from "react";
import { motion } from "framer-motion";
import RegisterButton from "../../components/button/registerButton";

function Hero() {
  return (
    <div className="relative flex justify-center items-center isolate px-6 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="mx-auto text-center py-24 sm:py-48 lg:py-56"
      >
        <div className=" font-semibold tracking-tight text-2xl lg:text-5xl">
          <h1 className="">E-Cell Fest 2024</h1>
          <div>Ignite, Innovate, Interact</div>
        </div>
        <div className="mt-8 text-pretty text-base lg:text-lg sm:text-xl/8 lg:flex items-center justify-center flex-col md:block">
          <div className="lg:flex gap-2 items-center text-center justify-center md:block">
            <p className="font-semibold">Event Date :</p>
            <p className="font-normal">January 8th, 2025</p>
          </div>
          <div className="lg:flex gap-2 md:block">
            <p className="font-semibold">Venue :</p>
            <p className="font-normal">Aryabhatt Hall & Ignite Auditorium</p>
          </div>
        </div>
        <div className="mt-3">
          <p className="font-serif text-xl">
            Join us for a day of creativity, collaboration, and entrepreneurial
            spirit!
          </p>
        </div>
        {/* <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="https://forms.gle/FwC3FKdqZ4ezyVCK9"
            target="_blank"
            rel="noreferrer"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Register Now
          </a>
        </div> */}
      </motion.div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        />
      </div>
    </div>
  );
}

export default Hero;
