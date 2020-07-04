import React from "react";
import {Link } from "react-router-dom";


// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

import PinDropIcon from '@material-ui/icons/PinDrop';
import FaceIcon from '@material-ui/icons/Face';
import MultilineChartIcon from '@material-ui/icons/MultilineChart';
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import Update from "@material-ui/icons/Update";
import EqualizerIcon from '@material-ui/icons/Equalizer';


// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";

import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";

import CardFooter from "components/Card/CardFooter.js";



import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();
  const [color] = React.useState("blue");   
  
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
          <CardHeader color={color} stats icon>
          
              <CardIcon color="info">                
              <EqualizerIcon />
              
              </CardIcon>
              <Link to={"/admin/comparation"}> 
              <p className={classes.cardCategory}>Operation</p>
             
              <h3 className={classes.cardTitle}>
                COMPARATIONS
              </h3>
              </Link>
            </CardHeader>
            <CardFooter stats>
            <div className={classes.stats}>
                <Update />
                Comparative table of certain words
              </div>
            </CardFooter>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={12} md={6}>
          <Card>
          <CardHeader color={color} stats icon>
              <CardIcon color="info">
                <MultilineChartIcon />
              </CardIcon>
              <Link to={"/admin/intertopic"}> 
              <p className={classes.cardCategory}>Operation</p>
              <h3 className={classes.cardTitle}>INTERTOPIC</h3>
              </Link>
            </CardHeader>
            <CardFooter stats>
            <div className={classes.stats}>
                <Update />
                distance map through word searches
              </div>
            </CardFooter>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={12} md={6}>
          <Card>
          <CardHeader color={color} stats icon>
              <CardIcon color="info">
                <PinDropIcon />
              </CardIcon>
              <Link to={"/admin/actionsMap"}> 
              <p className={classes.cardCategory}>Operation</p>
              <h3 className={classes.cardTitle}>MAPS</h3>
              </Link>
            </CardHeader>
            <CardFooter stats>
            <div className={classes.stats}>
                <Update />
                shares Maps
              </div>
            </CardFooter>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={12} md={6}>
          <Card>
          <CardHeader color={color} stats icon>
              <CardIcon color="info">
                <LibraryBooks />
              </CardIcon>
              <p className={classes.cardCategory}>Operation</p>
              <h3 className={classes.cardTitle}>News</h3>
            </CardHeader>
            <CardFooter stats>
            <div className={classes.stats}>
                <Update />
                Searches in different media to get a vision of current affairs
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        
        <GridItem xs={12} sm={12} md={6}>
          <Card>
          <CardHeader color={color} stats icon>
              <CardIcon color="info">
                <FaceIcon />
              </CardIcon>
              <Link to={"/admin/face"}> 
              <p className={classes.cardCategory}>Operation</p>
              <h3 className={classes.cardTitle}>FACE RECOGNITION</h3>
              </Link>
            </CardHeader>
            <CardFooter stats>
            <div className={classes.stats}>
                <Update />
                Facial recognition through profile images and others
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      
    </div>
  );
}