type Age = {
  age: number;
};

const Adult = (props: Age) => {
  const { age } = props;
  return <>{age > 19 ? <h1>{"성인"}</h1> : <h1>{"응애"}</h1>}</>;
};

export default Adult;
