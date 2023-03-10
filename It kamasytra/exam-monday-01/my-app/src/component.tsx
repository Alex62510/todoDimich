import React from "react";

type PropsType = {
    city: string
    country: string
    coords?:string
}
export const Wrapper1 =()=>{
    return (<PropsComponent1 city={'minsk'}  country={"belarus"}/>)
}
export const PropsComponent1: React.FC<PropsType> =(props)=>{
    return<div>hello</div>
}