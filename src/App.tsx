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

    const remoteTask = (taskId: string, todolistId: string) => {
        let task = tasks[todolistId]
        let filtredTask = task.filter(task => task.id !== taskId)
        tasks[todolistId] = filtredTask
        setTasks({...tasks})
        console.log(tasks)
    }
    const chingeStatus = (taskId: string, isDone: boolean, todolistId: string) => {
        let task = tasks[todolistId].find(t => t.id === taskId);
        if (task) {
            task.isDone = isDone
            setTasks({...tasks})
        }
    }


    function addTask(title: string, todolistId: string) {
        let newTask = {id: v1(), title: title, isDone: false};
        let newTasks = [newTask, ...tasks[todolistId]];
        tasks[todolistId] = newTasks
        setTasks({...tasks});
    }


    const changeTodoListFilter = (filter: FilterVuluesType, todolistId: string) => {
        let todolist = todolists.map(t => t.id === todolistId ? {...t, filter: filter} : t)
        setTodolists(todolist)
    }
    let todolistId1 = v1()
    let todolistId2 = v1()
    const [todolists, setTodolists] = useState<Array<TodoListType>>([
        {id: todolistId1, title: "Whats to buy", filter: "Active"},
        {id: todolistId2, title: "Whats to learn", filter: "Completed"}
    ])
    let removeTodolist=(todolistId:string)=>{
        let todolist=todolists.filter(t=>t.id!==todolistId)
        setTodolists(todolist)
        delete tasks[todolistId]
        setTasks({...tasks})
    }
    let [tasks, setTasks] = useState({
        [todolistId1]: [
            {id: v1(), title: "HTNL & CSS", isDone: true},
            {id: v1(), title: "CSS & SCSS", isDone: true},
            {id: v1(), title: "ES6/TS", isDone: false},
            {id: v1(), title: "Redax", isDone: false},
            {id: v1(), title: "GraphQv1(", isDone: false},
        ],
        [todolistId2]: [
            {id: v1(), title: "Book", isDone: false},
            {id: v1(), title: "Milk", isDone: true},
        ]
    })

    return (

        <div className="App">
            {todolists.map(t => {
                let taskForRender: Array<TaskType> = []
                if (t.filter === "All") {
                    taskForRender = tasks[t.id]
                }
                if (t.filter === "Active") {
                    taskForRender = tasks[t.id].filter((t) => !t.isDone)
                }
                if (t.filter === "Completed") {
                    taskForRender = tasks[t.id].filter((t) => t.isDone)
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
                    removeTodolist={removeTodolist}
                />
            })
            }
        </div>
    );
}

export default App;
