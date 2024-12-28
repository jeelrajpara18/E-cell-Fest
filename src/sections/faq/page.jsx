import React, { useRef, useEffect, useState } from "react";
import "./accordian.css";

const AccordionItem = ({ handleToggle, active, faq }) => {
  const contentEl = useRef(null);
  const [height, setHeight] = useState("0px");

  const { header, id, text } = faq || {};

  useEffect(() => {
    if (active === id && contentEl.current) {
      setHeight(`${contentEl.current.scrollHeight}px`);
    } else {
      setHeight("0px");
    }
  }, [active, id]);

  return (
    <div className="MainAccordianContainer">
      <div className="rcAccordionCard">
        <div
          className={`rcAccordionToggle ${
            active === id ? "rcAccordionToggleActive" : ""
          } p-3`}
          onClick={() => handleToggle(id)}
        >
          <h5 className="rcAccordionTitle">{header}</h5>
          <svg
            className="rcAccordionIcon"
            width="24"
            height="24"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
          >
            <path
              d="M23.245 4l-11.245 14.374-11.219-14.374-.781.619 12 15.381 12-15.391-.755-.609z"
              fill="white"
            />
          </svg>
        </div>

        <div
          ref={contentEl}
          className={`"rcCollapse" ${active === id ? "rcCollapseShow" : ""}`}
          style={{ height }}
        >
          <div className="rcAccordionBody">
            <p>{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
