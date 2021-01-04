import React from 'react'
import "./TodoItem.css"

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
        </div>
    )
}

export default TodoItem
