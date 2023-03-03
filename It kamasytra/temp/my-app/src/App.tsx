import React from 'react';
import './App.css';
import Accordeon from './components/Accordeon/Accordeon';
import {Rating} from "./components/Rating/Rating";

function App() {
    console.log("App rendering")
  return (
    <div>
        {/*<PageTitle title={"This is App component"}/>*/}
        {/*<PageTitle title={"This my friend"}/>*/}
        {/*Artical1*/}
        {/*<Rating value={1}/>*/}
        <Accordeon titlevalue={"Menu"} collapsed={false} />
        <Accordeon titlevalue={"Users"} collapsed={true} />
        {/*Artical2*/}
        {/*<Rating value={1}/>*/}
        {/*<Rating value={2}/>*/}
        {/*<Rating value={3}/>*/}
        {/*<Rating value={4}/>*/}
        {/*<Rating value={5}/>*/}
    </div>
  );
}

type PageTitlePropsType = {
    title: string
}
function PageTitle(props: PageTitlePropsType){
    return <h1>{props.title}</h1>
}
export default App;
