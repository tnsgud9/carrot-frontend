import { KeyboardEvent } from "react";
import { useState } from "react";
import { ChangeEvent } from "react";

const ConditionalText = () => {
  const [text, settext] = useState<string>("");

  const updateText = (event: ChangeEvent<HTMLInputElement>) => {
    const exString = event.currentTarget.value;
    settext(event.currentTarget.value);
  };

  return (
    <>
      <input type="text" onChange={updateText} />
      <article>{text.length > 5 && text}</article>
    </>
  );
};

export default ConditionalText;
