import { useState } from "react";

import tw from "tailwind-styled-components";

export const FormRadioItem = (props) => {
  const [checked, setChecked] = useState(false);
  const { currentIndex, index, setCurrentIndex, onNext, formik, ...rest } = props;
  const onChange = (e) => {
    setChecked(e.target.checked);
    formik.setFieldValue(e.target.name, e.target.value);
    setCurrentIndex(index);
    onNext && onNext();
  };
  return (
    <FormRadioWrapper className={`rad-wrap ${checked && currentIndex === index ? "active-rad-wrap" : ""}`} style={{ padding: "28px 43px 28px 31px" }}>
      <FormLabel className="lb" style={{ fontSize: "16px" }}>
        {rest.label}
        <FormInput onChange={(e) => onChange(e)} type="radio" {...rest} />
        <span className="checkmark mr-3"></span>
      </FormLabel>
    </FormRadioWrapper>
  );
};

export const FormRadioWrapper = tw.div`
w-full flex  items-center cursor-pointer relative
`;

export const FormLabel = tw.label`
    font-sans font-medium text-airbnb-black  flex items-center cursor-pointer w-full text-left h-full
`;
export const FormInput = tw.input`
    mr-3 cursor-pointer w-4	h-4
`;
