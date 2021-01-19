import React from "react"
import { DB_CONFIG } from "C:/Users/josha/Desktop/Projects/bmegorganizer/src/Config/config"
import firebase from "firebase/app"
import "firebase/database"
import "./TodoForm.css"

class TodoForm extends React.Component {
    constructor(props) {
        super(props)

        if (!firebase.apps.length) { 
            this.app = firebase.initializeApp(DB_CONFIG)
        } else {
            this.app = firebase.app()
        }
        this.db = firebase.database()

        this.state = {
            content:'',
            date:'',
            additional:'',
            id: props.id,
            updateItems: props.updateItems,
            page: props.page
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
        this.db.ref('courses/'+this.state.page+'/'+this.state.id).push({
            content: this.state.content,
            date: this.state.date,
            additional: this.state.additional
        })

        this.setState({
            content:'',
            date:'',
            additional:''
        })

        this.state.updateItems()
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
                >Add Task</button>
            </div>
        )
    }
}

export default TodoForm