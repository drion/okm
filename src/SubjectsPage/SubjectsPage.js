import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { Card, Item, Select } from "semantic-ui-react";

import Header from "../HomePage/Header";
import subjectAction from "../_actions/subject.actions";

class SubjectsPage extends React.Component {
    state = {};

    componentDidUpdate() {
        const { course, semester } = this.state;
        if (course && semester) this.props.getSubjectsList();
    }

    handleSelectChange = (e, el) => this.setState({ [el.name]: el.value });

    render() {
        const { subjects } = this.props;
        const courseOptions = [1, 2, 3, 4, 5].map(e => ({
            key: e,
            value: e,
            text: e
        }));
        const semesterOptions = [1, 2].map(e => ({
            key: e,
            value: e,
            text: e
        }));

        return (
            <div className="subjects-page">
                <Header />
                <div className="content">
                    <Card className="subjects-list-card">
                        <div>
                            <span className="select-label">Курс</span>
                            <Select
                                name="course"
                                options={courseOptions}
                                onChange={this.handleSelectChange}
                            />
                            <span className="select-label">Семестр</span>
                            <Select
                                name="semester"
                                options={semesterOptions}
                                onChange={this.handleSelectChange}
                            />
                        </div>
                        <h1>Предмети</h1>
                        {subjects && subjects.lenght > 0 ? (
                            <Item.Group>
                                {subjects.map(e => (
                                    <Link
                                        to={`/subjects/${e.subjectId}`}
                                        key={e.subjectId}
                                    >
                                        <Item className="subject-item">
                                            <Item.Image
                                                size="tiny"
                                                src={e.img}
                                                alt="course-img"
                                            />

                                            <Item.Content>
                                                <Item.Header as="a">
                                                    {e.name}
                                                </Item.Header>
                                                <Item.Description>
                                                    {e.description}
                                                </Item.Description>
                                            </Item.Content>
                                        </Item>
                                    </Link>
                                ))}
                            </Item.Group>
                        ) : (
                            <div className="no-subjects">
                                Відсутній список предметів
                            </div>
                        )}
                    </Card>
                </div>
            </div>
        );
    }
}

SubjectsPage.propTypes = {
    subjects: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    getSubjectsList: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        subjects: state.subjectReducer.subjects
    };
}

export default connect(mapStateToProps, {
    getSubjectsList: subjectAction.getSubjectsList
})(SubjectsPage);
