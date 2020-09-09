import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import User from '../user';
import { globaleState } from '../../globaleState';

const useStyles = makeStyles(() => ({
    link: {
        textDecoration: 'none',
        color: 'unset'
    }
}))

const UsersList = () => {
    const classes = useStyles();
    const { users, searchValue } = React.useContext(globaleState);
    return (
        users.length !== 0
            ? users.map(user => {
                const fullname = `${user.name.title} ${user.name.first} ${user.name.last}`
                return (fullname.toLowerCase().search(searchValue.toLowerCase()) !== -1) &&<Link className={classes.link} to={{ pathname: 'userinfo', state: user }}>
                <User key={user.id.value} user={user} />
                </Link>
            })

            : <LinearProgress />
    )
}

export default UsersList;