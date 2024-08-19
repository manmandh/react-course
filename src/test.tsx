import React, {ReactNode, useEffect, useRef, useState } from 'react';

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

type FormData = {
  username: string;
  email: string;
  password: string;
};

export const MyForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};


export const UncontrolledForm: React.FC = () => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const username = usernameRef.current?.value;
    const email = emailRef.current?.value;
    console.log('Uncontrolled Form Submitted:', { username, email });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Username:
          <input type="text" ref={usernameRef} />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input type="email" ref={emailRef} />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export const SimpleUncontrolledForm: React.FC = () => {
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const password = passwordRef.current?.value;
    console.log('Password Submitted:', password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Password:
          <input type="password" ref={passwordRef} />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export const RefForm: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={focusInput}>Focus the input</button>
    </div>
  );
};

// chapter 8: scaling react components

interface GreetingProps {
  name: string;
}

const Greetingg: React.FC<GreetingProps> = ({ name }) => {
  return <h1>Hello, {name}!</h1>;
};

// Correct usage
<Greetingg name="John" /> // No error, renders "Hello, John!"

// Incorrect usage
// <Greetingg /> // Error: Property 'name' is missing


// rendering children
interface ContainerProps {
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="container">{children}</div>;
};

// Usage
<Container>
  <h1>Title</h1>
  <p>This is a paragraph inside the container.</p>
</Container>

//Creating React Higher-Order Components for Code Reuse
const withLogger = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
  const WithLogger: React.FC<P> = (props) => {
    React.useEffect(() => {
      console.log('Component mounted:', WrappedComponent.displayName || WrappedComponent.name);
    }, []);
    return <WrappedComponent {...props} />;
  };

  return WithLogger;
};

interface MyComponentProps {
  message: string;
}

const MyComponent: React.FC<MyComponentProps> = ({ message }) => {
  return <div>{message}</div>;
};

const MyComponentWithLogger = withLogger(MyComponent);
// Usage
<MyComponentWithLogger message="Hello World" />


const MyComponent2 = () => <div>Hello World</div>;
MyComponent2.displayName = 'CustomComponentName';
// Usage
console.log(MyComponent2.displayName);

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  label: string;
}
const Button: React.FC<ButtonProps> = (props) => {
  return <button {...props}>{props.label}</button>
}
// Usage
<Button label="Click Me" onClick={() => alert('Clicked!')} />

const withExtraProps = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
  const WithExtraProps: React.FC<P> = (props) => {
    const newProps = { extraProp: 'This is an extra prop!' };
    return <WrappedComponent {...props} {...newProps} />;
  };
  return WithExtraProps;
};

interface SimpleComponentProps {
  extraProp?: string;
}

const SimpleComponent: React.FC<SimpleComponentProps> = ({ extraProp }) => (
  <div>{extraProp}</div>
);

const EnhancedComponent = withExtraProps(SimpleComponent);
<EnhancedComponent />


export const UseEffect: React.FC = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs after every render
    document.title = `Count: ${count}`;

    // Cleanup function (optional)
    return () => {
        document.title = 'React App';
    };
  }, [count]); // Dependency array

  return (
    <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export const UseRef: React.FC = () => {
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

