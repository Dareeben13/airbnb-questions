import flightSeven from "../assets/flightSeven.png";
import { SectionWrapper, VerticalAlignContent, VerticalContainer, VerticalLineContainer } from "./IntroSection";
import { FormRadioItem } from "./FormRadioItem";
import { AnswersWrapper, LeftQuestions, RightFloatedContainer, SectionContent } from "./FirstQuestion";
import { useState, useContext } from "react";
import { QuestionContext } from "./QuestionContext";

const QS = [
  {
    id: "A genius composer",
    label: "A genius composer",
  },
  {
    id: "A notorious celebrity",
    label: "A notorious celebrity",
  },
  {
    id: "A famous biologist",
    label: "A famous biologist",
  },
  {
    id: "A decadent socialite",
    label: "A decadent socialite",
  },
  {
    id: "A game-changing inventor",
    label: "A game-changing inventor",
  },
];

export const SeventhQuestion = ({ formik }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { onNext } = useContext(QuestionContext);

  return (
    <SectionWrapper className="section-wrapper rtq" id="questionSeven" style={{ maxWidth: "1144px" }}>
      <VerticalLineContainer className="no-mobile" style={{ bottom: "0", background: "#e4e4e4", width: "1px", height: "100%", left: "50%" }} />
      <VerticalContainer>
        <VerticalAlignContent>
          <SectionContent className="sec-content">
            <LeftQuestions questionIndex={7} image={flightSeven} question={"If you could have dinner with one historical figure, who would it be?"} />
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
                    name="questionSeven"
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
