import React, {FC} from 'react';
import {TaskType} from "./App";

type TodolistPropsType = {
    title: string
    tasks: Array<TaskType>;
    removeTask: Function
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
    debugger
    return (
        <div className={todoClass}>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {
                    props.tasks.map((t) => {
                        return <li>
                            <input type="checkbox" checked={t.isDone}/>
                            <span>{t.title}</span>
                            <button onClick={()=>{props.removeTask(t.id)}}>x</button>
                        </li>
                    })
                    }
                    </ul>
                    <div>
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                    </div>
                    </div>
                    );
                };

                export default Todolist;