import React from 'react';
import './App.css';
import AppRoutes from "../Routes/Routes";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SideBar from "../SideBar/SideBar";

function App() {
    return (
        <div className="App">
            <Header/>
            <div className={'container'}>
                <SideBar/>
                <AppRoutes/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
