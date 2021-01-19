import React, { useState, useRef } from "react"
import "./Accordion.css"
import TodoItem from "./TodoItem"
import { TiDeleteOutline } from "react-icons/ti"
import TodoForm from "./TodoForm"
import { DB_CONFIG } from "C:/Users/josha/Desktop/Projects/bmegorganizer/src/Config/config"
import firebase from "firebase/app"
import "firebase/database"


function Accordion(props) {
    const [setActive, setActiveState] = useState("")
    const [setHeight, setHeightState] = useState("0px")

    if (!firebase.apps.length) { 
        const app = firebase.initializeApp(DB_CONFIG)
    } else {
        const app = firebase.app()
    }
    const db = firebase.database()

    var todos = []

    db.ref('courses/'+props.accordionID).on("value", function(snapshot) {
        todos = []
        snapshot.forEach((child) => {
            if(child.val().content !== undefined) {
                todos.push({
                    content: child.val().content,
                    date: child.val().date,
                    additional: child.val().additional,
                    id: child.key
                })
            }
        })
    })


    const content = useRef(null)

    function toggleAccordion() {
        setActiveState(setActive === "" ? "active" : "")
        setHeightState(setActive === "active" ? "0px" : `${content.current.scrollHeight}px`)
    }

    function handleRemove(id) {
        props.removeCourse(id)
    }

    function removeItem(id) {
        console.log("REMOVE" +id)
        db.ref('courses/'+props.accordionID).child(id).remove()
    }

    return (
        <div className="accordion__section">
            <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
                <p className="accordion__title">{props.title}</p>
                <span className="closebtn" onClick={() => handleRemove(props.accordionID)}>
                    < TiDeleteOutline size={30}/>
                </span>
            </button>
            <div ref={content} style={{maxHeight: `${setHeight}`}} className="accordion__content">
                {todos.map(todo => {
                    return (
                        <div>
                            <TodoItem 
                            content={todo.content} 
                            date={todo.date} 
                            additional={todo.additional}/>
                            <span className="closebtn" onClick={() => removeItem(todo.id)}>
                            < TiDeleteOutline size={15}/>
                            </span>
                        </div>
                    )
                })}
                <TodoForm id={props.accordionID}/>
            </div>
        </div>
        )
}

export default Accordion