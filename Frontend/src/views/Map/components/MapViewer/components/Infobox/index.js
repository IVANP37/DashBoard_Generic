import React from 'react';
import { compose } from 'recompose';
import Grow from '@material-ui/core/Grow';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/core/styles';
// import { FormattedMessage } from 'react-intl';
//import messages from './messages';
const { InfoBox } = require('react-google-maps/lib/components/addons/InfoBox');

const styles = theme => ({
  container: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.contrastText,
    padding: theme.spacing.unit * 2,
  },
  marginTop: {
    marginTop: theme.spacing.unit * 3,
  },
});
const Infobox = compose(withStyles(styles))(
  ({ classes, info, onCloseInfobox, isVisible }) => (
    <InfoBox
      key="infoMap"
      defaultPosition={new window.google.maps.LatLng(info.point)}
      options={{
        enableEventPropagation: true,
        pane: 'overlayLayer',
        pixelOffset: { x: -140, y: -60 },
        alignBottom: true,
        boxStyle: {
          boxShadow: `3px 3px 10px rgba(0,0,0,0.6)`,
        },
        closeBoxURL: '',
      }}
    >
      <Grow in={isVisible}>
        <Paper className={classes.container}>
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="body1" color="textPrimary" gutterBottom>
                {info.text}
              </Typography>
              <Typography variant="body2" color="textPrimary" gutterBottom>
                Una descripción para este elemento
              </Typography>
            </Grid>

            <Grid item xs={6} className={classes.marginTop}>
              <Button
                variant="contained"
                fontSize="small"
                color="primary"
                onClick={() => alert('action1')}
              >
                Action1
              </Button>
            </Grid>
            <Grid item xs={6} className={classes.marginTop}>
              <Button
                variant="contained"
                fontSize="small"
                color="primary"
                onClick={() => alert('action2')}
              >
                Action2
              </Button>
            </Grid>
            <Grid item xs={12} className={classes.marginTop}>
              <Fab fontSize="small" color="primary" onClick={onCloseInfobox}>
                <CloseIcon />
              </Fab>
            </Grid>
          </Grid>
        </Paper>
      </Grow>
    </InfoBox>
  ),
);

Infobox.propTypes = {};

export default Infobox;
