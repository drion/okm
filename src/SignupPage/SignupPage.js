import React from "react";
import { Card } from "semantic-ui-react";

import SignupForm from "./SignupForm";

class SignupPage extends React.Component {
    state = {};

    handleSubmit = data => console.log(data);

    render() {
        return (
            <div className="signup-page">
                <Card className="form-card centered-card">
                    <SignupForm submit={this.handleSubmit} />
                </Card>
            </div>
        );
    }
}

export default SignupPage;
