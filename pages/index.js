import tw from "tailwind-styled-components";
import { Formik } from "formik";

import { Fragment } from "react";
import { FirstQuestion } from "../components/FirstQuestion";
import { IntroSection, SliderDownContainer } from "../components/IntroSection";
import React from "react";
import { SecondQuestion } from "../components/SecondQuestion";
import { QuestionContext } from "../components/QuestionContext";

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
            // setTimeout(() => {
            //   alert(JSON.stringify(values, null, 2));
            //   setSubmitting(false);
            // }, 400);
            console.log({ values });
          }}
        >
          {(formik) => (
            <Fragment>
              <FirstQuestion formik={formik} />
              <SecondQuestion formik={formik} />
            </Fragment>
          )}
        </Formik>
      </MainWrapper>
    </Fragment>
  );
}

const MainWrapper = tw.main`
 relative 
`;
