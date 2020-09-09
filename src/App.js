import React, { useEffect } from 'react';
import './App.css';
import Paper from '@material-ui/core/Paper';
import UserInfo from './components/userInfo';
import UsersList from './components/usersList';
import { makeStyles } from '@material-ui/styles';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import { globaleState } from './globaleState';

const useStyles = makeStyles(() => ({
  container: {
    maxWidth: '1400px',
    width: '60%',
    margin: 'auto'
  }
}))

function App() {
  const classes = useStyles();
  const { getUsers } = React.useContext(globaleState);

  useEffect(() => {
    getUsers()
  },[]);

  return <Paper className={classes.container}>
    <BrowserRouter>
      <Navbar />
      <hr />
      <Switch>
        <Route path='/' exact>
          <UsersList />
        </Route>
        <Route path='/userinfo'>
          <UserInfo />
        </Route>
      </Switch>
    </BrowserRouter>

  </Paper>
}

export default App;