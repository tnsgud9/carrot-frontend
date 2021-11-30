type TextType = {
  myText: string;
  myType: string;
};

const Text = (text: TextType) => {
  const { myText, myType } = text;
  return (
    <>
      {myType === "header" && <h1>{myText}</h1>}
      {myType === "bold" && <strong>{myText}</strong>}
    </>
  );

  /*if (myType === "header") {
    return <h1>{myText}</h1>;
  } else {
    return <strong>{myText}</strong>;
  }*/
};

export default Text;
