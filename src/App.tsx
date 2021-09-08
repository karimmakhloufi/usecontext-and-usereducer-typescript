import React, { useReducer, createContext } from "react";
import "./App.css";
import ChangeCount from "./ChangeCount";
import Container from "./Container";
import DisplayCount from "./DisplayCount";

const initialState = { count: 0 };

const reducer = (state: { count: number }, action: { type: string }) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
};

export const context = createContext<{
  state: { count: number };
  dispatch: React.Dispatch<{ type: string }>;
}>({
  state: initialState,
  dispatch: () => {},
});

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <context.Provider value={{ state, dispatch }}>
      <div className="App">
        <Container>
          <>
            <DisplayCount />
            <ChangeCount />
          </>
        </Container>
      </div>
    </context.Provider>
  );
}

export default App;
