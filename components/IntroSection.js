import tw from "tailwind-styled-components";

import airbnbLogo from "../assets/airbnb-logo.png";

import Image from "next/image";

function IntroSection({ onClick }) {
  return (
    <SectionWrapper className="section-wrapper" style={{ maxWidth: "555px" }}>
      <VerticalLineContainer style={{ bottom: "0", background: "#e4e4e4", width: "1px", height: "50%", left: "50%" }} />
      <VerticalContainer>
        <VerticalAlignContent>
          <Content style={{ background: "white" }}>
            <ResponsiveImage style={{ maxWidth: "63.4px" }}>
              <Image src={airbnbLogo} alt="Airbnb logo" />
            </ResponsiveImage>
            <HomeHeadText style={{ fontSize: "64px", marginTop: "45px" }}>Airbnb Trip Matcher</HomeHeadText>
            <IntroP style={{ letterSpacing: "normal", lineHeight: "1.25", fontSize: "15px", marginBottom: "90px" }}>
              Can’t decide where to roam this year? We’ve got you covered. Take our quiz to find out your Travel Personality – and we’ll take care of the rest.
            </IntroP>
            <TakeQuizText style={{ lineHeight: "1.42", letterSpacing: ".1em", color: "#ff5a5f", fontSize: "14px" }}>Take the quiz!</TakeQuizText>
            <SliderDownContainer onClick={onClick} style={{ borderRadius: "50%", border: "1px solid #e4e4e4" }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="14" viewBox="0 0 21 14">
                <path fill="#B4A76C" fillRule="nonzero" d="M10.5 14L0 3.587 3.615 0 10.5 6.829 17.385 0 21 3.586z"></path>
              </svg>
            </SliderDownContainer>
          </Content>
        </VerticalAlignContent>
      </VerticalContainer>
    </SectionWrapper>
  );
}

export { IntroSection };

export const Content = tw.div`
text-center align-middle flex flex-col items-center	justify-center	h-fit relative
`;

export const SectionWrapper = tw.section`
 	mx-auto w-full px-6 h-screen relative
`;

export const VerticalContainer = tw.div`
  w-full h-full table relative
`;

export const ResponsiveImage = tw.div`
  w-full h-auto align-middle
`;

export const VerticalAlignContent = tw.div`
 text-center align-middle table-cell relative
`;

export const HomeHeadText = tw.h1`
 tracking-semiTight text-airbnb-black text-center font-semibold leading-none mb-6 font-sans
`;

export const IntroP = tw.p`
text-airbnb-black font-sans
`;

export const TakeQuizText = tw.p`
 font-sans mb-2 font-semibold capitalize cursor-pointer	
`;

export const SliderDownContainer = tw.div`
  mx-auto cursor-pointer w-8 h-8 bg-white flex flex-col items-center	justify-center
`;

export const VerticalLineContainer = tw.div`
absolute
`;
