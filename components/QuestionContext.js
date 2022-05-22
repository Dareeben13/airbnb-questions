import { createContext, useState } from "react";

export const QuestionContext = createContext();

export const QuestionProivder = ({ children }) => {
  const [currentSection, setCurrentSection] = useState("intro");
  const Ids = ["intro", "questionOne", "questionTwo", "questionThree", "questionFour", "questionFive", "questionSix", "questionSeven", "questionEigth"];
  const lastId = Ids[Ids.length - 1];

  const scroll = (id) => {
    const section = document.querySelector(`#${id}`);
    section.scrollIntoView({ behavior: "smooth", block: "start" });
    setTimeout(() => {
      setCurrentSection(id);
    }, 300);
  };

  const onNext = () => {
    //   If current section is intro, scroll to questionOne
    const index = Ids.indexOf(currentSection);
    if (index < Ids.length - 1) {
      scroll(Ids[index + 1]);
      setCurrentSection(Ids[index + 1]);
    }
  };

  const onPrev = () => {
    const index = Ids.indexOf(currentSection);
    if (index > 0) {
      scroll(Ids[index - 1]);
      setCurrentSection(Ids[index - 1]);
    }
  };

  return (
    <QuestionContext.Provider
      value={{
        currentSection,
        setCurrentSection,
        scroll,
        onNext,
        onPrev,
        lastId,
      }}
    >
      {children}
    </QuestionContext.Provider>
  );
};
