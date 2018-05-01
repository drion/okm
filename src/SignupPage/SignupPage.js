import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Card } from "semantic-ui-react";

import Header from "../HomePage/Header";
import SignupForm from "./SignupForm";
import userActions from "../_actions/user.actions";

class SignupPage extends React.Component {
    state = {};

    handleSubmit = data => {
        const postData = {
            firstName: data.firstName,
            lastName: data.lastName,
            username: data.email,
            email: data.email,
            password: data.password,
            repeatPassword: data.passwordConfirm
        };
        return this.props.signup(postData);
    };

    render() {
        return (
            <div className="signup-page">
                <Header />
                <Card className="form-card centered-card">
                    <SignupForm submit={this.handleSubmit} />
                </Card>
            </div>
        );
    }
}

SignupPage.propTypes = {
    signup: PropTypes.func.isRequired
};

export default connect(null, { signup: userActions.signup })(SignupPage);
