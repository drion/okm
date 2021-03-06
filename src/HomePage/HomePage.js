import React from "react";

import { Grid, Card, Button, Image } from "semantic-ui-react";

import Header from "./Header";

import bachelorImage from "../_resources/bach-prog.png";
import linesImage from "../_resources/lines.png";
import tabletImage from "../_resources/tablet.png";
import macImage from "../_resources/mac.png";

const HomePage = () => (
    <div className="home-page">
        <Header />
        <div className="content">
            <p className="moto">Знайди свій шлях у майбутнє!</p>
            <Grid divided="vertically">
                <Grid.Row columns={2} className="top-content">
                    <Grid.Column computer={11} className="bachelor-col">
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
                    <Grid.Column
                        width={5}
                        className="side-blocks"
                        id="side-blocks-col"
                    >
                        <Grid columns={1}>
                            <Grid.Row>
                                <Grid.Column className="side-blocks-content">
                                    <Card className="side-block">
                                        <Grid columns="two">
                                            <Grid.Row>
                                                <Grid.Column width="6">
                                                    <Image
                                                        className="side-img"
                                                        src={linesImage}
                                                        alt="bachelorImage"
                                                    />
                                                </Grid.Column>
                                                <Grid.Column width="10">
                                                    <p className="type purple-text">
                                                        Вступай
                                                    </p>
                                                    <p className="side-block-header">
                                                        Програмна Інженерія
                                                    </p>
                                                    <p className="additional">
                                                        Стань крутим
                                                        програмістом
                                                    </p>
                                                </Grid.Column>
                                            </Grid.Row>
                                        </Grid>
                                    </Card>
                                    <Card className="side-block">
                                        <Grid columns="two">
                                            <Grid.Row>
                                                <Grid.Column width="6">
                                                    <Image
                                                        className="side-img"
                                                        src={tabletImage}
                                                        alt="bachelorImage"
                                                    />
                                                </Grid.Column>
                                                <Grid.Column width="10">
                                                    <p className="type red-text">
                                                        Нове
                                                    </p>
                                                    <p className="side-block-header">
                                                        Бізнес Аналітика
                                                    </p>
                                                    <p className="additional">
                                                        На межі з економікою
                                                    </p>
                                                </Grid.Column>
                                            </Grid.Row>
                                        </Grid>
                                    </Card>
                                    <Card className="side-block">
                                        <Grid columns="two">
                                            <Grid.Row>
                                                <Grid.Column width="6">
                                                    <Image
                                                        className="side-img"
                                                        src={macImage}
                                                        alt="bachelorImage"
                                                    />
                                                </Grid.Column>
                                                <Grid.Column width="10">
                                                    <p className="type orange-text">
                                                        Досліджуй
                                                    </p>
                                                    <p className="side-block-header">
                                                        Комп’ютерні Науки
                                                    </p>
                                                    <p className="additional">
                                                        Стань крутим
                                                        програмістом
                                                    </p>
                                                </Grid.Column>
                                            </Grid.Row>
                                        </Grid>
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
