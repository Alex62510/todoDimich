import {Delete, Menu} from '@mui/icons-material';
import {Button, Checkbox, IconButton} from '@mui/material';
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
    changeTodolistTitle: (id: string, newValue: string) => void
}
const Todolist: FC<TodolistPropsType> = (props) => {

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
            <div key={task.id} className={task.isDone ? "is-Done" : ""}>
                <Checkbox
                    onChange={onChingeHandler}
                    checked={task.isDone}/>
                <EditableSpan title={task.title} onChange={onChangeTitleHandler}/>
                <IconButton onClick={onRemoveHandler} size="small">
                    <Delete fontSize="small"/>
                </IconButton>
            </div>
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
        <div>
            <h3><EditableSpan title={props.title} onChange={onChangeTitleTodolistsHandler}/>
                <IconButton onClick={removeTodolist} size="small">
                    <Delete fontSize="small"/>
                </IconButton>
            </h3>
            <AddItemForm addItem={addTask}/>
            <ul>
                {todoListItems}
            </ul>
            <div>
                <Button size="small" variant={props.filter === "All" ? "contained" : "text"}
                        onClick={onAllClickFilter}>All
                </Button>
                <Button color="primary" variant={props.filter === "Active" ? "contained" : "text"}
                        onClick={onActiveClickFilter}>Active
                </Button>
                <Button color="secondary" variant={props.filter === "Completed" ? "contained" : "text"}
                        onClick={onCompletedClickFilter}>Completed
                </Button>
            </div>
        </div>
    );
}
export default Todolist;