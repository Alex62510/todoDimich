import PropTypes from "prop-types";
import {FC} from "react";

export type DataType = {
    title: string
    tasks: Array<TasksType>
    students: Array<string>
}
export type TasksType = {
    taskId: number
    title: string
    isDone: boolean
}


export type PropType = {
    studTitle: DataType
    studName: DataType
}

const Task: FC<PropType> = (props) => {
    return (
        <div>
            <div>{props.studTitle.title}</div>
            <ul>
                <li>{props.studName.students}</li>
                        </ul>
                </div>
                )
                }
                    export default Task;