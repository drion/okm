import React from "react";
import { Link } from "react-router-dom";

import { Image, Button, Grid } from "semantic-ui-react";

import gradient from "../_resources/gradient-small.png";
import nulp from "../_resources/nulp.jpg";

const Header = () => (
    <div className="header">
        <div className="header-image">
            <img src={gradient} alt="" />
        </div>
        <div className="top-navigation">
            <Grid>
                <Grid.Column floated="left" width={4}>
                    <div className="left-navigation">
                        <Link to="/">
                            <Image src={nulp} size="tiny" circular />
                            <span className="logo">CourseMap @NULP</span>
                        </Link>
                    </div>
                </Grid.Column>
                <Grid.Column
                    floated="right"
                    className="right-navigation"
                    width={9}
                >
                    <ul>
                        <li>
                            <Link to="">Каталог</Link>
                        </li>
                        <li>
                            <Link to="">Дослідити</Link>
                        </li>
                        <li>
                            <Link to="">Профорієнтаційне тестування</Link>
                        </li>
                        <li>
                            <Link to="/login">Увійти</Link>
                        </li>
                        <li>
                            <Link to="/signup">
                                <Button className="purple-button">
                                    Розпочати
                                </Button>
                            </Link>
                        </li>
                    </ul>
                </Grid.Column>
            </Grid>
        </div>
    </div>
);

export default Header;
