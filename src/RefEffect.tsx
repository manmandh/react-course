import React, { FC, useCallback, useEffect, useMemo, useRef, useState } from "react";

export const Component1: React.FC = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;

    return () => {
      document.title = 'React App';
    };
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export const Component2: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
};

export const Component3: FC = () => {
  const [count, setCount] = useState(0)

  function fibonacci(n: number): number {
    if (n <= 1) {
      return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  const fibo = useMemo(() => fibonacci(40), [])
  console.log('dat khung');

  return (
    <div>
      <p>Count is: {count}</p>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  )
}

export const Component4: FC = () => {
  const [count, setCount] = useState(0)

  const fibonacci = (n: number): number => {
    if (n <= 1) {
      return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  const fibo = useCallback(() => fibonacci(37 + count), [])
  console.log('dat khung');

  return (
    <div>
      <p>Count is: {count}</p>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  )
}
