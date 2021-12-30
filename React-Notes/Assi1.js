// React Components

// A Component is one of the core building blocks of React. 
// In other words, we can say that every application you will develop in React will be made up of pieces called components. 
// Components make the task of building UIs much easier. 
// You can see a UI broken down into multiple individual pieces called components 
// and work on them independently and merge them all in a parent component which will be your final UI.

// Components come in two types, 
// Class components
// Function components.

// 1. Class Component
// The class components are a little more complex than the functional components. 
// The functional components are not aware of the other components in your program whereas the class components can work with each other.
//  We can pass data from one class component to other class components. 
//  We can use JavaScript ES6 classes to create class-based components in React. 
// Exmaple  

// class welcome extends React.Component{
//     render(){
//         return <h1>hello, {this.props.name}</h1>;
//     }
// }

// 2.Function Component
// Functional components are simply javascript functions. 
// We can create a functional component in React by writing a javascript function. 
// These functions may or may not receive data as parameters, we will discuss this later in the tutorial. 
// Below example shows a valid functional component in React: 
 
// const Democomponent=()=>
// {
//     return <h1>Welcome Message!</h1>;
// }

// Rendering Components

// In React we have seen how elements initialized with DOM tags are rendered using ReactDOM.render() method. 
// React is also capable of rendering user-defined components. 
// To render a component in React we can initialize an element with a user-defined component and 
// pass this element as the first parameter to ReactDOM.render() or directly pass the component as the first argument to the ReactDOM.render() method. 
// Below syntax shows how to initialize a component to an element: 
 

// const elementName = <ComponentName />;