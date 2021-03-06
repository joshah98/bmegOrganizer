import React from "react"
import "./Accordion.css"

class Form extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            content:'',
        }

        this.handleInput = this.handleInput.bind(this)
        this.submitCourse = this.submitCourse.bind(this)
    }

    handleInput(e) {
        this.setState({
            content: e.target.value
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
                className='noteInput'
                placeholder='Add a new course...'
                value={this.state.content}
                onChange={this.handleInput}
                />
                <button 
                className='noteButton'
                onClick={this.submitCourse}
                >Add Course</button>
            </div>
        )
    }
}

export default Form