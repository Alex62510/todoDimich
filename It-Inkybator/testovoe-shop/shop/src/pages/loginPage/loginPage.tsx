import React from 'react';
import {Login} from "../../components/login/Login";
import {Link} from "react-router-dom";
import {Paths} from "../../Path/Path";

export const LoginPage = () => {
    return (
        <div>
            <h2>Login</h2>
            <Login/>
            <div>Don't have an account? <Link to={Paths.singUp}>Register</Link></div>
        </div>
    );
};

