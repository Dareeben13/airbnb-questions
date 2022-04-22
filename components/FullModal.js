import { Content, VerticalAlignContent, VerticalContainer } from "./IntroSection";

export const FullModal = () => {
  return (
    <div className="w-full h-full table">
      <VerticalContainer>
        <VerticalAlignContent>
          <Content style={{ background: "white" }}></Content>
        </VerticalAlignContent>
      </VerticalContainer>
    </div>
  );
};
