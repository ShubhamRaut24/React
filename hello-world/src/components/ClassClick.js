import React, { Component } from 'react'


 class ClassClick extends Component {
    
    clickHandler()
    {
        console.log("clicked the botton")
    }

    render() {
        return (
            <div>
                <button onClick = {this.clickHandler}>Click This</button>
            </div>
        )
    }
}



export default ClassClick