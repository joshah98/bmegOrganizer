import React, { useState, useRef, useEffect } from "react"
import "./Accordion.css"
import TodoItem from "./TodoItem"
import { TiDeleteOutline } from "react-icons/ti"
import TodoForm from "./TodoForm"
import firebase from "firebase/app"
import "firebase/database"


function Accordion(props) {
    const [setActive, setActiveState] = useState("")
    const [setHeight, setHeightState] = useState("0px")
    const [todos, setTodos] = useState([])

    const db = firebase.database()

    function toggle() {
        updateItems()
        toggleAccordion()
    }

    function updateItems() {
        db.ref('courses/'+props.page+'/'+props.accordionID).on("value", function(snapshot) {
            let snapTodos = []
            snapshot.forEach((child) => {
                if(child.val().content !== undefined) {
                    snapTodos.push({
                        content: child.val().content,
                        date: child.val().date,
                        additional: child.val().additional,
                        id: child.key
                    })
                }
            })
            setTodos(snapTodos)
        })
    }

    useEffect(() => {
        setHeightState(setActive === "" ? "0px" : `${content.current.scrollHeight}px`)
    }, [todos])
    
    const content = useRef(null)

    function toggleAccordion() {
        setActiveState(setActive === "" ? "active" : "")
        setHeightState(setActive === "active" ? "0px" : `${content.current.scrollHeight}px`)
    }

    function handleRemove(id) {
        props.removeCourse(id)
    }

    function removeItem(id) {
        db.ref('courses/'+props.page+'/'+props.accordionID).child(id).remove()
    }

    return (
        <div className="accordion__section">
            <button className={`accordion ${setActive}`} onClick={toggle}>
                <p className="accordion__title">{props.title}</p>
                <div className="close">
                    <span className="closebtn" onClick={() => handleRemove(props.accordionID)}>
                        < TiDeleteOutline size={30}/>
                    </span>
                </div>
            </button>
            <div ref={content} style={{maxHeight: `${setHeight}`}} className="accordion__content">
                {todos.map(todo => {
                    return (
                        <div>
                            <TodoItem 
                            content={todo.content} 
                            date={todo.date} 
                            additional={todo.additional}
                            removeItem={removeItem}
                            itemId={todo.id}
                            />
                        </div>
                    )
                })}
                <TodoForm id={props.accordionID} updateItems={updateItems} page={props.page}/>
            </div>
        </div>
        )
}

export default Accordion