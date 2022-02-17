import React from "react";
import { Link } from "react-router-dom";
import { register } from "../services/reg";
import { Paper } from "@material-ui/core";
import form from "./common/form";

class Signup extends form {
    state = { data: { name: "", email: "", password: "" }, errors: {} };

    doSubmit = async () => {
        try {
            await register(this.state.data);
            window.alert("user registered");
        } catch (error) {
            console.log(error);
        }
    };

    render() {
        return (
            <form
                onSubmit={this.handleSubmit}
                className="full_screen flex column"
            >
                <Paper elevation={3} className="form">
                    <div className="form_heading">Signup</div>
                    {this.renderInput("name", "Name")}
                    {this.renderInput("email", "Email", "email")}
                    {this.renderInput("password", "Password", "password")}
                    {this.renderSubmitBtn("Signup")}
                </Paper>
                <div style={{ margin: "10px 0" }}>
                    Already have an account? <Link to="/login">Login</Link>
                </div>
            </form>
        );
    }
}

export default Signup;