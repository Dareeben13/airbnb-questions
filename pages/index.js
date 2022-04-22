import tw from "tailwind-styled-components";
import { Formik } from "formik";

import { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FirstQuestion } from "../components/FirstQuestion";
import { IntroSection, SliderDownContainer } from "../components/IntroSection";
import React from "react";
import { SecondQuestion } from "../components/SecondQuestion";
import { QuestionContext } from "../components/QuestionContext";

import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";

import airbnbLogo from "../assets/airbnb-logo.png";
import Image from "next/image";

export default function Home() {
  const { currentSection, scroll, onPrev, onNext, lastId } = React.useContext(QuestionContext);

  return (
    <Fragment>
      <IntroSection onClick={() => scroll("questionOne")} />
      <SliderDownContainer
        onClick={onPrev}
        className="no-mobile"
        style={{
          display: currentSection !== "intro" ? "flex" : "none",
          zIndex: "100",
          borderRadius: "50%",
          border: "1px solid #e4e4e4",
          position: "fixed",
          top: "40px",
          left: "50%",
          marginLeft: "-24px",
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="14" viewBox="0 0 21 14">
          <path fill="#B4A76C" fillRule="nonzero" d="M10.5 0L21 10.413 17.385 14 10.5 7.171 3.615 14 0 10.414z"></path>
        </svg>
      </SliderDownContainer>
      <SliderDownContainer
        onClick={onNext}
        className="no-mobile"
        style={{
          display: currentSection !== "intro" && currentSection !== lastId ? "flex" : "none",
          zIndex: "100",
          borderRadius: "50%",
          border: "1px solid #e4e4e4",
          position: "fixed",
          bottom: "40px",
          left: "50%",
          marginLeft: "-24px",
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="14" viewBox="0 0 21 14">
          <path fill="#B4A76C" fillRule="nonzero" d="M10.5 14L0 3.587 3.615 0 10.5 6.829 17.385 0 21 3.586z"></path>
        </svg>
      </SliderDownContainer>
      <MainWrapper>
        <Formik
          initialValues={{ questionOne: "", questionTwo: "" }}
          onSubmit={(values, { setSubmitting }) => {
            let currentEmptyKeys = Object.keys(values).filter((key) => values[key] === "");
            if (currentEmptyKeys.length > 0) {
              scroll(currentEmptyKeys[0]);
            } else {
              console.log(values);
            }
          }}
        >
          {(formik) => (
            <div className="relative">
              <FirstQuestion formik={formik} />
              <SecondQuestion formik={formik} />
              {currentSection !== "intro" && (
                <>
                  <div className="small-logo no-mobile">
                    <Image src={airbnbLogo} alt="Small Airbnb logo" />
                  </div>
                  <div className="fixed link-icons no-mobile flex gap-x-3.5">
                    <FontAwesomeIcon className="cursor-pointer" icon={faFacebook} />
                    <FontAwesomeIcon className="cursor-pointer" icon={faTwitter} />
                  </div>
                </>
              )}
            </div>
          )}
        </Formik>
      </MainWrapper>
      <svg className="menu-icon" fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px">
        <path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z" />
      </svg>
      {/* <svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px"><path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"/></svg> */}
    </Fragment>
  );
}

const MainWrapper = tw.main`
 relative 
`;
