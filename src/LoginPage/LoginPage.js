import React from "react";
import { Card } from "semantic-ui-react";

import Header from "../HomePage/Header";
import LoginForm from "./LoginForm";

class LoginPage extends React.Component {
    state = {};

    handleSubmit = data => console.log(data);

    render() {
        return (
            <div className="login-page">
                <Header />
                <Card className="form-card centered-card">
                    <LoginForm submit={this.handleSubmit} />
                </Card>
            </div>
        );
    }
}

export default LoginPage;
