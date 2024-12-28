import { motion } from "framer-motion";
import RegisterButton from "../../components/button/registerButton";
import cta from "../../assets/cta.avif"

export const Cta = () => {
  return (
    <div className="relative flex flex-col max-w-5xl m-auto justify-center items-center isolate px-6 lg:px-8 border border-slate-400 bg-gradient-to-r from-gray-600 to-blue-900 py-20 shadow-2xl">
      <div className="mx-auto text-center ">
        <div className="mx-auto text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration  : 1 }}
            viewport={{ once: true }}
            className="font-semibold tracking-tight text-xl lg:text-5xl py-4"
          >
            <h1 className="">Ready to Take the Leap?</h1>
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
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="py-4"
          >
            <p className="text-lg lg:text-xl">
              Don’t miss out on the opportunity to enhance your skills, network
              with industry professionals, and showcase your talent at E-Cell
              Fest 2024. Whether you’re a budding entrepreneur or an aspiring
              designer, there’s something for everyone!
            </p>
          </motion.div>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mt-6"
          >
            <RegisterButton text={"Register now"}/>
          </motion.div>
        </div>
      </div>
    </div>
  );
};