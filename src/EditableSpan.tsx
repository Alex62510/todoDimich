import { TextField } from "@mui/material";
import React, {ChangeEvent, useState} from "react";

export type EditableSpanPropsType = {
    title: string
    onChange:(newTitle:string)=>void
}
export const EditableSpan = (props: EditableSpanPropsType) => {
    const [editMode, setEditMode] = useState(false)
    const [title, setTitle] = useState("")
    const activateEditMode = () => {
        setEditMode(true)
        setTitle(props.title)
    }
    const activateViewMode = () => {
        setEditMode(false)
        props.onChange(title)
    }
    const onChangeTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    return (
        editMode
            ? <TextField onBlur={activateViewMode} onChange={onChangeTitleHandler} value={title} autoFocus></TextField>
            : <span onDoubleClick={activateEditMode}>{props.title}</span>)
}