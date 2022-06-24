import React from "react";
import { useCounter } from "../hooks/useCounter";

export const CounterAppWithCustomHook = () => {
  const { counter, increment, decrement, reset } = useCounter(1);
  return (
    <>
      <h1>Counter with custom hook: {counter}</h1>
      <hr />
      <button onClick={() => increment(5)} className="btn-primary btn">
        +1
      </button>
      <button onClick={() => reset(10)} className="btn-primary btn">
        reset
      </button>
      <button onClick={() => decrement(5)} className="btn-primary btn">
        -1
      </button>
    </>
  );
};
