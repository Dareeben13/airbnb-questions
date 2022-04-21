import tw from "tailwind-styled-components";

import { Fragment } from "react";
import { FirstQuestion } from "../components/FirstQuestion";
import { IntroSection, SliderDownContainer } from "../components/IntroSection";
import React from "react";

export default function Home() {
  const [show, setShow] = React.useState(false);

  const scroll = () => {
    const section = document.querySelector(`#questionOne`);
    section.scrollIntoView({ behavior: "smooth", block: "start" });
    setTimeout(() => {
      setShow(true);
    }, 500);
  };

  return (
    <Fragment>
      <IntroSection onClick={() => scroll()} />
      <MainWrapper>
        <SliderDownContainer
          style={{ display: show ? "flex" : "none", zIndex: "100", borderRadius: "50%", border: "1px solid #e4e4e4", position: "fixed", top: "40px", left: "50%", marginLeft: "-24px" }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="21" height="14" viewBox="0 0 21 14">
            <path fill="#B4A76C" fillRule="nonzero" d="M10.5 0L21 10.413 17.385 14 10.5 7.171 3.615 14 0 10.414z"></path>
          </svg>
        </SliderDownContainer>
        <SliderDownContainer
          style={{ display: show ? "flex" : "none", zIndex: "100", borderRadius: "50%", border: "1px solid #e4e4e4", position: "fixed", bottom: "40px", left: "50%", marginLeft: "-24px" }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="21" height="14" viewBox="0 0 21 14">
            <path fill="#B4A76C" fillRule="nonzero" d="M10.5 14L0 3.587 3.615 0 10.5 6.829 17.385 0 21 3.586z"></path>
          </svg>
        </SliderDownContainer>
        <FirstQuestion />
      </MainWrapper>
    </Fragment>
  );
}

const MainWrapper = tw.main`
 relative 
`;
