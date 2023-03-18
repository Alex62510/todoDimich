import React, {ChangeEvent, FC, KeyboardEvent, useState} from 'react';
import {FilterVuluesType, TaskType} from "./App";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

type TodolistPropsType = {
    title: string
    tasks: Array<TaskType>
    remoteTask: (taskId: string) => void
    changeTodoListFilter: (filter: FilterVuluesType) => void
    addTask: (title: string) => void
    chingeTaskStatus:(taskId:string,isDone:boolean)=>void
    filter: "All" | "Active" | "Completed"
}

const Todolist: FC<TodolistPropsType> = (props) => {

    const [newTaskTitle, setNewTaskTitle] = useState("")
    const [error, setError] = useState("")

    let isAllTasrsIsNotDane = true
    for (let i = 0; i < props.tasks.length; i++) {
        if (props.tasks[i].isDone) {
            isAllTasrsIsNotDane = false
            break;
        }
    }
    const todoClass = isAllTasrsIsNotDane ? "todolist-empty" : "todolist"

    const todoListItems = props.tasks.map((task) => {
        const onRemoveHandler =()=>{
            props.remoteTask(task.id)
        }

        const onChingeHandler =(e:ChangeEvent<HTMLInputElement>)=>{
console.log(task.id + e.currentTarget.checked)
            props.chingeTaskStatus(task.id,e.currentTarget.checked)
        }


        return (
            <li key={task.id} className={task.isDone ? "is-Done": ""}>
                <input
                    onChange={onChingeHandler}
                    type="checkbox"
                    checked={task.isDone}/>
                <span>{task.title}</span>
                <button onClick={onRemoveHandler}>x</button>
            </li>
        )
    })
    const OnChangeTaskTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTaskTitle(e.currentTarget.value)

    }
    const OnKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError("")
        if (e.charCode === 13) {
            props.addTask(newTaskTitle)
            setNewTaskTitle("")
        }
    }
    const addTask = () => {
        if(newTaskTitle.trim()!==''){
            props.addTask(newTaskTitle.trim())
            setNewTaskTitle("")}
        else {setError("The field is empty")}

    }
    const onAllClickFilter = () => {
        props.changeTodoListFilter("All")
    }
    const onActiveClickFilter = () => {
        props.changeTodoListFilter("Active")
    }
    const onCompletedClickFilter = () => {
        props.changeTodoListFilter("Completed")
    }
    return (
        <div className={todoClass}>
            <h3>{props.title}</h3>
            <div>
                <input
                className={error? "error": ""}
                    value={newTaskTitle}
                    onChange={OnChangeTaskTitle}
                       onKeyPress={OnKeyPressHandler}/>
                <button onClick={addTask}>+</button>
                {error&&<div className={'error-message'}>{error}</div>}
            </div>
            <ul>
                {todoListItems}
            </ul>
            <div>
                <button className={props.filter=== "All" ? "active-filter": ""} onClick={onAllClickFilter}>All</button>
                <button className={props.filter=== "Active" ? "active-filter": ""} onClick={onActiveClickFilter}>Active</button>
                <button className={props.filter=== "Completed" ? "active-filter": ""} onClick={onCompletedClickFilter}>Completed</button>
            </div>
        </div>
    );
}
export default Todolist;