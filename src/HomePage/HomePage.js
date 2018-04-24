import React from "react";

import { Grid, Card, Button } from "semantic-ui-react";

import Header from "./Header";

import bachelorImage from "../_resources/bach-prog.png";

const HomePage = () => (
    <div className="home-page">
        <Header />
        <div className="content">
            <p className="moto">Знайди свій шлях у майбутнє!</p>
            <Grid divided="vertically">
                <Grid.Row columns={2}>
                    <Grid.Column width={10}>
                        <Card className="bachelor-card">
                            <img
                                className="bach-img"
                                src={bachelorImage}
                                alt="bachelorImage"
                            />
                            <Card.Content>
                                <p className="header">
                                    Бакалаврська програма{" "}
                                    <span className="internet-of-things">
                                        Internet of Things
                                    </span>
                                </p>
                                <p className="content">
                                    Internet of Things, або ж Інтернет Речей, –
                                    сфера, яка дає змогу реалізовувати такі
                                    концепти як «розумний будинок» чи «розумне
                                    місто» і поєднує програмування та пристрої.
                                    Тепер у Львові з’явилася можливість вивчати
                                    цю галузь одразу ж після закінчення школи:
                                    завдяки спільній роботі учасників Кластера
                                    та Національного університету «Львівська
                                    політехніка» вже у вересні буде запущено
                                    бакалаврську програму Internet of Things.
                                </p>
                                <div className="button-container">
                                    <Button className="white-purple-button">
                                        Ознайомитись
                                    </Button>
                                </div>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Grid columns={1}>
                            <Grid.Row>
                                <Grid.Column>
                                    <Card>
                                        <Card.Content>test</Card.Content>
                                    </Card>
                                </Grid.Column>
                                <Grid.Column>
                                    <Card>
                                        <Card.Content>Test</Card.Content>
                                    </Card>
                                </Grid.Column>
                                <Grid.Column>
                                    <Card>
                                        <Card.Content>Test</Card.Content>
                                    </Card>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    </div>
);

export default HomePage;
