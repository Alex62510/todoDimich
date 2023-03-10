const Son = (props:any)=>{
return <div>
     iam son. My name is {props.name}
</div>
}
const Father = (props:any)=> {
    return<div>
        I am a father. My name is {props.name}
        <Son name={props.sonName} />
    </div>
}
const Granny = (props:any)=>{
    return<div>
        I am granny. My name is {props.name}
        <Father name={props.fatherName} sonName={props.sonName}/>
    </div>
}
export const App =()=>{
    return<div>
        <Granny XXX={'babylia'} fatherName={'Batia'} sonName={'sin'}/>
    </div>
}