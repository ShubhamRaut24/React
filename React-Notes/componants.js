// components describe a part of user interface
// They are re-usable and nested inside a other components

// there are 2 types of componants in reacts 
//1. functional components 
//2. Class components


//function
function welcome(props)
{
    return <h1>hello, {props.name}</h1>;
}


//class 

class welcome extends React.Component{
    render(){
        return <h1>hello, {this.props.name}</h1>;
    }
}


