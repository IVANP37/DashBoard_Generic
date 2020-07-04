import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { FormattedMessage } from 'react-intl';
import Typography from '@material-ui/core/Typography';
import ImgAvatarClarin from '../images/news/clarin.jpg';
import ImgAvatarTelam from '../images/news/telam.png';
import ImgAvatarPagina from '../images/news/pagina.png';
import ImgAvatarLanacion from '../images/news/lanacion.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import messages from './messages';
const styles = theme => ({
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main,
    width: 75,
    height: 75,
  },
  left: {
    textAlign: 'left',
    textTransform: 'capitalize',
  },
  marginLeft: {
    marginLeft: theme.spacing.unit * 0.5,
  },
  actionReactNews: {
    marginLeft: theme.spacing.unit,
  },
});

class RecipeReviewCard extends React.Component {
  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;
    const { news } = this.props;
    news.source = news.source.replace('pagina', 'página 12');
    if (!news.image)
      news.image =
        'https://via.placeholder.com/450x255/303F9F/FFFFFF?text=Sin+Imagen';
    const ImgAvatar = source => {
      switch (source) {
        case 'telam':
          return (
            <Avatar
              aria-label="Fuente de noticias"
              src={ImgAvatarTelam}
              alt="avatar"
              className={classes.avatar}
            />
          );
        case 'clarin':
          return (
            <Avatar
              aria-label="Fuente de noticias"
              src={ImgAvatarClarin}
              alt="avatar"
              className={classes.avatar}
            />
          );

        case 'página 12':
          return (
            <Avatar
              aria-label="Fuente de noticias"
              src={ImgAvatarPagina}
              alt="avatar"
              className={classes.avatar}
            />
          );
        case 'lanacion':
          return (
            <Avatar
              aria-label="Fuente de noticias"
              src={ImgAvatarLanacion}
              alt="avatar"
              className={classes.avatar}
            />
          );
        default:
          return <FontAwesomeIcon size="3x"  />;
      }
    };

    return (
      <Card elevation={1}>
        <CardHeader
          classes={{
            title: classes.left,
            subheader: classes.left,
          }}
          avatar={ImgAvatar(news.source)}
          title={news.source}
          subheader={
            <div>
              <FontAwesomeIcon  />
              <span className={classes.marginLeft}>{news.newsDate}</span>
            </div>
          }
        />
        <CardMedia className={classes.media} image={news.image} title="as" />
        <CardContent>
          <Typography component="p">{news.title}</Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton
            color="primary"
            aria-label="Read article"
            onClick={() => window.open(news.url, '_blank')}
          >
            <FontAwesomeIcon  />
            <Typography className={classes.actionReactNews} component="p">
              <FormattedMessage {...messages.readArticle} />
            </Typography>
          </IconButton>
        </CardActions>
      </Card>
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired,
  news: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeReviewCard);
