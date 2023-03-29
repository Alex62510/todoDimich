import React, {ChangeEvent, FC, KeyboardEvent, useState} from 'react';
import {FilterVuluesType, TaskType} from "./App";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

type TodolistPropsType = {
    title: string
    tasks: Array<TaskType>
    remoteTask: (taskId: string, todolistId: string) => void
    changeTodoListFilter: (filter: FilterVuluesType, todOlistId: string) => void
    addTask: (title: string, todolistId: string) => void
    chingeTaskStatus: (taskId: string, isDone: boolean, todolistId: string) => void
    filter: "All" | "Active" | "Completed"
    id: string
    removeTodolist:(todolistId: string)=>void
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
        const onRemoveHandler = () => {
            props.remoteTask(task.id, props.id)
        }

        const onChingeHandler = (e: ChangeEvent<HTMLInputElement>) => {
            console.log(task.id + e.currentTarget.checked)
            props.chingeTaskStatus(task.id, e.currentTarget.checked, props.id)
        }


        return (
            <li key={task.id} className={task.isDone ? "is-Done" : ""}>
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
            newTaskTitle.trim() && props.addTask(newTaskTitle, props.id)
             setNewTaskTitle("")
            !newTaskTitle.trim() && setError("The field is empty")
        }
    }
    const addTask = () => {
        if (newTaskTitle.trim() !== '') {
            props.addTask(newTaskTitle.trim(), props.id)
            setNewTaskTitle("")
        } else {
            setError("The field is empty")
        }

    }
    const onAllClickFilter = () => {
        props.changeTodoListFilter("All", props.id)
    }
    const onActiveClickFilter = () => {
        props.changeTodoListFilter("Active", props.id)
    }
    const onCompletedClickFilter = () => {
        props.changeTodoListFilter("Completed", props.id)
    }
    const removeTodolist = () => {
        props.removeTodolist(props.id)
    }
    return (
        <div className={todoClass}>
            <h3>{props.title}
                <button onClick={removeTodolist}>x</button>
            </h3>
            <div>
                <input
                    className={error ? "error" : ""}
                    value={newTaskTitle}
                    onChange={OnChangeTaskTitle}
                    onKeyPress={OnKeyPressHandler}/>
                <button onClick={addTask}>+</button>
                {error && <div className={'error-message'}>{error}</div>}
            </div>
            <ul>
                {todoListItems}
            </ul>
            <div>
                <button className={props.filter === "All" ? "active-filter" : ""} onClick={onAllClickFilter}>All
                </button>
                <button className={props.filter === "Active" ? "active-filter" : ""}
                        onClick={onActiveClickFilter}>Active
                </button>
                <button className={props.filter === "Completed" ? "active-filter" : ""}
                        onClick={onCompletedClickFilter}>Completed
                </button>
            </div>
        </div>
    );
}
export default Todolist;