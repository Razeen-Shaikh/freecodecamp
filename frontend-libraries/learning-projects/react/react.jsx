// Create A Simple JSX Element
const JSX1 = <h1>Hello JSX!</h1>;

// Create A Complex JSX Element
const JSX2 =
  <div>
    <h1></h1>
    <p></p>
    <ul>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>

// Add Comments in JSX
const JSX3 = (
  <div>
    {/* comment */}
    <h1>This is a block of JSX</h1>
    <p>Here's a subtitle</p>
  </div>
);

// Render HTML Elements to the DOM
const JSX4 = (
  <div>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);
ReactDOM.render(JSX4, document.getElementById('challenge-node'));

// Define an HTML Class in JSX
const JSX5 = (
  <div className="myDiv">
    <h1>Add a class to this div</h1>
  </div>
);

// Learn About Self-Closing JSX Tags
const JSX6 = (
  <div>
    <h2>Welcome to React!</h2> <br />
    <p>Be sure to close all tags!</p>
    <hr />
  </div>
);

// Create a Stateless Functional Component
const MyComponent1 = function () {
  return <div>String</div>
}

// Create a React Component
class MyComponent2 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div><h1>Hello React!</h1></div>
  }
};

// Create a Component with Composition
const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        { /* Change code below this line */ }
        <ChildComponent />


        { /* Change code above this line */ }
      </div>
    );
  }
};

// Use React to Render Nested Components
const TypesOfFruit = () => {
  return (
    <div>
      <h2>Fruits:</h2>
      <ul>
        <li>Apples</li>
        <li>Blueberries</li>
        <li>Strawberries</li>
        <li>Bananas</li>
      </ul>
    </div>
  );
};

const Fruits1 = () => {
  return (
    <div>
      { /* Change code below this line */ }
      <TypesOfFruit />
      { /* Change code above this line */ }
    </div>
  );
};

class TypesOfFood1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        { /* Change code below this line */ }
        <Fruits1 />
        { /* Change code above this line */ }
      </div>
    );
  }
};

// Compose React Components
class Fruits2 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Fruits:</h2>
        { /* Change code below this line */ }
        <NonCitrus />
        <Citrus />
        { /* Change code above this line */ }
      </div>
    );
  }
};

class TypesOfFood2 extends React.Component {
  constructor(props) {
     super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        { /* Change code below this line */ }
        <Fruits2 />
        { /* Change code above this line */ }
        <Vegetables />
      </div>
    );
  }
};

// Render a Class Component to the DOM
class TypesOfFood3 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        {/* Change code below this line */}
        <Fruits />
        <Vegetables />
        {/* Change code above this line */}
      </div>
    );
  }
};

// Change code below this line
ReactDOM.render(<TypesOfFood3 />, document.getElementById('challenge-node'));

// Write a React Component from Scratch
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>
      <h1>My First React Component!</h1>
    </div>
  }
}

ReactDOM.render(<MyComponent />, document.getElementById("challenge-node"));

// Pass Props to a Stateless Functional Component
const CurrentDate = (props) => {
  return (
    <div>
      { /* Change code below this line */ }
      <p>The current date is: {props.date}</p>
      { /* Change code above this line */ }
    </div>
  );
};

class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>What date is it?</h3>
        { /* Change code below this line */ }
        <CurrentDate date={Date()} />
        { /* Change code above this line */ }
      </div>
    );
  }
};

// Pass an Array as Props
const List = (props) => {
  { /* Change code below this line */ }
  return <p>{props.tasks.join(", ")}</p>
  { /* Change code above this line */ }
};

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        { /* Change code below this line */ }
        <List tasks={["walk dog", "workout"]}/>
        <h2>Tomorrow</h2>
        <List tasks={["walk dog", "workout", "reading"]}/>
        { /* Change code above this line */ }
      </div>
    );
  }
};