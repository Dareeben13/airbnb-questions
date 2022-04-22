import tw from "tailwind-styled-components";

import Image from "next/image";
import flightMovie from "../assets/flightMovie.png";
import { SectionWrapper, VerticalAlignContent, VerticalContainer, VerticalLineContainer } from "./IntroSection";
import { FormRadioItem } from "./FormRadioItem";
import { AnswersWrapper, LeftQuestions, RightFloatedContainer, SectionContent } from "./FirstQuestion";
import { useState } from "react";

const QS = [
  {
    id: "A comedy",
    label: "A comedy",
  },
  {
    id: "An action movie",
    label: "An action movie",
  },
  {
    id: "A documentary",
    label: "A documentary",
  },
  {
    id: "A historical drama",
    label: "A historical drama",
  },
  {
    id: "A musical",
    label: "A musical",
  },
];

export const SecondQuestion = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <SectionWrapper className="section-wrapper rtq" id="questionTwo" style={{ maxWidth: "1144px" }}>
      <VerticalLineContainer className="no-mobile" style={{ bottom: "0", background: "#e4e4e4", width: "1px", height: "100%", left: "50%" }} />
      <VerticalContainer>
        <VerticalAlignContent>
          <SectionContent className="sec-content">
            <LeftQuestions questionIndex={2} image={flightMovie} question={"You're headed to the airport for an early morning flight. What are you wearing?"} />
            <RightFloatedContainer className="right-floated" style={{ paddingLeft: "57px" }}>
              <AnswersWrapper className="ans-wrap" style={{ paddingTop: "20px" }}>
                {QS.map(({ id, label }, index) => (
                  <FormRadioItem currentIndex={currentIndex} value={id} index={index} setCurrentIndex={setCurrentIndex} key={index} id={id} label={label} name="questionTwo" />
                ))}
              </AnswersWrapper>
            </RightFloatedContainer>
          </SectionContent>
        </VerticalAlignContent>
      </VerticalContainer>
    </SectionWrapper>
  );
};
