import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

export default function User({ user }) {
    return (
        <List>
            <ListItem alignItems="flex-start" button>
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src={user.picture.large} />
                </ListItemAvatar>
                <ListItemText
                    primary={`${user.name.title} ${user.name.first} ${user.name.last}`}
                    secondary={
                        <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                color="textPrimary"
                            >
                                Yoshi: {user.dob.age}
                            </Typography>
                            <br /> Email: {user.email}
                        </React.Fragment>
                    }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
        </List>
    )
}