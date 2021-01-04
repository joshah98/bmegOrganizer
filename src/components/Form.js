import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             course: '',
             submitted: false
        }
    }
    
    handleCourseChange = event => {
        this.setState({
            course: event.target.value
        })
    }

    handleSubmit = event => {
        this.setState({
            submitted: true
        })
    }

    render() {
        if (this.state.submitted) {

        }

        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Course name: </label>
                    <input 
                    type='text' 
                    value={this.state.course} 
                    onChange={this.handleCourseChange} 
                    />
                </div>
                <button type='submit'>Submit</button>
            </form>
        )
    }
}

export default Form
