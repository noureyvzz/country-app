import React, { useState } from "react";

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ margin: "10px 0", border: "1px solid #ccc", padding: "10px" }}>
      <h3 onClick={toggleAccordion} style={{ cursor: "pointer" }}>
        {isOpen ? "Hide" : "Show"} {title}
      </h3>
      {isOpen && <div>{children}</div>}
    </div>
  );
};

export default Accordion;
