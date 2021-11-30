import Pad from "./Pad";
import { useState } from "react";

const Calculator = () => {
  const [expression, setExpression] = useState("");
  const inputKey = (key: string) => {
    if (key === "=") {
      setExpression(eval(expression));
    } else {
      setExpression(expression + key);
    }
  };

  return (
    <>
      <Pad keyName="1" callback={inputKey} />
      <Pad keyName="2" callback={inputKey} />
      <Pad keyName="3" callback={inputKey} /> <br />
      <Pad keyName="4" callback={inputKey} />
      <Pad keyName="5" callback={inputKey} />
      <Pad keyName="6" callback={inputKey} /> <br />
      <Pad keyName="7" callback={inputKey} />
      <Pad keyName="8" callback={inputKey} />
      <Pad keyName="9" callback={inputKey} /> <br />
      <Pad keyName="0" callback={inputKey} />
      <Pad keyName="+" callback={inputKey} />
      <Pad keyName="-" callback={inputKey} />
      <Pad keyName="*" callback={inputKey} />
      <Pad keyName="/" callback={inputKey} />
      <Pad keyName="=" callback={inputKey} />
      <br />
      <input type="text" value={expression} />
    </>
  );
};

export default Calculator;
