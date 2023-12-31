import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Nav from "./TaskApp/Nav";
import Sidebar from "./TaskApp/Sidebar";
import Display from "./TaskApp/Display";
import "../Styles/TaskApp.css";

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useAuthContext } from "../hooks/useContext";

const TaskAppDemo = () => {
    const [profileDropdown, setProfileDropdown] = useState(false);
    const { dispatch } = useAuthContext();

    const callbackFunc = (value) => {
        setProfileDropdown(value);
    }

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
    }

    return (
        <>
            <div className="task-app">
                <div className="task-nav">
                    <Nav callback={callbackFunc}/>
                </div>
                <div className="container">
                    <div className="task-main">
                        <div className="task-sidebar">
                            <Sidebar />
                        </div>

                        <div className="task-display">
                            <Display />
                        </div>

                    </div>
                </div>
            </div>

            {profileDropdown && (
                <>
                    <div className="dropdown-overlay" onClick={() => setProfileDropdown(false)}></div>
                    <div className="dropdown-menu-container">   
                        <div className="dropdown-profile-picture">
                            <AccountCircleIcon className="profile-picture-icon"/>
                        </div>

                        <div className="dropdown-selection">
                            <p className="account-button">Account</p>
                            <p className="settings-button">Settings</p>
                            <p className="logout-button" onClick={handleLogout}>Logout</p>
                        </div>
                    </div>                   
                </>                        
            )}         
        </>
    );
};

export default TaskAppDemo;