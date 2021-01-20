import React, { useState } from "react"
import "./Accordion.css"
import { FiPlus } from "react-icons/fi"
import Form from "./Form"

function FormAccordion(props) {
    const [setActive, setActiveState] = useState("")
    const [setHeight, setHeightState] = useState("0px")

    function toggleAccordion() {
        setActiveState(setActive === "" ? "active" : "")
        setHeightState(setActive === "" ? "0px" : "50px")
    }

    return (
    <div className="accordion__section">
        <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
            <p className="accordion__title"><FiPlus/>  Add New Class</p>
        </button>
        <div style={{maxHeight: `${setHeight}`}} className="accordion__content">
            <Form addCourse={props.addCourse} />
        </div>
    </div>
    )
}

export default FormAccordion