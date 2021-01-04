import React, { useState, useRef } from "react"
import "./Accordion.css"
import TodoItem from "./TodoItem"

function Accordion(props) {
    const [setActive, setActiveState] = useState("")
    const [setHeight, setHeightState] = useState("0px")

    const content = useRef(null)

    function toggleAccordion() {
        setActiveState(setActive === "" ? "active" : "")
        setHeightState(setActive === "active" ? "0px" : `${content.current.scrollHeight}px`)
    }

    return (
    <div className="accordion__section">
        <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
            <p className="accordion__title">{props.title}</p>
        </button>
        <div ref={content} style={{maxHeight: `${setHeight}`}} className="accordion__content">
            < TodoItem content={props.content} date={props.date} additional={props.additional}/>
        </div>
    </div>
    )
}

export default Accordion