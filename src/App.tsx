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
export type TodoListType = {
    id: string
    title: string
    filter: FilterVuluesType
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
    const chingeStatus = (taskId: string, isDone: boolean) => {
        let task = tasks.find(t => t.id === taskId);
        if (task) {
            task.isDone = isDone
        }
        setTasks([...tasks])
    }


    function addTask(title: string) {
        let newTask = {id: v1(), title: title, isDone: false};
        let newTasks = [newTask, ...tasks];
        setTasks(newTasks);
    }


    const changeTodoListFilter = (filter: FilterVuluesType, todOlistId: string) => {
let todolist=todolists.map(t=>t.id===todOlistId? {...t, filter: filter}: t)
        setTodolists(todolist)
    }

    const [todolists, setTodolists]=useState<Array<TodoListType>> ([
        {id: v1(), title: "Whats to buy", filter: "Active"},
        {id: v1(), title: "Whats to learn", filter: "Completed"}
    ])


    return (

        <div className="App">
            {todolists.map(t => {
                let taskForRender: Array<TaskType> = []
                if (t.filter === "All") {
                    taskForRender = tasks
                }
                if (t.filter === "Active") {
                    taskForRender = tasks.filter((t) => !t.isDone)
                }
                if (t.filter === "Completed") {
                    taskForRender = tasks.filter((t) => t.isDone)
                }

                return <Todolist
                    key={t.id}
                    id={t.id}
                    chingeTaskStatus={chingeStatus}
                    remoteTask={remoteTask}
                    title={t.title}
                    tasks={taskForRender}
                    changeTodoListFilter={changeTodoListFilter}
                    addTask={addTask}
                    filter={t.filter}
                />
            })
            }
        </div>
    );
}

export default App;
