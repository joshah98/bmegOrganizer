import React, { useState, useRef } from "react"
import "./Accordion.css"
import TodoItem from "./TodoItem"
import { TiDeleteOutline } from "react-icons/ti"
import TodoForm from "./TodoForm"

function Accordion(props) {
    const [setActive, setActiveState] = useState("")
    const [setHeight, setHeightState] = useState("0px")
    const [todos, setTodos] = useState([])

    


    const content = useRef(null)

    function toggleAccordion() {
        setActiveState(setActive === "" ? "active" : "")
        setHeightState(setActive === "active" ? "0px" : `${content.current.scrollHeight}px`)
    }

    function handleRemove(id) {
        props.removeCourse(id)
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
                <TodoItem content="bbb" date="aaa" additional="ccc"/>
                <TodoForm />
            </div>
        </div>
        )
}

export default Accordion