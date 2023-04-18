import {Button, IconButton, TextField} from "@mui/material";
import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export type AddItemFormType = {
    addItem: (title: string) => void
}
export const AddItemForm = (props: AddItemFormType) => {
    const [newTaskTitle, setNewTaskTitle] = useState("")
    const [error, setError] = useState("")
    const OnChangeTaskTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTaskTitle(e.currentTarget.value)

    }
    const OnKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError("")
        if (e.charCode === 13) {
            newTaskTitle.trim() && props.addItem(newTaskTitle)
            setNewTaskTitle("")
            !newTaskTitle.trim() && setError("The field is empty")
        }
    }
    const addItem = () => {
        if (newTaskTitle.trim() !== '') {
            props.addItem(newTaskTitle.trim())
            setNewTaskTitle("")
        } else {
            setError("The field is empty")
        }

    }
    return (
        <div>
            <TextField
                variant="outlined"
                label={"Type value"}
                helperText={error}

                value={newTaskTitle}
                onChange={OnChangeTaskTitle}
                onKeyPress={OnKeyPressHandler}/>
            <IconButton size="large"  color="primary" onClick={addItem}>
                <AddCircleOutlineIcon/>
            </IconButton>
        </div>
    )
}