import React, { Component } from 'react'


 class FormComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            username: "",
            comments: "",
            topic:"react"
             
        }
    }
    
    usernameChangeHandler = (event) =>
    {
           this.setState({
               username: event.target.value
           })
       
    }
    commentChangeHandler = (event) =>
    {
        this.setState({
            comments: event.target.value
        })
    }

    topicChangeHandler = (event) =>
    {
        this.setState({
            topic: event.target.value
        })  
    }
    handleSubmitt = (event) =>{
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic} `)
        event.preventDefault();

    }
   
    render() {
        return (
            <form onSubmit={this.handleSubmitt}>
                <div>
                    <label>Username : </label>
                    <input type="text" value={this.state.username} onChange={this.usernameChangeHandler} />
                </div>
                <div>
                    <label>Comments : </label>
                    <textarea type="text" value={this.state.comments} onChange={this.commentChangeHandler} />
                </div>
                <div>
                    <label>Topic : </label>
                    <select value={this.state.topic} onChange={this.topicChangeHandler}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="vue">Vue</option>
                    </select>
                </div>
                <div>
                    <button type="submit">Submitt</button>
                </div>
            </form>
        )
    }
}

export default FormComponent
