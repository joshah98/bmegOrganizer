import React from "react"

class TodoForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            content:'',
            date:'',
            additional:''
        }

        this.handleInput = this.handleInput.bind(this)
        this.submitCourse = this.submitCourse.bind(this)
    }

    handleInput(e) {
        this.setState({
            [e.target.className]: e.target.value
        })
    }

    submitCourse() {
        this.props.addCourse(this.state.content)
        this.setState({
            content:''
        })
    }

    render() {
        return (
            <div className='formWrapper'>
                <input 
                className='content'
                placeholder='Add new task...'
                value={this.state.content}
                onChange={this.handleInput}
                />
                <input 
                className='date'
                placeholder='Add the due date/time for this task...'
                value={this.state.date}
                onChange={this.handleInput}
                />
                <input 
                className='additional'
                placeholder='Add any additional info...'
                value={this.state.additional}
                onChange={this.handleInput}
                />
                <button 
                className='submitTask'
                onClick={this.submitCourse}
                >Add Course</button>
            </div>
        )
    }
}

export default TodoForm