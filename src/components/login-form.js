import React from "react";

export default class LoginForm extends React.Component {
    render() {
        return (
            <form class="container-sm bg-dark-subtle mt-1 border">
                <h3 class="mb-3 mt-2">Login</h3>
                <div class="mb-3">
                    <label for="Username" class="form-label">Username</label>
                    <input type="user" class="form-control" id="username-input"/>
                </div>
                <div class="mb-3">
                    <label for="Password" class="form-label">Password</label>
                    <input type="password" class="form-control" id="password-input"/>
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                    <label class="form-check-label" for="exampleCheck1">Remember me</label>
                </div>
                <button type="submit" class="btn btn-primary mb-2">Submit</button>
            </form>
        )        
    }
};