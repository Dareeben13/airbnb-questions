import flightNature from "../assets/flightNature.png";
import { SectionWrapper, VerticalAlignContent, VerticalContainer, VerticalLineContainer } from "./IntroSection";
import { FormRadioItem } from "./FormRadioItem";
import { AnswersWrapper, LeftQuestions, RightFloatedContainer, SectionContent } from "./FirstQuestion";
import { useState, useContext } from "react";
import { QuestionContext } from "./QuestionContext";

const QS = [
  {
    id: "Feel so alive",
    label: "Feel so alive",
  },
  {
    id: "Itchy",
    label: "Itchy",
  },
  {
    id: "Inspired",
    label: "Inspired",
  },
  {
    id: "Meh, sneakers aren’t my thing",
    label: "Meh, sneakers aren’t my thing",
  },
  {
    id: "Hungry!",
    label: "Hungry!",
  },
];

export const FourthQuestion = ({ formik }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { onNext } = useContext(QuestionContext);

  return (
    <SectionWrapper className="section-wrapper rtq" id="questionFour" style={{ maxWidth: "1144px" }}>
      <VerticalLineContainer className="no-mobile" style={{ bottom: "0", background: "#e4e4e4", width: "1px", height: "100%", left: "50%" }} />
      <VerticalContainer>
        <VerticalAlignContent>
          <SectionContent className="sec-content">
            <LeftQuestions questionIndex={4} image={flightNature} question={"Nature makes me…"} />
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
                    name="questionFour"
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
