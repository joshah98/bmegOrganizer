import React, { useState, useRef } from "react"
import "./Accordion.css"
import { FiPlus } from "react-icons/fi"
import Form from "./Form"

function FormAccordion() {
    const [setActive, setActiveState] = useState("")
    const [setHeight, setHeightState] = useState("0px")

    const content = useRef(null)

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
            <Form/>
        </div>
    </div>
    )
}

export default FormAccordion