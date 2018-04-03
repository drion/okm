import React from "react";
import validator from "validator";
import PropTypes from "prop-types";
import { Form, Button } from "semantic-ui-react";

import InlineError from "../_components/messages/InlineError";

class SignupForm extends React.Component {
    state = {
        data: {
            email: "",
            password: "",
            passwordConfirm: ""
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
        if (!validator.isEmail(data.email))
            errors.email = "Email is not correct";
        if (!data.email) errors.email = "Email is required";
        if (data.password.length < 8)
            errors.password = "Password should be 8 characters or more";
        if (!data.password) errors.password = "Password is required";
        if (data.password !== data.passwordConfirm)
            errors.passwordConfirm = "Passwords don`t match";
        if (!data.passwordConfirm)
            errors.passwordConfirm = "Password confirmation is required";

        return errors;
    };

    render() {
        const { errors, data, loading } = this.state;

        return (
            <Form
                className="signup-form"
                onSubmit={this.onSubmit}
                loading={loading}
            >
                <Form.Field error={!!errors.email}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Email"
                        value={data.email}
                        onChange={this.onChange}
                    />
                    {errors.email && <InlineError text={errors.email} />}
                </Form.Field>
                <Form.Field error={!!errors.password}>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Password"
                        value={data.password}
                        onChange={this.onChange}
                    />
                    {errors.password && <InlineError text={errors.password} />}
                </Form.Field>
                <Form.Field error={!!errors.passwordConfirm}>
                    <label htmlFor="passwordConfirm">Password confirm</label>
                    <input
                        type="password"
                        id="passwordConfirm"
                        name="passwordConfirm"
                        placeholder="Password confirm"
                        value={data.passwordConfirm}
                        onChange={this.onChange}
                    />
                    {errors.passwordConfirm && (
                        <InlineError text={errors.passwordConfirm} />
                    )}
                </Form.Field>
                <div className="submit-button-container">
                    <Button primary>Submit</Button>
                </div>
            </Form>
        );
    }
}

SignupForm.propTypes = {
    submit: PropTypes.func.isRequired
};

export default SignupForm;
