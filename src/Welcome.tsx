import { KeyboardEvent } from "react";
import { useState } from "react";
import { ChangeEvent } from "react";

const WelcomeName = () => {
  const [name, setName] = useState("홍길동");

  const updateName = (event: ChangeEvent<HTMLInputElement>) => {
    const setName2 = event.currentTarget.value;
    setName(setName2);
  };

  return (
    <section>
      <section>
        <input type="text" onChange={updateName} />
      </section>
      <article>반갑습니다 {name} 님</article>
    </section>
  );
};

export default WelcomeName;
