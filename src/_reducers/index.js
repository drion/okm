import { combineReducers } from "redux";

import authentication from "./authentication.reducer";
import user from "./user.reducer";
import subjectReducer from "./subjects.reducer";

const rootReducer = combineReducers({
    authentication,
    user,
    subjectReducer
});

export default rootReducer;
