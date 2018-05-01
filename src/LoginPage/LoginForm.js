import React from "react";
import PropTypes from "prop-types";
import { Form, Button } from "semantic-ui-react";
import InlineError from "../_components/messages/InlineError";

class LoginForm extends React.Component {
    state = {
        data: {
            username: "",
            password: ""
        },
        loading: false,
        errors: {}
    };

    onChange = e =>
        this.setState({
            ...this.state,
            data: { ...this.state.data, [e.target.name]: e.target.value }
        });

    onSubmit = e => {
        e.preventDefault();
        const errors = this.validate(this.state.data);
        this.setState({ errors });
        if (Object.keys(errors).length === 0) {
            this.setState({ loading: true });
            this.props.submit(this.state.data).catch(err =>
                this.setState({
                    errors: err.response.data.errors,
                    loading: false
                })
            );
        }
    };

    validate = data => {
        const errors = {};

        if (!data.username) errors.username = "Username is required";
        if (!data.password) errors.password = "Password is required";

        return errors;
    };

    render() {
        const { errors, data, loading } = this.state;

        return (
            <Form
                className="login-form"
                onSubmit={this.onSubmit}
                loading={loading}
            >
                <Form.Field error={!!errors.username}>
                    <label htmlFor="username">Логін</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="username@gmail.com"
                        value={data.username}
                        onChange={this.onChange}
                    />
                    {errors.username && <InlineError text={errors.username} />}
                </Form.Field>
                <Form.Field error={!!errors.password}>
                    <label htmlFor="password">Пароль</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Пароль"
                        value={data.password}
                        onChange={this.onChange}
                    />
                    {errors.password && <InlineError text={errors.password} />}
                </Form.Field>
                <div className="submit-button-container">
                    <Button className="purple-button">Увійти</Button>
                </div>
            </Form>
        );
    }
}

LoginForm.propTypes = {
    submit: PropTypes.func.isRequired
};

export default LoginForm;
