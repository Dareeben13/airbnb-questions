import tw from "tailwind-styled-components";

import { Form } from "formik";

import Image from "next/image";
import flightDresss from "../assets/flight-dress.png";
import { ResponsiveImage, SectionWrapper, VerticalAlignContent, VerticalContainer, VerticalLineContainer } from "./IntroSection";
import { FormRadioItem } from "./FormRadioItem";
import { useState, useContext } from "react";
import { QuestionContext } from "./QuestionContext";

export const FirstQuestion = ({ formik }) => {
  const { onNext } = useContext(QuestionContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const QA = [
    {
      id: "Sweat pants. Duh",
    },
    {
      id: "Security lines be damned, I'm rocking boots.",
    },
    {
      id: "Workout clothes, just in case there's a yoga room somewhere.",
    },
    {
      id: "Same outfit I was wearing last night. Oops.",
    },
    {
      id: "Who cares, as long as it's comfortable.",
    },
  ];
  return (
    <SectionWrapper className="section-wrapper rtq" id="questionOne" style={{ maxWidth: "1144px" }}>
      <VerticalLineContainer className="no-mobile" style={{ bottom: "0", background: "#e4e4e4", width: "1px", height: "100%", left: "50%" }} />
      <VerticalContainer>
        <VerticalAlignContent>
          <SectionContent className="sec-content">
            <LeftQuestions questionIndex={1} image={flightDresss} question={"You're headed to the airport for an early morning flight. What are you wearing?"} />
            <RightFloatedContainer className="right-floated" style={{ paddingLeft: "57px" }}>
              <AnswersWrapper className="ans-wrap" style={{ paddingTop: "20px" }}>
                {QA.map(({ id }, index) => (
                  <FormRadioItem
                    formik={formik}
                    value={id}
                    currentIndex={currentIndex}
                    onNext={onNext}
                    index={index}
                    setCurrentIndex={setCurrentIndex}
                    key={index}
                    id={id}
                    label={id}
                    name="questionOne"
                  />
                ))}
              </AnswersWrapper>
            </RightFloatedContainer>
          </SectionContent>
        </VerticalAlignContent>
      </VerticalContainer>
    </SectionWrapper>
  );
};

export const LeftQuestions = ({ question, image, questionIndex }) => (
  <LeftFloatedContainer className="left-floated">
    <QuestionWrapper>
      <QuestionTextWrapper>
        <Subject style={{ color: "#ff5a5f", letterSpacing: ".2em", fontSize: "11px", lineHeight: "1.42" }}>Question {questionIndex}/8</Subject>
        <QuestionH1 className="q-h1" style={{ letterSpacing: "-1px", lineHeight: "1.13", marginBottom: "15px", fontSize: "28px" }}>
          {question}
        </QuestionH1>
      </QuestionTextWrapper>
      <ResponsiveImage>
        <Image priority src={image} alt="Flight Dress" />
      </ResponsiveImage>
    </QuestionWrapper>
  </LeftFloatedContainer>
);

export const SectionContent = tw.div`
mt-3 relative
`;

export const LeftFloatedContainer = tw.div`
pr-14	w-6/12 float-left relative pl-3	
`;

export const RightFloatedContainer = tw.div`
 float-right w-6/12
`;

export const QuestionWrapper = tw.div`

`;
export const AnswersWrapper = tw(Form)`

`;

export const QuestionTextWrapper = tw.div`
text-left
`;

export const Subject = tw.div`
mb-1 uppercase font-semibold	
`;

export const QuestionH1 = tw.h1`
 text-airbnb-black font-sans font-semibold	
`;
