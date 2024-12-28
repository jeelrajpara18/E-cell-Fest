import React, { useEffect, useRef } from "react";
import { projects } from "../../utils/card";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Card = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    const stickDistance = 0;

    const lastCard = cardRefs.current[cardRefs.current.length - 1];
    const lastCardST = ScrollTrigger.create({
      trigger: lastCard,
      start: "start center",
    });

    cardRefs.current.forEach((card, index) => {
      const scale = 1 - (cardRefs.current.length - index) * 0.015;
      const scaleDown = gsap.to(card, {
        scale: scale,
        transformOrigin: `50% ${lastCardST.start + stickDistance}`,
      });

      ScrollTrigger.create({
        trigger: card,
        start: "center center",
        end: () => lastCardST.start + stickDistance,
        pin: true,
        scrub: 0.25,
        ease: "none",
        animation: scaleDown,
        toggleActions: "restart none none reverse",
      });
    });

    // Clean up ScrollTriggers when component is unmounted
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <section className="cardStacking py-16 overflow-hidden px-4 md:px-4">
        <div className="container flex flex-col gap-28 mx-auto max-w-screen-lg">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="stackCard flex flex-col p-8 md:p-12 w-full bg-gradient-to-r from-slate-600 to-neutral-800 rounded-2xl"
            >
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h1 className="text-xl md:2xl font-bold uppercase">
                    {project.id} : {project.domainName}
                  </h1>
                  <h2 className="text-xl md:text-2xl font-semibold">
                    {project.title}
                  </h2>
                  <p className="mt-2 text-base md:text-lg">
                    {project.description}
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <img
                    src={project.src}
                    alt={project.title}
                    height={500}
                    width={500}
                    className="rounded-lg"
                  />
                </div>
              </div>
              <div className="mt-6">
                <button className="border rounded-full text-white px-6 py-2">
                  {project.button}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="spacer"></section>
    </>
  );
};

export default Card;
