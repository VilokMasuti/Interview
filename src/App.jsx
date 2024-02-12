import { useState } from "react";

const useCounter = initalValue => {
  const [count, setCount] = useState(initalValue);
  const increment = () => setCount(count + 1);
  const dcrement = () => setCount(count - 1);
  const reset = () => setCount(initalValue);

  return { count, increment, dcrement, reset };
};

function App() {
  const { count, increment, dcrement, reset } = useCounter(0);

  return (
    <div className=" relative w-full  h-screen flex items-center justify-center gap-4">
      <div className=" absolute  top-[40%] left-[35%] ">
        <h1 className=" text-4xl text-red-950  pl-20 ml-7"> {count}</h1>
      </div>
      <button
        onClick={increment}
        className=" px-2 py-1 rounded-md text-white bg-black outline-dotted"
      >
        increment
      </button>
      <button
        onClick={dcrement}
        className=" px-2 py-1 rounded-md text-white bg-black outline-dotted"
      >
        dcrement
      </button>
      <button
        onClick={reset}
        className=" px-2 py-1 rounded-md text-white bg-black outline-dotted"
      >
        reset
      </button>
    </div>
  );
}

export default App;
