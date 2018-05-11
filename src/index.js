import React from 'react';
import { render } from 'react-dom';
import './stylesheets/ui.scss';
import { App } from './components/App';
import { Router, Route, hashHistory, } from 'react-router';

window.React = React;

render(
	<Router history="hashHistory">
		<Route path="/" components={App} />
		<Route path="*" components={Whoops404} />
	</Router>,
	document.getElementById('react-container')
)