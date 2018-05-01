import React from "react";
import PropTypes from "prop-types";
import { Card } from "semantic-ui-react";
import { connect } from "react-redux";

import userActions from "../_actions/user.actions";
import Header from "../HomePage/Header";
import LoginForm from "./LoginForm";

class LoginPage extends React.Component {
    state = {};

    handleSubmit = data => this.props.login(data);

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

LoginPage.propTypes = {
    login: PropTypes.func.isRequired
};

export default connect(null, {
    login: userActions.login
})(LoginPage);
