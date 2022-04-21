import { SectionWrapper, VerticalAlignContent, VerticalContainer, VerticalLineContainer } from "./IntroSection";

export const FirstQuestion = () => {
  return (
    <SectionWrapper id="questionOne" style={{ maxWidth: "1144px" }}>
      <VerticalLineContainer style={{ bottom: "0", background: "#e4e4e4", width: "1px", height: "100%", left: "50%" }} />
      <VerticalContainer>
        <VerticalAlignContent></VerticalAlignContent>
      </VerticalContainer>
    </SectionWrapper>
  );
};
