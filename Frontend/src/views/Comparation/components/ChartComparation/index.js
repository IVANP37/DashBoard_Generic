import React from "react";

// core components
import { makeStyles } from "@material-ui/core/styles";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Update from "@material-ui/icons/Update";
import Map from "./chartBar.js";
import ChartPastel from "./chartPastel.js";
import ChartDreen from "./chart2.js";
import InterChart from "./interChart.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import EqualizerIcon from '@material-ui/icons/Equalizer';
import CardFooter from "components/Card/CardFooter.js";
import CardBody from "components/Card/CardBody.js";
import CardIcon from "components/Card/CardIcon.js";


import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

export default function ChartDyn() {
    const classes = useStyles();
    return (
        <div>
            <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                    <Card>
                        <CardHeader color="warning" stats icon>
                            <CardIcon color="warning">
                                <EqualizerIcon />
                            </CardIcon>
                            <p className={classes.cardCategory}> Graphics</p>
              <h3 className={classes.cardTitle}>
              VERTICAL BARS
               </h3>
                        </CardHeader>
                        <CardBody>
                            <Map />
                        </CardBody>
                        <CardFooter stats>
                            <div>
                                <Update />
                                Dynamic Comparative Graphics
              </div>
                        </CardFooter>
                    </Card>
                </GridItem>

                <GridItem xs={12} sm={12} md={6}>
                    <Card>
                        <CardHeader color="danger" stats icon>
                            <CardIcon color="danger">
                                <EqualizerIcon />
                            </CardIcon>
                            <p className={classes.cardCategory}> Graphics</p>
                            <h3 className={classes.cardTitle}>
                            Inferential Chart
                             </h3>
                        </CardHeader>
                        <CardBody>

                            <InterChart />
                        </CardBody>
                        <CardFooter stats>
                            <div >
                                <Update />
                                Dynamic Comparative Graphics
              </div>
                        </CardFooter>
                    </Card>
                </GridItem>

                <GridItem xs={12} sm={12} md={6}>
                    <Card>
                        <CardHeader color="info" stats icon>
                            <CardIcon color="info">
                                <EqualizerIcon />
                            </CardIcon>
                            <p className={classes.cardCategory}> Graphics</p>
                            <h3 className={classes.cardTitle}>
                             HORIZONTAL BARS
                             </h3>
                        </CardHeader>
                        <CardBody>
                            <ChartDreen />
                        </CardBody>
                        <CardFooter stats>
                            <div >
                                <Update />
                                Dynamic Comparative Graphics
              </div>
                        </CardFooter>
                    </Card>
                </GridItem>

                <GridItem xs={12} sm={12} md={6}>
                    <Card>
                        <CardHeader color="danger" stats icon>
                            <CardIcon color="danger">
                                <EqualizerIcon />
                            </CardIcon>
                            <p className={classes.cardCategory}> Graphics</p>
                            <h3 className={classes.cardTitle}>
                             PIE
                             </h3>
                        </CardHeader>
                        <CardBody>
                            <ChartPastel />
                        </CardBody>
                        <CardFooter stats>
                            <div >
                                <Update />
                                Dynamic Comparative Graphics
              </div>
                        </CardFooter>
                    </Card>
                </GridItem>

                <GridItem xs={12} sm={12} md={6}>

                </GridItem>
            </GridContainer>

        </div>
    );
}