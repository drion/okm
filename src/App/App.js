import PropTypes from "prop-types";
import React from "react";
import { Route } from "react-router";

import HomePage from "../HomePage/HomePage";
import LoginPage from "../LoginPage/LoginPage";
import SignupPage from "../SignupPage/SignupPage";
import Dashboard from "../Dashboard/Dashboard";
import SubjectsPage from "../SubjectsPage/SubjectsPage";
import SubjectPage from "../SubjectsPage/SubjectPage";

import GuestRoute from "../_components/routes/GuestRoute";
import PrivateRoute from "../_components/routes/PrivateRoute";

const App = ({ location }) => (
    <div className="container">
        <Route location={location} exact path="/" component={HomePage} />
        <Route
            location={location}
            exact
            path="/subjects"
            component={SubjectsPage}
        />
        <Route
            location={location}
            exact
            path="/subjects/:id"
            component={SubjectPage}
        />
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
        <PrivateRoute
            location={location}
            exact
            path="/dashboard"
            component={Dashboard}
        />
    </div>
);

App.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired
    }).isRequired
};

export default App;
