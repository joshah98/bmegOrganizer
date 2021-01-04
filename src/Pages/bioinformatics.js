import React from 'react'
import Accordion from 'C:/Users/josha/Desktop/Projects/bmegorganizer/src/components/Accordion.js'
import "C:/Users/josha/Desktop/Projects/bmegorganizer/src/components/Accordion.css"
import FormAccordion from "C:/Users/josha/Desktop/Projects/bmegorganizer/src/components/FormAccordion.js"

function bioinformatics() {
    return (
        <div className='accordion__section'>
            
            <Accordion 
            title="BMEG 310" 
            content="Eample Text"
            date="Jan 3"
            additional="poopoo"
            />
            
            <Accordion 
            title="BMEG 371" 
            content="Example Text" 
            date="April 4"
            additional="peepee"
            />

            <FormAccordion />
        </div>
    )
}

export default bioinformatics
