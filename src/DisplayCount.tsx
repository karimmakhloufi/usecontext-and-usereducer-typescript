import { useContext } from "react";
import { context } from "./App";

const DisplayCount = () => {
  const { state } = useContext(context);
  return <p>{state.count}</p>;
};

export default DisplayCount;
