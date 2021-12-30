import React, { Component } from 'react'

 class ClassCount extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             Count: 0
        }
    }

    increamentCount = () =>{
        this.setState({
            Count: this.state.Count+1
        })
    }
    
    render() {
        
        return (
            <div>
                <button onClick={this.increamentCount}>Click {this.state.Count} </button>
            </div>
        )
    }
}

export default ClassCount
