import { useContext } from "react";
import { context } from "./App";

const ChangeCount = () => {
  const { dispatch } = useContext(context);
  return (
    <>
      <button onClick={() => dispatch({ type: "increment" })}>Increase</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrease</button>
    </>
  );
};

export default ChangeCount;
