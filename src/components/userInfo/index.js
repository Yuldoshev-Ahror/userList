import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useLocation, useHistory } from 'react-router-dom';
import { globaleState } from '../../globaleState';

const useStyles = makeStyles(() => ({
    media: {
        height: '360px'
    }
}))

export default function UserInfo() {
    const classes = useStyles();
    const { state } = useLocation();
    const { goBack } = useHistory();
    const { userDelete } = React.useContext(globaleState);

    return (
        <Card>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={state.picture.large}
                    title={state.name.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {`${state.name.title} ${state.name.frist} ${state.name.last}`}
          </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        email: {state.email}
                        <br /> 
                        Phone: {state.phone}
                        <br />
                        {state.location.timezone.description}
          </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" variant='contained' onClick={goBack}>
                    goBack
                </Button>
                <Button size="small" color="secondary" onClick={() => {goBack(); userDelete(state.email)}}>
                    Delete
                </Button>
            </CardActions>
        </Card>
    )
} 
