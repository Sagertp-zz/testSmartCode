import React from 'react';
import { render } from 'react-dom';
import App from './app';

let container = document.getElementById('app');
let component = <App />;
render(component, container);