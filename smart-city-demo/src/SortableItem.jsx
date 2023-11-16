import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import React from "react";
import { Card } from "react-bootstrap";

export default function SortableItem(props) {
    
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition
    } = useSortable({ id: props.id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    }

    if (props.className === "correct"){
        
        return (<div ref={setNodeRef} style={style} {...attributes} {...listeners}>
            <Card body className="m-1">{props.id} {props.percentage}</Card>
        </div>)
    }

    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
            <Card body className="m-1">{props.id}</Card>

        </div>
    )
}