import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import Home from './components/Home';
import Start from './components/Start';
import Game from './components/Game';
import {Router, Route, IndexRoute, hashHistory, browserHistory} from 'react-router';
import Store from './store/Store';
import { resume_game } from './store/Actions';

if (localStorage.currentGame) {
	Store.dispatch(resume_game());
}

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path='/' component={App}>
			<IndexRoute component={Home} />
			<Route path='start' component={Start} />
			<Route path='game' component={Game} />
		</ Route>
	</ Router>,
	document.getElementById('app')
);