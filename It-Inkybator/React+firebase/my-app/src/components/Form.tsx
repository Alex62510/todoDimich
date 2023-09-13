import {useState} from 'react'
import React from 'react';

type Props = {
    title: string
    handleClick: (email: any, password: any) => void
}
const Form = ({title, handleClick}: Props) => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    return (
        <div>
            <input type='email'
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}
                   placeholder='email'/>
            <input type='password'
                   value={pass}
                   onChange={(e) => setPass(e.target.value)}
                   placeholder='password'/>
            <button onClick={()=>handleClick(email,pass)}>
                {title}
            </button>
        </div>
    );
};

export {Form};