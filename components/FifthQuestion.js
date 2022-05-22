import tw from "tailwind-styled-components";

import Image from "next/image";
import flightFive from "../assets/flightFive.png";
import { SectionWrapper, VerticalAlignContent, VerticalContainer, VerticalLineContainer } from "./IntroSection";
import { FormRadioItem } from "./FormRadioItem";
import { AnswersWrapper, LeftQuestions, RightFloatedContainer, SectionContent } from "./FirstQuestion";
import { useState, useContext } from "react";
import { QuestionContext } from "./QuestionContext";

const QS = [
  {
    id: "Hiking Machu Picchu",
    label: "Hiking Machu Picchu",
  },
  {
    id: "Seeing the Louvre",
    label: "Seeing the Louvre",
  },
  {
    id: "Crashing a Hollywood premiere",
    label: "Crashing a Hollywood premiere",
  },
  {
    id: "Going backstage with your favorite band",
    label: "Going backstage with your favorite band",
  },
  {
    id: "Tasting your way through Italy",
    label: "Tasting your way through Italy",
  },
];

export const FifthQuestion = ({ formik }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { onNext } = useContext(QuestionContext);

  return (
    <SectionWrapper className="section-wrapper rtq" id="questionFive" style={{ maxWidth: "1144px" }}>
      <VerticalLineContainer className="no-mobile" style={{ bottom: "0", background: "#e4e4e4", width: "1px", height: "100%", left: "50%" }} />
      <VerticalContainer>
        <VerticalAlignContent>
          <SectionContent className="sec-content">
            <LeftQuestions questionIndex={5} image={flightFive} question={"Pick one item for your bucket list"} />
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
                    name="questionFive"
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
