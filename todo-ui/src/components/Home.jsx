import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCurrentUser } from "../services/auth";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import ToDoData from "./dataGrid";
const Home = () => {
    const [user, setUser] = useState("");

    useEffect(() => {
        setUser(getCurrentUser());
    }, []);

    return (
        <>
        <AppBar color="default">
            <Toolbar>
                <h3 style={{ flexGrow: "1" }}>Domain</h3>
                {!user && (
                    <React.Fragment>
                        <Link to="/login">
                            <Button
                                style={{ marginRight: "10px" }}
                                variant="outlined"
                                color="secondary"
                            >
                                Login
                            </Button>
                        </Link>
                        <Link to="/signup">
                            <Button variant="outlined" color="secondary">
                                Signup
                            </Button>
                        </Link>
                    </React.Fragment>
                )}
                {user && (
                    <React.Fragment>
                        <h4 style={{ marginRight: "15px" }}>{user.name}</h4>
                        <Link to="/logout">
                            <Button variant="outlined" color="secondary">
                                Logout
                            </Button>
                        </Link>
                    </React.Fragment>
                    
                )}
            </Toolbar>
            {user && (
                <ToDoData/>
            )}
        </AppBar>
        
        </>
    );
};

export default Home;