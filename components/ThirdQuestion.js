import flightDate from "../assets/flightDate.png";
import { SectionWrapper, VerticalAlignContent, VerticalContainer, VerticalLineContainer } from "./IntroSection";
import { FormRadioItem } from "./FormRadioItem";
import { AnswersWrapper, LeftQuestions, RightFloatedContainer, SectionContent } from "./FirstQuestion";
import { useState, useContext } from "react";
import { QuestionContext } from "./QuestionContext";

const QS = [
  {
    id: "A 5-course dinner",
    label: "A 5-course dinner",
  },
  {
    id: "Hiking and smoothies",
    label: "Hiking and smoothies",
  },
  {
    id: "Cocktails and dancing",
    label: "Cocktails and dancing",
  },
  {
    id: "Catching a movie",
    label: "Catching a movie",
  },
  {
    id: "Browsing an art show",
    label: "Browsing an art show",
  },
];

export const ThirdQuestion = ({ formik }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { onNext } = useContext(QuestionContext);

  return (
    <SectionWrapper className="section-wrapper rtq" id="questionThree" style={{ maxWidth: "1144px" }}>
      <VerticalLineContainer className="no-mobile" style={{ bottom: "0", background: "#e4e4e4", width: "1px", height: "100%", left: "50%" }} />
      <VerticalContainer>
        <VerticalAlignContent>
          <SectionContent className="sec-content">
            <LeftQuestions questionIndex={3} image={flightDate} question={"Which best describes your perfect first date?"} />
            <RightFloatedContainer className="right-floated" style={{ paddingLeft: "57px" }}>
              <AnswersWrapper className="ans-wrap" style={{ paddingTop: "20px" }}>
                {QS.map(({ id, label }, index) => (
                  <FormRadioItem
                    onNext={onNext}
                    formik={formik}
                    currentIndex={currentIndex}
                    value={id}
                    index={index}
                    setCurrentIndex={setCurrentIndex}
                    key={index}
                    id={id}
                    label={label}
                    name="questionThree"
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
