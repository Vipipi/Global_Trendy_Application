import React from 'react';
import App from '../App/App';
import LoginPage from '../LoginPage/LoginPage';
import SignUpPage from '../SignUp/SignUpPage';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Auth from '../Auth/Auth';

import { Route, Link, withRouter } from 'react-router-dom';

import './Base.css';

const logout = (history) => {
	history.push('/login');
};

const Base = withRouter(({ history }) => (
	<div className="root">
	  <AppBar position="static" className="appBar">
			<Toolbar variant="dense">
				<IconButton className="menuButton" color="inherit" aria-label="Menu">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
				</IconButton>
				<Typography variant="h6" color="inherit" className="grow">
					Trendy
				</Typography>
					{Auth.isUserAuthenticated() ?
						(<div>
							{Auth.getEmail()}
							<Button color="inherit" href="/logout" onClick={e => logout(e, history)}>Log out</Button>
						</div>)
						:
						(<div>
				            <Button color="inherit" component={ Link } to="/login">Log in</Button>
				            <Button color="inherit" component={ Link } to="/signup">Sign up</Button>
						</div>)
					}
			</Toolbar>
		</AppBar>
    <br/>
    <Route exact path="/" render={() => (Auth.isUserAuthenticated() ?
  		<App /> : <LoginPage />)} />
  	<Route exact path="/login" component={LoginPage} />
  	<Route exact path="/signup" component={SignUpPage} />
	</div>
));

export default Base;