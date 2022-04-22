import { QuestionProivder } from "../components/QuestionContext";

import "../styles/globals.css";

import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <QuestionProivder>
      <Component {...pageProps} />
    </QuestionProivder>
  );
}

export default MyApp;
