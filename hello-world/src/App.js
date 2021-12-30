import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome  from './components/Welcome';
import Hello from './components/Hello';
import HelloP from './components/Hello-props';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import StateWithFunctional from './components/StateWithFunctional';
import ConditionalS from './components/ConditionalS';
import ListRender from './components/ListRender';
import StyleSheet from './components/StyleSheet';
import FormComponent from './components/FormComponent';
import Fragment1 from './components/Fragment';
import ComponentA from './components/Contex/ComponentA';
import  {UserProvider } from './components/Contex/userContext';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
       {/* <Greet></Greet>  this is exmaple of functional componenst */}

      {/* <Welcome></Welcome> this is exmaple of class componenst */}

      {/* <Hello></Hello> this is exmaple for JSX  */}


      {/* props*/}
      {/* <HelloP name = "Bruce!!" race = "Human">
        <p>this is children props</p>
        <button>Action</button>
      </HelloP>

      <HelloP name="Clark!!" race = "Alien">
      <button>Action</button>
      </HelloP>
     
      <HelloP name="Diana!!" race = "Demi-God">
      </HelloP>
      <Welcome name = "Bruce!!" race = "Human"></Welcome> */}

      {/*states*/}
  
      {/* <Message></Message> */}

      {/*count state*/}
      {/* <Counter></Counter> */}

      {/* <StateWithFunctional></StateWithFunctional> */}

      {/* Events in React */}

        {/* <FunctionClick></FunctionClick>
       <ClassClick></ClassClick> */}

       {/* Event Bind in React */}
       
       {/* <EventBind></EventBind> */}

       {/* Method as props */ }

       {/* <ParentComponent></ParentComponent> */}

      

       {/* <ConditionalS></ConditionalS> */}

       {/* <ListRender></ListRender> */}

       {/* <StyleSheet></StyleSheet> */}

       {/* <FormComponent></FormComponent> */}

       {/* <Fragment1></Fragment1> */}
 
       <UserProvider value = "Shubham">
         <ComponentA></ComponentA>
       </UserProvider>

    </div>
  );
}

export default App;
