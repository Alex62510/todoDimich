import React, {ChangeEvent, FC} from 'react';
import {AddItemForm} from './AddItemFormType';
import {FilterVuluesType, TaskType} from "./App";
import {EditableSpan} from './EditableSpan';

type TodolistPropsType = {
    title: string
    tasks: Array<TaskType>
    remoteTask: (taskId: string, todolistId: string) => void
    changeTodoListFilter: (filter: FilterVuluesType, todOlistId: string) => void
    addTask: (title: string, todolistId: string) => void
    changeTaskStatus: (taskId: string, isDone: boolean, todolistId: string) => void
    filter: "All" | "Active" | "Completed"
    id: string
    removeTodolist: (todolistId: string) => void
    changeTaskTitle: (taskId: string, newValue: string, todolistId: string) => void
    changeTodolistTitle:(id:string, newValue:string)=>void
}
const Todolist: FC<TodolistPropsType> = (props) => {

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
            props.changeTaskStatus(task.id, e.currentTarget.checked, props.id)
        }
        const onChangeTitleHandler = (newValue: string) => {

            props.changeTaskTitle(task.id, newValue, props.id)
        }

        return (
            <li key={task.id} className={task.isDone ? "is-Done" : ""}>
                <input
                    onChange={onChingeHandler}
                    type="checkbox"
                    checked={task.isDone}/>
                <EditableSpan title={task.title} onChange={onChangeTitleHandler}/>
                <button onClick={onRemoveHandler}>x</button>
            </li>
        )
    })
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

    const addTask = (title: string) => {
        props.addTask(title, props.id)

    }
    const onChangeTitleTodolistsHandler = (newValue: string) => {

        props.changeTodolistTitle(props.id, newValue)
    }
    return (
        <div className={todoClass}>
            <h3><EditableSpan title={props.title} onChange={onChangeTitleTodolistsHandler}/>
                <button onClick={removeTodolist}>x</button>
            </h3>
            <AddItemForm addItem={addTask}/>
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