import ReactDom from "react-dom";
import ReactDOM from 'react-dom'
export const VideoHeader=(props:{videoName:string})=>{
    return<div>
        {props.videoName}
    </div>
}
export const VideoContent=(props:{videoContent: string})=>{
    return<div>
        <a href={props.videoContent}>{props.videoContent}</a>
    </div>
}
export const VideoDescription=(props:{videoDescription:string})=>{
    return<div>
        {props.videoDescription}
    </div>
}

export const YoutubeVideo=(props:any)=>{
    return<div>
        <VideoHeader videoName={props.title} />
        <VideoContent videoContent={props.link} />
        <VideoDescription videoDescription={props.description} />
    </div>
}
export const App=()=>{
    const video = {
        title: "Samurai way",
        link:"https://Youtube.com",
        description:"Best free react-course"
    }
}
return <YoutubeVideo video={video} />
}

ReactDOM.render(<App />,
    document.getElementById('root')
);