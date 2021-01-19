import React from 'react'
import "./TodoItem.css"
import { AiOutlineDelete } from "react-icons/ai"


function TodoItem(props) {
    return (
        <div className="row">
            <div 
                className="accordion__text left column"
                dangerouslySetInnerHTML={{ __html: props.content }}
            />

            <div className="accordion__text middle column">
                {props.date}
            </div>
            
            <div className="accordion__text right column">
                {props.additional}
            </div>

            <div className="delete right">
                <span className="deletebtn" onClick={() => props.removeItem(props.itemId)}>
                    <AiOutlineDelete/>
                </span>
            </div>

        </div>
    )
}

export default TodoItem
