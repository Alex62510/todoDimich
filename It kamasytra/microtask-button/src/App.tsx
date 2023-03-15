import React from 'react';

import './App.css';
import {Button} from "./components/Button";

function App() {
    const Button1Foo = (name:string, age: number) => {
        console.log(name,age)
    }
    const Button2Foo = (name: string) => {
        console.log(name)
    }
    const Button3Foo = (name: string) => {
        console.log(name)
    }
    return (
        <div className="App">

            <Button name={'YouTube channel-1'} callBack={()=>Button1Foo('Alex',21)}/>
            <Button name={'YouTube channel-2'} callBack={()=>Button2Foo('Dima')}/>
            <Button name={'YouTube channel-3'} callBack={()=>Button3Foo('Iam stuped button')}/>

        </div>
    );
}

export default App;
