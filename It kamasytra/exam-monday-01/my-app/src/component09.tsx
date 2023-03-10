import ReactDOM from "react-dom";
const CrazyButton = (props:any)=>{
    const style ={
        color: props.color,
            backgroundColor: props.backgroundColor
    }
    return <button style={style}>{props.color}</button>
}

export const App=()=>{
    return<div>
        <CrazyButton title={'delete'} fontcolor={'white'} bgColor={'red'} />
        <CrazyButton title={'add'} fontcolor={'white'} bgColor={'green'} />

    </div>
}
ReactDOM.render(<App/>, document.getElementById('root'))