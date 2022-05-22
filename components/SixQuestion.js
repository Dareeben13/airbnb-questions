import flightSaturday from "../assets/flightSaturday.png";
import { SectionWrapper, VerticalAlignContent, VerticalContainer, VerticalLineContainer } from "./IntroSection";
import { FormRadioItem } from "./FormRadioItem";
import { AnswersWrapper, LeftQuestions, RightFloatedContainer, SectionContent } from "./FirstQuestion";
import { useState, useContext } from "react";
import { QuestionContext } from "./QuestionContext";

const QS = [
  {
    id: "Mimosa brunch",
    label: "Mimosa brunch",
  },
  {
    id: "Hitting up a flea market",
    label: "Hitting up a flea market",
  },
  {
    id: "Volunteering",
    label: "Volunteering",
  },
  {
    id: "Sleeping late",
    label: "Sleeping late",
  },
  {
    id: "Binging on movies",
    label: "Binging on movies",
  },
];

export const SixQuestion = ({ formik }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { onNext } = useContext(QuestionContext);

  return (
    <SectionWrapper className="section-wrapper rtq" id="questionSix" style={{ maxWidth: "1144px" }}>
      <VerticalLineContainer className="no-mobile" style={{ bottom: "0", background: "#e4e4e4", width: "1px", height: "100%", left: "50%" }} />
      <VerticalContainer>
        <VerticalAlignContent>
          <SectionContent className="sec-content">
            <LeftQuestions questionIndex={6} image={flightSaturday} question={"Saturdays are for..."} />
            <RightFloatedContainer className="right-floated" style={{ paddingLeft: "57px" }}>
              <AnswersWrapper className="ans-wrap" style={{ paddingTop: "20px" }}>
                {QS.map(({ id, label }, index) => (
                  <FormRadioItem
                    formik={formik}
                    onNext={onNext}
                    currentIndex={currentIndex}
                    value={id}
                    index={index}
                    setCurrentIndex={setCurrentIndex}
                    key={index}
                    id={id}
                    label={label}
                    name="questionSix"
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
