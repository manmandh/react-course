import React, {useEffect, useState } from 'react';

function Counter1() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Counter1;

export function ExampleComponent() {
  const [value, setValue] = useState('Hello, world!');
  return (
    <div>
      <p>{value}</p>
    </div>
  );
}

export function Example2Component() {
  const [name, setName] = useState('John Doe');

  return (
    <div>
      <p>Hello, {name}</p>
    </div>
  );
}

export function UpdateComponent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

function Greeting(props: {name: string}) {
  return <h1>Hello, {props.name}</h1>;
}

export function App() {
  const [name, setName] = useState('Alice');

  return (
    <div>
      <Greeting name={name} />
      <button onClick={() => setName('Bob')}>Change Name</button>
    </div>
  );
}

export function StatelessComponent() {
  return <h1>I am a stateless component</h1>;
}

type StatefulComponentState = {
  message: string;
};

export class StatefulComponent extends React.Component<{}, StatefulComponentState> {
  constructor(props: {}) {
    super(props);
    this.state = { message: 'Hello, world!' };
  }

  render() {
    return <h1>{this.state.message}</h1>;
  }
}

export function QuizX() {
  const [score, setScore] = useState(0);

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) setScore(score + 1);
  };

  return (
    <div>
      <p>Current Score: {score}</p>
      <button onClick={() => handleAnswer(true)}>Correct Answer</button>
      <button onClick={() => handleAnswer(false)}>Wrong Answer</button>
    </div>
  );
}

// Basic useEffect: runs after every render
useEffect(() => {
  console.log('Component rendered or updated');
});

// useEffect with dependencies: runs only when specified dependencies change.
export const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    console.log('Count has changed:', count);
  }, [count]);

  return (
    <div>
      <p>Current count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );

};


// Cleanup in useEffect: returns a cleanup function to run when the component is unmounted or before the effect is re-run
useEffect(() => {
  const timerID = setInterval(() => {
    console.log('Tick');
  }, 1000);
  
  return () => {
    clearInterval(timerID);
  };
}, []);

// useLayoutEffect

export function EventCaptureBubble() {
  const handleClickCapture = () => {
    console.log('Capturing!');
  };

  const handleClickBubble = () => {
    console.log('Bubbling!');
  };

  return (
    <div onClickCapture={handleClickCapture} onClick={handleClickBubble}>
      Click me!
    </div>
  );
}

export function SyntheticEvent() {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e);
    console.log(e.nativeEvent);
  };
  return <button onClick={handleClick}>Click me</button>;
}

export function EventObject() {
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  return <input type="text" onChange={handleChange} />;
}

export function EventState() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>Increment</button>
      <p>Count: {count}</p>
    </div>
  );
}

type ChildProps = {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

function Child({ onClick }: ChildProps) {
  return <button onClick={onClick}>Click me</button>;
}

export function Parent() {
  const handleClick = () => {
    console.log('Button clicked');
  };
  return <Child onClick={handleClick} />;
}

type ChildXProps = {
  onValueChange: (value: string) => void;
};

function ChildX({ onValueChange }: ChildXProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onValueChange(e.target.value);
  };

  return <input type="text" onChange={handleChange} />;
}

export function ParentX() {
  const [value, setValue] = useState<string>('');

  return (
    <div>
      <ChildX onValueChange={setValue} />
      <p>Value: {value}</p>
    </div>
  );
}

//quiz
export const Quiz: React.FC = () => {
  const [answer, setAnswer] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Question: What is 2 + 2?
        <input
          type="text"
          value={answer}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAnswer(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
      {submitted && <p>Answer: {answer === '4' ? 'Correct' : 'Incorrect'}</p>}
    </form>
  );
}