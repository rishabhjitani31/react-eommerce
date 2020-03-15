import React, { useState, useEffect, useRef } from "react";

import { StyledAccordion, StyledPanel } from "./styles";
import UpArrow from "~/icons/up";

const Accordion = ({ label, children }) => {
  const [activeTab, setActiveTab] = useState("");
  const [height, setheight] = useState(0);

  const innerPanel = useRef(null);

  useEffect(() => {
    window.setTimeout(() => {
      setheight(innerPanel.current.scrollHeight);
    }, 333);
  }, []);

  const activateTab = label => {
    setActiveTab(activeTab === label ? "" : label);
  };

  const isActive = activeTab === label;

  const innerStyle = {
    height: `${isActive ? height : 0}px`
  };

  return (
    <StyledAccordion role="tablist" className="accordion">
      <StyledPanel role="tabpanel" aria-expanded={isActive}>
        <button
          className="panel__label"
          role="tab"
          onClick={() => activateTab(label)}
        >
          {label}
          <UpArrow className="panel__arrow" />
        </button>
        <div
          className="panel__inner"
          style={innerStyle}
          aria-hidden={!isActive}
          ref={innerPanel}
        >
          <div className="panel__content">{children}</div>
        </div>
      </StyledPanel>
    </StyledAccordion>
  );
};

export default Accordion;
