import React, {useState} from 'react';
import './App.css';
import Todolist from "./Todolist";
import {type} from "os";
import {v1} from "uuid";

export type FilterVuluesType = "All" | "Active" | "Completed"
export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

function App(): JSX.Element {

    const [tasks, setTasks] = useState<Array<TaskType>>([
        {id: v1(), title: "HTNL & CSS", isDone: true},
        {id: v1(), title: "CSS & SCSS", isDone: true},
        {id: v1(), title: "ES6/TS", isDone: false},
        {id: v1(), title: "Redax", isDone: false},
        {id: v1(), title: "GraphQv1(", isDone: false},
    ])
    const remoteTask = (taskId: string) => {
        setTasks(tasks.filter(task => task.id !== taskId))
        console.log(tasks)
    }

    function addTask(title: string) {
        let newTask = {id: v1(), title: title, isDone: false};
        let newTasks = [newTask, ...tasks];
        setTasks(newTasks);
    }

    const [filter, setFilter] = useState<FilterVuluesType>("All")

    const changeTodoListFilter = (filter: FilterVuluesType) => {
        setFilter(filter)

    }
    let taskForRender: Array<TaskType> = []
    if (filter === "All") {
        taskForRender = tasks
    }
    if (filter === "Active") {
        taskForRender = tasks.filter((t) => !t.isDone)
    }
    if (filter === "Completed") {
        taskForRender = tasks.filter((t) => t.isDone)
    }

    return (
        <div className="App">
            <Todolist
                remoteTask={remoteTask}
                title={"Whats to learn"}
                tasks={taskForRender}
                changeTodoListFilter={changeTodoListFilter}
                addTask={addTask}
            />
        </div>
    );
}

export default App;
