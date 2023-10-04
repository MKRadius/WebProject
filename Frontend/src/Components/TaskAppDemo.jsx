import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Nav from "./TaskApp/Nav";
import Sidebar from "./TaskApp/Sidebar";
import Display from "./TaskApp/Display";
import "../Styles/TaskApp.css";

import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const TaskAppDemo = () => {
    const [profileDropdown, setProfileDropdown] = useState(false);

    const navigate = useNavigate();

    const callbackFunc = (value) => {
        setProfileDropdown(value);
    }

    return (
        <>
            <div className="task-app">
                <div className="task-nav">
                    <Nav callback={callbackFunc}/>
                </div>
                
                <div className="task-main">
                    <div className="task-sidebar">
                        <Sidebar />
                    </div>

                    <div className="task-display">
                        <Display />
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
                                <p>Account</p>
                                <p>Settings</p>
                                <p onClick={() => navigate("/")}>Logout</p>
                            </div>
                        </div>
                    </>
                    
                )}
            </div>
            
            
        </>
    );
};

export default TaskAppDemo;