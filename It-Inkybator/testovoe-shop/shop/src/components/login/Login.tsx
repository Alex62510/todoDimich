import React from 'react';
import {Form} from "../form/Form";
import {useNavigate} from "react-router-dom";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {setUser} from "../../store/slaces/userSlice";
import {Paths} from "../../Path/Path";
import {useAppDispatch} from "../../store/state";
import { collection, addDoc,getDocs } from "firebase/firestore";
import {db} from "../../firebase/firebase";

type DataArrType=DataType[]
type DataType={title:string}
export const Login = () => {
    const navigate=useNavigate()
    const dispath = useAppDispatch()
    const addData= async ()=>{
        try {
        const docRef = await addDoc(collection(db, "data"), {
            Items:[{title:'Redux'},{title:'React'},{title:'Css'},{title:'Html'}],
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }}
const readData = async () => {
const dataArr:DataArrType=[]
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
        const dataItems=JSON.stringify(doc.data().user)
        // console.log(`${doc.id} => ${dataItems}`);
        console.log(dataItems)
        dataArr.push(JSON.parse(dataItems))
    });
    console.log(dataArr)
}

    const handleLogin=(email:string,password:string)=>{

        const auth=getAuth()

        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                console.log(user)
                dispath(setUser({id: user.uid, email: user.email, token: user.refreshToken}))
                navigate(Paths.shop)
            })
            .catch(()=>{alert('Invalid user')});
    }
    return (
        <>
            <Form title='Sing in' handleClick={handleLogin}/>
            <button onClick={addData}>addData</button>
            <button onClick={readData}>readData</button>
        </>

    );
};

