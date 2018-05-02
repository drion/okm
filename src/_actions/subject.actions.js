import subjectConstants from "../_constants/subject.constants";
import subjectService from "../_services/subject.service";

function getSubjectsList() {
    function request() {
        return { type: subjectConstants.GET_SUBJECTS_LIST_REQUEST };
    }

    function success(payload) {
        return { type: subjectConstants.GET_SUBJECTS_LIST_SUCCESS, ...payload };
    }

    function failure(error) {
        return { type: subjectConstants.GET_SUBJECTS_LIST_FAILURE, error };
    }

    return dispatch => {
        dispatch(request());

        return subjectService.getSubjectsList().then(
            payload => {
                dispatch(success(payload));
            },
            error => dispatch(failure(error))
        );
    };
}

function getSubject(id) {
    function request() {
        return { type: subjectConstants.GET_SUBJECT_REQUEST };
    }

    function success(payload) {
        return { type: subjectConstants.GET_SUBJECT_SUCCESS, ...payload };
    }

    function failure(error) {
        return { type: subjectConstants.GET_SUBJECT_FAILURE, error };
    }

    return dispatch => {
        dispatch(request());

        return subjectService.getSubject(id).then(
            payload => {
                dispatch(success(payload));
            },
            error => dispatch(failure(error))
        );
    };
}

function getSubjectRecomendations(id) {
    function request() {
        return { type: subjectConstants.GET_SUBJECT_RECOMENDATIONS_REQUEST };
    }

    function success(payload) {
        return {
            type: subjectConstants.GET_SUBJECT_RECOMENDATIONS_SUCCESS,
            ...payload
        };
    }

    function failure(error) {
        return {
            type: subjectConstants.GET_SUBJECT_RECOMENDATIONS_FAILURE,
            error
        };
    }

    return dispatch => {
        dispatch(request());

        return subjectService.getSubjectRecomendations(id).then(
            payload => {
                dispatch(success(payload));
            },
            error => dispatch(failure(error))
        );
    };
}

const subjectActions = {
    getSubjectsList,
    getSubject,
    getSubjectRecomendations
};

export default subjectActions;
