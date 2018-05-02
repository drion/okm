import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Card, Grid, Image } from "semantic-ui-react";

import Header from "../HomePage/Header";
import subjectAction from "../_actions/subject.actions";

class SubjectPage extends React.Component {
    state = {
        subject: {
            subjectId: 86,
            name: "Бази даних",
            img:
                "https://cdn1.iconfinder.com/data/icons/business-programming/512/database_3-512.png",
            description:
                "Бази даних  є нормативною дисципліною для напряму ”Програмна інженерія”. Метою дисципліни є ознайомлення з поняттями і методами роботи баз даних, існуючими моделями бази даних, вивчення принципів організації та проектування  реляційних баз даних, вивчення  мови  SQL.",
            course: 3,
            semester: 1,
            specialty: {
                specialtyId: 192,
                name: "Програмна інженерія",
                description: null
            }
        },
        recomendations: [
            {
                name: "some name",
                url:
                    "https://cdn1.iconfinder.com/data/icons/business-programming/512/database_3-512.png"
            },
            {
                name: "some name1",
                url:
                    "https://cdn1.iconfinder.com/data/icons/business-programming/512/database_3-512.png"
            }
        ]
    };

    componentDidMount() {
        const { getSubject, getSubjectRecomendations, match } = this.props;
        getSubject(match.params.id);
        getSubjectRecomendations(match.params.id);
    }

    render() {
        const { subject, recomendations } = this.props;

        return (
            <div className="subject-page">
                <Header />
                <div className="content">
                    <Card className="subject-card">
                        {subject &&
                            Object.keys(subject) && (
                                <Grid>
                                    <Grid.Column
                                        width={4}
                                        className="image-col"
                                    >
                                        <Image src={subject.img} />
                                    </Grid.Column>
                                    <Grid.Column width={12}>
                                        <h1>{subject.name}</h1>
                                        <p>{subject.description}</p>
                                        {recomendations &&
                                            recomendations.length > 0 && (
                                                <div>
                                                    <h2>Рекомендації</h2>
                                                    <ul>
                                                        {recomendations.map(
                                                            e => (
                                                                <li>
                                                                    <a
                                                                        href={
                                                                            e.url
                                                                        }
                                                                        target="blank"
                                                                    >
                                                                        {e.name}
                                                                    </a>
                                                                </li>
                                                            )
                                                        )}
                                                    </ul>
                                                </div>
                                            )}
                                    </Grid.Column>
                                </Grid>
                            )}
                    </Card>
                </div>
            </div>
        );
    }
}

SubjectPage.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.number.isRequired
        }).isRequired
    }).isRequired
};

SubjectPage.propTypes = {
    subject: PropTypes.shape({}).isRequired,
    recomendations: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    getSubject: PropTypes.func.isRequired,
    getSubjectRecomendations: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        subject: state.subjectReducer.subject,
        recomendations: state.subjectReducer.recomendations
    };
}

export default connect(mapStateToProps, {
    getSubject: subjectAction.getSubject,
    getSubjectRecomendations: subjectAction.getSubjectRecomendations
})(SubjectPage);
