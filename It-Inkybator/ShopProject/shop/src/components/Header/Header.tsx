import React from 'react';
import {Link} from "react-router-dom";
import {ROUTES} from "../../utils/routes";

const Header = () => {
    return (
        <div className={"header"}>
            <div className={"logo"}>
                <Link to={ROUTES.HOME}>
                    <img src={"LOGO"} alt="Staff"/>
                </Link>
            </div>
            <div className={"info"}>
                <div className={"user"}>
                    <div className={"avatar"} style={{backgroundColor: `Url`}}/>
                    <div className={"userName"}>Guest</div>
                </div>
                <form className={"form"}>
                    <div className={"icon"}>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default Header;