import PropTypes from "prop-types";
import React from "react";
import { Route } from "react-router";

import HomePage from "../HomePage/HomePage";
import LoginPage from "../LoginPage/LoginPage";
import SignupPage from "../SignupPage/SignupPage";

import GuestRoute from "../_components/routes/GuestRoute";

const App = ({ location }) => (
    <div className="container">
        <Route location={location} exact path="/" component={HomePage} />
        <GuestRoute
            location={location}
            exact
            path="/login"
            component={LoginPage}
        />
        <GuestRoute
            location={location}
            exact
            path="/signup"
            component={SignupPage}
        />
    </div>
);

App.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired
    }).isRequired
};

export default App;
