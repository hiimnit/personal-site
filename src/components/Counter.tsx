import { useState } from "react";

export interface CounterProps {
  initialValue?: number;
}

const Counter = ({ initialValue = 0 }: CounterProps) => {
  const [count, setCount] = useState(initialValue);

  return (
    <div>
      Current count is {count}{" "}
      <button onClick={() => setCount((e) => e + 1)} className="font-bold">
        increment
      </button>
    </div>
  );
};

export default Counter;
