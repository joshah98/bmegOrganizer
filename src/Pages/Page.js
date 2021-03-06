import React from 'react'
import Accordion from 'C:/Users/josha/Desktop/Projects/bmegorganizer/src/components/Accordion.js'
import "C:/Users/josha/Desktop/Projects/bmegorganizer/src/components/Accordion.css"
import FormAccordion from "C:/Users/josha/Desktop/Projects/bmegorganizer/src/components/FormAccordion.js"
import { DB_CONFIG } from "C:/Users/josha/Desktop/Projects/bmegorganizer/src/Config/config"
import firebase from "firebase/app"
import "firebase/database"

class Page extends React.Component {
    constructor(props) {
        super(props)
        this.addCourse = this.addCourse.bind(this)
        this.removeCourse = this.removeCourse.bind(this)
        
        if (!firebase.apps.length) { 
            this.app = firebase.initializeApp(DB_CONFIG)
        } else {
            this.app = firebase.app()
        }
        this.db = firebase.database()

        this.state = {
            courses: [],
            page: props.page
        }

    }

    componentDidMount(){
        
        this.db.ref('courses/'+this.state.page).on("child_added", snap => {
            const prevState = this.state.courses
            let coursesSnap = snap.val()
            let newState = []

            newState.push({
                id: snap.key,
                title: coursesSnap.title
            })

            this.setState({
                courses: [...prevState, ...newState]
            })
        })

        this.db.ref('courses/'+this.state.page).on("child_removed", snap => {
            const prevState = this.state.courses

            for (var i=0; i < prevState.length; i++) {
                if(prevState[i].id === snap.key) {
                    prevState.splice(i,1)
                }
            }

            this.setState({
                courses: prevState
            })
        })
    }

    addCourse(course) {
        this.db.ref('courses/'+this.state.page).push({ title: course })
    }

    removeCourse(course) {
        this.db.ref('courses/'+this.state.page).child(course).remove()
    }

    render() {
        return (
            <div className='accordion__section'>
                {this.state.courses.map(course => {
                    return (
                    <Accordion 
                    key={course.id}
                    accordionID={course.id}
                    title={course.title}
                    removeCourse={this.removeCourse}
                    page={this.state.page}
                    />
                    )
                })}
    
                <FormAccordion addCourse={this.addCourse} />
            </div>
        )
    }
}

export default Page