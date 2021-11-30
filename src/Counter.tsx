import { useState, MouseEvent } from "react";

type CounterType = {
  defaultCount: number;
};

const Counter = (props: CounterType) => {
  const { defaultCount } = props;
  const [count, setCount] = useState<number>(defaultCount); // 이거 중요해요

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };

  return (
    <section>
      <section>{count}</section>
      <section>
        <button onClick={increaseCount}>+</button>
      </section>
      <section>
        <button onClick={decreaseCount}>-</button>
      </section>
    </section>
  );
};

export default Counter;
