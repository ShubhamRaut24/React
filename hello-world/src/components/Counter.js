import React from "react";

class Counter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
    }
  
   increament()
   {
    // this.setState(
    //     { 
    //         count: this.state.count + 1 
    //     },
    //     () => {console.log("callback value is "+this.state.count)}
    //     )

      this.setState(prevState => (
          {
              count: prevState.count+1
            })
            )
      

    }

    increamentFive()
    {
       
        this.increament()
        this.increament()
        this.increament()
        this.increament()
        this.increament()
        console.log("hello")
    }
   

    render() {
      return (
        <div>
          <p>You clicked {this.state.count} times</p>
          <button onClick={() => this.increamentFive()}>
            Increament
          </button>
        </div>
      );
    }
  }

  export default Counter;