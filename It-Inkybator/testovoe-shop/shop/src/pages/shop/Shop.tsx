import React from 'react';
import {Items} from "../../components/items/Items";
import {useAuth} from "../../hooks/useAuth";
import {LoginPage} from "../loginPage/loginPage";
import firebase from "firebase/compat";

export const Shop = () => {
    const {isAuth}=useAuth()
//     var ref = firebase.database().ref('players');
// console.log(firebase)
    return (
        <div>
            {isAuth? <Items /> : <LoginPage/>}
        </div>
    );
};

