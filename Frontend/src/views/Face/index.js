import React from "react";

// @material-ui/core

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
//import ImageUpload from "./components/imgUpload.js";
import VideoUpload from "./components/videoUpload.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import { red } from '@material-ui/core/colors';
import Switch from '@material-ui/core/Switch';
import FaceIcon from '@material-ui/icons/Face';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },    
    avatar: {
      backgroundColor: red[500],
    },
  }),
);

export default function Dashboard() {
  
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridContainer>     
        <GridItem xs={12} >
          <Card> 
          <CardHeader>
           <FaceIcon /> 
           Face recognitions...<b>Mode Load Image or Video</b>{
              <Switch               
              />           
            }
            
          </CardHeader>
              <VideoUpload />
          </Card>
        </GridItem>

        <GridItem xs={12} sm={12} md={6}>
          <Card>

          </Card>
        </GridItem>

        <GridItem xs={12} sm={12} md={6}>
          <Card>

          </Card>
        </GridItem>

        <GridItem xs={12} sm={12} md={6}>
          <Card>

          </Card>
        </GridItem>
      </GridContainer>

    </div>
  );
}