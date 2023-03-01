import React from 'react';
import './App.css';
import Todolist from "./Todolist";

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

function App(): JSX.Element {
    let tasks: TaskType[] = [
        {id: 1,  title: "HTML & CSS", isDone: true},
        {id: 2, title: "CSS & SCSS", isDone: true},
        {id: 3, title: "ES6/TS", isDone: false},
        {id: 4, title: "React", isDone: false},
    ]
    function removeTask(id: number) {
        debugger
         tasks = tasks.filter(t=>t.id !==id
        )
    }
    // const tasks1: TaskType[] = [
    //     {id: 1, title: "HTML & CSS", isDone: false},
    //     {id: 2, title: "CSS & SCSS", isDone: false},
    //     // {id: 3, title: "ES6/TS", isDone: false},
   // ]
    return (
        <div className="App">
            <Todolist
                title={"Whats to learn"}
                tasks={tasks}
                removeTask={removeTask}
            />
            {/*<Todolist title={"What to buy"} tasks={tasks1}/>*/}
            {/*<Todolist title={"What to read"} task={tasks}/>*/}
        </div>
    );
}

export default App;
