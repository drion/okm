import { combineReducers } from "redux";

import subjectConstants from "../_constants/subject.constants";

const initialState = {
    subjects: [],
    isLoading: false
};

function subjects(state = initialState, action) {
    switch (action.type) {
        case subjectConstants.GET_SUBJECTS_LIST_REQUEST:
            return {
                ...initialState,
                isLoading: true
            };
        case subjectConstants.GET_SUBJECTS_LIST_SUCCESS:
            return {
                ...initialState,
                subjects: [...action.payload]
            };
        case subjectConstants.GET_SUBJECTS_LIST_FAILURE:
            return { ...initialState };
        default:
            return state;
    }
}

const subjectState = {
    subject: null,
    isLoading: false
};

function subject(state = subjectState, action) {
    switch (action.type) {
        case subjectConstants.GET_SUBJECT_REQUEST:
            return {
                ...initialState,
                isLoading: true
            };
        case subjectConstants.GET_SUBJECT_SUCCESS:
            return {
                ...initialState,
                subject: action.payload
            };
        case subjectConstants.GET_SUBJECT_FAILURE:
            return { ...initialState };
        default:
            return state;
    }
}

const subjectRecomendationsState = {
    recomendatins: [],
    isLoading: false
};

function recomendations(state = subjectRecomendationsState, action) {
    switch (action.type) {
        case subjectConstants.GET_SUBJECT_RECOMENDATIONS_REQUEST:
            return {
                ...initialState,
                isLoading: true
            };
        case subjectConstants.GET_SUBJECT_RECOMENDATIONS_SUCCESS:
            return {
                ...initialState,
                recomendatins: [...action.payload]
            };
        case subjectConstants.GET_SUBJECT_RECOMENDATIONS_FAILURE:
            return { ...initialState };
        default:
            return state;
    }
}

const subjectReducer = combineReducers({
    subjects,
    subject,
    recomendations
});

export default subjectReducer;
