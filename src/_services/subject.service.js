import axios from "axios";

import authHeader from "../_helpers/auth-header";

const getSubjectsList = () => axios.get("/subjects", { headers: authHeader() });

const getSubject = id =>
    axios.get(`/subject/get/${id}`, { headers: authHeader() });

const getSubjectRecomendations = id =>
    axios.get(`/subject/get/${id}/recommendations`, { headers: authHeader() });

const subjectService = {
    getSubjectsList,
    getSubject,
    getSubjectRecomendations
};

export default subjectService;
