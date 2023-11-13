import React, {useState} from 'react';
import style from "./order.module.css";

const Order = () => {
    const [name, setName] = useState('')
    const [surName, setSurName] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    return (
        <div className={style.formOrder}>
            <input type='name'
                   value={name}
                   onChange={(e) => setName(e.target.value)}
                   placeholder='name'/>
            <input type='surName'
                   value={surName}
                   onChange={(e) => setSurName(e.target.value)}
                   placeholder='surName'/>
            <input type='address'
                   value={address}
                   onChange={(e) => setAddress(e.target.value)}
                   placeholder='address'/>
            <input type='phone'
                   value={phone}
                   onChange={(e) => setPhone(e.target.value)}
                   placeholder='phone'/>
            <button onClick={()=>{}}>
                ORDER
            </button>
        </div>
    );
};

export {Order};