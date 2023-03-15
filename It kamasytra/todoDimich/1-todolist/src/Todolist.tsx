import React, {ChangeEvent, FC, KeyboardEvent, useState} from 'react';
import {FilterVuluesType, TaskType} from "./App";

type TodolistPropsType = {
    title: string
    tasks: Array<TaskType>
    remoteTask: (taskId: string) => void
    changeTodoListFilter: (filter: FilterVuluesType) => void
    addTask: (title: string) => void
}

const Todolist: FC<TodolistPropsType> = (props) => {

    const [newTaskTitle, setNewTaskTitle] = useState("")

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
        return (
            <li key={task.id}>
                <input type="checkbox" checked={task.isDone}/>
                <span>{task.title}</span>
                <button onClick={onRemoveHandler}>x</button>
            </li>
        )
    })
    const OnChangeTaskTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTaskTitle(e.currentTarget.value)
    }
    const OnKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            props.addTask(newTaskTitle)
            setNewTaskTitle("")
        }
    }
    const addTask = () => {
        props.addTask(newTaskTitle)
        setNewTaskTitle("")
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
                <input value={newTaskTitle} onChange={OnChangeTaskTitle}
                       onKeyPress={OnKeyPressHandler}/>
                <button onClick={addTask}>+</button>
            </div>
            <ul>
                {todoListItems}
            </ul>
            <div>
                <button onClick={onAllClickFilter}>All</button>
                <button onClick={onActiveClickFilter}>Active</button>
                <button onClick={onCompletedClickFilter}>Completed</button>
            </div>
        </div>
    );
}
export default Todolist;