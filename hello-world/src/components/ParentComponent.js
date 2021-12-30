import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

 class ParentComponent extends Component {
   
   constructor(props) {
       super(props)
   
       this.state = {
            patentName : "Parent"
       }

       this.getParent = this.getParent.bind(this);
   }
    getParent(childName)
    {
        alert( `Hello ${this.state.patentName}`)
        alert( `Hello ${childName}`)
    }


    render() {
        return (
            <div>
                <ChildComponent greetHandler = {this.getParent}></ChildComponent>
            </div>
        )
    }
}

export default ParentComponent
