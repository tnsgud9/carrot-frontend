import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./Button";
import Title from "./Title";
import Text from "./Text";
import Adult from "./Adult";
import Photo from "./Photo";
import { ChangeEvent } from "react";
import { KeyboardEvent } from "react";
import Counter from "./Counter";
import Adder from "./Adder";
import Welcome from "./Welcome";
import ConditionalText from "./ConditionalText";
import HiddenName from "./HiddenName";
import { useState } from "react";
import Test from "./pages/Test";

const App = () => {
  const [lastestName, setLastestName] = useState("");
  const updateLastestName = (name: string) => {
    setLastestName(name);
  };

  const count = 1;
  const welcomeText = "Title!";
  const welcomeText02 = "subtitle!";
  const values = "hahahahahahah!!!";
  const realtextType = "strong";
  const myAge = 25;
  const imgsrc =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe2QVOaV5TRtyjv1L1uprcgkrKeebh453KcG8OX0D7zqvr5puREbt0_5DciT61l2XxjuU&usqp=CAU";
  const articlesrc = "잘가라 이순형";

  const preventKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    console.log(event.key);
    if (event.key === "h") {
      event.preventDefault();
      event.stopPropagation();
    }
  };

  return (
    <>
      <Test />

      {/*<input type="text" onKeyDown={preventKeyDown} />
      <Counter defaultCount={0} />
      <Adder />
      <Welcome />
      <ConditionalText />
      <HiddenName />
      <Button name="hello" callback={updateLastestName} />
      <Button name="world" callback={updateLastestName} />
      <Button name="nextop" callback={updateLastestName} />
  <article>{lastestName} is clicked!</article>*/}

      {/*s
    <div className="App">
      <Title title={welcomeText} />
      <Text myText={values} myType={realtextType} />
      {count > 5 ? <Button name="go" /> : <Button name="back" />}
      <Adult age={myAge} />
      <Photo address={imgsrc} description={articlesrc} />
    </div>
    */}
    </>
  );
};

export default App;
